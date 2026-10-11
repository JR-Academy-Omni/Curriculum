import { motion } from 'framer-motion';
import { Page, Head, ActBadge, Code, Term, ChatSignal, colors, fonts, border, radii } from '../deck';

/**
 * P12 · 动手③ 怎么知道插件真的装进来了（✅ 终端）
 * 回收第十四节收口：它什么都没做，而你以为它做了。
 * 🔴 落点：安装提示证明动作执行了，component inventory 才证明东西在。
 * 命令与输出形状均已实测（2026-10-11）。
 */
export default function L15P12_VerifyIt() {
	return (
		<Page>
			<ActBadge act={2} mode="动手 ③" />
			<Head sub="你刚才屏幕上出现了一行字说安装成功。那行字证明的是「这个动作执行了」，不是「这个东西在工作」。">
				怎么知道插件真的装进来了
			</Head>

			<div style={{ display: 'flex', gap: 22, alignItems: 'flex-start' }}>
				<motion.div
					initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.18, duration: 0.45 }}
					style={{ flex: 1 }}
				>
					<div style={{
						display: 'inline-block', fontFamily: fonts.mono, fontSize: 15, fontWeight: 800, letterSpacing: 1,
						background: '#ded8d3', color: '#777', border: `2px solid ${colors.black}`,
						borderRadius: radii.label, padding: '4px 12px', marginBottom: 12,
					}}>看提示</div>
					<Term lines={[
						{ t: '✔ Successfully installed plugin', kind: 'note' },
					]} />
					<p style={{ fontSize: 20, color: '#777', lineHeight: 1.65, marginTop: 14 }}>
						这行字只说明安装这个动作跑完了。
					</p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.36, duration: 0.45 }}
					style={{ flex: 1.35 }}
				>
					<div style={{
						display: 'inline-block', fontFamily: fonts.mono, fontSize: 15, fontWeight: 800, letterSpacing: 1,
						background: colors.yellow, color: colors.black, border: `2px solid ${colors.black}`,
						borderRadius: radii.label, padding: '4px 12px', marginBottom: 12,
					}}>看行为</div>
					<Code code={`claude plugin details feature-dev`} />
					<Term style={{ marginTop: 12 }} lines={[
						{ t: 'Component inventory', kind: 'hdr' },
						{ t: '  Skills (n)   …', kind: 'ok' },
						{ t: '  Agents (n)   …', kind: 'ok' },
						{ t: '  Hooks  (n)   SessionStart', kind: 'ok' },
						{ t: '  MCP servers (n)', kind: 'ok' },
					]} />
				</motion.div>
			</div>

			<motion.div
				initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
				transition={{ delay: 0.85, type: 'spring', stiffness: 170, damping: 17 }}
				style={{
					marginTop: 'auto', padding: '20px 30px', background: colors.dark,
					borderRadius: radii.panel, boxShadow: `8px 8px 0 ${colors.yellow}`,
				}}
			>
				<div style={{ fontFamily: fonts.heading, fontSize: 31, fontWeight: 900, color: colors.white, lineHeight: 1.45 }}>
					安装提示证明<span style={{ color: colors.red }}>动作执行了</span>，
					这份清单才证明<span style={{ color: colors.yellow }}>东西在</span>。这是两件事。
				</div>
			</motion.div>

			<ChatSignal>看到清单、而且里面确实有东西，才算数</ChatSignal>
		</Page>
	);
}
