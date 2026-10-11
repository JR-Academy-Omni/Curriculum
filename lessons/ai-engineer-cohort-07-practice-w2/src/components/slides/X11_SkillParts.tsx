import { DeckFrame, Panel, Label, colors } from '../deck';
import { CaseNode, CaseNote, CaseCode, CaseButton, CaseStyles } from '../CaseKit';
export default function X11_SkillParts(){return <DeckFrame tag="复用 L5 · 把做法留下来" title="任务会变，做法可以复用" subtitle="把反复出现、步骤可描述、结果可检查的工作做成 Skill。">
<div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:26}}>{[['Prompt','这一次的任务：检查 CK-UI-02 送审后的按钮。',colors.blue],['Rules / SoT','长期约束与当前事实：用统一状态名、读取当前设计规范。',colors.purple],['Skill','重复做法：读需求→拆任务→列依赖→核查Owner→输出任务卡。',colors.green],['管理 Agent','按实际任务选 Skill，协调人和执行Agent，收证据与追阻塞。',colors.orange]].map(([h,b,c])=><CaseNode key={h} title={h} color={c} body={b} style={{height:205}}/>)}</div>
<CaseNote>Skill 不提供独立身份、持续运行或发送能力；这些来自会话运行时、调度与已接入工具。</CaseNote>
</DeckFrame>;}
