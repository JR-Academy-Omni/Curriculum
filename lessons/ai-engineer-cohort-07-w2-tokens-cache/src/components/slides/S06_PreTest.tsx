import { motion } from 'framer-motion';
import { NumberBadge } from '../deck';
import { ModuleFrame, card } from './_shared';
import { pretest } from '../../data/pretest';

// 全课前测：5 题，M7 原题再考一次
export default function S06_PreTest() {
	return (
		<ModuleFrame id="M0" phase="pre" title="全课前测：5 道题，凭直觉答" subtitle="写在对话框里，不用查。M7 会用原题再考一次，看你变了多少">
			{pretest.map((q, i) => (
				<motion.div key={q} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: 0.15 + i * 0.1 }}
					style={{ ...card, display: 'flex', gap: 16, alignItems: 'center', padding: '10px 18px', marginBottom: 11 }}>
					<NumberBadge>{i + 1}</NumberBadge>
					<span style={{ fontSize: 24, fontWeight: 700, lineHeight: 1.4 }}>{q}</span>
				</motion.div>
			))}
		</ModuleFrame>
	);
}
