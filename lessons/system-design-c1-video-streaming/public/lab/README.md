# Two-level HLS lab

Requires Bash, FFmpeg with libx264, and ffprobe. FFplay is optional.

1. Run "bash make-hls.sh ./out/hls" using a new or empty directory.
2. Open "out/hls/master.m3u8" and both child playlists. Compare the resolution entries and aligned segment durations.
3. Play the master in the lesson or run "ffplay ./out/hls/master.m3u8". In the lesson player check 720p, then 360p, then return to Auto.
4. For a rolling playlist run "bash make-hls.sh --live ./out/live". In another terminal open "ffplay ./out/live/master.m3u8" after a few seconds.

The FFmpeg video input is an internal test pattern. It keeps geometry and time consistent across both variants for repeatable playback inspection.
