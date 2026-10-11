import { DeckFrame, Panel, Label, colors } from '../deck';
import { CaseNode, CaseNote, CaseCode, CaseButton, CaseStyles } from '../CaseKit';
export default function S04_Lesson(){return <DeckFrame tag="CareKind · 填好的 DESIGN BRIEF" title="给 Agent 业务上下文，也给工程边界" subtitle="以下是课堂候选契约；合成数据，不代表真实机构已确认的业务规则。">
<div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:28}}><Panel><Label>用户与任务</Label><p style={{fontSize:27,lineHeight:1.65,marginTop:24}}>护理人员：选择对象与班次，填写记录，保存草稿并送审。<br/>复核人员：查看内容、退回或确认。<br/>成功标准：当前状态、下一步与操作结果都清楚。</p><CaseNote>路径：Resident → Task → Documentation → Review。</CaseNote></Panel>
<Panel><Label>工程与设计输入</Label><p style={{fontSize:25,lineHeight:1.7,marginTop:24}}>先读实际README、组件与设计规范。<br/>沿用统一tokens、表单与状态组件。<br/>先提出页面结构与两个设计方向。<br/>截图、窄布局、键盘和失败路径可检查。</p><CaseNote><b>Non-goals：</b>本周不接真实录音/转写、后端权限或真实住民资料；不擅自修改共享契约。</CaseNote></Panel></div>
</DeckFrame>;}
