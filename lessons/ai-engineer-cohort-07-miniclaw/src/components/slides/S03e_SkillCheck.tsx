import { AnimatedGroup, DeckFrame, Label } from '../deck';
import { colors, fonts } from '../ui';

const capabilities = [
	['01','模型基座','能按任务、成本、延迟和数据边界选模型'],
	['02','Context','能稳定输出结构化结果，并管理上下文版本'],
	['03','RAG','能测检索质量、引用依据并定位失败原因'],
	['04','Tools / MCP','能写 typed tools、校验参数并限制权限'],
	['05','Agent','能控制循环、停止、重试、预算与人工审批'],
	['06','Multi-Agent','能判断何时该拆 Agent，并处理 handoff'],
	['07','Memory','能处理 scope、来源、TTL、更正、删除与投毒'],
	['08','Harness','能做 hooks、checkpoint、幂等、trace 与恢复'],
	['09','Model Routing','能用评测决定路由、fallback 与升级人工'],
	['10','Governance / Evals','能设 release gate、红队、回滚和事故响应'],
];

const levels = [
	['0–3','会调用模型',colors.red],
	['4–6','能做 AI 功能',colors.yellow],
	['7–8','能独立交付系统',colors.blue],
	['9–10','有 Production 全链证据',colors.green],
] as const;

export default function S03eSkillCheck(){return <DeckFrame
	tag="5 分钟 · AI ENGINEER 能力自测"
	title="10 个能力域，你现在真正掌握了几个？"
	subtitle="每一项都要能独立设计、实现、测试，并解释为什么这样选，才算 1 分。照着教程跑通过，不算掌握。"
	accent={colors.purple}
	titleSize={52}
>
	<div style={{height:'100%',display:'flex',flexDirection:'column',gap:18}}>
		<div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'10px 20px'}}>
			{capabilities.map(([index,title,test],i)=><AnimatedGroup key={index} delay={.07+i*.025}>
				<div style={{display:'grid',gridTemplateColumns:'48px 150px 1fr',alignItems:'center',gap:12,background:i%2?'#fffaf3':colors.white,border:`2px solid ${colors.dark}`,borderRadius:13,padding:'10px 13px',boxShadow:`4px 4px 0 ${i<5?colors.yellow:colors.green}`}}>
					<div style={{fontFamily:fonts.mono,fontWeight:900,fontSize:15,color:i<5?'#b17800':'#177044'}}>{index}</div>
					<div style={{fontFamily:fonts.heading,fontWeight:900,fontSize:18.5,lineHeight:1.1}}>{title}</div>
					<div style={{fontSize:14.5,lineHeight:1.32,color:'#514c48'}}>{test}</div>
				</div>
			</AnimatedGroup>)}
		</div>
		<AnimatedGroup delay={.38} style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:14,marginTop:'auto'}}>
			{levels.map(([score,label,color])=><div key={score} style={{background:colors.dark,color:colors.white,border:`2px solid ${colors.dark}`,borderRadius:14,padding:'13px 16px',boxShadow:`5px 5px 0 ${color}`}}>
				<div style={{display:'flex',alignItems:'center',gap:12}}><Label bg={color} color={color===colors.red?colors.white:colors.black}>{score} 分</Label><strong style={{fontSize:17}}>{label}</strong></div>
			</div>)}
		</AnimatedGroup>
		<div style={{fontSize:13.5,color:'#746d66'}}>这是一张学习差距图，不是招聘评级，也不代表 Offer 或薪资结果。</div>
	</div>
</DeckFrame>;}
