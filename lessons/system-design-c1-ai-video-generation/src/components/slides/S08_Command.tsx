import { DeckFrame, Panel, PromptCard } from '../kit';

export default function S08_Command() {
	return <DeckFrame tag="P08 · SYSTEM DESIGN" title="FFmpeg 只读取已选版本" subtitle="检查输入，统一规格，拼接并封装字幕。">
		<div style={{ display: "grid", gap: 27 }}>
			<PromptCard label="终端" dark size={23}><code style={{ whiteSpace: "pre-wrap" }}>{"ffprobe -v error -show_streams shots/shot-02-v2.webm\npython3 render_film.py manifest-v2.json --out cut-v2.webm\npython3 render_film.py manifest-v2.json --out cut-v2.mp4"}</code></PromptCard>
			<Panel><p style={{ fontSize: 26, lineHeight: 1.5 }}>合成时统一为 960×540、24 fps，字幕按镜头顺序进入同一时间线。</p></Panel>
		</div>
	</DeckFrame>;
}
