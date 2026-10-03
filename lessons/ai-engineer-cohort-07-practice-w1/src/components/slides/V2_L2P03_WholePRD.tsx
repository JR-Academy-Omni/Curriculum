// Migrated teaching page; original source: lessons/vibe-coding-master-l2/src/components/slides/L2P03_WholePRD.tsx
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../courseUi';
import { slideFromLeft, slideFromRight } from '../courseUi';
import { motion } from 'framer-motion';
// 流程一步
function Step({ n, text, color, last }: {
    n: string;
    text: string;
    color: string;
    last?: boolean;
}) {
    return (<div style={{ display: 'flex', alignItems: 'stretch', gap: 12, marginBottom: last ? 0 : 10 }}>
			<div style={{ borderRadius: 18, flexShrink: 0, width: 38, background: color, border, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: fonts.mono, fontSize: 16, fontWeight: 900, color: colors.white }}>{n}</div>
			<div style={{ borderRadius: 18, flex: 1, background: '#fff', border, padding: '12px 16px', fontSize: 16, fontWeight: 600, color: '#333', display: 'flex', alignItems: 'center' }}>{text}</div>
		</div>);
}
// 完整产品契约交给一个 Agent，再划定实施范围
export default function L2P03_WholePRD() {
    return (<Slide bg={colors.warmBg}>
			<Inner style={{ flexDirection: 'column' }}>
				<motion.div {...slideFromLeft}>
					<Tag bg={colors.dark}>ADLC 核心转变</Tag>
					<Title size="50px" style={{ marginTop: 14 }}>
						完整产品契约交给<span style={{ background: colors.yellow, padding: '0 8px' }}>一个 Agent</span>，<span style={{ color: colors.red }}>再划定实施范围</span>
					</Title>
				</motion.div>

				<motion.div {...slideFromRight} style={{ display: 'flex', gap: 20, marginTop: 26 }}>
					{/* 左 · 传统 */}
					<div style={{ flex: 1 }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 15, color: '#777', fontWeight: 700, marginBottom: 12 }}>传统 SDLC · 拆分 + 分工 + 多轮</div>
						<Step n="1" text="拿到 PRD" color="#999"/>
						<Step n="2" text="拆成一个个 user story" color={colors.red}/>
						<Step n="3" text="分给一堆人，一个个做" color="#999"/>
						<Step n="4" text="测试" color="#999"/>
						<Step n="5" text="集成上线" color="#999" last/>
					</div>

					{/* 右 · ADLC */}
					<div style={{ flex: 1 }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 15, color: '#0a8a3a', fontWeight: 700, marginBottom: 12 }}>ADLC · 全局契约 + 小步实施</div>
						<Step n="1" text="拿到 PRD" color={colors.dark}/>
						<div style={{ display: 'flex', alignItems: 'stretch', gap: 12 }}>
							<div style={{ borderRadius: 18, flexShrink: 0, width: 38, background: colors.green, border, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: fonts.mono, fontSize: 16, fontWeight: 900, color: colors.white }}>2</div>
							<div style={{ borderRadius: 18, flex: 1, background: colors.yellow, border, boxShadow: shadow, padding: '16px 18px' }}>
								<div style={{ fontSize: 18, fontWeight: 900, color: colors.black, marginBottom: 8 }}>完整契约作为上下文</div>
								<div style={{ fontSize: 15, fontWeight: 700, color: '#333' }}>确认范围 → 开发 → 测试 → 人工验收</div>
							</div>
						</div>
					</div>
				</motion.div>

				<motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.5 }} style={{ marginTop: 26, alignSelf: 'stretch', display: 'flex', gap: 16, alignItems: 'stretch' }}>
					<div style={{ borderRadius: 18, flex: 1, background: '#fff', border, padding: '14px 22px', fontSize: 18, fontWeight: 700, color: '#444', display: 'flex', alignItems: 'center' }}>
						把 PRD 拆成 user story 分给人做
					</div>
					<div style={{ flexShrink: 0, display: 'flex', alignItems: 'center', fontFamily: fonts.mono, fontSize: 22, fontWeight: 900, color: colors.red }}>VS</div>
					<div style={{ borderRadius: 18, flex: 1, background: colors.dark, color: colors.white, border, boxShadow: shadow, padding: '14px 22px', fontSize: 18, fontWeight: 800, display: 'flex', alignItems: 'center' }}>
						以完整 PRD 为依据，按授权任务实施
					</div>
				</motion.div>
			</Inner>
		</Slide>);
}
