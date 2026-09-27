#!/usr/bin/env python3
"""Flatten an HTML-rendered PDF for reliable macOS Preview/PDFKit display."""

from __future__ import annotations

import argparse
import subprocess
import tempfile
from pathlib import Path

from PIL import Image
from pypdf import PdfReader, PdfWriter
from pypdf.generic import RectangleObject


def next_available_path(path: Path) -> Path:
    if not path.exists():
        return path
    index = 2
    while True:
        candidate = path.with_name(f"{path.stem} ({index}){path.suffix}")
        if not candidate.exists():
            return candidate
        index += 1


def preserve_uri_links(source_pdf: Path, flattened_pdf: Path) -> None:
    """Copy clickable web links from the vector PDF onto flattened pages."""
    source_reader = PdfReader(source_pdf)
    flattened_reader = PdfReader(flattened_pdf)
    writer = PdfWriter()
    writer.clone_document_from_reader(flattened_reader)

    for page_number, source_page in enumerate(source_reader.pages):
        for annotation_ref in source_page.get("/Annots", []):
            annotation = annotation_ref.get_object()
            action = annotation.get("/A")
            uri = action.get("/URI") if action else None
            rect = annotation.get("/Rect")
            if annotation.get("/Subtype") == "/Link" and uri and rect:
                writer.add_uri(
                    page_number,
                    str(uri),
                    RectangleObject([float(value) for value in rect]),
                    border=[0, 0, 0],
                )

    rewritten_pdf = flattened_pdf.with_suffix(".linked.pdf")
    with rewritten_pdf.open("wb") as output:
        writer.write(output)
    rewritten_pdf.replace(flattened_pdf)


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("input_pdf", type=Path)
    parser.add_argument("output_pdf", type=Path)
    parser.add_argument("--dpi", type=int, default=160)
    args = parser.parse_args()

    input_pdf = args.input_pdf.resolve()
    output_pdf = next_available_path(args.output_pdf.expanduser().resolve())
    output_pdf.parent.mkdir(parents=True, exist_ok=True)

    temp_root = input_pdf.parents[2] / "tmp" / "pdfs"
    temp_root.mkdir(parents=True, exist_ok=True)
    with tempfile.TemporaryDirectory(prefix="cohort-07-mac-", dir=temp_root) as temp_dir:
        page_prefix = Path(temp_dir) / "page"
        subprocess.run(
            [
                "pdftocairo",
                "-jpeg",
                "-r",
                str(args.dpi),
                "-jpegopt",
                "quality=92,progressive=y,optimize=y",
                str(input_pdf),
                str(page_prefix),
            ],
            check=True,
        )
        page_paths = sorted(Path(temp_dir).glob("page-*.jpg"))
        if not page_paths:
            raise RuntimeError("pdftocairo did not render any pages")

        pages = [Image.open(page).convert("RGB") for page in page_paths]
        try:
            pages[0].save(
                output_pdf,
                "PDF",
                resolution=float(args.dpi),
                save_all=True,
                append_images=pages[1:],
                quality=92,
                optimize=True,
                title="JR Academy AI Engineer Cohort 07 Detailed Outline",
                author="JR Academy",
                subject="AI Engineer Bootcamp Cohort 07",
            )
        finally:
            for page in pages:
                page.close()

    preserve_uri_links(input_pdf, output_pdf)

    reader = PdfReader(output_pdf)
    if len(reader.pages) != 32:
        raise RuntimeError(f"Expected 32 pages, got {len(reader.pages)}")
    first_page = reader.pages[0].mediabox
    if abs(float(first_page.width) - 595.0) > 2 or abs(float(first_page.height) - 842.0) > 2:
        raise RuntimeError(
            f"Expected A4 page size, got {float(first_page.width)} x {float(first_page.height)} points"
        )
    print(output_pdf)


if __name__ == "__main__":
    main()
