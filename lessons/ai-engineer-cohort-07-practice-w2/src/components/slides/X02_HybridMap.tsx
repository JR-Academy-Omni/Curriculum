import { DeckFrame, Panel, Label, colors } from '../deck';
import { CaseNode, CaseNote, CaseCode, CaseButton, CaseStyles } from '../CaseKit';
export default function X02_HybridMap(){return <DeckFrame tag="W2 · 混合团队总图" title="目标向下分，证据向上收" subtitle="负责人确定成果；管理 Agent 协调任务；每个人对自己的交付负责。">
<div style={{display:'grid',gridTemplateColumns:'260px 1fr 270px',gap:26,height:470}}>
<Panel bg={colors.dark} style={{color:colors.white,display:'flex',flexDirection:'column',justifyContent:'center'}}><Label bg={colors.yellow} color={colors.dark}>人 · 项目负责人</Label><h2 style={{fontSize:31,marginTop:24}}>CareKind UI</h2><p style={{fontSize:23,lineHeight:1.6,marginTop:18}}>确认需求与分工<br/>决定范围变更<br/>收口最终验收</p></Panel>
<div><Panel style={{padding:'16px 22px',background:colors.yellow}}><h2 style={{fontSize:28}}>→ 管理 Agent →</h2><p style={{fontSize:22,marginTop:8}}>读取 SoT · 拆任务 · 排依赖 · 派工 · 收汇报</p></Panel>
<div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:18,marginTop:22}}>{[['A · 设计人员','设计 Agent','规范、tokens、组件',colors.blue],['B · 开发人员','Coding Agent','记录与草稿页面',colors.green],['C · 评审人员','检查 Agent','复核 UI、状态与证据',colors.purple]].map(([person,agent,task,color])=><CaseNode key={person} title={person} color={color} body={<><b>↕ {agent}</b><br/>{task}<br/><span style={{fontSize:20}}>接单 → 执行 → 回执</span></>} style={{height:240}}/>)}</div>
<div style={{marginTop:20,fontSize:22,fontWeight:800,textAlign:'center'}}>← 接口冲突 / 阻塞 / 新证据 → 协调与重新安排</div></div>
<Panel style={{display:'flex',flexDirection:'column',justifyContent:'center'}}><Label>集成与验收</Label><p style={{fontSize:25,lineHeight:1.7,marginTop:22}}>Diff + 截图<br/>任务路径 + 检查<br/>Review + 合并记录</p><CaseNote>结果回到负责人<br/>未通过 → 回任务</CaseNote></Panel></div>
<CaseNote><b>共用一份 SoT：</b> PRD · DESIGN.md · 接口契约 · 任务看板 · 决策记录。所有人及其 Agent 读取当前版本。</CaseNote>
</DeckFrame>;}
