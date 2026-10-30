import { motion } from 'framer-motion';
import { colors, fonts } from '../ui';
import { Quiz, Bubble, Mark, card, muted } from './_shared';

// 检查点 1：模型说办好了，但记录里没有工具调用（教学示例）
export default function S11_Check1() {
	return (
		<Quiz part="calling" title="检查点 1：退了吗？"
			left={
				<div style={{ display: 'grid', gap: 12 }}>
					<Bubble who="用户">我要退订单 A1024。</Bubble>
					<Bubble who="助手">好的，已为您办理退款，3 个工作日到账。</Bubble>
					<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: 0.5 }}
						style={{ ...card, padding: '10px 16px', fontFamily: fonts.mono, fontSize: 18, color: muted, background: '#f3ece6' }}>
						这一轮的记录：工具调用 0 次
					</motion.div>
				</div>
			}
			options={[
				{ text: '退了，助手说办好了', ok: false },
				{ text: '没退，模型只是说了一句话', ok: true },
				{ text: '说不准', ok: false },
			]}
			explain={<>没有工单，后台什么都没办。<Mark color={colors.red}>说“办好了”不等于办了</Mark>。</>}
		/>
	);
}
