import { motion } from 'framer-motion';
import { Slide, Inner, Title, colors, fonts, border, shadowSm } from '../ui';
import { col, ModuleTag, Note } from './_shared';
import { pretest } from '../../data/pretest';

// 全课前测：5 题，M7 原题再考一次
export default function S06_PreTest() {
	return (
		<Slide bg={colors.white}>
			<Inner style={col}>
				<ModuleTag id="M0" phase="pre" />
				<Title size="54px" style={{ marginBottom: 10 }}>全课前测：5 道题，凭直觉答</Title>
				<Note style={{ marginBottom: 22 }}>写在纸上或聊天区，不用查。M7 会用原题再考一次，看你变了多少</Note>
				{pretest.map((q, i) => (
					<motion.div
						key={q}
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.3, delay: 0.15 + i * 0.1 }}
						style={{ display: 'flex', gap: 16, alignItems: 'center', padding: '12px 18px', marginBottom: 12, background: colors.warmBg, border, boxShadow: shadowSm }}>
						<span style={{ flexShrink: 0, fontFamily: fonts.mono, fontSize: 20, fontWeight: 700, background: colors.yellow, border, padding: '0 10px' }}>{i + 1}</span>
						<span style={{ fontSize: 25, fontWeight: 700, lineHeight: 1.4 }}>{q}</span>
					</motion.div>
				))}
			</Inner>
		</Slide>
	);
}
