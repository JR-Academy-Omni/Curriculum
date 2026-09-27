import { Slide, colors } from '../ui';
import { Body, SlideHead, DeckTable, Punchline, SourceNote } from '../DeckTable';

export default function S05_FourRoutes() {
	return (
		<Slide bg={colors.warmBg}>
			<Body>
				<SlideHead
					tag="① 现场选型 · 20 MIN"
					tagBg={colors.red}
					title="四条路线，按你要它干的活来挑"
					sub="不是挑最火的那个。四条都能干活，差别在它常驻在哪、记忆放在哪、最擅长哪类任务。"
				/>
				<DeckTable
					fontSize={17.5}
					cellPad="11px 14px"
					cols={[
						{ label: '路线', w: '190px' },
						{ label: '它的定位', w: '1fr' },
						{ label: '最适合谁', w: '1fr' },
						{ label: '选之前先想清楚', w: '1fr' },
					]}
					rows={[
						[
							<b>Hermes</b>,
							'跨设备 + 常驻 daemon，在手机 IM 里直接派活',
							'想随时随地扔任务、人不在电脑前也要发指令的人',
							'跨设备记忆要验一次：手机说过的事，电脑那头认不认',
						],
						[
							<b>龙虾（OpenClaw）</b>,
							'开源 CLI + 本地 markdown memory，不绑单一模型商',
							'数据敏感行业——律师、会计、医疗',
							'要自己维护运行环境；换模型的自由要用配置成本换',
						],
						[
							<b>Codex</b>,
							'与 ChatGPT 订阅打通，写代码类任务顺手',
							'已经在用 ChatGPT、任务偏编码和脚本的人',
							'非编码类的日常事务要额外接，别指望它当全能秘书',
						],
						[
							<b>Claude Code</b>,
							'agentic 能力最强，能连续改一个真实项目',
							'要它连着几十步改同一个项目的人',
							'能力越强越要写清停下来找人的条件',
						],
					]}
				/>
				<Punchline bg={colors.dark}>
					选型的唯一标准：<span style={{ color: colors.yellow }}>你打算让它每周替你做完哪件具体的事。</span>
				</Punchline>
				<SourceNote>
					本页只对照定位与适用场景。<b>价格、订阅档位与系统要求以各产品官方页面为准</b>，课上不引二手数字；Windows 用户安装前先确认官方文档给的是原生路径还是 WSL2 路径。
				</SourceNote>
			</Body>
		</Slide>
	);
}
