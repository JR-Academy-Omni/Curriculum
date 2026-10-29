import ReferenceFrame from '../ReferenceFrame';
import { colors, border, shadow } from '../deck';

// Fictional operating goal; all actions remain drafts until accountable approval.
const TASKS=[
 {title:'市场营销',do:'拟推广计划',out:'内容 / 活动草稿',color:colors.rose},
 {title:'财务会计',do:'核预算和费用',out:'预算草稿 / 缺单据',color:colors.orange},
 {title:'团队负责人',do:'确认人员分工',out:'谁做 / 期限 / 卡点',color:colors.purple},
 {title:'经纪团队',do:'安排客户跟进',out:'跟进任务 / 待回复',color:colors.green},
 {title:'行政同事',do:'拟看房安排',out:'日历草稿 / 待确认',color:colors.blue},
];
export default function N22_CompanyOperation(){
 return <ReferenceFrame stage="公司案例 · 一项经营目标，五组工作" title="老板说：下个月重点推广东区" takeaway="AI 承接工作流转；人保留预算、付款、合同和经营决定。">
  <div style={{display:'flex',alignItems:'center',gap:30}}>
   <section data-reference-panel style={{width:520,height:100,borderRadius:22,border,background:colors.yellow,padding:'18px 24px'}}><h2 style={{fontSize:30,fontWeight:900}}>老板提出目标</h2><p style={{fontSize:23,marginTop:9}}>东区推广 · 按公司预算与做法</p></section>
   <span style={{fontSize:36,color:colors.rose}}>→</span>
   <section data-reference-panel style={{flex:1,height:100,borderRadius:22,border,background:colors.dark,color:colors.white,padding:'18px 24px'}}><h2 style={{fontSize:30,fontWeight:900}}>AI 整理计划，拆出岗位待办</h2><p style={{fontSize:23,marginTop:9,color:colors.yellow}}>计划、预算、分工都先待负责人确认</p></section>
  </div>
  <svg width="1380" height="45" viewBox="0 0 1380 45" aria-hidden="true"><path d="M690 0V18H130M690 18H1250" stroke={colors.rose} strokeWidth="3" fill="none"/>{TASKS.map((t,i)=><path key={t.title} d={'M'+(130+i*280)+' 18V45'} stroke={t.color} strokeWidth="3"/>)}</svg>
  <div style={{display:'grid',gridTemplateColumns:'repeat(5,1fr)',gap:18}}>
   {TASKS.map(t=><section data-reference-panel key={t.title} style={{height:205,borderRadius:22,border,boxShadow:shadow,background:colors.white,padding:'22px 16px',borderTop:'8px solid '+t.color}}><h2 style={{fontSize:28,fontWeight:900}}>{t.title}</h2><p style={{fontSize:25,fontWeight:800,marginTop:24}}>{t.do}</p><p style={{fontSize:22,marginTop:22}}>{t.out}</p></section>)}
  </div>
  <div style={{textAlign:'center',fontSize:23,fontWeight:800,color:colors.rose,margin:'17px 0'}}>↓ 各部门确认后执行 · 员工汇报 · 系统检查结果 ↓</div>
  <section data-reference-panel style={{height:115,borderRadius:22,background:colors.dark,color:colors.white,padding:'20px 26px',display:'flex',alignItems:'center',gap:28}}>
   <h2 style={{fontSize:29,fontWeight:900,color:colors.yellow,whiteSpace:'nowrap'}}>老板再看一份汇总</h2>
   <p style={{fontSize:24,lineHeight:1.6}}>计划待批 / 预算待确认 / 客户待联系<br/>延期、预算不足、操作失败 → 找对应负责人</p>
  </section>
 </ReferenceFrame>;
}
