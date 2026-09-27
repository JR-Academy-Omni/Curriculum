import { DeckFrame, AnimatedGroup, colors, fonts } from '../deck';

const rows = [
	['Software / Full-stack', 'API、测试、部署', 'LLM failure、RAG、Evals'],
	['Data Engineer', '管道、schema、质量', 'Context、retrieval、workflow'],
	['Data Scientist / ML', '实验、指标、模型', '产品集成、Agent、operability'],
	['DevOps / Platform', '可靠性、安全、成本', '模型行为与 eval dataset'],
	['BA / PM / Domain', '流程、规则、stakeholder', 'coding、API、data contract'],
	['Graduate / Switcher', '学习速度与可塑性', '做一个窄而深的完整系统'],
];

export default function S03() {
	return <DeckFrame tag="WHO THIS IS FOR" title="不同背景进入 AI Engineering，起点并不相同" accent={colors.blue} titleSize={53}>
		<div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16,height:'100%',alignContent:'center'}}>
			{rows.map((row, index) => <AnimatedGroup key={row[0]} delay={.08 + index * .06}>
				<div style={{display:'grid',gridTemplateColumns:'230px 1fr 1fr',gap:16,alignItems:'center',background:'#fff',border:'3px solid #000',padding:'16px 18px',boxShadow:'4px 4px 0 #000',fontSize:20}}>
					<div style={{fontFamily:fonts.heading,fontWeight:900,fontSize:23}}>{row[0]}</div>
					<div><b style={{color:'#16658f'}}>带得走：</b>{row[1]}</div>
					<div><b style={{color:'#a52b2b'}}>要补：</b>{row[2]}</div>
				</div>
			</AnimatedGroup>)}
		</div>
	</DeckFrame>;
}
