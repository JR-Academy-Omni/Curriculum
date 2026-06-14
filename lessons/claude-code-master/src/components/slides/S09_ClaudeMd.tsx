import { Slide, Inner, Half, Title, Tag, colors, fonts, border, shadow } from '../ui';
import { slideFromLeft, slideFromRight } from '../ui';
import { motion } from 'framer-motion';

// 第一层 CLAUDE.md — 三级层级
export default function S09_ClaudeMd() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner split>
				<Half>
					<motion.div {...slideFromLeft}>
						<Tag bg={colors.red}>第 1 层 · 规则 SoT</Tag>
						<Title size="50px" style={{ marginTop: 14, lineHeight: 1.12 }}>
							CLAUDE.md<br />= AI 的<span style={{ background: colors.yellow, padding: '0 8px' }}>内核</span>
						</Title>
						<p style={{ fontSize: 19, color: '#444', marginTop: 16, lineHeight: 1.6 }}>
							每开一个会话，Claude Code <b>自动加载</b>这些文件。规则写一次，往后<b>每次都遵守</b>，不用你重讲。
						</p>
						<p style={{ fontSize: 19, color: '#444', marginTop: 14, lineHeight: 1.6 }}>
							匠人用<b>三级层级</b>：越靠近你干活的目录，规则越具体。
						</p>
						<div style={{ marginTop: 16, background: colors.dark, color: colors.white, padding: '14px 18px', border, fontSize: 16, lineHeight: 1.5 }}>
							真实铁律举例：<span style={{ color: colors.yellow }}>禁止瞎编</span> · <span style={{ color: colors.yellow }}>ID-First（用 ObjectId 不用 slug）</span> · <span style={{ color: colors.yellow }}>禁止代码生成 pptx/docx</span>
						</div>
					</motion.div>
				</Half>
				<Half>
					<motion.div {...slideFromRight} style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
						{[
							{ path: '~/.claude/CLAUDE.md', tag: '全局', desc: '所有项目通用：语言规则、项目登记表', w: '100%', bg: colors.dark, c: colors.white },
							{ path: '<repo>/CLAUDE.md', tag: '项目', desc: '本仓库铁律：编码规范、部署链路、服务拆分', w: '86%', bg: colors.red, c: colors.white },
							{ path: 'curriculum/CLAUDE.md', tag: '子目录', desc: '课程区专属：技术栈白名单、outline 规则', w: '72%', bg: colors.yellow, c: colors.black },
						].map((x, i) => (
							<motion.div key={x.path}
								initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.15 }}
								style={{ width: x.w, marginBottom: 14 }}>
								<div style={{ background: x.bg, color: x.c, border, boxShadow: shadow, padding: '12px 16px' }}>
									<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
										<span style={{ fontFamily: fonts.mono, fontSize: 15, fontWeight: 800 }}>{x.path}</span>
										<span style={{ fontSize: 12, fontWeight: 800, opacity: 0.85 }}>{x.tag}</span>
									</div>
									<div style={{ fontSize: 14, marginTop: 4, opacity: 0.9 }}>{x.desc}</div>
								</div>
							</motion.div>
						))}
						<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.85 }}
							style={{ fontSize: 14, color: '#888', fontFamily: fonts.mono, marginTop: 4 }}>
							↑ 三层叠加，靠近 cwd 的越具体、优先级越高
						</motion.div>
					</motion.div>
				</Half>
			</Inner>
		</Slide>
	);
}
