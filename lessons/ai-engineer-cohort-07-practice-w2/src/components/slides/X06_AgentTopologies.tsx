import { Panel, Label, colors } from '../deck';
import SourceFrame from '../SourceFrame';
import { CaseNode, CaseNote, CaseCode, CaseButton, CaseStyles } from '../CaseKit';
export default function X06_AgentTopologies(){return <SourceFrame ids={['claude-teams']} scope="结构取舍的教学简图；并非所有Subagent都不能通信。Agent Teams当前为实验功能，默认关闭。" tag="复用 L7 / L8 + Claude Code 文档" title="独立子任务用 Subagent，需要共同协调时考虑 Team" subtitle="依据中途依赖选择结构；具体会话能力要先核查，课堂不假设两种产品完全相同。">
<div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:28,height:370}}>
<Panel><Label bg={colors.blue} color={colors.dark}>Subagent · 中心汇总</Label><div style={{fontSize:25,textAlign:'center',marginTop:24}}>主 Agent<br/>↙　↓　↘<br/>组件检查　导航检查　状态检查<br/>↘　↑　↙<br/>主 Agent 汇总证据</div><CaseNote>结果可独立返回；子任务不需要持续互相协商。</CaseNote></Panel>
<Panel><Label bg={colors.purple} color={colors.dark}>Agent Team · 成员通信</Label><div style={{fontSize:25,textAlign:'center',marginTop:24}}>Lead 分任务、收口<br/>↓　↕　↓<br/>设计 Agent ↔ Coding Agent<br/>↖　检查 Agent　↗<br/>发现接口冲突就交换证据</div><CaseNote>成员需要中途消息、协调依赖或裁决冲突。</CaseNote></Panel>
</div><CaseNote><b>多个 Agent 是执行结构；员工仍有 Owner。</b> 谁执行、谁检查、谁批准范围变化，都写进任务。</CaseNote>
</SourceFrame>;}
