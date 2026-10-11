import { DeckFrame, Panel, Label, colors } from '../deck';
import { CaseNode, CaseNote, CaseCode, CaseButton, CaseStyles } from '../CaseKit';
export default function X10_Dispatch(){return <DeckFrame tag="复用 Company OS · 员工派工与汇报" title="AI 派工以后，要收回接单和执行证据" subtitle="这是课堂流程模拟。Skill 起草任务；真正发送、接单与看板更新需要已接入的工具。">
<div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:26}}><CaseNode title="① 负责人确定成果" body={<>CareKind 文档流程可演示。<br/>管理 Agent 读取人员职责、任务量与依赖，起草分工。</>}/><CaseNode title="② 员工接单与执行" color={colors.green} body={<>A / B / C 确认范围与依赖。<br/>员工把任务交给自己的 Agent，检查过程与结果。</>}/><CaseNode title="③ 回收证据与阻塞" color={colors.purple} body={<>管理 Agent 整理汇报，补问截图、diff、检查结果。<br/>冲突交给对应负责人。</>}/></div>
<Panel style={{marginTop:28,padding:'20px 26px'}}><div style={{display:'flex',justifyContent:'space-between',fontSize:28,fontWeight:800}}><span>已送达</span><span>→</span><span>已接单</span><span>→</span><span>执行中 / 阻塞</span><span>→</span><span>待验收</span><span>→</span><span>已验收</span></div></Panel>
<CaseNote><b>汇报输入：</b>“页面做完了，但状态不显示。”<br/><b>AI 补问：</b>哪个任务？哪个输入？证据在哪？谁拥有这个组件？<br/><b>回流：</b>记录阻塞 → 找 A 裁决接口 → 通知 B/C → 收到复查结果。</CaseNote>
</DeckFrame>;}
