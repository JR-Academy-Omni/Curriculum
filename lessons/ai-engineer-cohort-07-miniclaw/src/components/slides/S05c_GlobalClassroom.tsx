import { motion } from 'framer-motion';
import { Slide, assetPath, colors, fonts } from '../ui';

const locations = [
	{ name: '美国', detail: 'USA', left: '19.5%', top: '31%', color: colors.red, dx: 18, dy: -26 },
	{ name: '伦敦', detail: 'UK', left: '47.5%', top: '23%', color: colors.yellow, dx: -52, dy: -52 },
	{ name: '中国', detail: 'CHINA', left: '76%', top: '33%', color: colors.red, dx: 18, dy: -30 },
	{ name: '马来西亚', detail: 'MALAYSIA', left: '74%', top: '53%', color: colors.purple, dx: -138, dy: 26 },
	{ name: '新加坡', detail: 'SINGAPORE', left: '74.8%', top: '55%', color: colors.green, dx: 24, dy: -3 },
	{ name: '澳洲', detail: 'AUSTRALIA', left: '85%', top: '68%', color: colors.blue, dx: 18, dy: 17 },
] as const;

export default function S05c_GlobalClassroom() {
	return <Slide bg={colors.dark} style={{ position: 'relative', color: colors.white }}>
		<div aria-hidden style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 50% 45%, rgba(56,182,255,.13), transparent 44%), linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px)', backgroundSize: 'auto, 48px 48px, 48px 48px' }} />
		<div style={{ width: 1420, height: 760, position: 'relative' }}>
			<motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .38 }} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
				<span style={{ width: 48, height: 9, background: colors.green }} />
				<span style={{ fontFamily: fonts.mono, fontWeight: 800, fontSize: 17, letterSpacing: 1.7 }}>GLOBAL CLASSROOM</span>
			</motion.div>
			<motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: .08 }} style={{ fontFamily: fonts.heading, fontSize: 57, lineHeight: 1.08, letterSpacing: -1.8, margin: '22px 0 0', maxWidth: 1080 }}>
				学员来自澳洲、美国、中国、英国、<br />新加坡和马来西亚
			</motion.h1>
			<motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .4, delay: .2 }} style={{ fontSize: 22, color: '#cfd5e5', margin: '15px 0 0', fontWeight: 650 }}>
				不同城市、不同背景，在同一间线上教室完成同一条 AI Engineering 实践主线。
			</motion.p>

			<motion.div initial={{ opacity: 0, scale: .97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .65, delay: .15 }} style={{ position: 'absolute', width: 1120, height: 568, left: 150, top: 184 }}>
				<img src={assetPath('maps/world-robinson-cc0.svg')} alt="世界地图，标出澳洲、美国、中国、英国伦敦、新加坡和马来西亚" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'contain', filter: 'invert(1) grayscale(1) brightness(1.35)', opacity: .24 }} />
				{locations.map((location, index) => <div key={location.name} style={{ position: 'absolute', left: location.left, top: location.top }}>
					<motion.span aria-hidden initial={{ scale: .75, opacity: .48 }} animate={{ scale: 2.35, opacity: 0 }} transition={{ duration: 4.8, delay: .5 + index * .28, repeat: Infinity, repeatDelay: 1.2, ease: 'easeOut' }} style={{ position: 'absolute', left: -12, top: -12, width: 24, height: 24, borderRadius: '50%', background: location.color }} />
					<motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 220, damping: 14, delay: .32 + index * .1 }} style={{ position: 'absolute', left: -10, top: -10, width: 20, height: 20, borderRadius: '50%', background: location.color, border: '4px solid #fff', boxShadow: `0 0 0 4px ${location.color}, 0 0 24px ${location.color}` }} />
					<motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .35, delay: .5 + index * .09 }} style={{ position: 'absolute', left: location.dx, top: location.dy, whiteSpace: 'nowrap' }}>
						<div style={{ fontFamily: fonts.heading, fontSize: 21, fontWeight: 900, color: colors.white }}>{location.name}</div>
						<div style={{ fontFamily: fonts.mono, fontSize: 11, letterSpacing: 1.4, fontWeight: 800, color: location.color, marginTop: 2 }}>{location.detail}</div>
					</motion.div>
				</div>)}
			</motion.div>
			<div style={{ position: 'absolute', left: 0, bottom: 6, fontFamily: fonts.mono, fontSize: 11, color: '#838ba3' }}>地图底图：Wikimedia Commons · Robinson projection · CC0</div>
		</div>
	</Slide>;
}
