# Shot replacement lab

Requires Python 3.10+, FFmpeg with libvpx-vp9 and libx264, and ffprobe. The source contains three selected shots, one alternate shot, a product reference and an English caption track.

1. Inspect the alternate shot with "ffprobe -v error -show_streams shots/shot-02-v2.webm".
2. Compare manifest-v1.json and manifest-v2.json. Only shot 2 changes.
3. Run "python3 render_film.py manifest-v2.json --out cut-v2.webm" in this directory. Play the exported file. For an MP4 output, enter a new name ending in .mp4.
4. Check the output and captions with "ffprobe -v error -show_streams cut-v2.webm". The lesson player displays the same captions through a browser text track.

The original illustrations were animated using FFmpeg. The inputs reproduce the versioning and editing path independently of a model service.
