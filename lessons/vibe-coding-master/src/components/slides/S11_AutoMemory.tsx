import { Slide, Inner, Half, Title, Tag, colors, fonts, border, shadow } from '../ui';
import { slideFromLeft, slideFromRight } from '../ui';
import { motion } from 'framer-motion';

// 第二层 auto-memory
export default function S11_AutoMemory() {
	return (
		<Slide bg={colors.dark}>
			<Inner split>
				<Half>
					<motion.div {...slideFromLeft}>
						<Tag bg={colors.orange} color={colors.white}>第 2 层 · 对话沉淀</Tag>
						<Title white size="50px" style={{ marginTop: 14, lineHeight: 1.12 }}>
							auto-memory：<br />让 AI <span style={{ color: colors.yellow }}>边干边记</span>
						</Title>
						<p style={{ fontSize: 19, color: '#cfd3e6', marginTop: 16, lineHeight: 1.6 }}>
							CLAUDE.md 是你手写的规则；auto-memory 是 AI <b style={{ color: colors.white }}>自己沉淀</b>的经验。
							对话里冒出的非显然事实（踩的坑、你的偏好、项目约束）→ 写成一个文件落盘。
						</p>
						<div style={{ marginTop: 16, fontSize: 17, color: '#cfd3e6', lineHeight: 1.7 }}>
							<div><span style={{ color: colors.green, fontWeight: 800 }}>→</span> 一个文件 = 一条事实，带 frontmatter 分类</div>
							<div><span style={{ color: colors.green, fontWeight: 800 }}>→</span> 四类：user / feedback / project / reference</div>
							<div><span style={{ color: colors.green, fontWeight: 800 }}>→</span> <code style={{ color: colors.yellow }}>MEMORY.md</code> 当索引，开机加载一行摘要</div>
							<div><span style={{ color: colors.green, fontWeight: 800 }}>→</span> 相关记忆用 <code style={{ color: colors.yellow }}>[[link]]</code> 互联</div>
						</div>
					</motion.div>
				</Half>
				<Half>
					<motion.div {...slideFromRight}
						style={{ background: '#0c1020', border: `2px solid ${colors.green}`, boxShadow: shadow, padding: '20px 22px', fontFamily: fonts.mono, fontSize: 14, lineHeight: 1.6, color: '#d8dcea' }}>
						<div style={{ color: '#6b7394' }}># 本仓库真实记忆（节选）</div>
						<div style={{ marginTop: 8 }}><span style={{ color: colors.yellow }}>jrvpn-daily-slowdown-rootcause.md</span></div>
						<div style={{ color: '#9aa0bb', paddingLeft: 14 }}>GFW 烧 IP，治本是 CDN 伪装<br />不是天天重部署</div>
						<div style={{ marginTop: 10 }}><span style={{ color: colors.yellow }}>sales-wechat-qr-assets.md</span></div>
						<div style={{ color: '#9aa0bb', paddingLeft: 14 }}>4 个销售二维码路径，放联系<br />方式时主用这 4 个</div>
						<div style={{ marginTop: 14, borderTop: '1px dashed #333', paddingTop: 10, color: '#6b7394' }}># 下次对话开头自动注入</div>
						<div style={{ color: colors.green }}>→ 不用你再解释，AI 已经知道</div>
					</motion.div>
					<motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
						style={{ marginTop: 14, fontSize: 14, color: '#8890b0', fontFamily: fonts.mono }}>
						// 关键纪律：写之前先查重，错了就删 —— 记忆也要维护，不是只进不出
					</motion.p>
				</Half>
			</Inner>
		</Slide>
	);
}
