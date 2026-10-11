import { DeckFrame, Panel, Label, colors } from '../deck';
import { CaseNode, CaseNote, CaseCode, CaseButton, CaseStyles } from '../CaseKit';
const rows=[['共同成果','记录→送审→确认 UI；W2 使用模拟数据。'],['所有权','A 共享组件；B 记录页；C 复核页；集成人与 Reviewer 明确。'],['证据合同','任务 ID、diff、截图、操作步骤、通过/未通过/未验证。'],['通信触发','依赖完成通知接手人；契约冲突/阻塞立即点名负责人。'],['Done','通过任务验收 + 集成检查；已裁决冲突与未验证项可追溯。']];
export default function X08_TeamCharter(){return <DeckFrame tag="复用 L8 · CHARTER + MESSAGES" title="把合作规则写在开工前" subtitle="人和 Agent 都要知道何时汇报、找谁协调、怎样证明完成。">
<div style={{display:'grid',gridTemplateColumns:'1.2fr 1fr',gap:28}}><Panel>{rows.map(([k,v],i)=><div key={k} style={{marginBottom:i===4?0:20}}><b style={{fontSize:24}}>{i+1} · {k}</b><p style={{fontSize:22,lineHeight:1.45,marginTop:7}}>{v}</p></div>)}</Panel>
<Panel bg={colors.dark} style={{color:colors.white}}><Label bg={colors.yellow} color={colors.dark}>可复制的冲突消息</Label><p style={{fontSize:25,lineHeight:1.7,marginTop:24}}>给 A / 集成负责人：<br/>CK-UI-02 遇到状态接口冲突。<br/>我收到 status=pending，组件要求 state=Review。<br/>证据：组件类型、输入样例、错误截图。<br/>影响：送审后状态无法显示。<br/>建议：按候选契约统一，并更新依赖任务。</p></Panel></div>
</DeckFrame>;}
