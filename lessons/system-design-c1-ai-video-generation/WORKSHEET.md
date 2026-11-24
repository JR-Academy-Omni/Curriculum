# L03 · Re-render an ad after changing one shot

Open the [two completed cuts](./?page=2), the [product reference](lab/product-reference.png), and [manifest v1](lab/manifest-v1.json) and [manifest v2](lab/manifest-v2.json). Download the [FFmpeg exercise pack](lab/film-lab.zip).

## Render lab

The brief calls for a three-shot ad for a navy portable speaker. Shot 2 in the first cut incorrectly changes the product body to red. The other two shots already passed review. Open the archive and run the commands inside its folder.

~~~sh
ffprobe -v error -show_entries stream=width,height,r_frame_rate shots/shot-01-v1.webm
ffprobe -v error -show_entries stream=width,height,r_frame_rate shots/shot-02-v2.webm
python3 render_film.py manifest-v1.json --out cut-v1.webm
python3 render_film.py manifest-v2.json --out cut-v2.webm
ffprobe -v error -show_streams cut-v2.webm
~~~

Use an unused filename if repeating the exercise. For MP4 delivery, use "python3 render_film.py manifest-v2.json --out cut-v2.mp4". VP9/WebVTT or H.264/mov_text are selected by output extension.

- Read both manifests. Circle the only shot path changed by the correction.
- Play both outputs and inspect the product colour around seconds 3–6.
- Record the output width, height, frame rate and subtitle stream. Check all three subtitle cues in the browser result.

## Group exercise · 30 minutes

- Draw the one-operation full-film architecture next to the per-shot architecture. Identify the generation task owner, approval record and final render manifest.
- Design a version update that replaces shot 2 without changing the other two IDs. Explain how to see which shot was used in the current cut.
- Add a second failure. FFmpeg fails after all selected shots have passed review. Decide which job is retried and which assets can be reused.
- Calculate cost per accepted cut if full-film attempts cost three units each and one success requires two attempts. For the shot approach, each shot attempt costs one unit and there is one shot retry. Compare with two composition runs at 0.25 units each.

## Reference design

The generation queue stores per-shot requests and provider operation IDs. Each candidate is written as an immutable media object associated with shot ID and version. A review record selects one version per shot. The renderer reads a locked manifest, writes a new immutable cut and records its inputs. Only a verified new cut moves the current pointer.

Keep the first and last shot paths identical between v1 and v2. Replace only shot-02-v1 with shot-02-v2. A render-only failure should reuse all approved shot assets. Query an existing provider operation when its result is unknown before starting a replacement attempt.

The full-film scenario costs 6 units. The shot scenario costs 4 + 0.5 = 4.5 units. These inputs are classroom assumptions. In a real design, include both successful and failed attempts and compare equal quality outputs. Before release, verify order, a 960×540 / 24 fps video track, the caption track and the product appearance in the middle shot.
