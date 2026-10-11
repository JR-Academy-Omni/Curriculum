import { DeckFrame, Panel, Label, colors } from '../deck';
import { CaseNode, CaseNote, CaseCode, CaseButton, CaseStyles } from '../CaseKit';
const code=`# CareKind · 课堂 DESIGN.md
目标：一条记录从草稿走到人工确认。
导航：对象 → 当前任务 → 文档 → 复核。
主要动作：每一状态突出一个下一步。
颜色：action / text / surface / error 用语义token。
组件：Button、Field、StateBadge、Feedback复用。
状态：文字 + 原因 + 可用动作，不只变颜色。
窄布局：字段单列；确认动作与反馈保持可见。
检查：键盘焦点、空/错/提交中、失败恢复。`;
export default function S09_Lesson(){return <DeckFrame tag="复用 L3 · DESIGN.md 示例" title="选定方向以后，把决策写成可检查的规则" subtitle="规则来自本次任务与选型；实际项目已有设计系统时先复用。">
<div style={{display:'grid',gridTemplateColumns:'1.35fr 1fr',gap:28}}><CaseCode style={{fontSize:25,lineHeight:1.7}}>{code}</CaseCode><Panel><Label>拿两页来检验</Label><p style={{fontSize:27,lineHeight:1.7,marginTop:26}}>Documentation 和 Review：<br/>同样的状态标签？<br/>相同含义的按钮？<br/>错误靠近对应字段？<br/>两页都能用键盘操作？</p><CaseNote>发现重复问题 → 补组件/规则 → 修相关页面 → 复查；规则不会自动保证正确。</CaseNote></Panel></div>
</DeckFrame>;}
