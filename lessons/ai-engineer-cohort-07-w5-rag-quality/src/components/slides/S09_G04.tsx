import { motion } from 'framer-motion';
import { colors } from '../ui';
import { PartFrame, Evidence, Bubble, Punch, Mark, RunLine, RETRIEVAL_RUNS } from './_shared';

// 真实 case G04：正确证据在 top-1，作废的 v1 在 top-2 → 按规则算 retrieval 失败（runs/20261023-112550-baseline）
export default function S09_G04() {
	return (
		<PartFrame part="failure" title="证据明明在，为什么还算 retrieval 失败？" titleSize={50}>
			<div style={{ display: 'grid', gridTemplateColumns: '.8fr 1.2fr', gap: 26, alignItems: 'start' }}>
				<motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.35, delay: 0.15 }} style={{ display: 'grid', gap: 12 }}>
					<Bubble who="家属">我可以带家里的狗去看我爸吗？</Bubble>
					<div style={{ fontSize: 22, fontWeight: 800, color: '#514c48' }}>G04 · 检索回来的 top-3：</div>
				</motion.div>
				<motion.div initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.35, delay: 0.3 }} style={{ display: 'grid', gap: 10 }}>
					<Evidence id="#1 visiting-policy v2" gold>宠物可以探视，但需提前 3 个工作日提交宠物探视申请表 VF-02……</Evidence>
					<Evidence id="#2 visiting-policy v1" stale>为保障住户健康，宠物不得进入院区。</Evidence>
					<Evidence id="#3 outbreak-visiting">限制期间可以通过家属门户预约视频探视，每次 30 分钟。</Evidence>
				</motion.div>
			</div>
			<Punch delay={0.8} size={29}>过期版本进了 top-k，模型就可能跟着它答：<Mark color={colors.red}>“不能带”</Mark>。所以也记作 retrieval 失败。</Punch>
			<RunLine>{RETRIEVAL_RUNS}</RunLine>
		</PartFrame>
	);
}
