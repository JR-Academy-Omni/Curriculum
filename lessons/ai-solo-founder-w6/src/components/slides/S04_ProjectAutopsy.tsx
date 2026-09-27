import { motion } from 'framer-motion';
import { Slide, Inner, Title, Grid, CardSm, Tag, colors } from '../ui';

const causes = [
	['A', '人与互动', '重于流程与工具'],
	['B', '可用结果', '重于完备文档'],
	['C', '客户协作', '重于合同博弈'],
	['D', '响应变化', '重于遵循原计划'],
];

export default function S04_ProjectAutopsy() {
	return (
		<Slide bg={colors.white}>
			<Inner style={{ flexDirection: 'column', justifyContent: 'center' }}>
				<Tag bg={colors.dark}>AGILE MANIFESTO · 四组价值取向</Tag>
				<Title size="56px" style={{ margin: '18px 0 30px' }}>不是不要右边，而是更重视左边</Title>
				<Grid cols={4} gap={18}>
					{causes.map(([key, title, body], index) => (
						<motion.div key={key} initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.12 }}>
							<CardSm bg={[colors.yellow, colors.red, colors.blue, colors.green][index]} style={{ height: 190 }}>
								<div style={{ fontSize: 44, fontWeight: 900 }}>{key}</div>
								<h3 style={{ fontSize: 25, margin: '8px 0' }}>{title}</h3>
								<p style={{ fontSize: 17, lineHeight: 1.45 }}>{body}</p>
							</CardSm>
						</motion.div>
					))}
				</Grid>
				<p style={{ marginTop: 34, fontSize: 20, fontWeight: 700 }}>敏捷不是一套固定仪式，而是一套做判断时的优先顺序。</p>
			</Inner>
		</Slide>
	);
}