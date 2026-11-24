#!/usr/bin/env bash
set -euo pipefail

usage() {
  printf 'Usage: %s [--live] OUTPUT_DIRECTORY\n' "$0" >&2
  exit 2
}

live=0
if [[ "$#" -gt 0 && "$1" == --live ]]; then
  live=1
  shift
fi
[[ "$#" -eq 1 ]] || usage
command -v ffmpeg >/dev/null
out=$1
mkdir -p "$out"
if [[ -n "$(find "$out" -mindepth 1 -maxdepth 1 -print -quit)" ]]; then
  printf 'Choose a new or empty output directory: %s\n' "$out" >&2
  exit 2
fi
mkdir -p "$out/720p" "$out/360p"

input=()
duration=36
hls=(-hls_playlist_type vod -hls_flags independent_segments+temp_file)
if [[ "$live" -eq 1 ]]; then
  duration=60
  input=(-re)
  hls=(-hls_list_size 6 -hls_flags independent_segments+delete_segments+temp_file)
fi

ffmpeg -hide_banner -loglevel warning -n ${input[@]+"${input[@]}"} \
  -f lavfi -i "testsrc2=size=1280x720:rate=24:duration=$duration" \
  -filter_complex_threads 2 \
  -filter_complex "[0:v]split=2[hi][src];[src]scale=640:360[lo]" \
  -map "[hi]" -map "[lo]" -an -c:v libx264 -threads:v 2 -preset fast \
  -pix_fmt yuv420p -g 48 -keyint_min 48 -sc_threshold 0 \
  -b:v:0 1700k -maxrate:v:0 2000k -bufsize:v:0 3400k \
  -b:v:1 400k -maxrate:v:1 500k -bufsize:v:1 800k \
  -f hls -hls_time 2 "${hls[@]}" \
  -master_pl_name master.m3u8 -var_stream_map "v:0,name:720p v:1,name:360p" \
  -hls_segment_filename "$out/%v/seg_%03d.ts" "$out/%v/index.m3u8"
printf 'Master playlist: %s/master.m3u8\n' "$out"
