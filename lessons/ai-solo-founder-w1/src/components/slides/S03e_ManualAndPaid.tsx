import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow } from '../ui';
import { Body, SlideHead, Punchline } from '../DeckTable';

const manualWork = ['询价整理', '电话记录', '报价', '排班', '文件审核', '数据录入', '内容制作', '跟进提醒', '报告制作', '客服问答'];

export default function S03e_ManualAndPaid() {
	return (
		<Slide bg={colors.warmBg}>
			<Body>
				<SlideHead
					tag="入口 3 + 4"
					tagBg={colors.green}
					title="哪里还在靠人扛？哪里已经在付钱？"
					sub="已有流程和已有预算，通常比一个全新平台更接近生意。"
				/>

				<div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 22 }}>
					<div style={{ border, boxShadow: shadow, background: '#DFF3E7', padding: '20px 22px' }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 15, fontWeight: 800, color: '#137A48' }}>企业里仍靠人工完成</div>
						<div style={{ marginTop: 14, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 9 }}>
							{manualWork.map((item, index) => (
								<motion.div key={item} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.04 * index }} style={{ border: '2px solid #111', background: colors.white, padding: '8px 11px', fontSize: 18, fontWeight: 800 }}>{item}</motion.div>
							))}
						</div>
						<div style={{ marginTop: 14, fontSize: 18, lineHeight: 1.4, fontWeight: 750 }}>这些工作每天都在发生，只是又慢、又碎、容易出错。</div>
					</div>

					<div style={{ border, boxShadow: shadow, background: '#E7E0FF', padding: '20px 22px' }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 15, fontWeight: 800, color: '#5D3CB5' }}>已经有人付钱，但体验很差</div>
						<div style={{ marginTop: 14, display: 'grid', gap: 14 }}>
							{[
								'用户已经购买软件、外包或人工服务',
								'仍然抱怨太贵、太慢、太复杂或不适合',
								'你不必教育市场，只需验证更好的替代方案',
							].map((item, index) => <motion.div key={item} initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.12 * index }} style={{ borderLeft: '6px solid #5D3CB5', paddingLeft: 14, fontSize: 20, lineHeight: 1.35, fontWeight: 850 }}>{item}</motion.div>)}
						</div>
					</div>
				</div>

				<Punchline bg={colors.dark}>已有付费 &gt; 口头说喜欢 &gt; 你觉得“应该有需求”。</Punchline>
			</Body>
		</Slide>
	);
}
