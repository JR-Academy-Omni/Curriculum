import { DeckFrame, Panel, Label, colors } from '../deck';
import { CaseNode, CaseNote, CaseCode, CaseButton, CaseStyles } from '../CaseKit';
const rows=[['Draft','护理人员','编辑 / 保存 / 送审','内容有效并保存；送审进入Review'],['Review','复核人员','查看 / 退回 / 确认','护理人员只读；退回回Draft'],['Confirmed','所有演示角色只读','查看确认者与版本','本周不演示修改已确认内容'],['Failed','原操作人员','重试 / 升级处理','保留输入与失败原因'],['Escalated','负责人','查看原因 / 安排恢复','课堂恢复回Draft，实际规则待确认']];
export default function S14_Lesson(){return <DeckFrame tag="CareKind · 候选状态契约" title="状态、角色、动作一起定义" subtitle="此表用于W2模拟UI验收；真实权限必须在W3按业务确认后落实到服务端。">
<Panel><div style={{display:'grid',gridTemplateColumns:'180px 230px 370px 1fr',fontSize:24,fontWeight:850,paddingBottom:20,borderBottom:`2px solid ${colors.dark}`}}>{['状态','操作人','可用动作','检查标准'].map(x=><span key={x}>{x}</span>)}</div>{rows.map(row=><div key={row[0]} style={{display:'grid',gridTemplateColumns:'180px 230px 370px 1fr',fontSize:23,lineHeight:1.4,gap:0,padding:'22px 0',borderBottom:`1px solid ${colors.warmBg}`}}>{row.map((x,i)=><span key={i} style={{fontWeight:i===0?850:500,paddingRight:16}}>{x}</span>)}</div>)}</Panel>
</DeckFrame>;}
