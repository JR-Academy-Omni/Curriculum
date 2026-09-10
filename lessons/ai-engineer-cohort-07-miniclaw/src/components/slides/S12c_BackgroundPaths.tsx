import { AnimatedGroup, DeckFrame, Label, colors, fonts } from '../deck';

const paths = [
	['Software / Full-stack', 'API、测试、部署', '补模型不确定性、RAG 与 Evals', colors.blue],
	['Data Engineer', '数据管道、Schema、质量', '补 Context、Retrieval 与 Workflow', colors.green],
	['Data Scientist / ML', '实验、指标、模型', '补产品集成、Agent 与可运维性', colors.purple],
	['DevOps / Platform', '可靠性、安全、成本', '补模型行为与评估数据集', colors.orange],
	['BA / PM / Domain', '流程、规则、Stakeholder', '补 Coding、API 与 Data Contract', colors.yellow],
	['Graduate / Switcher', '学习速度与可塑性', '做一个窄而深的完整系统', colors.red],
] as const;

export default function S12c_BackgroundPaths() {
	return <DeckFrame
		tag="你的经验怎么带进来"
		title="不需要把过去清零，只补目标岗位缺的那一段"
		subtitle="同一门课，每个人的起点不同。先用原有经验拿住一侧，再用项目把缺口补成闭环。"
		accent={colors.blue}
		titleSize={49}
	>
		<div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:15,height:'100%',alignContent:'center'}}>
			{paths.map((path,index)=><AnimatedGroup key={path[0]} delay={.07+index*.055}>
				<div style={{display:'grid',gridTemplateColumns:'220px 1fr 1.12fr',gap:16,alignItems:'center',background:colors.white,border:`2px solid ${colors.dark}`,borderRadius:17,borderLeft:`11px solid ${path[3]}`,padding:'15px 17px',minHeight:118,boxShadow:'5px 5px 0 rgba(16,22,47,.16)'}}>
					<div style={{fontFamily:fonts.heading,fontSize:21,fontWeight:900,lineHeight:1.16}}>{path[0]}</div>
					<div><Label bg={colors.dark}>直接带走</Label><div style={{fontSize:16.5,fontWeight:750,lineHeight:1.32,marginTop:8}}>{path[1]}</div></div>
					<div><Label bg={path[3]} color={path[3]===colors.yellow||path[3]===colors.green?colors.dark:colors.white}>重点补齐</Label><div style={{fontSize:16.5,fontWeight:750,lineHeight:1.32,marginTop:8}}>{path[2]}</div></div>
				</div>
			</AnimatedGroup>)}
		</div>
	</DeckFrame>;
}
