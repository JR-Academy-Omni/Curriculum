import SourceFrame from '../SourceFrame';
import { Panel, Label, colors } from '../deck';
import { CaseNode, CaseNote, CaseButton, CaseCode, CaseStyles } from '../CaseKit';
export default function R06_SkillCaseBridge(){return <SourceFrame tag="真实案例 → 课堂迁移 · Skills" title="把工作手册拆成按需读取的资料" subtitle="原文PDF Skill把表单说明独立出来；用同样方法整理CareKind团队的重复工作。" ids={['skills','skills-spec']} scope="左侧是原文PDF Skill案例的简化结构；右侧是JR自拟目录模板，未称已安装或运行。">
<div style={{display:'grid',gridTemplateColumns:'1fr 1.25fr',gap:28}}><Panel><Label bg={colors.blue} color={colors.dark}>原文案例 · PDF Skill</Label><div style={{fontSize:27,lineHeight:1.8,marginTop:24}}>SKILL.md：基础操作<br/>↳ reference.md：详细参考<br/>↳ forms.md：表单说明</div><CaseNote>填表时才读forms；让主指令保持精简。</CaseNote></Panel><Panel><Label bg={colors.green} color={colors.dark}>CareKind · 课堂目录模板</Label><CaseCode style={{fontSize:20,lineHeight:1.35,padding:18,marginTop:18}}>{`carekind-task-plan/
  SKILL.md
  references/
    candidate-state-contract.md
    team-ownership.md
  assets/
    task-card-template.md`}</CaseCode><p style={{fontSize:22,lineHeight:1.4,marginTop:16}}>状态不明 → 补契约；分工重叠 → 读所有权；交付任务 → 读统一模板。</p></Panel></div>
</SourceFrame>;}
