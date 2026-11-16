#!/usr/bin/env python3
"""Select a Curriculum deployment scope without fetching or mutating Git.

Successful stdout contains only GitHub Actions outputs. Invalid or unavailable
diffs fail closed; a caller must explicitly choose --full true to deploy all.
"""

import argparse
from dataclasses import dataclass
import json
from pathlib import Path, PurePosixPath
import re
import subprocess
import sys
from typing import Iterable, List


ROOT = Path(__file__).resolve().parents[1]
SLUG = re.compile(r"[a-z][a-z0-9]*(?:-[a-z0-9]+)*\Z")
NON_PUBLISH_PREFIXES = {".github", ".claude", ".codex", "docs"}
NON_PUBLISH_FILES = {
    "CHANGELOG.md", "README.md", "AGENTS.md", "CLAUDE.md", "GEMINI.md",
    ".gitignore", ".gitattributes", ".editorconfig",
    "scripts/curriculum-deploy-scope.py",
    "scripts/tests/test_curriculum_deploy_scope.py",
}


class ScopeError(ValueError):
    """A deployment scope cannot be determined safely."""


@dataclass(frozen=True)
class DeploymentScope:
    mode: str
    decks: List[str]
    catalog: bool

    def outputs(self) -> str:
        return "\n".join([
            "mode=" + self.mode,
            "decks=" + json.dumps(self.decks, separators=(",", ":")),
            "catalog=" + str(self.catalog).lower(),
        ]) + "\n"


def validate_deck(slug: str, root: Path) -> None:
    """Reject traversal, shared directories, deleted decks and missing entries."""
    if not SLUG.fullmatch(slug):
        raise ScopeError("Invalid deck slug: use a lowercase hyphenated name.")
    lessons = (root / "lessons").resolve()
    directory = root / "lessons" / slug
    resolved = directory.resolve()
    if resolved.parent != lessons or not directory.is_dir():
        raise ScopeError(
            "Deck {!r} is absent, deleted or outside lessons/. "
            "No online files will be deleted; inspect the change before deploying.".format(slug)
        )
    entries = [directory / "index.html", directory / "public" / "index.html"]
    if not any(entry.is_file() and resolved in entry.resolve().parents for entry in entries):
        raise ScopeError(
            "Deck {!r} has no publishable index.html or public/index.html. "
            "Refusing to replace its online directory.".format(slug)
        )


def classify_changes(paths: Iterable[str], root: Path = ROOT) -> DeploymentScope:
    decks = set()
    catalog = False
    needs_full = False
    for raw in paths:
        path = PurePosixPath(raw)
        if (not raw or path.is_absolute() or ".." in path.parts
                or any(ord(char) < 32 for char in raw)):
            raise ScopeError("Invalid changed path in Git diff.")
        normalized = path.as_posix()
        if (normalized in NON_PUBLISH_FILES
                or path.parts[0] in NON_PUBLISH_PREFIXES
                or path.name == ".gitignore"):
            continue
        if normalized == "lessons.html":
            catalog = True
            continue
        if path.parts[0] == "lessons":
            # Shared helpers and template changes can affect multiple decks.
            if len(path.parts) < 3 or path.parts[1].startswith("_"):
                needs_full = True
                continue
            slug = path.parts[1]
            if not SLUG.fullmatch(slug):
                needs_full = True
                continue
            decks.add(slug)
            continue
        # A bootcamp or root static resource may affect the assembled site.
        # Unknown publishable paths retain the previous full-deploy behaviour.
        needs_full = True

    # Validate even when another change needs a full deployment: a deleted deck
    # must never silently turn into a broad publish operation.
    for slug in sorted(decks):
        validate_deck(slug, root)
    if needs_full:
        return DeploymentScope("full", [], True)
    if decks or catalog:
        return DeploymentScope("lessons", sorted(decks), catalog)
    return DeploymentScope("none", [], False)


def resolve_commit(ref: str, label: str, root: Path) -> str:
    if (not ref or ref.startswith("-") or not ref.strip()
            or re.fullmatch(r"0+", ref) or any(ord(char) < 32 for char in ref)):
        raise ScopeError(
            "{} is unavailable or invalid. Select a deck explicitly or use manual --full true.".format(label)
        )
    result = subprocess.run(
        ["git", "rev-parse", "--verify", "--end-of-options", ref + "^{commit}"],
        cwd=root, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True,
    )
    if result.returncode:
        raise ScopeError(
            "Cannot resolve {} {!r}. No automatic full deploy was selected; "
            "use manual --full true after reviewing the change.".format(label, ref)
        )
    commit = result.stdout.strip()
    if not re.fullmatch(r"[0-9a-fA-F]{40,64}", commit):
        raise ScopeError("Git did not return a valid {} commit.".format(label))
    return commit


def changed_paths(base: str, head: str, root: Path = ROOT) -> List[str]:
    base_commit = resolve_commit(base, "base", root)
    head_commit = resolve_commit(head, "head", root)
    result = subprocess.run(
        ["git", "diff", "--name-only", "--no-renames", "-z", base_commit, head_commit, "--"],
        cwd=root, stdout=subprocess.PIPE, stderr=subprocess.PIPE,
    )
    if result.returncode:
        raise ScopeError(
            "Cannot read the Git diff. Refusing automatic deployment; use manual --full true."
        )
    try:
        return [part.decode("utf-8") for part in result.stdout.split(b"\0") if part]
    except UnicodeDecodeError as error:
        raise ScopeError("Git diff contains unsupported filenames; inspect before deploying.") from error


def select_scope(base: str, head: str, deck: str, full: bool, root: Path = ROOT) -> DeploymentScope:
    if full:
        return DeploymentScope("full", [], True)
    if deck:
        validate_deck(deck, root)
        # A manually selected lesson and its directory card ship together.
        return DeploymentScope("lessons", [deck], True)
    return classify_changes(changed_paths(base, head, root), root)


def main(argv=None) -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--base", default="")
    parser.add_argument("--head", default="HEAD")
    parser.add_argument("--deck", default="")
    parser.add_argument("--full", choices=("true", "false"), default="false")
    args = parser.parse_args(argv)
    try:
        scope = select_scope(args.base, args.head, args.deck, args.full == "true")
    except (ScopeError, OSError) as error:
        print("Deployment scope blocked: " + str(error), file=sys.stderr)
        return 2
    sys.stdout.write(scope.outputs())
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
