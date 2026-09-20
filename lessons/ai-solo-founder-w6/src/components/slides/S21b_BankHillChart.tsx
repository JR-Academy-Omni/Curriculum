import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, border } from '../ui';

const items = [
	['数据映射', '25%', 72, colors.red],
	['安全评审', '46%', 205, colors.blue],
	['迁移脚本', '76%', 112, colors.green],
] as const;

export default function S21b_BankHillChart() {
	return <Slide bg={colors.warmBg}><Inner style={{ flexDirection: 'column', justifyContent: 'center' }}>
		<Tag bg={colors.purple}>SHAPE UP · HILL CHART</Tag>
		<Title size="52px" style={{ margin: '15px 0 20px' }}>大型项目的进度：先看未知，再看完成量</Title>
		<div style={{ position: 'relative', width: '100%', height: 300, borderBottom: border }}>
			<div style={{ position: 'absolute', left: '8%', right: '8%', bottom: 0, height: 250, borderRadius: '50% 50% 0 0', background: colors.yellow, border }} />
			{items.map(([label, left, bottom, color], index) => <motion.div key={label} initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: index * 0.2 }} style={{ position: 'absolute', left, bottom, transform: 'translateX(-50%)', textAlign: 'center' }}><div style={{ width: 26, height: 26, borderRadius: '50%', background: color, border, margin: '0 auto 8px' }} /><strong>{label}</strong></motion.div>)}
			<div style={{ position: 'absolute', bottom: -35, left: '10%', fontWeight: 900 }}>上坡：还在找解法</div><div style={{ position: 'absolute', bottom: -35, right: '10%', fontWeight: 900 }}>下坡：知道怎么执行</div>
		</div>
		<p style={{ fontSize: 19, fontWeight: 900, marginTop: 48 }}>“完成 70%”可能仍有致命未知；先把高风险工作推过山顶。</p>
	</Inner></Slide>;
}
