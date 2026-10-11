import SourceFrame from '../SourceFrame';
import { Panel, Label, colors } from '../deck';
import { CaseNode, CaseNote, CaseButton, CaseCode, CaseStyles } from '../CaseKit';
export default function R02_TeamExperiment(){return <SourceFrame tag="研究案例 · The Cybernetic Teammate" title="实验怎样比较人、团队和 AI？" subtitle="正式期刊版：791名P&G专业人员，参与真实产品创新任务；预注册、随机分组。" ids={['team-study']} scope="实验条件重新绘制；右侧概括期刊摘要。没有效果大小或各组均值，CareKind讨论是教学迁移。">
<div style={{display:'grid',gridTemplateColumns:'1.05fr 1fr',gap:28}}><Panel><div style={{display:'grid',gridTemplateColumns:'85px 1fr 1fr',gap:14,fontSize:23,textAlign:'center',alignItems:'center'}}><span/><b>无 AI</b><b>有 AI</b><b>个人</b><CaseNode title="1人" body="独立完成创新任务" style={{padding:18,height:150}}/><CaseNode title="1人 + AI" color={colors.green} body="由个人使用AI" style={{padding:18,height:150}}/><b>团队</b><CaseNode title="2人团队" color={colors.purple} body="专业人员共同完成" style={{padding:18,height:150}}/><CaseNode title="2人团队 + AI" color={colors.orange} body="团队使用AI" style={{padding:18,height:150}}/></div></Panel>
<Panel bg={colors.dark} style={{color:colors.white}}><Label bg={colors.yellow} color={colors.dark}>研究观察 · 限于该任务</Label><div style={{fontSize:25,lineHeight:1.65,marginTop:22}}>个人+AI匹配无AI团队的表现。<br/>AI帮助跨专业人员形成更平衡方案。<br/>人在评价与选择环节仍有判断价值。</div><CaseNote><b>CareKind讨论：</b>设计、开发、评审各自用Agent以后，仍需哪些共享规则、交接与人工选择？</CaseNote></Panel></div>
</SourceFrame>;}
