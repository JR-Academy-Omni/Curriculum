import { DeckFrame, Panel, Label, colors } from '../deck';
import { CaseNode, CaseNote, CaseCode, CaseButton, CaseStyles } from '../CaseKit';
const fields=[['目标','实现 Documentation 草稿编辑与送审 UI。'],['范围与所有权','B 拥有记录页面；共享 tokens / StateBadge 由 A 维护。'],['必要上下文','读 PRD、DESIGN.md、候选状态契约、现有组件。'],['产出合同','提交 diff、桌面/窄布局截图、成功与失败操作记录。'],['完成判据','空内容有提示；保存仍为 Draft；送审后编辑受限；可恢复失败。'],['停止与升级','接口不符、要改共享组件或权限不清：先带证据交给负责人。']];
export default function X05_TaskBrief(){return <DeckFrame tag="复用 L7 · 六格 BRIEF" title="一张任务卡，能让人和 Agent 独立开工" subtitle="任务 CK-UI-02 · Owner：B · Reviewer：C · 依赖：T0 契约 / T1 组件 · 截止：Lab 结束前。">
<Panel style={{height:'100%',display:'flex',flexDirection:'column',justifyContent:'center',gap:22}}>{fields.map(([k,v],i)=><div key={k} style={{display:'grid',gridTemplateColumns:'255px 1fr',gap:24,fontSize:25,lineHeight:1.4}}><b style={{color:colors.dark}}>{i+1} · {k}</b><span>{v}</span></div>)}</Panel>
</DeckFrame>;}
