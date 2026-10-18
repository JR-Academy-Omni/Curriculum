import { Page, AppendixBadge, Head, colors, fonts, border, radii } from '../deck';

/** A3 · 讲师课前核对清单（讲师留底，完整版在 RUNSHEET §3） */
const ITEMS = [
	'把第十七页那四条命令完整跑一遍，确认清理之后日常配置毫发无损',
	'跑一次加市场的命令，确认今天这个市场拉得到',
	'把本地兜底市场装一遍，确认线上拉不到时能顶上',
	'准备好自己的那个包，第十四、十五页要当场展示结构',
	'确认屏幕上没有任何真实凭据、公司系统名、本机完整路径',
];

export default function L15A3_PreflightChecklist() {
	return (
		<Page>
			<AppendixBadge label="A3 · 讲师课前核对" />
			<Head sub="完整版在 RUNSHEET 第三节。">开课前三十分钟</Head>
			<div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
				{ITEMS.map((t, i) => (
					<div key={t} style={{
						display: 'flex', alignItems: 'center', gap: 16,
						background: colors.white, border, borderRadius: radii.card, padding: '15px 22px',
					}}>
						<span style={{
							width: 30, height: 30, flexShrink: 0, borderRadius: radii.label, border,
							background: i === 0 ? colors.red : colors.white,
							color: i === 0 ? colors.white : colors.black,
							textAlign: 'center', lineHeight: '26px',
							fontFamily: fonts.mono, fontSize: 16, fontWeight: 800,
						}}>{i + 1}</span>
						<span style={{ fontSize: 22, lineHeight: 1.5 }}>{t}</span>
					</div>
				))}
			</div>
			<p style={{ fontSize: 21, color: '#777', lineHeight: 1.7, marginTop: 'auto' }}>
				第一条是本节最容易翻船的地方。无助教，课上没人救。
			</p>
		</Page>
	);
}
