import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadowSm } from '../ui';
import { Body, SlideHead, Punchline } from '../DeckTable';

const JD = [
	['01', '负责哪几类任务', '写清范围，也写清不归它管的部分', '#FFE9E4'],
	['02', '输入从哪来', '具体到哪个邮箱、哪个目录、哪个接口、哪份 SoT', '#FFF6D6'],
	['03', '交付物长什么样', '格式 + 字数 + 必含字段。这一条决定它能不能自查', '#DCEBFF'],
	['04', '什么情况必须停下来找人', '不确定、涉及钱、要对外发出、和 SoT 冲突', '#EDE9FE'],
	['05', '输出送到哪', '邮件 / IM / 云盘目录 / 知识库，只写一个落点', '#D9F2E4'],
];

export default function S09_AgentJDFive() {
	return (
		<Slide bg={colors.white}>
			<Body>
				<SlideHead
					tag="③ 工作说明书 · 五段"
					tagBg={colors.yellow}
					title="给 agent 写 JD，跟给人写 JD 是一回事"
					sub="写完存进它的 memory，不要存在你自己的脑子里。"
				/>
				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 12 }}>
					{JD.map(([no, title, body, bg], index) => (
						<motion.div
							key={no}
							initial={{ opacity: 0, y: 18 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.1 + index * 0.09 }}
							style={{ position: 'relative', border, boxShadow: shadowSm, background: bg, padding: '18px 15px', minHeight: 274 }}
						>
							<div style={{ width: 42, height: 42, display: 'grid', placeItems: 'center', border, background: index === 3 ? colors.red : colors.dark, color: index === 3 ? colors.white : colors.yellow, fontFamily: fonts.mono, fontWeight: 900, fontSize: 19 }}>{no}</div>
							<div style={{ marginTop: 16, fontFamily: fonts.heading, fontSize: 22.5, lineHeight: 1.2, fontWeight: 900 }}>{title}</div>
							<div style={{ marginTop: 12, fontSize: 16, lineHeight: 1.5, fontWeight: 550 }}>{body}</div>
						</motion.div>
					))}
				</div>
				<Punchline bg={colors.red}>
					第 04 段是最容易漏、代价最大的一段。<u>没写停下来的条件，它就永远不会停。</u>
				</Punchline>
			</Body>
		</Slide>
	);
}
