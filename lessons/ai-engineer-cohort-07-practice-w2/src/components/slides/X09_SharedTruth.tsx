import { DeckFrame, Panel, Label, colors } from '../deck';
import { CaseNode, CaseNote, CaseCode, CaseButton, CaseStyles } from '../CaseKit';
export default function X09_SharedTruth(){return <DeckFrame tag="复用团队 SoT · 人 + 各自的 AI" title="共享的不是聊天记录，是当前可执行的契约" subtitle="换一个员工或 Agent 接手，也应读到同一份目标、规则和状态。">
<div style={{display:'grid',gridTemplateColumns:'1fr 1.25fr',gap:28}}><Panel bg={colors.dark} style={{color:colors.white}}><Label bg={colors.yellow} color={colors.dark}>CareKind 共享上下文</Label><div style={{fontSize:29,lineHeight:1.9,marginTop:24}}>PRD：做什么、为什么<br/>DESIGN.md：界面怎样做<br/>契约：数据、状态、角色<br/>看板：Owner、依赖、证据<br/>决策：谁确认、当前版本</div></Panel>
<Panel><h2 style={{fontSize:30}}>每次接任务，先读当前版本</h2><div style={{fontSize:26,lineHeight:1.7,marginTop:25}}>A + 设计 Agent　← 同一份规范<br/>B + Coding Agent ← 同一份接口<br/>C + 检查 Agent　← 同一份验收</div><CaseNote><b>变更示例：</b>状态名改变 → 记录负责人决定 → 更新契约 → 通知依赖任务 → 各自 Agent 重新读取 → 集成复查。</CaseNote><CaseNote>一次聊天里的决定，要写回共享记录后才成为团队依据。</CaseNote></Panel></div>
</DeckFrame>;}
