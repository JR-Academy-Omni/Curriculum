import { motion } from 'framer-motion';
import { Slide, Inner, Title, Grid, Card, Tag, colors, fonts } from '../ui';

const outputs = [
	{ tag: '01', title: '增量交付', body: '不等所有东西完美，先交付一小块可用结果。', color: colors.yellow },
	{ tag: '02', title: '持续协作', body: '业务、团队和用户不断校准，不靠层层转述。', color: colors.blue },
	{ tag: '03', title: '持续学习', body: '用真实反馈修正计划，而不是捍卫最初猜想。', color: colors.green },
];

export default function S03_ExitTicket() {
	return (
		<Slide bg={colors.darkBg}>
			<Inner style={{ flexDirection: 'column', justifyContent: 'center' }}>
				<Tag bg={colors.red}>WHAT IS AGILE?</Tag>
				<Title white size="60px" style={{ margin: '18px 0 36px' }}>Agile 是一组应对不确定性的工作方法</Title>
				<Grid cols={3} gap={24}>
					{outputs.map((item, index) => (
						<motion.div key={item.title} initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 + index * 0.15 }}>
							<Card bg={item.color} style={{ minHeight: 230 }}>
								<div style={{ fontFamily: fonts.mono, fontSize: 18, fontWeight: 900 }}>{item.tag}</div>
								<h3 style={{ fontSize: 30, margin: '20px 0 14px' }}>{item.title}</h3>
								<p style={{ fontSize: 19, lineHeight: 1.55 }}>{item.body}</p>
							</Card>
						</motion.div>
					))}
				</Grid>
			</Inner>
		</Slide>
	);
}