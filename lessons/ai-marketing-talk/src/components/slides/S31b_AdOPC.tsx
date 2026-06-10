import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, assetPath } from '../ui';

// Q&A 挂屏广告 · 收尾后留在投影上的那一页：OPC 大二维码 + AI Coding 小入口
export default function S31b_AdOPC() {
	return (
		<Slide bg={colors.dark}>
			<div style={{ width: '90%', maxWidth: 1320, height: '85%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} style={{ marginBottom: 14 }}>
					<span style={{ padding: '6px 16px', background: colors.yellow, color: colors.black, fontFamily: fonts.mono, fontSize: 16.5, fontWeight: 700 }}>Q&A 期间 · 二维码一直在这</span>
				</motion.div>

				<motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
					style={{ fontFamily: fonts.heading, fontSize: '49px', fontWeight: 900, color: colors.white, letterSpacing: -1, lineHeight: 1.12, marginBottom: 26 }}>
					AI <span style={{ background: colors.rose, color: colors.white, padding: '0 14px', display: 'inline-block', transform: 'rotate(-1deg)', border, boxShadow: `4px 4px 0 ${colors.yellow}` }}>一人创业营</span> · 首期席位
				</motion.h2>

				<div style={{ display: 'flex', gap: 30, alignItems: 'stretch', justifyContent: 'center' }}>
					<motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }}
						style={{ background: colors.white, border, boxShadow: `8px 8px 0 ${colors.rose}`, padding: '26px 30px', textAlign: 'center' }}>
						<motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ delay: 0.6, duration: 1.6, repeat: Infinity, repeatDelay: 0.4 }}
							style={{ display: 'inline-block', background: colors.rose, color: colors.white, border, boxShadow: `4px 4px 0 ${colors.black}`, padding: '7px 16px', fontFamily: fonts.heading, fontSize: 20, fontWeight: 900, marginBottom: 14 }}>
							🔥 仅剩 4 个名额
						</motion.div>
						<div>
							<img src={assetPath('qr/opc.png')} alt="AI 一人创业营详情页二维码" style={{ width: 280, height: 280, border: `1px solid #e5e5e5` }} />
						</div>
						<div style={{ fontFamily: fonts.heading, fontSize: 26, fontWeight: 900, color: colors.black, marginTop: 12 }}>$2,400<span style={{ fontSize: 16, color: '#999' }}> 预售 · AUD</span></div>
						<div style={{ fontFamily: fonts.body, fontSize: 15, color: '#666' }}>首期早鸟 $2,800 · 第二期 $3,800 · 不承诺收入</div>
					</motion.div>

					<motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}
						style={{ background: 'rgba(255,255,255,0.06)', border: `3px solid rgba(255,255,255,0.25)`, padding: '24px 24px', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
						<div style={{ fontFamily: fonts.body, fontSize: 17, fontWeight: 700, color: 'rgba(255,255,255,0.85)', marginBottom: 12 }}>想先把「做得出」那条腿补上 →</div>
						<div>
							<img src={assetPath('qr/coding.png')} alt="人人都能学的 AI Coding 实战课二维码" style={{ width: 170, height: 170, border: `1px solid #555`, background: colors.white }} />
						</div>
						<div style={{ fontFamily: fonts.heading, fontSize: 18.5, fontWeight: 900, color: colors.white, marginTop: 10 }}>人人都能学的<br />AI Coding 实战课</div>
					</motion.div>
				</div>

				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
					style={{ marginTop: 24, fontFamily: fonts.mono, fontSize: 15.5, fontWeight: 700, color: 'rgba(255,255,255,0.65)' }}>
					jiangren.com.au/program-course/ai-solo-founder-bootcamp · JR Academy 学 AI 来匠人
				</motion.div>
			</div>
		</Slide>
	);
}
