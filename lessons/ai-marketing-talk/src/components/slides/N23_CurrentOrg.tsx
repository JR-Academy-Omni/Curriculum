import ReferenceFrame from '../ReferenceFrame';
import OrgNode from '../OrgNode';
import { colors } from '../deck';

const ROLES=[['市场负责人','市场同事','内容 / 活动 / 咨询'],['财务负责人','财务同事','发票 / 费用 / 账目'],['业务负责人','经纪团队','客户 / 房源 / 跟进'],['行政负责人','行政同事','日历 / 文件 / 安排']];
export default function N23_CurrentOrg(){
 return <ReferenceFrame stage="组织对照 · 传统公司 · 模拟中介" title="现在的公司：人管理人，逐层收汇报" takeaway="下一页：老板仍定方向，AI承接汇总、派工和追踪；执行 Agent 调用 Skills，员工直接向管理层汇报。">
  <p style={{fontSize:20,color:'#666'}}>黄色标记“人” · 示意职责，不代表真实公司人数或汇报关系</p>
  <svg width="1380" height="554" style={{position:'absolute',inset:0}} aria-hidden="true">
   <path d="M690 155V195H180M690 195H1200" stroke={colors.dark} strokeWidth="3" fill="none"/>
   {ROLES.map((r,i)=><path key={r[0]} d={'M'+(180+i*340)+' 195V235M'+(180+i*340)+' 340V410'} stroke={colors.dark} strokeWidth="3"/>)}
  </svg>
  <OrgNode x={490} y={55} w={400} h={100} title="老板 / 创始人" sub="目标、预算、经营决定"/>
  {ROLES.map((r,i)=><div key={r[0]}><OrgNode x={30+i*340} y={235} h={105} title={r[0]} sub="分工、确认、收进展"/><OrgNode x={30+i*340} y={410} h={105} title={r[1]} sub={r[2]}/></div>)}
  <p style={{position:'absolute',left:530,top:177,fontSize:21,fontWeight:800,color:colors.rose}}>任务向下，汇报向上</p>
  <p style={{position:'absolute',left:400,top:361,fontSize:23,fontWeight:800,color:colors.rose}}>跨部门的事，靠负责人再协调</p>
 </ReferenceFrame>;
}
