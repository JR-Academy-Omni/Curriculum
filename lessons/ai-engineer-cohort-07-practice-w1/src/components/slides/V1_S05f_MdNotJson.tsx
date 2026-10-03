import { motion } from 'framer-motion';
import { Slide, Inner, Half, Title, Tag, colors, fonts, border, shadow, shadowSm } from '../courseUi';

// 为什么记忆系统用 Markdown / YAML，不用 JSON —— 大模型的特点
const GOOD = ['说明与决策容易阅读和审查', '标题与列表便于组织人读文档', '适合 PRD、工作流和规则说明', '格式选择以具体任务为准'];
const BAD = ['适合 API payload 与 schema 校验', '语法严格，便于机器解析', '结构化输出应按契约验证', '模型同样可以读取与生成 JSON'];

export default function S05f_MdNotJson() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner style={{ flexDirection: 'column', justifyContent: 'center' }}>
				<div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 6 }}>
					<Tag bg={colors.dark} color={colors.yellow}>大模型的特点</Tag>
					<Title size="40px">规则说明用 <span style={{ background: colors.yellow, padding: '0 8px' }}>Markdown</span>，接口数据用 JSON</Title>
				</div>

				<div style={{ display: 'flex', gap: 22, marginTop: 20, alignItems: 'stretch' }}>
					<Half>
						<motion.div initial={{ opacity: 0, x: -36 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.45 }}
							style={{ borderRadius: 18, background: colors.white, border, boxShadow: shadow, padding: '18px 22px', height: '100%' }}>
							<div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
								<span style={{ borderRadius: 18, background: colors.green, border, padding: '3px 10px', fontWeight: 900, fontFamily: fonts.mono }}>✅ Markdown / YAML</span>
							</div>
							{GOOD.map((g) => (
								<div key={g} style={{ display: 'flex', gap: 8, marginTop: 12, fontSize: 16, lineHeight: 1.4 }}>
									<span style={{ color: colors.green, fontWeight: 900 }}>›</span><span>{g}</span>
								</div>
							))}
						</motion.div>
					</Half>
					<Half>
						<motion.div initial={{ opacity: 0, x: 36 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.45, delay: 0.15 }}
							style={{ borderRadius: 18, background: '#f4f4f4', border, boxShadow: shadow, padding: '18px 22px', height: '100%' }}>
							<div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
								<span style={{ borderRadius: 18, background: '#ddd', border, padding: '3px 10px', fontWeight: 900, fontFamily: fonts.mono }}>JSON · 结构化契约</span>
							</div>
							{BAD.map((b) => (
								<div key={b} style={{ display: 'flex', gap: 8, marginTop: 12, fontSize: 16, lineHeight: 1.4, color: '#555' }}>
									<span style={{ color: '#bbb', fontWeight: 900 }}>›</span><span>{b}</span>
								</div>
							))}
						</motion.div>
					</Half>
				</div>

				<motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
					style={{ marginTop: 18, fontSize: 17, fontWeight: 600, color: '#444' }}>
					本课 PRD、规则与说明采用 Markdown；接口、配置和测试数据依实际 schema 选择格式。
				</motion.p>
			</Inner>
		</Slide>
	);
}
