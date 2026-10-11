import { DeckFrame, Panel, Label, colors } from '../deck';
import { CaseNode, CaseNote, CaseCode, CaseButton, CaseStyles } from '../CaseKit';
export default function X01_CollaborationShift(){return <DeckFrame tag="W2 · 协作方式" title="从和人协作，到和人与 Agent 协作" subtitle="同一个 CareKind 项目：每个人都能带着自己的 Agent 工作。">
<div style={{display:'grid',gridTemplateColumns:'1fr 1.25fr',gap:28}}>
<Panel><Label>原来的团队</Label><div style={{fontSize:29,lineHeight:1.8,marginTop:24}}>负责人拆任务<br/>设计 → 开发 → 测试<br/>人逐个交接与汇报</div><CaseNote>项目需求、设计规则和接口仍需共同确认。</CaseNote></Panel>
<Panel bg={colors.dark} style={{color:colors.white}}><Label bg={colors.yellow} color={colors.dark}>现在的混合团队</Label><div style={{fontSize:29,lineHeight:1.8,marginTop:24}}>负责人 + 管理 Agent<br/>设计人员 + 设计 Agent<br/>开发人员 + Coding Agent<br/>评审人员 + 检查 Agent</div></Panel></div>
<div style={{display:'flex',gap:32,marginTop:26,fontSize:26,fontWeight:800}}><span>① 人 ↔ 人：对齐目标与交接</span><span>② 人 ↔ Agent：委派与检查</span><span>③ Agent ↔ Agent：交换证据</span></div>
</DeckFrame>;}
