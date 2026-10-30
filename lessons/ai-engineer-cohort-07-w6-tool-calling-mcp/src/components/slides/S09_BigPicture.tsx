import { motion } from 'framer-motion';
import { colors } from '../ui';
import { PartFrame, BigPicture, Punch, Mark, muted } from './_shared';

// 总图：上排公司、下排技术。客服专员（模型）和客服系统（MCP client）分开画：专员只写单，系统负责送单和收回执
export default function S09_BigPicture() {
	return (
		<PartFrame part="basics" title="一张图，把它们串起来" subtitle="上面一排是公司里的样子，下面一排是对应的技术名词。">
			<BigPicture />
			<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 1.1 }}
				style={{ marginTop: 22, display: 'grid', gap: 8, fontSize: 23, fontWeight: 800, lineHeight: 1.5, color: muted }}>
				<div>① 客服专员听懂客户，<span style={{ color: colors.black }}>只负责写单</span>。</div>
				<div>② 客服系统把单子顺着内线送到后台，再把回执带回来。专员自己看不到这条内线。</div>
			</motion.div>
			<Punch delay={1.3} size={28}>后面每一部分，都会回到这张图上的<Mark>某一格</Mark>。</Punch>
		</PartFrame>
	);
}
