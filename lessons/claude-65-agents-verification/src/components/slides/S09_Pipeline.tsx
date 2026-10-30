import { motion } from 'framer-motion';
import { DeckFrame, colors, fonts } from '../deck';
import { Step, Arrow, muted, Takeaway } from '../lesson';

// 65 组 / 641 家 / 2,438 项：五项全项补查记录（fill_20261019），见 SOURCE_MAP #3 #4
export default function S09_Pipeline() {
	return (
		<DeckFrame tag="03 · 一个人指挥 65 个 AI" title="一个人怎么指挥 65 个 AI" subtitle="641 家公司、每家五项、每项都要找到公告原文。一个 AI 一家家查要查到天亮，所以切成 65 份，同时派出去。" accent={colors.red}>
			<div style={{ display: 'flex', flexDirection: 'column', gap: 22, height: '100%' }}>
				<div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr auto 1.2fr auto 1fr auto 1fr', gap: 12, alignItems: 'stretch' }}>
					<Step n="1" title="名单" desc="641 家 · 2,438 个待查项" delay={.1} />
					<Arrow />
					<Step n="2" title="切组" desc="程序按每组约 10 家切成 65 组" delay={.2} color={colors.blue} />
					<Arrow />
					<Step n="3" title="并行派活" desc="每组一个子助手，拿同一张派活单" delay={.3} color={colors.red} />
					<Arrow />
					<Step n="4" title="交结果" desc="每组一个文本文件，格式固定" delay={.4} color={colors.green} />
					<Arrow />
					<Step n="5" title="校验入库" desc="脚本逐行检查，不合格整组退回" delay={.5} color={colors.purple} />
				</div>
				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .6 }} style={{ display: 'grid', gridTemplateColumns: 'repeat(13, 1fr)', gap: 8, flex: 1, minHeight: 0, alignContent: 'center' }}>
					{Array.from({ length: 65 }).map((_, i) => (
						<motion.div key={i} initial={{ background: colors.white }} animate={{ background: [colors.white, colors.yellow, colors.green] }} transition={{ duration: 1.4, delay: .7 + ((i * 37) % 65) * .03 }}
							style={{ height: 42, borderRadius: 10, border: `2px solid ${colors.dark}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: fonts.mono, fontSize: 14, fontWeight: 800 }}>{String(i + 1).padStart(2, '0')}</motion.div>
					))}
				</motion.div>
				<div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
					<Takeaway>拆成 65 份，用同一张派活单，同时查</Takeaway>
					<span style={{ fontSize: 19, color: muted }}>子助手中途停了（比如额度用完），用原来的会话续上，不重开一组重查。</span>
				</div>
			</div>
		</DeckFrame>
	);
}
