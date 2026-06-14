import { Slide, Inner, Half, Title, Tag, colors, fonts, border, shadow } from '../ui';
import { slideFromLeft, slideFromRight } from '../ui';
import { motion } from 'framer-motion';

// Design System = 视觉的 Source of Truth
export default function S14b_DesignSystem() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner split>
				<Half>
					<motion.div {...slideFromLeft}>
						<Tag bg={colors.purple} color={colors.white}>SoT 不只是文字 · 视觉也要</Tag>
						<Title size="44px" style={{ marginTop: 14, lineHeight: 1.16 }}>
							<code style={{ color: colors.purple }}>DESIGN.md</code> = <br />视觉的 <span style={{ background: colors.yellow, padding: '0 8px' }}>Source of Truth</span>
						</Title>
						<p style={{ fontSize: 18, color: '#444', marginTop: 16, lineHeight: 1.6 }}>
							CLAUDE.md 管「代码怎么写」,design system 管「界面长什么样」。
							没有它 —— AI <b style={{ color: colors.red }}>凭记忆编 hex</b>、每页配色都不一样、品牌一致性崩。
						</p>
						<div style={{ marginTop: 16, background: colors.dark, color: colors.white, border, padding: '14px 18px', fontSize: 15.5, lineHeight: 1.6 }}>
							<span style={{ color: colors.yellow, fontWeight: 800, fontFamily: fonts.mono }}>匠人唯一视觉 SoT → </span>
							<code style={{ color: '#9aa0bb' }}>jr-academy-brand/</code>:DESIGN.md + Brand Board(13 模块)+ token 全在 <code style={{ color: colors.yellow }}>tokens.css</code> 的 <code style={{ color: colors.yellow }}>--jr-*</code>。
							<b> code-review 见写死 hex → 直接打回。</b>
						</div>
					</motion.div>
				</Half>
				<Half>
					<motion.div {...slideFromRight}
						style={{ background: '#0c1020', border: `2px solid ${colors.purple}`, boxShadow: shadow, padding: '18px 20px', fontFamily: fonts.mono, fontSize: 14, lineHeight: 1.7, color: '#d8dcea' }}>
						<div style={{ color: '#6b7394' }}># ❌ 凭记忆编 —— 每页都不一样</div>
						<div><span style={{ color: colors.red }}>color: '#ff5a5a'</span>  <span style={{ color: '#5a6488' }}>// 这页</span></div>
						<div><span style={{ color: colors.red }}>color: '#fa4d4d'</span>  <span style={{ color: '#5a6488' }}>// 那页</span></div>
						<div style={{ marginTop: 12, color: '#6b7394' }}># ✅ 从 design token 拿 —— 全站统一</div>
						<div><span style={{ color: colors.green }}>color: var(--jr-red)</span></div>
						<div><span style={{ color: colors.green }}>radius: var(--jr-radius-sm)</span></div>
						<div style={{ marginTop: 14, borderTop: '1px dashed #333', paddingTop: 10, color: colors.yellow, fontSize: 13.5 }}>
							🎯 元例子:这份 42 页 PPT 全靠一套<br />design system(theme.ts + ui.tsx 基元)<br />—— 所以每页风格统一、改一处全变。
						</div>
					</motion.div>
				</Half>
			</Inner>
		</Slide>
	);
}
