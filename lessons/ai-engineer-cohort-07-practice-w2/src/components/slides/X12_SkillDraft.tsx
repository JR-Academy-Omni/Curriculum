import { DeckFrame, Panel, Label, colors } from '../deck';
import { CaseNode, CaseNote, CaseCode, CaseButton, CaseStyles } from '../CaseKit';
const sample=`---
name: carekind-task-plan
description: 将已确认的 CareKind UI 需求拆成任务与依赖
---
1. 读取 PRD、DESIGN.md、契约和当前任务。
2. 列出成果、依赖、Owner、允许范围。
3. 每项写验收动作、证据、Reviewer。
4. 找重叠文件、共享接口和阻塞条件。
5. 输出计划草稿；未确认字段写待确认。
禁止自行发送任务、改业务规则或发布。`;
export default function X12_SkillDraft(){return <DeckFrame tag="复用 L5 · SKILL LAB" title="让 Agent 起草 Skill，再用实际任务检查它" subtitle="完整可复制模板在 HANDOUT.md；本页是关键片段，不是已安装或实跑结果。">
<div style={{display:'grid',gridTemplateColumns:'1.25fr 1fr',gap:28}}><CaseCode style={{fontSize:23,lineHeight:1.55}}>{sample}</CaseCode><Panel><Label>试一次 CareKind 需求</Label><p style={{fontSize:26,lineHeight:1.6,marginTop:24}}>“做记录编辑、保存草稿、送审和复核 UI。”</p><CaseNote><b>检查输出：</b><br/>有没有依赖？共享组件谁维护？<br/>每张卡是否有Owner和验收？<br/>是否误把模拟UI当成后端功能？</CaseNote><CaseNote><b>再迭代：</b>故意缺一个角色或契约，检查Skill是否补问或标记待确认。</CaseNote></Panel></div>
</DeckFrame>;}
