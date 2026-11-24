import { DeckFrame, Panel, Label, colors, fonts } from '../kit';

const tree = [
	["lab/", "镜头、字幕和版本化清单", true],
	["  manifest-v1.json", "旧版选用的三个镜头", false],
	["  manifest-v2.json", "只替换第二镜", false],
	["  shots/", "保存镜头各版本", true],
	["    shot-01-v1.webm", "首镜", false],
	["    shot-02-v1.webm", "第二镜，颜色有误", false],
	["    shot-02-v2.webm", "第二镜，颜色修正", false],
	["    shot-03-v1.webm", "尾镜", false],
	["  captions.vtt", "成片时间线字幕", false],
	["  cut-v2.webm", "修订版成片", true],
] as const;

export default function S06_VersionTree() {
	return <DeckFrame tag="P06 · SYSTEM DESIGN" title="把成片绑定到确切的镜头版本" subtitle="更换中间镜头时，保留已经通过的首镜和尾镜。" accent={colors.dark}>
		<div style={{ display: 'grid', gridTemplateColumns: '1.25fr .75fr', gap: 24 }}>
			<div style={{ background: '#0f1428', color: '#f3f0e8', borderRadius: 22, padding: '22px 26px' }}>
				{tree.map(([p, d, top]) => <div key={p} style={{ display: 'grid', gridTemplateColumns: '430px 1fr', gap: 12, padding: '7px 0', borderBottom: '1px solid rgba(255,255,255,.08)' }}>
					<span style={{ fontFamily: fonts.mono, fontSize: 20, color: top ? colors.yellow : '#f3f0e8', whiteSpace: 'pre' }}>{p}</span>
					<span style={{ fontSize: 19, lineHeight: 1.45 }}>{d}</span>
				</div>)}
			</div>
			<div style={{ display: 'grid', gap: 18, alignContent: 'start' }}>
				<Panel><Label>镜头版本</Label><div style={{ fontSize: 22, lineHeight: 1.55, marginTop: 12 }}>每个镜头有稳定 ID 与多个版本。审核选定一版，将该版本写入清单。</div></Panel>
				<Panel bg={colors.yellow}><Label>成片清单</Label><div style={{ fontSize: 22, lineHeight: 1.55, marginTop: 12, fontWeight: 700 }}>修订时生成新清单，既有成片保留自己的来源。</div></Panel>
			</div>
		</div>
	</DeckFrame>;
}
