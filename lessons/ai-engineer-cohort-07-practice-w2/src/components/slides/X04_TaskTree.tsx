import { DeckFrame, Panel, Label, colors } from '../deck';
import { CaseNode, CaseNote, CaseCode, CaseButton, CaseStyles } from '../CaseKit';
export default function X04_TaskTree(){return <DeckFrame tag="W2 · TASK PLAN" title="先拆出依赖，再决定哪些任务并行" subtitle="教学成果：一条可操作的记录 → 送审 → 确认 UI 路径，使用合成数据。">
<Panel bg={colors.yellow} style={{padding:'16px 24px'}}><h2 style={{fontSize:29}}>T0 · 共同确认候选契约</h2><p style={{fontSize:22,marginTop:8}}>Resident / Shift 关联、state 字段、角色、允许动作、验收路径；未确认规则记为问题。</p></Panel>
<div style={{fontSize:26,fontWeight:900,textAlign:'center',margin:'12px 0'}}>↓ T0 确认后，A / B / C 按共同契约开展</div>
<div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:24}}>
<CaseNode title="T1 · A / 规范与组件" color={colors.blue} body={<>DESIGN.md、tokens<br/>Button、StateBadge、Form<br/><b>产出：</b>组件接口 + 状态样例</>}/>
<CaseNode title="T2 · B / 记录页面" color={colors.green} body={<>字段校验、保存草稿、送审<br/>复用 T1；未就绪先做布局<br/><b>产出：</b>页面 + 成功/失败证据</>}/>
<CaseNode title="T3 · C / 复核与检查" color={colors.purple} body={<>复核、退回、确认的模拟UI<br/>先准备检查项；等待 T2 集成<br/><b>产出：</b>复核页 + 检查记录</>}/>
</div><div style={{fontSize:26,fontWeight:900,textAlign:'center',margin:'14px 0'}}>↓ T1 接口就绪 → T2 / T3 接入 → T4 集成</div>
<Panel style={{padding:'14px 24px'}}><b style={{fontSize:26}}>T4 · 集成负责人检查整条路径，Reviewer 写结论</b><p style={{fontSize:22,marginTop:8}}>不能用三个“各自完成”替代一次可复现的端到端 UI 验收。</p></Panel>
</DeckFrame>;}
