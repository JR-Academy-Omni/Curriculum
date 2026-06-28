import { Slide, Inner, Half, Title, Tag, colors, fonts, border, shadow } from '../ui';
import { slideFromLeft, slideFromRight } from '../ui';
import { motion } from 'framer-motion';

const tiers = [
	{ scope: '全局 ~/.claude', what: '跨所有项目的「你」—— 语言、个人偏好、通用铁律', color: colors.dark, w: 60 },
	{ scope: '项目根 <repo>/CLAUDE.md', what: '这个项目 —— 架构、技术栈、部署链路、铁律', color: colors.red, w: 78 },
	{ scope: '模块 <component>/CLAUDE.md', what: '这个 component 特有 —— 本地约定、该目录的坑', color: colors.orange, w: 96 },
];

// CLAUDE.md 拓展思维 —— 说明书 + 路线，多份分层
export default function S09c_ClaudeMdTiers() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner split>
				<Half>
					<motion.div {...slideFromLeft}>
						<Tag bg={colors.dark}>拓展思维 · 不止一份</Tag>
						<Title size="42px" style={{ marginTop: 12, lineHeight: 1.16 }}>
							CLAUDE.md = <span style={{ background: colors.yellow, padding: '0 8px' }}>说明书 + 路线图</span>
						</Title>
						<p style={{ fontSize: 17, color: '#444', marginTop: 14, lineHeight: 1.6 }}>
							说明书（<b>怎么干</b>）+ 路线图（<b>去哪、为什么</b>）。而且<b style={{ color: colors.red }}>可以有很多份</b> —— 每个 component / 模块都能放自己的一份。
						</p>
						<div style={{ marginTop: 16, background: colors.dark, color: colors.white, border, boxShadow: `5px 5px 0 ${colors.orange}`, padding: '13px 18px', fontSize: 15, lineHeight: 1.55 }}>
							<b style={{ color: colors.yellow }}>为什么这样更快更准</b><br />
							agent 在哪个模块干活，就只自动加载那一层相关的说明书 —— context 更少、噪音更小，
							执行<b style={{ color: colors.white }}>更快、更准</b>（正好躲开上节的「context 塌方」）。
						</div>
					</motion.div>
				</Half>
				<Half>
					<motion.div {...slideFromRight} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 12.5, color: '#999', fontWeight: 800 }}>怎么分 tiers · 每层放什么（越靠近 cwd 越具体）</div>
						{tiers.map((t, i) => (
							<motion.div key={t.scope}
								initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.15 }}
								style={{ width: `${t.w}%`, alignSelf: 'flex-end', background: '#fff', border, boxShadow: shadow }}>
								<div style={{ display: 'flex', alignItems: 'stretch' }}>
									<div style={{ flexShrink: 0, width: 8, background: t.color }} />
									<div style={{ padding: '10px 14px' }}>
										<div style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 800, color: t.color }}>{t.scope}</div>
										<div style={{ fontSize: 14, color: '#555', marginTop: 3, lineHeight: 1.4 }}>{t.what}</div>
									</div>
								</div>
							</motion.div>
						))}
						<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.85 }}
							style={{ fontSize: 13.5, color: '#888', fontFamily: fonts.mono, marginTop: 2 }}>
							↑ 三层自动叠加：上层定调，越往下越具体、优先级越高
						</motion.div>
					</motion.div>
				</Half>
			</Inner>
		</Slide>
	);
}
