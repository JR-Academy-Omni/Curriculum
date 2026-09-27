import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';

// P01 钩子：L6 的病 —— 探索噪音挤满一个 context
// SoT：蓝图 §1 + §9.1 的两句提问
const JUNK = [
	'读了 src/api/auth/ 的 12 个文件', '不是这里',
	'试了 refresh token 假设', '不是这里',
	'翻了中间件', '不是这里',
	'跑了 4 次失败命令', '不是这里',
	'搜了 session 关键字', '不是这里',
	'读了配置和环境变量', '不是这里',
];

export default function L7P01_TheL6Disease() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner split>
				<div style={{ flex: '0 0 46%' }}>
					<Tag bg={colors.dark}>接上节</Tag>
					<Title size="46px" style={{ marginTop: 14, marginBottom: 14, lineHeight: 1.2 }}>
						上节课那个病<br />
						<span style={{ background: colors.yellow, padding: '0 10px' }}>还没治完</span>
					</Title>
					<p style={{ fontSize: 19, lineHeight: 1.75, color: '#444', marginBottom: 22 }}>
						一个长任务会把同一份 context 越撑越满。搜索噪音、失败尝试、错误假设
						<strong style={{ color: colors.red }}>不会消失</strong>，
						它们会继续影响后面每一轮判断。
					</p>

					<div style={{ border, boxShadow: shadow, background: colors.white }}>
						<div style={{ background: colors.dark, color: colors.white, padding: '10px 16px', fontFamily: fonts.mono, fontSize: 13, letterSpacing: 1.5, fontWeight: 700 }}>
							只问两句
						</div>
						<div style={{ padding: '16px 18px' }}>
							{[
								'哪些信息是下最终结论真正需要的？',
								'哪些信息只在探索当时有用，却永久占着主 context？',
							].map((q, i) => (
								<motion.div
									key={q}
									initial={{ opacity: 0, x: -16 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.4, delay: 0.5 + i * 0.25 }}
									style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: i === 0 ? 12 : 0 }}
								>
									<span style={{
										flex: '0 0 auto', fontFamily: fonts.mono, fontWeight: 700, fontSize: 13,
										background: i === 0 ? colors.green : colors.red, color: colors.white, padding: '3px 8px',
									}}>{i + 1}</span>
									<span style={{ fontSize: 17, fontWeight: 600, lineHeight: 1.5 }}>{q}</span>
								</motion.div>
							))}
						</div>
					</div>
				</div>

				<div style={{ flex: 1, minWidth: 0 }}>
					<div style={{ fontFamily: fonts.mono, fontSize: 12.5, color: '#888', letterSpacing: 1.5, marginBottom: 8 }}>
						主 AGENT 的 CONTEXT
					</div>
					<div style={{
						border, boxShadow: shadow, background: colors.white,
						padding: 14, display: 'flex', flexDirection: 'column', gap: 5,
					}}>
						{JUNK.map((line, i) => {
							const isJunk = line === '不是这里';
							return (
								<motion.div
									key={i}
									initial={{ opacity: 0, y: -10 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.3, delay: 0.15 + i * 0.09 }}
									style={{
										fontFamily: fonts.mono, fontSize: 13, padding: '5px 11px',
										background: isJunk ? '#ffe9e9' : '#f4f4f4',
										borderLeft: `4px solid ${isJunk ? colors.red : '#ccc'}`,
										color: isJunk ? colors.red : '#555',
										fontWeight: isJunk ? 700 : 500,
									}}
								>
									{isJunk ? '✕ ' : '· '}{line}
								</motion.div>
							);
						})}
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 1.5 }}
							style={{
								marginTop: 6, paddingTop: 10, borderTop: '2px dashed #ddd',
								fontSize: 15, fontWeight: 800, color: colors.dark, textAlign: 'center',
							}}
						>
							下结论时，它读到的是<span style={{ color: colors.red }}> 这一整坨</span>
						</motion.div>
					</div>
				</div>
			</Inner>
		</Slide>
	);
}
