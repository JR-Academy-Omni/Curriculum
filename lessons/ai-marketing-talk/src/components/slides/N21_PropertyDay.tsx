import ReferenceFrame from '../ReferenceFrame';
import { colors, border, shadow } from '../deck';

// Static UI mock, explicitly not a functioning company login or integration.
export default function N21_PropertyDay(){
 return <ReferenceFrame stage="公司案例 · AI 入口 · 界面示意" title="员工从哪里用？公司的 AI 工作台" takeaway="聊天是入口，背后是公司资料、固定做法、任务和审批。">
  <div style={{display:'grid',gridTemplateColumns:'900px 450px',gap:30,height:530}}>
   <section data-reference-panel style={{height:530,minHeight:0,borderRadius:24,border,boxShadow:shadow,background:colors.white,overflow:'hidden'}}>
    <div style={{height:60,background:colors.dark,color:colors.white,padding:'17px 24px',fontSize:22,fontWeight:800}}>员工入口 · 公司账号登录 · 网页 / 手机</div>
    <div style={{display:'grid',gridTemplateColumns:'180px 1fr',height:466}}>
     <nav aria-label="示意工作台导航" style={{background:colors.warmBg,padding:'25px 16px',borderRight:'1px solid #ccc'}}>
      {['AI 工作助手','我的任务','提交汇报','共用资料'].map((t,i)=><div key={t} style={{borderRadius:12,background:i===0?colors.yellow:'transparent',padding:'13px 9px',marginBottom:12,fontSize:23,fontWeight:800}}>{t}</div>)}
      <p style={{fontSize:18,lineHeight:1.6,color:'#666',marginTop:30}}>只看岗位<br/>允许的资料</p>
     </nav>
     <div style={{padding:20}}>
      <h2 style={{fontSize:28,fontWeight:900}}>工作助手</h2>
      <div style={{borderRadius:18,background:colors.warmBg,padding:'14px 18px',marginTop:16,fontSize:24,lineHeight:1.5}}>今天跟进了东区客户，活动费用待核对。</div>
      <div style={{borderRadius:18,background:colors.dark,color:colors.white,padding:'14px 18px',marginTop:16,fontSize:23,lineHeight:1.55}}>
       费用单据在哪？核对负责人是谁？<br/><span style={{color:colors.yellow}}>待办草稿：财务核对费用 · 待确认</span>
      </div>
      <p style={{fontSize:18,color:'#666',marginTop:12}}>依据：项目记录、岗位分工 · 按当前账号范围查看</p>
      <div style={{display:'flex',justifyContent:'space-between',border:'1px solid #aaa',borderRadius:14,padding:'12px 16px',marginTop:18,fontSize:22,color:'#666'}}><span>问工作问题 / 提交汇报…</span><span style={{color:colors.rose,fontWeight:900}}>↑</span></div>
     </div>
    </div>
   </section>
   <section data-reference-panel style={{height:530,minHeight:0,borderRadius:24,border,boxShadow:shadow,background:colors.warmBg,padding:20}}>
    <p style={{fontSize:18,fontWeight:800,color:colors.rose}}>另一个角色视图 · 仅老板可见</p>
    <h2 style={{fontSize:28,fontWeight:900,marginTop:12}}>老板的审批与经营进展</h2>
    <div style={{borderRadius:18,background:colors.white,padding:14,marginTop:18}}>
     <p style={{fontSize:24,fontWeight:800}}>需要我决定</p>
     <p style={{fontSize:22,lineHeight:1.4,marginTop:8}}>东区推广计划 · 待批准<br/>活动预算 · 待确认</p>
    </div>
    <div style={{borderRadius:18,background:colors.white,padding:14,marginTop:14}}>
     <p style={{fontSize:24,fontWeight:800}}>各部门进展</p>
     <p style={{fontSize:22,lineHeight:1.4,marginTop:8}}>市场：计划草稿已提交<br/>财务：等待费用单据</p>
    </div>
    <p style={{fontSize:18,lineHeight:1.5,color:'#666',marginTop:16}}>两种角色视图 · 示意，尚未接通软件。</p>
   </section>
  </div>
 </ReferenceFrame>;
}
