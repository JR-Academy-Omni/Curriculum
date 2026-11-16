"""Deployment boundary regressions; never mutate a real Git repository."""

import contextlib
import importlib.util
import io
from pathlib import Path
import subprocess
import sys
import tempfile
import unittest
from unittest.mock import patch

SPEC = importlib.util.spec_from_file_location(
    "curriculum_deploy_scope", Path(__file__).parents[1] / "curriculum-deploy-scope.py"
)
scope = importlib.util.module_from_spec(SPEC)
sys.modules[SPEC.name] = scope
SPEC.loader.exec_module(scope)


class DeploymentBoundaryTests(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)
        self.root = Path(self.temp.name)
        for slug in ["alpha", "beta", "public-only"]:
            directory = self.root / "lessons" / slug
            if slug == "public-only":
                directory /= "public"
            directory.mkdir(parents=True)
            (directory / "index.html").write_text("<!doctype html>")

    def test_auto_selects_only_changed_decks_and_sorts_deduplicates(self):
        result = scope.classify_changes([
            "lessons/beta/src/App.tsx", "lessons/alpha/public/image.svg",
            "lessons/beta/src/data/notes.ts", "README.md", ".github/workflows/deploy.yml",
        ], self.root)
        self.assertEqual((result.mode, result.decks, result.catalog), ("lessons", ["alpha", "beta"], False))

    def test_catalog_only_does_not_build_any_deck(self):
        result = scope.classify_changes(["lessons.html"], self.root)
        self.assertEqual(result.outputs(), "mode=lessons\ndecks=[]\ncatalog=true\n")

    def test_internal_and_scope_configuration_changes_do_not_publish(self):
        result = scope.classify_changes([
            "CHANGELOG.md", "README.md", "AGENTS.md", ".gitignore", "docs/operations.md",
            ".claude/skills/talk-deck/SKILL.md", ".codex/skills/talk-deck/SKILL.md",
            ".github/workflows/deploy.yml", "scripts/curriculum-deploy-scope.py",
            "scripts/tests/test_curriculum_deploy_scope.py", "lessons/alpha/.gitignore",
        ], self.root)
        self.assertEqual(result.outputs(), "mode=none\ndecks=[]\ncatalog=false\n")

    def test_real_bootcamp_and_root_assets_retain_full_deployment(self):
        for path in ["ai-engineer-bootcamp/public/outline.json", "assets/logo.svg", "index.html"]:
            with self.subTest(path=path):
                result = scope.classify_changes([path], self.root)
                self.assertEqual((result.mode, result.decks, result.catalog), ("full", [], True))

    def test_shared_lesson_dependency_requires_full(self):
        for path in ["lessons/_template/src/components/ui.tsx", "lessons/_shared/helper.ts", "lessons/shared.css"]:
            with self.subTest(path=path):
                self.assertEqual(scope.classify_changes([path], self.root).mode, "full")

    def test_deleted_lesson_fails_closed_even_alongside_root_asset(self):
        for paths in [["lessons/deleted/index.html"], ["assets/logo.svg", "lessons/deleted/index.html"]]:
            with self.subTest(paths=paths), self.assertRaises(scope.ScopeError):
                scope.classify_changes(paths, self.root)

    def test_existing_directory_without_publishable_entry_fails_closed(self):
        (self.root / "lessons/empty").mkdir()
        with self.assertRaises(scope.ScopeError):
            scope.classify_changes(["lessons/empty/README.md"], self.root)

    def test_manual_single_deck_works_without_base_and_syncs_catalog(self):
        with patch.object(scope, "changed_paths", side_effect=AssertionError("must not diff")):
            result = scope.select_scope("", "HEAD", "public-only", False, self.root)
        self.assertEqual((result.mode, result.decks, result.catalog), ("lessons", ["public-only"], True))

    def test_manual_slug_rejects_traversal_and_shell_injection(self):
        for slug in ["../alpha", "alpha/beta", "alpha;true", "alpha\nmode=full", "_template", "Alpha", "-alpha"]:
            with self.subTest(slug=slug), self.assertRaises(scope.ScopeError):
                scope.select_scope("", "HEAD", slug, False, self.root)

    def test_symlink_directory_or_entry_cannot_escape_checkout(self):
        external = self.root / "outside"
        external.mkdir()
        (external / "index.html").write_text("HTML")
        (self.root / "lessons/escape").symlink_to(external, target_is_directory=True)
        with self.assertRaises(scope.ScopeError):
            scope.validate_deck("escape", self.root)
        entry = self.root / "lessons/alpha/index.html"
        entry.unlink()
        entry.symlink_to(external / "index.html")
        with self.assertRaises(scope.ScopeError):
            scope.validate_deck("alpha", self.root)

    def test_explicit_full_bypasses_unavailable_base(self):
        with patch.object(scope, "changed_paths", side_effect=AssertionError("must not diff")):
            result = scope.select_scope("0" * 40, "HEAD", "", True, self.root)
        self.assertEqual(result.outputs(), "mode=full\ndecks=[]\ncatalog=true\n")

    def test_empty_zero_and_option_base_fail_before_git(self):
        for base in ["", "0" * 40, "--help", "HEAD\n"]:
            with self.subTest(base=base), patch.object(scope.subprocess, "run") as git:
                with self.assertRaises(scope.ScopeError):
                    scope.changed_paths(base, "HEAD", self.root)
                git.assert_not_called()

    def test_unknown_base_never_falls_back_to_full(self):
        with patch.object(scope.subprocess, "run", return_value=subprocess.CompletedProcess([], 128, "", "unknown")):
            with self.assertRaisesRegex(scope.ScopeError, "manual --full true"):
                scope.select_scope("missing", "HEAD", "", False, self.root)

    def test_diff_reads_nul_delimited_paths_and_disables_rename_detection(self):
        commits = [subprocess.CompletedProcess([], 0, "a" * 40 + "\n", ""),
                   subprocess.CompletedProcess([], 0, "b" * 40 + "\n", ""),
                   subprocess.CompletedProcess([], 0, b"lessons/alpha/src/App.tsx\0lessons.html\0", b"")]
        with patch.object(scope.subprocess, "run", side_effect=commits) as git:
            result = scope.select_scope("before", "HEAD", "", False, self.root)
        self.assertEqual((result.decks, result.catalog), (["alpha"], True))
        diff = git.call_args_list[-1].args[0]
        self.assertIn("--no-renames", diff)
        self.assertIn("-z", diff)
        self.assertEqual(diff[-1], "--")

    def test_failed_diff_produces_no_scope(self):
        with patch.object(scope, "resolve_commit", return_value="a" * 40), patch.object(
                scope.subprocess, "run", return_value=subprocess.CompletedProcess([], 1, b"", b"error")):
            with self.assertRaisesRegex(scope.ScopeError, "Refusing automatic deployment"):
                scope.changed_paths("before", "HEAD", self.root)

    def test_cli_failure_does_not_emit_github_outputs(self):
        output, errors = io.StringIO(), io.StringIO()
        with contextlib.redirect_stdout(output), contextlib.redirect_stderr(errors):
            code = scope.main(["--base", "0" * 40, "--head", "HEAD", "--deck", "", "--full", "false"])
        self.assertEqual(code, 2)
        self.assertEqual(output.getvalue(), "")
        self.assertIn("blocked", errors.getvalue())
        self.assertIn("manual --full true", errors.getvalue())


if __name__ == "__main__":
    unittest.main()
