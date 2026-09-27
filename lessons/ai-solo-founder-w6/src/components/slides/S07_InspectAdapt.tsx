import { motion } from 'framer-motion';
import { Slide, Inner, Title, Grid, CardSm, Highlight, Tag, colors } from '../ui';

const loop = [['透明', '现在到底在做什么'], ['检查', '证据说明进展了吗'], ['调整', '下一步要改什么']];

export default function S07_InspectAdapt() {
	return <Slide bg={colors.white}><Inner style={{ flexDirection: 'column', justifyContent: 'center' }}>
		<Tag bg={colors.red}>SCRUM 的三个经验支柱</Tag>
		<Title size="58px" style={{ margin: '16px 0 16px' }}>不是开会，是<Highlight>看见 → 核对 → 改变</Highlight></Title>
		<p style={{ fontSize: 21, marginBottom: 28 }}>Scrum 原则：Transparency · Inspection · Adaptation</p>
		<Grid cols={3} gap={22}>{loop.map(([title, body], index) => <motion.div key={title} initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.18 }}>
			<CardSm bg={[colors.yellow, colors.blue, colors.green][index]} style={{ minHeight: 155 }}><h3 style={{ fontSize: 30, marginBottom: 14 }}>{title}</h3><p style={{ fontSize: 19 }}>{body}</p></CardSm>
		</motion.div>)}</Grid>
		<p style={{ fontSize: 23, fontWeight: 900, marginTop: 30 }}>仪式可以按团队调整；透明、检查、调整不能消失。</p>
	</Inner></Slide>;
}