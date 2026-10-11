import { DeckFrame, Panel, Label, colors } from '../deck';
import { CaseNode, CaseNote, CaseCode, CaseButton, CaseStyles } from '../CaseKit';
export default function X15_IntegrationReview(){return <DeckFrame tag="复用 W1 / L8 · 交付收口" title="各自完成之后，还要一起验收" subtitle="适用于多人各自带Agent，也适用于一个人管理多个Agent。">
<Panel bg={colors.yellow} style={{padding:24}}><div style={{fontSize:27,fontWeight:850,textAlign:'center'}}>任务分支 → 提交变更 → 同伴 Review → 按依赖合并 → 集成复查 → 人确认</div></Panel>
<div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:26,marginTop:28}}><CaseNode title="交付者提交" body={<>任务ID / 修改范围 / 当前契约版本<br/>Diff、截图、操作步骤与检查结果<br/>失败、阻塞和未验证项<br/>接手者下一步及依赖</>}/><CaseNode title="Reviewer / 集成人检查" color={colors.purple} body={<>是否超出范围、改到他人的文件？<br/>组件和状态是否统一？<br/>成功、失败、退回、确认能否走通？<br/>通过 / 未通过 / 未验证 + 理由</>}/></div>
<CaseNote><b>W2交付：</b>UI、Skill、协作记录与验收证据。<b>W3交接：</b>实际API、服务端权限、版本、audit与持久化需求；模拟演示不等于已实现。</CaseNote>
</DeckFrame>;}
