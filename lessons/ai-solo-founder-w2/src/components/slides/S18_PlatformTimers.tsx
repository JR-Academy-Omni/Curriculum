import { Slide, colors } from '../ui';
import { Body, SlideHead, DeckTable, Punchline, SourceNote } from '../DeckTable';

const NO = <span style={{ color: '#b00', fontWeight: 900 }}>不跑</span>;
const YES = <span style={{ color: '#0a7a3d', fontWeight: 900 }}>照跑</span>;

export default function S18_PlatformTimers() {
	return (
		<Slide bg={colors.warmBg}>
			<Body>
				<SlideHead
					tag="⑤ 跨平台定时机制对照 · 15 MIN"
					tagBg={colors.purple}
					title="讲清楚再选，别用了一半才发现关机就不跑"
					sub="最右边那一列是这张表的重点：你合上笔记本之后，它还替不替你干活。"
				/>
				<DeckTable
					fontSize={17.5}
					cellPad="11px 14px"
					cols={[
						{ label: '排程通道', w: '1fr' },
						{ label: '配起来难不难', w: '1fr' },
						{ label: '你合上电脑之后', w: '160px', align: 'center' },
						{ label: '什么时候用它', w: '1.2fr' },
					]}
					rows={[
						['桌面 App 自带的排程', '最简单，界面点几下就好', NO, '你本来就整天开着电脑，先用它跑通流程'],
						['命令行工具 + 系统定时', '要写一层包装脚本再挂到系统定时', NO, '想留在本机、又要比 App 更可控'],
						['常驻后台进程的 agent', '装的时候多一步，之后不用管', <span style={{ color: '#0a7a3d', fontWeight: 900 }}>看机器</span>, '机器一直开着（或有台旧电脑当服务器）'],
						['自动化平台的定时触发', '零代码，拖出来就能跑', YES, '不想维护环境，接受把流程放在别人的云上'],
						['代码托管平台的定时任务', '要会写配置文件', YES, '任务本来就跟仓库有关，顺手就跑了'],
					]}
				/>
				<Punchline bg={colors.dark}>
					选择顺序：<span style={{ color: colors.yellow }}>先用最容易的跑通一次，确认交付物是你要的，再搬到关机也能跑的通道上。</span>
				</Punchline>
				<SourceNote>本页只对照机制类型与「关机还跑不跑」，各产品的具体功能名、可用性与限制以官方文档为准，课上不引二手描述。</SourceNote>
			</Body>
		</Slide>
	);
}
