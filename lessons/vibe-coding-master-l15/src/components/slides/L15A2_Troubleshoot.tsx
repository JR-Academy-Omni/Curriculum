import { Page, AppendixBadge, Head, Code, colors, fonts, border, radii } from '../deck';

/**
 * A2 · 装不上怎么办 · 讲师兜底（课上不讲，但讲师必须熟）
 * P17 卡住的人课后看这一页。兜底命令已实测通过。
 */
export default function L15A2_Troubleshoot() {
	return (
		<Page>
			<AppendixBadge label="A2 · 装不上怎么办" />
			<Head sub="线上市场拉不到时，用课前包里那个本地市场，流程一样。">装不上怎么办</Head>

			<Code
				size={20}
				wrap
				label="本地兜底：把市场换成课前包里那个"
				code={`bash p17-clean-profile/clean-profile.sh add ./p17-offline-fallback
bash p17-clean-profile/clean-profile.sh install handover-demo@jr-l15-local
bash p17-clean-profile/clean-profile.sh verify handover-demo`}
			/>

			<div style={{ marginTop: 22 }}>
				<Code
					size={20}
					label="隔离环境没清干净"
					code={`bash p17-clean-profile/clean-profile.sh clean`}
				/>
			</div>

			<div style={{
				marginTop: 'auto', padding: '20px 26px', background: colors.white,
				border, borderRadius: radii.panel, boxShadow: `6px 6px 0 ${colors.green}`,
			}}>
				<div style={{ fontFamily: fonts.mono, fontSize: 15, fontWeight: 800, letterSpacing: 1, color: '#888' }}>
					删的是独立沙箱目录
				</div>
				<div style={{ fontSize: 25, fontWeight: 800, marginTop: 8, lineHeight: 1.5 }}>
					不碰你平时的配置。沙箱路径指向真实配置目录时，脚本直接拒绝执行。
				</div>
			</div>
		</Page>
	);
}
