import ReferenceFrame from '../ReferenceFrame';
import { colors, border, shadow } from '../deck';

// Proposed setup sequence; no software is connected in this deck.
const STEPS=[
 {title:'确认共用记录',tag:'负责人先确认',color:colors.yellow,lines:['公司目标 / 房源','客户 / 财务记录'],note:'原软件负责保存'},
 {title:'配置工作 Skills',tag:'负责人 + 技术人员',color:colors.purple,lines:['整理日报 / 分任务','核对费用 / 追进展'],note:'写清步骤和检查标准'},
 {title:'连接现有软件',tag:'技术人员来配置',color:colors.orange,lines:['客户管理 / 财务','日历 / 公司消息'],note:'先确认允许读写什么'},
 {title:'给大家一个入口',tag:'按岗位登录使用',color:colors.rose,lines:['员工：汇报 / 任务','老板：审批 / 进展'],note:'重要操作先批准'},
];
export default function N20_PropertySolution(){
 return <ReferenceFrame stage="中介落地 · 谁配置、按什么顺序接入" title="负责人定规则，技术人员接软件，员工从工作台用" takeaway="先只读核对，再生成草稿，最后开放批准范围内的写入；下一页用员工汇报跑通第一条流程。">
  <div style={{display:'flex',gap:12,alignItems:'center',height:350}}>
   {STEPS.map((s,i)=><div key={s.title} style={{display:'flex',gap:12,alignItems:'center',flex:1}}>
    <section data-reference-panel style={{height:315,flex:1,borderRadius:24,border,boxShadow:shadow,padding:'24px 18px',background:colors.white,borderTop:'9px solid '+s.color}}>
     <p style={{fontSize:20,fontWeight:800,color:colors.rose}}>0{i+1} · {s.tag}</p>
     <h2 style={{fontSize:29,fontWeight:900,marginTop:22}}>{s.title}</h2>
     {s.lines.map(l=><p key={l} style={{fontSize:23,marginTop:22}}>{l}</p>)}
     <p style={{fontSize:21,fontWeight:800,marginTop:26,color:'#666'}}>{s.note}</p>
    </section>
    {i<3&&<span style={{fontSize:28,color:colors.rose}}>→</span>}
   </div>)}
  </div>
  <section data-reference-panel style={{height:160,borderRadius:24,background:colors.dark,color:colors.white,padding:'22px 28px'}}>
   <h2 style={{fontSize:28,fontWeight:900,color:colors.yellow}}>接入顺序：只读记录 → 生成草稿 → 允许范围内执行</h2>
   <p style={{fontSize:24,marginTop:18}}>普通派工按已批准规则执行；超预算、付款、合同先交负责人审批。</p>
   <p style={{fontSize:22,marginTop:13}}>财务先只读核对，不自动付款；客户资料按岗位限制查看。</p>
  </section>
 </ReferenceFrame>;
}
