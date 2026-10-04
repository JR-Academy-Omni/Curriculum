import { AnimatedGroup, DeckFrame, Label, Panel, colors, fonts } from '../deck';
const industries = [
  ['AgedCare 养老', '养老机构', '老人档案 / 护理交班', '站点 / 在管老人'],
  ['ChildCare 托育', '托育运营方', '儿童观察 / 事件 / 家长沟通', '中心 / 在园儿童'],
  ['GP / Clinic 诊所', '诊所 / 医生', '就诊病历 / 随访任务', '医生席位 / 就诊量'],
  ['物业管理', '物业公司', '房屋档案 / 报修 / 工单', '在管物业 / 团队'],
];
export default function S04b_IndustryModel(){
  return <DeckFrame tag="CAREKIND AI · INDUSTRY EXPANSION" title="同一家族的商业模式，四套行业产品" subtitle="都能采用 B2B 订阅；技术底座可复用，购买者、交付价值和行业流程需要分别验证。" titleSize={54}>
    <div style={{display:'flex',flexDirection:'column',gap:16,fontFamily:fonts.body,color:colors.dark}}>
      <AnimatedGroup delay={.16}><Panel style={{padding:18}}>
        <Label bg={colors.blue} color={colors.dark}>行业扩展与计费单位 · 待验证假设</Label>
        <table style={{width:'100%',borderCollapse:'collapse',fontSize:24,lineHeight:1.4,marginTop:12}}>
          <thead><tr>{['行业','购买者','记录与交付','计费单位假设'].map(t=><th key={t} style={{textAlign:'left',padding:'0 14px 14px 0',borderBottom:'2px solid #10162f',fontSize:22,color:'#514c48'}}>{t}</th>)}</tr></thead>
          <tbody>{industries.map((row,i)=><tr key={row[0]}>{row.map((text,j)=><td key={text} style={{padding:'10px 14px 10px 0',borderBottom:'1px solid #ddd3c9',fontWeight:j===0?800:500,background:i===0?'#fff6cf':undefined}}>{text}</td>)}</tr>)}</tbody>
        </table>
      </Panel></AnimatedGroup>
      <AnimatedGroup delay={.28} style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16}}>
        <Panel style={{padding:18}}><strong style={{fontSize:25}}>共享记录底座</strong><p style={{fontSize:23,lineHeight:1.45,margin:'8px 0 0'}}>档案、录音 / 文字、事件、任务、权限、审计。</p></Panel>
        <Panel style={{padding:18}}><strong style={{fontSize:25}}>分别做行业版本</strong><p style={{fontSize:23,lineHeight:1.45,margin:'8px 0 0'}}>字段与模板、确认责任、软件接入、客户销售。</p></Panel>
      </AnimatedGroup>
      <div style={{fontSize:24,lineHeight:1.5}}><strong>扩展顺序：</strong>先验证养老的付费交班场景，再提炼底座、逐行业扩展。</div>
    </div>
  </DeckFrame>;
}
