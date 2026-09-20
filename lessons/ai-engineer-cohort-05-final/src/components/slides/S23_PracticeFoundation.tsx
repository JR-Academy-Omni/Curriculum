import { DeckFrame, AnimatedGroup, Label, colors, fonts } from '../deck';

const adlc = ['Problem', 'Spec', 'Work Plan', 'Code Change', 'Test', 'Review', 'Evidence'];
const weeks = [
	{
		week: 'W1',
		title: 'AI Coding + ADLC',
		body: '先读项目规则和已有代码，再把模糊想法写成 Task Brief、范围边界、Acceptance Criteria 与停止条件。只做一个受控改动，并检查实际 Diff。',
		deliverable: 'PRD、Workflow、Repository Map、AI Coding Rules、测试记录、人工 Review 证据',
		color: colors.red,
	},
	{
		week: 'W2',
		title: 'Product UI + Design System',
		body: '把 W1 的需求变成 Design Brief、Design Tokens、组件规则和关键页面。补齐加载、空状态、错误、权限与响应式体验。',
		deliverable: 'DESIGN.md、完整 UI、交互状态、Product Design Review',
		color: colors.blue,
	},
	{
		week: 'W3',
		title: 'Runnable Application MVP',
		body: '基于 Starter 完成可运行的业务 Vertical Slice，串起用户操作、API、数据与审计，不在这一周提前加入 AI。',
		deliverable: 'Resident、Shift、Task、Activity、Progress Note、Review、Confirm、E2E',
		color: colors.green,
	},
] as const;

export default function S23_PracticeFoundation(){return <DeckFrame tag="COHORT 07 · PRACTICE W1–W3" title="ADLC 先把开发过程搭正确" subtitle="AI Coding 不等于让模型一次生成整个项目。第一阶段先建立可审查的开发闭环，再交付一个可运行的应用基础。" accent={colors.red} titleSize={48}>
	<div style={{display:'grid',gridTemplateRows:'112px 1fr',gap:18,height:'100%'}}>
		<AnimatedGroup delay={.08}>
			<div style={{height:'100%',background:colors.dark,borderRadius:22,padding:'18px 22px',display:'grid',gridTemplateColumns:'170px 1fr',alignItems:'center',gap:18,boxShadow:`9px 9px 0 ${colors.yellow}`}}>
				<div><Label bg={colors.yellow} color={colors.dark}>ADLC EVIDENCE CHAIN</Label><div style={{fontSize:16,color:'#d8d8dd',marginTop:9,fontWeight:700}}>每一步都留下可复核证据</div></div>
				<div style={{display:'grid',gridTemplateColumns:'repeat(7,1fr)',gap:9,alignItems:'center'}}>{adlc.map((item,i)=><div key={item} style={{position:'relative',background:i===6?colors.green:colors.white,borderRadius:12,padding:'13px 8px',textAlign:'center',fontFamily:fonts.mono,fontSize:15,fontWeight:900,color:colors.dark,border:`2px solid ${i===6?colors.green:colors.white}`}}><span style={{display:'block',fontSize:12,color:'#777',marginBottom:4}}>{String(i+1).padStart(2,'0')}</span>{item}</div>)}</div>
			</div>
		</AnimatedGroup>
		<div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:18,minHeight:0}}>{weeks.map((w,i)=><AnimatedGroup key={w.week} delay={.18+i*.08} style={{display:'flex'}}><div style={{flex:1,background:'#fff',border:`2px solid ${colors.dark}`,borderRadius:20,padding:'20px 22px',borderTop:`10px solid ${w.color}`,display:'flex',flexDirection:'column',minHeight:0}}>
			<div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:12}}><Label bg={w.color} color={w.color===colors.green?colors.dark:colors.white}>{w.week}</Label><span style={{fontFamily:fonts.mono,fontSize:13,fontWeight:800,color:'#6a625a'}}>PRACTICE LIVE</span></div>
			<div style={{fontFamily:fonts.heading,fontSize:27,fontWeight:900,lineHeight:1.1,marginTop:14}}>{w.title}</div>
			<div style={{fontSize:18,lineHeight:1.42,color:'#3f3a36',marginTop:13,fontWeight:650}}>{w.body}</div>
			<div style={{marginTop:'auto',paddingTop:14,borderTop:'2px solid #e7e1da'}}><div style={{fontFamily:fonts.mono,fontSize:13,fontWeight:900,color:w.color}}>DELIVERY EVIDENCE</div><div style={{fontSize:16,lineHeight:1.35,fontWeight:800,marginTop:6}}>{w.deliverable}</div></div>
		</div></AnimatedGroup>)}</div>
	</div>
</DeckFrame>}
