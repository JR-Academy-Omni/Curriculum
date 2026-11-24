# L02 · Design streaming for two guests and 10,000 viewers

Open the [HLS player](./?page=2) and the [master playlist](lab/hls/master.m3u8). Download the [FFmpeg lab](lab/streaming-lab.zip) to inspect and rebuild the two media playlists.

## Playback lab

Unpack the lab, open a terminal in the extracted folder and run:

~~~sh
bash make-hls.sh ./out/hls
cat ./out/hls/master.m3u8
ffprobe -v error -select_streams v:0 -show_entries stream=width,height ./out/hls/720p/index.m3u8
ffprobe -v error -select_streams v:0 -show_entries stream=width,height ./out/hls/360p/index.m3u8
~~~

- Record both resolutions and compare the duration of the same numbered segment in each playlist.
- In the lesson player, choose 720p and let video play. Switch to 360p and record the decoded size. The browser network panel can show the media segment requests.
- For Auto, limit download to about 750 kbps and replay from the start with cache disabled. Observe the next segment requests and decoded size. Make a note if buffering delays a switch.
- For a rolling local playlist, run "bash make-hls.sh --live ./out/live". After several seconds, open "ffplay ./out/live/master.m3u8" in another terminal and observe the media sequence changing.

## Group exercise · 30 minutes

Two guests need to talk to each other in real time. Up to 10,000 people watch, and only the guests need to speak. Forty percent of viewers select a 3 Mbps rendition. The other sixty percent select 1 Mbps. The host disappears for eight seconds and then reconnects.

- Draw the hosting, real-time guest and viewer paths. Label the point where room output becomes HTTP media segments. Record who owns the session and who owns the published playlist.
- Compare carrying every viewer on the real-time topology with a stage and a cached HLS delivery path.
- Calculate viewer egress. Identify the additional data you need to estimate origin traffic.
- Mark what guests and viewers see during the interruption. Choose a metric and a place to measure it.

## Reference design

A WebRTC stage handles host and guest sessions. A compositor sends one stage output to the HLS encoder and packager. The packager publishes a master playlist and paired media playlists. The CDN caches segments, and viewers request them through a player. The stage owns real-time session state. The packager owns the current media sequence and the viewer player owns buffer state.

Viewer egress is 10,000 × (0.4 × 3 + 0.6 × 1) Mb/s = 18 Gb/s before overhead. To estimate origin traffic, define whether segments share cache keys, cache-hit rates and regional behaviour.

If host input stops, the real-time session can show that the publisher disconnected. Some viewers may continue playing buffered segments. Track the last fresh segment time, rebuffer duration and recovery to the live edge. Validate continuity after the host reconnects.
