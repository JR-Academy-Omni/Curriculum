import { motion } from 'framer-motion';
import { Slide, Inner, Title, Grid, CardSm, Tag, colors } from '../ui';

const brief = [
	['背景', '产品组要把 AI 助手能力开放给企业用户，输出可信度未知', colors.red],
	['目标', '让试点用户在真实场景完成可信问答', colors.yellow],
	['约束', '数据隐私与权限边界优先于功能数量', colors.blue],
	['成功标准', '答案有用、来源可查、权限正确，且支持团队接得住', colors.green],
];

export default function C32_Flow() {
	return <Slide bg={colors.darkBg}><Inner style={{ flexDirection: 'column', justifyContent: 'center' }}><Tag bg={colors.green}>PART 3 · CASE 3 · 微软产品组 AI 助手发布</Tag><Title white size="52px" style={{ margin: '16px 0 26px' }}>高风险产品发布，靠短反馈控制未知</Title><Grid cols={4} gap={16}>{brief.map(([title, body, color], index) => <motion.div key={title} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 + index * 0.13 }}><CardSm bg={color} style={{ minHeight: 190 }}><h3 style={{ fontSize: 23 }}>{title}</h3><p style={{ fontSize: 17, lineHeight: 1.5, marginTop: 16 }}>{body}</p></CardSm></motion.div>)}</Grid><p style={{ color: colors.white, fontSize: 20, marginTop: 26 }}>本案例回答：未知很多时，怎么一轮一轮地放开？</p></Inner></Slide>;
}