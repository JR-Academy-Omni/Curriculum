import { AnimatedGroup, DeckFrame, Label, colors, fonts } from '../deck';

const roles = [
	{ role: 'Applied AI', focus: '产品交付', work: '把模型接进真实产品和业务流程', color: colors.blue },
	{ role: 'Agent Engineer', focus: '执行系统', work: '让 Agent 会调用工具，也能停下、恢复和审批', color: colors.red },
	{ role: 'FDE / Solutions', focus: '客户落地', work: '把模糊需求收敛成能上线的第一版', color: colors.orange },
	{ role: 'Platform / Eval', focus: '共享能力', work: '统一模型接入、Trace、评估和发布门槛', color: colors.green },
	{ role: 'ML Engineer', focus: '模型本身', work: '训练、优化和服务模型，是相邻方向', color: colors.purple },
] as const;

export default function S12b_RoleMap() {
	return <DeckFrame
		tag="报名前，先认清岗位"
		title="AI Engineer 不是一个岗位，是五种工作重心"
		subtitle="先看公司希望你解决什么问题，再看职位名称。第七期主线覆盖应用、Agent、客户交付与平台评估；模型训练不是主线。"
		accent={colors.orange}
		titleSize={49}
	>
		<div style={{display:'grid',gridTemplateColumns:'repeat(5,1fr)',gap:16,height:'100%',alignItems:'center'}}>
			{roles.map((item,index)=><AnimatedGroup key={item.role} delay={.1+index*.07} style={{display:'flex'}}>
				<div style={{height:344,flex:1,background:index===0?colors.dark:colors.white,color:index===0?colors.white:colors.dark,border:`2px solid ${colors.dark}`,borderRadius:20,borderTop:`12px solid ${item.color}`,boxShadow:`7px 7px 0 ${item.color}`,padding:'22px 19px',display:'flex',flexDirection:'column'}}>
					<div style={{fontFamily:fonts.mono,fontSize:14,fontWeight:900,opacity:.7}}>{String(index+1).padStart(2,'0')}</div>
					<div style={{fontFamily:fonts.heading,fontSize:27,fontWeight:900,lineHeight:1.08,marginTop:22,minHeight:64}}>{item.role}</div>
					<div style={{marginTop:18}}><Label bg={item.color} color={item.color===colors.green?colors.dark:colors.white}>{item.focus}</Label></div>
					<div style={{fontSize:18,lineHeight:1.42,fontWeight:700,color:index===0?'#e6e8ef':'#49433e',marginTop:22}}>{item.work}</div>
				</div>
			</AnimatedGroup>)}
		</div>
	</DeckFrame>;
}
