import { Slide, colors, fonts } from '../ui';
import { Body, SlideHead, DeckTable, Punchline } from '../DeckTable';

// 四个 Phase 的出关物 —— 来源：../../ai-solo-founder-bootcamp/COURSE_REDESIGN.md
//   「全课总览」表（Phase / 周 / 主题 / 出关物）+ 每个 Phase 标题下那句 blockquote 定位。
const ph = (no: string, name: string, bg: string) => (
	<span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
		<span
			style={{
				fontFamily: fonts.mono,
				fontWeight: 700,
				fontSize: 18,
				background: bg,
				border: '2px solid #000',
				padding: '2px 9px',
			}}
		>
			{no}
		</span>
		<b style={{ fontSize: 19 }}>{name}</b>
	</span>
);

const wk = (t: string) => (
	<span style={{ fontFamily: fonts.mono, fontWeight: 700, fontSize: 18 }}>{t}</span>
);

const out = (t: string) => <b style={{ fontSize: 20 }}>{t}</b>;

export default function S05_PhaseOutputs() {
	return (
		<Slide bg={colors.warmBg}>
			<Body style={{ padding: '40px 56px 34px' }}>
				<SlideHead
					tag="课程全景 · 阶段成果"
					tagBg={colors.orange}
					title="每个 Phase 结束，你手上必须多出一项成果"
					titleSize="clamp(30px, 2.7vw, 42px)"
					sub="不是「学完了」，是「多出一个别人能看到、能用、能查的东西」。"
				/>

				<DeckTable
					fontSize={19}
					cellPad="13px 16px"
					cols={[
						{ label: 'Phase', w: '1.15fr' },
						{ label: '周', w: '150px' },
						{ label: '这一段在干什么', w: '1.7fr' },
						{ label: '阶段成果 · 走出这一段你手上有什么', w: '1.55fr', accent: '#FFE9E4' },
					]}
					rows={[
						[
							ph('1', '把生意跑起来', '#FFE9E4'),
							wk('W1–W7'),
							'选定客户和问题，把产品、公司或服务做成可交付的第一版，并尝试完成第一笔交易',
							out('有人愿意试、愿意付费的第一版交付'),
						],
						[
							ph('2', 'Go To Market', '#DCEBFF'),
							wk('W8–W11'),
							'用中英文内容、线上分享、AI 视频、主动触达、搜索与增长实验把业务带到市场',
							out('一套有发布、有触达、有数据的 Go To Market 系统'),
						],
						[
							ph('3', '把经营理顺', '#D9F2E4'),
							wk('W12–W13'),
							'把合同、记账、税务与日常运营放进同一套经营流程',
							out('基本合规、财务清楚的运营系统'),
						],
						[
							ph('4', 'Founder Club', '#EDE9FE'),
							wk('W14–W15+'),
							'比较资金形式，准备投资材料与企业架构，完成 Demo Day，并进入持续互助的 Founder Club',
							out('资金路线决定 + 材料包 + Founder Club 会籍'),
						],
					]}
				/>

				<Punchline bg={colors.red}>
					这四样是<u>串起来</u>的：先确认谁需要、你能交付什么，再学习怎样稳定获客和经营。
					<span style={{ display: 'block', marginTop: 6, fontSize: 18, fontWeight: 600, color: colors.yellow }}>
						你可以做软件、实体产品、专业服务，也可以改造一门已经在经营的生意。
					</span>
				</Punchline>
			</Body>
		</Slide>
	);
}
