import { Slide, Inner, Title, Tag, colors, fonts } from '../ui';
import { motion } from 'framer-motion';

// ADLC 章节封面
export default function S15_ADLCCover() {
	return (
		<Slide bg={colors.dark}>
			<Inner center>
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
					<Tag bg={colors.yellow} color={colors.black}>第 3 章</Tag>
				</motion.div>
				<Title white size="88px" style={{ marginTop: 18, textAlign: 'center', lineHeight: 1.05 }}>
					<motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} style={{ display: 'block' }}>
						ADLC
					</motion.span>
				</Title>
				<motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
					style={{ fontSize: 28, color: colors.yellow, fontWeight: 800, fontFamily: fonts.mono, marginTop: 6 }}>
					Agent Development Lifecycle
				</motion.p>
				<motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}
					style={{ fontSize: 24, color: '#cfd3e6', marginTop: 22, maxWidth: 1000, textAlign: 'center', lineHeight: 1.5 }}>
					软件有 SDLC（开发生命周期）。<br />
					当 AI agent 成了你的主力干活方式，你需要一套
					<b style={{ color: colors.white }}> 让 AI 干活也能被规划、复现、验收</b> 的流程。
				</motion.p>
				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
					style={{ marginTop: 28, fontSize: 18, color: '#8890b0', fontFamily: fonts.mono }}>
					// 把「随手丢个 prompt」升级成「有目标、有上下文、有验收的工程」
				</motion.div>
			</Inner>
		</Slide>
	);
}
