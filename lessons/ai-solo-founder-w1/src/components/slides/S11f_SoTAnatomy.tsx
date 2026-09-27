import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';
import { Body, SlideHead } from '../DeckTable';

const SOLUTIONS = [
	['01', '客户与问题', '用户调研 · 访谈整理', '#FFE6DF'],
	['02', '现有做法与缺口', '竞品研究 · 流程分析', '#FFF2B8'],
	['03', '初步交付', '方案草稿 · 原型制作', '#DFF3E7'],
	['04', '验证动作', '访谈问题 · 邀约 · 实验', '#DCEBFF'],
	['05', '事实、假设与证据', '总结归类 · 证据台账', '#E7E0FF'],
	['06', '版本、范围与边界', '版本整理 · 审批检查', '#F4D7E5'],
];

export default function S11f_SoTAnatomy() {
	return (
		<Slide bg={colors.warmBg}>
			<Body style={{ padding: '32px 58px 25px' }}>
				<SlideHead
					tag="SoT × AI SKILLS"
					tagBg={colors.red}
					title="SoT 里的每一项，后面都有对应的 AI 帮手"
					titleSize="clamp(30px, 2.75vw, 43px)"
					sub="你负责提供真实业务信息和作最终决定；AI 负责调研、整理、起草和重复执行。"
				/>

				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 15 }}>
					{SOLUTIONS.map(([n, truth, ai, bg], index) => (
						<motion.div key={n} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.08 * index }} style={{ border, boxShadow: shadowSm, background: bg, padding: '15px 17px', minHeight: 142 }}>
							<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
								<div style={{ fontFamily: fonts.mono, fontSize: 20, fontWeight: 950, color: colors.red }}>{n}</div>
								<div style={{ fontFamily: fonts.mono, fontSize: 11, fontWeight: 900, letterSpacing: 1.3 }}>BUSINESS SoT</div>
							</div>
							<div style={{ marginTop: 8, fontSize: 22, lineHeight: 1.2, fontWeight: 950 }}>{truth}</div>
							<div style={{ marginTop: 10, borderTop: '2px solid #111', paddingTop: 8, display: 'flex', alignItems: 'center', gap: 8 }}>
								<span style={{ width: 28, height: 28, display: 'grid', placeItems: 'center', background: colors.dark, color: colors.yellow, fontFamily: fonts.mono, fontSize: 12, fontWeight: 950 }}>AI</span>
								<span style={{ fontSize: 15.5, lineHeight: 1.35, fontWeight: 800 }}>{ai}</span>
							</div>
						</motion.div>
					))}
				</div>

				<div style={{ marginTop: 16, border, boxShadow: shadow, background: colors.dark, color: colors.white, padding: '13px 20px', display: 'grid', gridTemplateColumns: '1fr auto', gap: 24, alignItems: 'center' }}>
					<div style={{ fontSize: 20, lineHeight: 1.35, fontWeight: 900 }}>15 周不是一次学完所有工具：每周往同一个 AI OS 增加一个可重复使用的 Skill。</div>
					<div style={{ fontFamily: fonts.mono, color: colors.yellow, fontSize: 14, fontWeight: 900 }}>SoT 定方向 · AI 做执行 · 人做决定</div>
				</div>
			</Body>
		</Slide>
	);
}
