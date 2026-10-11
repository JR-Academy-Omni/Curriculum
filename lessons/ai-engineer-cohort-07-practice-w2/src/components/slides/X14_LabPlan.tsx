import { DeckFrame, Panel, Label, colors } from '../deck';
import { CaseNode, CaseNote, CaseCode, CaseButton, CaseStyles } from '../CaseKit';
export default function X14_LabPlan(){return <DeckFrame tag="W2 · 分工 LAB · 30 MIN" title="一起交付一条 CareKind UI 路径" subtitle="3人小组：A设计 / B记录 / C复核；独立学员用自己的Agent分步执行，仍由自己验收。">
<div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:25}}><CaseNode title="00–05 · 确认计划" body={<>读Brief、规范与候选契约。<br/>用task-plan Skill拆任务。<br/>确认Owner、共享组件与依赖。</>}/><CaseNode title="05–23 · 执行与交接" color={colors.green} body={<>各自Agent按任务修改。<br/>A先提供组件契约。<br/>B/C遇冲突带证据协调。<br/>保留一次修改前后截图。</>}/><CaseNode title="23–30 · 集成自查" color={colors.purple} body={<>走记录→保存→送审→确认。<br/>测试空、错、失败与窄布局。<br/>提交结果与未验证项。</>}/></div>
<CaseNote><b>启动依据：</b>优先核查学生现有项目；没有starter时从自己的前端项目做fixture UI，可使用本课演示作为目标示例。实际启动命令从项目README读取。</CaseNote>
<CaseNote><b>AI执行Brief：</b>先读 HANDOUT、DESIGN.md 与现有代码，提出文件范围和验收动作。只做W2模拟UI；未知业务规则先补问。保留diff与操作证据。</CaseNote>
</DeckFrame>;}
