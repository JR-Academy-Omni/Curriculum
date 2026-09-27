import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadowSm } from '../ui';
import { Body, SlideHead, Punchline } from '../DeckTable';

const NEVER = ['客户原始资料', '私人邮箱全量导出', '合同原件', '财务明细', '密码', '账号权限转交'];
const OK = ['脱敏后的业务上下文', '你自己写的 SoT', '公开可查的竞品资料', '你有权处理的内部记录'];

export default function S07c_DataRedLines() {
	return (
		<Slide bg={colors.warmBg}>
			<Body>
				<SlideHead
					tag="② 接权限 · 红线"
					tagBg={colors.red}
					title="接了权限不等于什么都能喂"
					sub="权限决定它能碰到哪些抽屉，红线决定你主动往里放什么。"
				/>
				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
					<motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.12 }} style={{ border, boxShadow: '6px 6px 0px #000', background: '#FFE9E4', padding: '22px 22px' }}>
						<div style={{ display: 'inline-block', background: colors.red, color: colors.white, border, padding: '4px 14px', fontFamily: fonts.mono, fontWeight: 900, fontSize: 15 }}>不要放进去</div>
						<div style={{ marginTop: 18, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
							{NEVER.map((n) => (
								<div key={n} style={{ border: '2px solid #000', background: colors.white, padding: '11px 12px', fontSize: 18, fontWeight: 700, boxShadow: shadowSm }}>{n}</div>
							))}
						</div>
					</motion.div>
					<motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.24 }} style={{ border, boxShadow: '6px 6px 0px #000', background: '#D9F2E4', padding: '22px 22px' }}>
						<div style={{ display: 'inline-block', background: colors.green, color: colors.black, border, padding: '4px 14px', fontFamily: fonts.mono, fontWeight: 900, fontSize: 15 }}>可以放进去</div>
						<div style={{ marginTop: 18, display: 'grid', gap: 10 }}>
							{OK.map((o) => (
								<div key={o} style={{ border: '2px solid #000', background: colors.white, padding: '11px 12px', fontSize: 18, fontWeight: 700, boxShadow: shadowSm }}>{o}</div>
							))}
						</div>
					</motion.div>
				</div>
				<Punchline bg={colors.dark}>
					判断办法很土但很好用：<span style={{ color: colors.yellow }}>这段内容如果明天出现在一个陌生人的屏幕上，你会不会睡不着。</span>
				</Punchline>
			</Body>
		</Slide>
	);
}
