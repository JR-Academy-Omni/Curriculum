import { Slide, Inner, Half, Title, colors, fonts, border, shadowSm } from '../ui';
import { ModuleTag, Terminal, Source } from './_shared';

const ttl = [
	{ who: 'Claude 订阅（额度内）', main: '1 小时', other: '5 分钟（少数 helper 请求 1 小时）' },
	{ who: 'API key / 用量额度 / 云厂商', main: '5 分钟', other: '5 分钟' },
];
const cell = { border, padding: '10px 12px', fontSize: 18, fontWeight: 700, lineHeight: 1.4 } as const;

// M5 跑 ③：TTL 和交互模式下的 /usage
export default function S25_M5TTL() {
	return (
		<Slide bg={colors.white}>
			<Inner split>
				<Half>
					<ModuleTag id="M5" phase="teach" />
					<Title size="46px" style={{ marginBottom: 16 }}>实验 ③：cache 能活多久？命中率多少？</Title>
					<Terminal
						fontSize={16}
						lines={[
							'# 这次写入用的是哪种 TTL？',
							'$ claude -p "Reply OK" --output-format json | jq .usage.cache_creation',
							'#   ephemeral_1h_input_tokens / ephemeral_5m_input_tokens',
							'',
							'# 交互模式：聊两轮，再看命中率',
							'$ /usage      # 找 “Prompt cache (main)” 那一行',
							'$ /model      # 换个模型，再聊一句',
							'$ /usage      # 命中率掉了吗？写了什么原因？',
						]}
					/>
				</Half>

				<Half>
					<p style={{ fontFamily: fonts.mono, fontSize: 17, fontWeight: 700, letterSpacing: 2, marginBottom: 10 }}>Claude Code 默认的 TTL</p>
					<table style={{ width: '100%', borderCollapse: 'collapse', tableLayout: 'fixed', background: colors.white, boxShadow: shadowSm }}>
						<thead>
							<tr>{['计费方式', '主对话', '其他（subagent 等）'].map((h) => <th key={h} style={{ ...cell, background: colors.purple, textAlign: 'left' }}>{h}</th>)}</tr>
						</thead>
						<tbody>
							{ttl.map((r) => (
								<tr key={r.who}>
									<td style={{ ...cell, background: colors.warmBg }}>{r.who}</td>
									<td style={cell}>{r.main}</td>
									<td style={{ ...cell, fontWeight: 600 }}>{r.other}</td>
								</tr>
							))}
						</tbody>
					</table>
					<p style={{ marginTop: 18, fontSize: 21, fontWeight: 700, lineHeight: 1.55 }}>
						每次命中都会把计时重置。写入 1 小时 TTL 比 5 分钟更贵，只有请求间隔常常超过 5 分钟时才划算
					</p>
					<Source>出自 Claude Code 官方文档 How Claude Code uses prompt caching。/usage 显示命中率需要 v2.1.251+，显示失效原因需要 v2.1.260+。</Source>
				</Half>
			</Inner>
		</Slide>
	);
}
