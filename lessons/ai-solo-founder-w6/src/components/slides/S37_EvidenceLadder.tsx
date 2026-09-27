import { motion } from 'framer-motion';
import { Slide, Inner, Title, Grid, Card, Tag, colors } from '../ui';

export default function S37_EvidenceLadder() {
	return <Slide bg={colors.white}><Inner style={{ flexDirection: 'column', justifyContent: 'center' }}><Tag bg={colors.blue}>微软产品组 · SPRINT END</Tag><Title size="53px" style={{ margin: '15px 0 28px' }}>一次检查产品，一次改进团队</Title><Grid cols={2} gap={28}><motion.div initial={{ opacity: 0, x: -35 }} animate={{ opacity: 1, x: 0 }}><Card bg={colors.blue}><h3 style={{ fontSize: 31 }}>REVIEW · 产品证据</h3><p style={{ fontSize: 21, lineHeight: 1.6, marginTop: 18 }}>回答有用吗？来源可信么？权限正确吗？</p></Card></motion.div><motion.div initial={{ opacity: 0, x: 35 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}><Card bg={colors.purple}><h3 style={{ fontSize: 31 }}>RETRO · 团队改进</h3><p style={{ fontSize: 21, lineHeight: 1.6, marginTop: 18 }}>安全评审等待过长：下一轮提前介入。</p></Card></motion.div></Grid></Inner></Slide>;
}