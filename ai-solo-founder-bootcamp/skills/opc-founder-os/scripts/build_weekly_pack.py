#!/usr/bin/env python3
import argparse
import hashlib
import json
from pathlib import Path
from typing import Optional, Set
from zipfile import ZIP_DEFLATED, ZipFile

PACKS = {
    "offer-mvp": ("opc-offer-mvp", "STUDENT_INSTALL_OFFER_MVP.md"),
    "shipping-review": ("opc-shipping-review", "STUDENT_INSTALL_SHIPPING_REVIEW.md"),
    "first-dollar": ("opc-first-dollar", "STUDENT_INSTALL_FIRST_DOLLAR.md"),
    "customer-acquisition": ("opc-customer-acquisition", "STUDENT_INSTALL_CUSTOMER_ACQUISITION.md"),
}


def add_tree(archive: ZipFile, root: Path, prefix: str, exclude_top: Optional[Set[str]] = None) -> None:
    if not root.is_dir():
        raise FileNotFoundError(f"Missing skill directory: {root}")
    for path in sorted(root.rglob("*")):
        relative = path.relative_to(root)
        if exclude_top and relative.parts and relative.parts[0] in exclude_top:
            continue
        if path.is_file() and "__pycache__" not in path.parts:
            archive.write(path, Path(prefix) / relative)


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--capability", required=True, choices=PACKS)
    parser.add_argument("--output", type=Path, required=True)
    args = parser.parse_args()

    skills_root = Path(__file__).resolve().parents[2]
    skill_name, guide_name = PACKS[args.capability]
    guide_path = skills_root / guide_name
    if not guide_path.is_file():
        raise FileNotFoundError(f"Missing student guide: {guide_path}")

    args.output.mkdir(parents=True, exist_ok=True)
    archive_path = args.output / f"{skill_name}-student-pack-v1.zip"
    with ZipFile(archive_path, "w", ZIP_DEFLATED) as archive:
        archive.write(guide_path, "README-STUDENT.md")
        add_tree(archive, skills_root / "opc-founder-os", "opc-founder-os", {"scripts"})
        add_tree(archive, skills_root / skill_name, skill_name)

    digest = hashlib.sha256(archive_path.read_bytes()).hexdigest()
    manifest = {
        "capability": args.capability,
        "skills": ["opc-founder-os", skill_name],
        "archive": archive_path.name,
        "sha256": digest,
    }
    manifest_path = archive_path.with_suffix(".json")
    manifest_path.write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + "\n")
    print(json.dumps({"archive": str(archive_path), "manifest": str(manifest_path), "sha256": digest}))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
