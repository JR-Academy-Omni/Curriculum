#!/usr/bin/env python3
"""Render an ordered cut and captions from local FFmpeg inputs."""
import argparse
import json
from pathlib import Path
import subprocess

CODECS = {
    ".webm": ["-c:v", "libvpx-vp9", "-b:v", "0", "-crf", "32", "-c:s", "webvtt"],
    ".mp4": ["-c:v", "libx264", "-crf", "21", "-movflags", "+faststart", "-c:s", "mov_text"],
}


def resolve_media(base: Path, name: str) -> Path:
    file = (base / name).resolve()
    if not file.is_relative_to(base) or not file.is_file():
        raise ValueError(f"Media file is missing or outside the manifest directory: {name}")
    return file


def render(manifest: Path, output: Path) -> None:
    data = json.loads(manifest.read_text(encoding="utf-8"))
    shots = data["shots"]
    if not isinstance(shots, list) or not shots or not all(isinstance(shot, str) for shot in shots):
        raise ValueError("The manifest must list shots in playback order.")
    if output.suffix not in CODECS:
        raise ValueError("Choose an output ending in .webm or .mp4.")
    if output.exists():
        raise ValueError(f"Choose a new output file: {output}")

    base = manifest.resolve().parent
    inputs = [resolve_media(base, shot) for shot in shots]
    captions = resolve_media(base, data["captions"])
    if captions.suffix != ".vtt":
        raise ValueError("Use a WebVTT caption file.")
    args = ["ffmpeg", "-hide_banner", "-loglevel", "warning", "-n", "-filter_complex_threads", "2"]
    for file in [*inputs, captions]:
        args += ["-i", str(file)]

    filters = [
        f"[{index}:v]scale=960:540:force_original_aspect_ratio=decrease,"
        f"pad=960:540:(ow-iw)/2:(oh-ih)/2,setsar=1,fps=24,format=yuv420p,"
        f"setpts=PTS-STARTPTS[shot{index}]"
        for index in range(len(inputs))
    ]
    concat_inputs = "".join(f"[shot{index}]" for index in range(len(inputs)))
    filters.append(f"{concat_inputs}concat=n={len(inputs)}:v=1:a=0[film]")
    args += [
        "-filter_complex", ";".join(filters), "-map", "[film]", "-map", f"{len(inputs)}:s:0",
        "-threads:v", "2", *CODECS[output.suffix], str(output),
    ]
    subprocess.run(args, check=True)
    print(f"{data['version']} → {output}")


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("manifest", type=Path)
    parser.add_argument("--out", required=True, type=Path)
    args = parser.parse_args()
    try:
        render(args.manifest, args.out)
    except (OSError, KeyError, ValueError, subprocess.CalledProcessError) as error:
        parser.exit(1, f"{error}\n")


if __name__ == "__main__":
    main()
