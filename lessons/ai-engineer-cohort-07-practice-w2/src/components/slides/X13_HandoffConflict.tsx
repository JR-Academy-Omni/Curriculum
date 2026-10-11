import { useState } from 'react';
import { DeckFrame, Panel, Label, colors } from '../deck';
import { CaseNode, CaseNote, CaseCode, CaseButton, CaseStyles } from '../CaseKit';
export default function X13_HandoffConflict(){const[step,setStep]=useState(0);return <DeckFrame tag="CareKind · 交接案例 · 可切换" title="接口变了，怎样让人和 Agent 一起接住" subtitle="合成案例：A 的组件改为 state=Review；B 仍传 status=pending。">
<div className="w2-case"><CaseStyles/><div style={{display:'flex',gap:18,marginBottom:24}}>{['发现冲突','带证据协调','更新后交接'].map((t,i)=><CaseButton key={t} active={step===i} onClick={()=>setStep(i)}>{i+1} · {t}</CaseButton>)}</div>
<div style={{display:'grid',gridTemplateColumns:'1fr 1.2fr',gap:28}}><CaseCode style={{fontSize:26}}>{[
`B 的旧输入
{ status: "pending" }

A 的新接口
{ state: "Review" }`,
`CK-UI-02 → A / 集成负责人
组件要求与页面输入不一致。
附类型定义、输入样例、截图。
请确认统一字段与迁移范围。`,
`统一候选契约 v2
{ state: "Review" }

A：更新说明与状态样例
B：接入并复查
C：检查相关页面`][step]}</CaseCode>
<Panel><h2 style={{fontSize:31}}>{['先停止扩大修改','用共同契约裁决','交付给下一位接手者'][step]}</h2><p style={{fontSize:27,lineHeight:1.7,marginTop:26}}>{['B 的 Agent 不擅自改 A 的组件。B 记录影响与依赖，把问题交给有所有权的人。','负责人检查当前契约与影响，确认采用哪个版本；管理 Agent 更新任务与通知对象。','记录决定、版本、修改范围和复查结果。收到通知不等于接入完成；集成负责人检查整条路径。'][step]}</p><CaseNote>保留发现 → 证据 → 决定 → 修改 → 复查的记录。</CaseNote></Panel></div></div>
</DeckFrame>;}
