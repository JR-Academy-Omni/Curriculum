import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag } from '../ui';
import { colors, fonts, border, shadow, shadowSm } from '../../styles/theme';

// 对照 ai-builder/public/outline.json · phases[0]（32 节：6 直播 Lesson + 12 互动 Lab + 12 自学 Info + 2 Quest）
// 按主题归成 5 簇，N 节加总 = 11 + 6 + 3 + 6 + 6 = 32
const clusters = [
	{
		num: '01',
		name: '工具链安装 & 入门',
		learn: '搞懂 Vibe Coding 范式，装好 Claude Code / Cursor / Codex，理清模型怎么选',
		rep: 'L04 安装与配置 Claude、Cursor、Codex CLI · L07 四工具对比指南',
		count: 11,
		quest: 'Q01 装工具链',
		start: true,
	},
	{
		num: '02',
		name: '从需求到 PRD',
		learn: '把一句话需求变成结构化 PRD，用 Claude 自动拆模块、定义产品边界',
		rep: 'L11 从需求到 PRD 的产品设计流程 · L14 用 Claude 生成 PRD 与模块拆解',
		count: 6,
	},
	{
		num: '03',
		name: 'Prompt 工程',
		learn: '输出格式控制 + Few-shot 示例教学，让 AI 稳定按你要的格式产出',
		rep: 'L17 输出格式 · L18 Few-shot Learning · L19 高质量 Prompt 模板',
		count: 3,
	},
	{
		num: '04',
		name: 'Context Engineering & SoT',
		learn: '建上下文内核：用 .cursorrules + CLAUDE.md 让 AI 按你的规矩写代码',
		rep: 'L20 Context Engineering 实践 · L22 .cursorrules 设计实战',
		count: 6,
		quest: 'Q02 写 .cursorrules + CLAUDE.md',
	},
	{
		num: '05',
		name: 'Debug 调试',
		learn: '从报错到修复全流程：读错误日志、AI 辅助修 Bug、正确的代码生成姿势',
		rep: 'L25 Claude 协助 Debug · L26 调试 AI 代码 · L30 约束与负面 Prompt',
		count: 6,
	},
];

// Phase 1 详细课程安排 —— 32 节按 5 个主题簇展开，红系配色对齐 Roadmap 的 Phase1
export default function ARR1_Phase1() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner style={{ flexDirection: 'column' }}>
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
					<Tag bg={colors.red}>Vibe Coding 大师课 · Phase 1 / 4 · 8 周里的第一周</Tag>
					<Title size="42px" style={{ marginTop: 10 }}>
						Phase 1 · 入门 & PRD（<span style={{ background: colors.yellow, padding: '0 8px' }}>约 32 节</span>）
					</Title>
				</motion.div>

				<motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}
					style={{ fontSize: 16, color: '#555', marginTop: 12, lineHeight: 1.5 }}>
					立意图、打地基 —— 学会<b style={{ color: colors.black }}>写 PRD</b> / <b style={{ color: colors.black }}>建 SoT</b> / <b style={{ color: colors.black }}>搭 Context 内核</b>。
					<span style={{ background: colors.red, color: colors.white, padding: '2px 8px', fontWeight: 800, marginLeft: 6 }}>今晚第一节课</span>
					{' '}就是这个 Phase 的起点。
				</motion.p>

				<div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 16 }}>
					{clusters.map((c, i) => (
						<motion.div key={c.num}
							initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.32 + i * 0.1, type: 'spring', stiffness: 160, damping: 18 }}
							style={{
								display: 'flex', alignItems: 'center', gap: 14, position: 'relative',
								background: c.start ? colors.dark : colors.white,
								border, boxShadow: c.start ? `6px 6px 0 ${colors.red}` : shadowSm,
								padding: '10px 16px',
							}}>
							{c.start && (
								<span style={{
									position: 'absolute', top: -12, right: 14, padding: '3px 10px',
									background: colors.red, color: colors.white, border: '2px solid #000',
									fontFamily: fonts.mono, fontSize: 11, fontWeight: 800, letterSpacing: 1,
								}}>今晚从这开始</span>
							)}
							<div style={{
								flexShrink: 0, width: 46, height: 46, display: 'flex', alignItems: 'center', justifyContent: 'center',
								background: colors.red, color: colors.white, border: '3px solid #000',
								fontFamily: fonts.mono, fontSize: 20, fontWeight: 900,
							}}>{c.num}</div>

							<div style={{ flex: 1, minWidth: 0 }}>
								<div style={{ display: 'flex', alignItems: 'baseline', gap: 10, flexWrap: 'wrap' }}>
									<span style={{ fontSize: 19, fontWeight: 900, color: c.start ? colors.white : colors.black }}>{c.name}</span>
									{c.quest && (
										<span style={{
											padding: '1px 8px', background: colors.yellow, color: colors.black,
											fontFamily: fonts.mono, fontSize: 11, fontWeight: 800, border: '2px solid #000',
										}}>🎯 {c.quest}</span>
									)}
								</div>
								<div style={{ fontSize: 13.5, color: c.start ? '#cfd3e6' : '#555', marginTop: 3, lineHeight: 1.4 }}>{c.learn}</div>
								<div style={{ fontSize: 12, color: c.start ? '#9aa0c0' : '#999', marginTop: 4, fontFamily: fonts.mono }}>代表课：{c.rep}</div>
							</div>

							<div style={{
								flexShrink: 0, padding: '6px 12px', background: c.start ? colors.red : colors.warmBg,
								color: c.start ? colors.white : colors.black, border: '2px solid #000',
								fontFamily: fonts.mono, fontSize: 15, fontWeight: 900, whiteSpace: 'nowrap',
							}}>{c.count} 节</div>
						</motion.div>
					))}
				</div>

				<motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}
					style={{
						marginTop: 16, padding: '12px 18px', background: colors.yellow, border, boxShadow: shadow,
						display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap',
					}}>
					<span style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 900, color: colors.black }}>
						本 Phase 含 <span style={{ background: colors.dark, color: colors.white, padding: '2px 8px' }}>12 个互动 Lab</span>
						{' '}+ <span style={{ background: colors.red, color: colors.white, padding: '2px 8px' }}>2 个 Quest 实战</span>
					</span>
					<span style={{ fontSize: 14, color: '#333', fontWeight: 600 }}>
						Q01 在你电脑上装好整套工具链 · Q02 给真实项目写 .cursorrules + CLAUDE.md
					</span>
				</motion.div>
			</Inner>
		</Slide>
	);
}
