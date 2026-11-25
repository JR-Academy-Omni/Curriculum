import { DeckFrame, Panel, PromptCard } from '../kit';

export default function S08_Command() {
	return <DeckFrame tag="P11 · SYSTEM DESIGN" title="FFmpeg 生成两档 HLS" subtitle="24 fps，48 帧关键帧间隔，目标切片 2 秒。">
		<div style={{ display: "grid", gap: 27 }}>
			<PromptCard label="终端" dark size={23}><code style={{ whiteSpace: "pre-wrap" }}>{"./make-hls.sh ./out/hls\ncat ./out/hls/master.m3u8\nffprobe -v error -select_streams v:0 -show_entries stream=width,height \\\n  ./out/hls/720p/index.m3u8"}</code></PromptCard>
			<Panel><p style={{ fontSize: 26, lineHeight: 1.5 }}>脚本同时输出两档画质。进 output 目录后检查对应编号的片段时长。</p></Panel>
		</div>
	</DeckFrame>;
}
