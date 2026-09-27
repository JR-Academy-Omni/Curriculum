import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadowSm } from '../ui';
import { Body, SlideHead, Punchline, SourceNote } from '../DeckTable';

const STEPS = [
	['01', '运行环境', '按你那条路线的官方安装文档装好运行时；Windows 用户先确认文档给的是原生路径还是 WSL2 路径', '#FFE9E4'],
	['02', '模型凭据', '把 API key 或订阅登录配好，先跑一句最短的对话确认凭据有效', '#FFF6D6'],
	['03', '常驻方式', '决定它是随桌面 App 活着，还是以后台进程常驻——这一条直接决定你关机之后排程还跑不跑', '#DCEBFF'],
	['04', '第一次验收', '让它复述你的 SoT：客户、问题、现有做法、边界、最大未知。复述错就先纠正再往下走', '#D9F2E4'],
];

export default function S06_InstallCheckpoints() {
	return (
		<Slide bg={colors.white}>
			<Body>
				<SlideHead
					tag="② 装上 · 25 MIN"
					tagBg={colors.blue}
					title="四条路线不一样，但装机的四个检查点一样"
					sub="TA 按路线分组陪跑。命令各路线不同，检查点谁都不能跳。"
				/>
				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
					{STEPS.map(([no, title, body, bg], index) => (
						<motion.div
							key={no}
							initial={{ opacity: 0, y: 18 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.1 }}
							style={{ border, boxShadow: shadowSm, background: bg, padding: '20px 17px', minHeight: 268 }}
						>
							<div style={{ width: 42, height: 42, display: 'grid', placeItems: 'center', border, background: colors.dark, color: colors.yellow, fontFamily: fonts.mono, fontWeight: 900, fontSize: 19 }}>{no}</div>
							<div style={{ marginTop: 16, fontFamily: fonts.heading, fontSize: 25, lineHeight: 1.2, fontWeight: 900 }}>{title}</div>
							<div style={{ marginTop: 12, fontSize: 16.5, lineHeight: 1.5 }}>{body}</div>
						</motion.div>
					))}
				</div>
				<Punchline bg={colors.dark}>
					第 04 步没过就不要往下配权限。<span style={{ color: colors.yellow }}>连你的生意都复述不对的 agent，给它权限只会更快出错。</span>
				</Punchline>
				<SourceNote>装机命令与系统要求以各产品官方安装文档为准，本页不复制具体命令行，避免版本漂移。</SourceNote>
			</Body>
		</Slide>
	);
}
