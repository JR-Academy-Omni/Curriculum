import { DeckFrame, Panel, AnimatedGroup, colors } from '../deck';
// Source: research/sdd-adlc.md. Legacy filename retains stable registration.
const steps = [
 ['需求规格', '护理人员保存交班草稿；关联老人和班次，保存不等于确认。'],
 ['技术计划', '先查现有仓库、接口与数据约束；复用草稿状态和权限。'],
 ['任务清单', '拆成表单校验、保存接口、权限检查、测试；写清允许改动的文件。'],
 ['实现', 'Agent 按任务逐项修改；未知规则先确认，不自动增加录音分析。'],
 ['对照规格检查', '缺少老人或班次要拒绝；保存后仍是草稿；无权限者不能确认。'],
] as const;
export default function S08_ADLC() {
 return <DeckFrame tag="SDD · 规格驱动开发" title="SDD：先写清楚，再让 Agent 实现" subtitle="Specification-Driven Development · 将需求写成规格，再制定计划、拆任务、实现与检查。" titleSize={50}>
  <div style={{height:'100%',display:'flex',flexDirection:'column',gap:18}}>
   <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:20}}>
    <Panel bg={colors.yellow} style={{padding:'16px 22px'}}><b style={{fontSize:24}}>PRD：产品方向</b><div style={{fontSize:21,lineHeight:1.42,marginTop:7}}>为护理团队减少交班记录遗漏；先做草稿保存。</div></Panel>
    <Panel style={{padding:'16px 22px'}}><b style={{fontSize:24}}>Spec：可执行细节</b><div style={{fontSize:21,lineHeight:1.42,marginTop:7}}>谁能保存、关联哪些数据、失败怎样处理、如何验收。</div></Panel>
   </div>
   <Panel style={{flex:1,minHeight:0,padding:'15px 24px',display:'flex',flexDirection:'column',justifyContent:'center',gap:13}}>
    {steps.map(([title,text],i)=><AnimatedGroup key={title} delay={.15+i*.12}><div style={{display:'grid',gridTemplateColumns:'240px 1fr',gap:18,alignItems:'center',paddingBottom:i===4?0:12,borderBottom:i===4?'none':'1px solid #e1d7ce'}}><b style={{fontSize:24,color:colors.dark}}><span style={{color:colors.red,marginRight:12}}>{i+1}</span>{title}</b><div style={{fontSize:23,lineHeight:1.4,color:'#403b37'}}>{text}</div></div></AnimatedGroup>)}
   </Panel>
   <div style={{borderRadius:12,background:colors.dark,color:colors.white,padding:'13px 20px',fontSize:20,lineHeight:1.4}}>ADLC 讲项目生命周期；SDD 指导需求到代码。可以不用 Spec Kit，照样把规格、计划、任务与检查写清楚。</div>
  </div>
 </DeckFrame>;
}
