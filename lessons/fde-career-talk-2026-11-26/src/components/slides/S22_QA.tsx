import { DeckFrame, Panel, Label, colors } from '../kit';
import { assetPath } from '../ui';

const qs = ['没有五年经验，能做 FDE 吗？', 'FDE 和 Solutions Architect 怎么选？', '不会写代码，能走 Business 方向吗？', '没有 PR 或公民身份，能投哪些岗位？', '刚被裁，现在转 FDE 来得及吗？'];

export default function S22_QA() {
	return <DeckFrame tag="答疑" title="带着你的 JD 或项目，现在提问">
		<div style={{ display: 'grid', gridTemplateColumns: '1.1fr .9fr', gap: 28 }}>
			<Panel>
				<Label>大家常问</Label>
				<div style={{ display: 'grid', gap: 12, marginTop: 18 }}>{qs.map(q => <div key={q} style={{ fontSize: 25, fontWeight: 700, paddingBottom: 10, borderBottom: '1px solid rgba(16,22,47,.15)' }}>{q}</div>)}</div>
			</Panel>
			<Panel bg={colors.dark} style={{ color: colors.white }}>
				<Label bg={colors.yellow} color={colors.dark}>今晚就能做的一件事</Label>
				<div style={{ fontSize: 24, lineHeight: 1.5, fontWeight: 800, marginTop: 16 }}>挑一份感兴趣的 FDE JD，对照四项能力，标出自己已经有证据的，和最缺的那一项。</div>
				<div style={{ fontSize: 20, lineHeight: 1.55, marginTop: 14, color: '#d8d8dd' }}>最缺的那一项，就是你下一段经历要补的。</div>
				<div style={{ display: 'flex', alignItems: 'center', gap: 18, marginTop: 20, borderTop: '1px solid rgba(255,255,255,.18)', paddingTop: 18 }}>
					<img src={assetPath('images/qr-amelia.jpg')} alt="微信二维码：Amelia 小花" className="shot" style={{ width: 150, height: 150, borderRadius: 10, background: colors.white, padding: 5, boxSizing: 'content-box' }} />
					<div><div style={{ fontSize: 24, fontWeight: 900, color: colors.yellow }}>加 Amelia 小花</div><div style={{ fontSize: 17, lineHeight: 1.5, marginTop: 6 }}>扫码加微信，问课程、班期和价格</div></div>
				</div>
			</Panel>
		</div>
	</DeckFrame>;
}
