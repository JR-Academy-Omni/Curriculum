import { motion } from 'framer-motion';
import { colors, fonts, radii } from '../ui';
import { PartFrame, Evidence, Bubble, Punch, Mark, card, RunLine, FULL_RUN } from './_shared';

// 真实 case G03：引用作废 v1 答错人数，faithfulness 仍是 1.0；citation 检查标出 stale_version
export default function S16_G03() {
	return (
		<PartFrame part="report" title="faithfulness 满分，答案却是错的" titleSize={50}>
			<div style={{ display: 'grid', gridTemplateColumns: '1.1fr .9fr', gap: 24, alignItems: 'start' }}>
				<motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.35, delay: 0.15 }} style={{ display: 'grid', gap: 10 }}>
					<Bubble who="家属">一次最多能来几个人探视？</Bubble>
					<Evidence id="v2 · 生效（top-1）">每位住户同一时间最多接待 3 位访客。</Evidence>
					<Evidence id="v1（top-3）" stale>每位住户同一时间最多接待 2 位访客。</Evidence>
					<Bubble who="助手" bg="#ffd9d9">根据最新的探视政策，每位住户同一时间最多接待 2 位访客。……〔引用：v1〕</Bubble>
				</motion.div>
				<motion.div initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.35, delay: 0.4 }} style={{ display: 'grid', gap: 12 }}>
					{[
						{ k: 'RAGAS faithfulness', v: '1.0', bg: colors.green, d: '“2 位”确实写在检索到的资料里' },
						{ k: '程序检查引用', v: 'stale_version', bg: colors.red, d: '引用的那块，版本已作废' },
					].map((x) => (
						<div key={x.k} style={{ ...card, padding: '14px 20px', display: 'grid', gap: 8 }}>
							<span style={{ fontSize: 22, fontWeight: 800 }}>{x.k}</span>
							<span style={{ fontFamily: fonts.mono, fontSize: 32, fontWeight: 700, background: x.bg, color: x.bg === colors.red ? colors.white : colors.black, borderRadius: radii.pill, padding: '2px 16px', justifySelf: 'start' }}>{x.v}</span>
							<span style={{ fontSize: 20, fontWeight: 700, color: '#514c48' }}>{x.d}</span>
						</div>
					))}
				</motion.div>
			</div>
			<Punch delay={0.9} size={27}>faithfulness 只问“有没有证据撑着”，<Mark>不问证据过没过期</Mark>。所以引用要由程序查版本。</Punch>
			<RunLine>{FULL_RUN}</RunLine>
		</PartFrame>
	);
}
