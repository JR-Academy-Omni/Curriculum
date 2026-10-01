import SystemDiagram from '../SystemDiagram';
import { colors } from '../deck';

export default function N01b_AudienceHook(){
 return <SystemDiagram stage="现场提问 · 从大家熟悉的用法开始" title="你们公司，现在用 AI 做什么？" takeaway="这些都很有用：但帮一个人干活，还不等于让公司运转。"
  nodes={[
   {id:'copy',x:0,y:95,w:300,h:240,title:'写文案',sub:'小红书 / 宣传内容',kind:'post'},
   {id:'image',x:355,y:95,w:300,h:240,title:'做图片',sub:'海报 / 产品配图',kind:'post'},
   {id:'mail',x:710,y:95,w:300,h:240,title:'写邮件',sub:'回复 / 邀约 / 跟进',kind:'doc'},
   {id:'meeting',x:1065,y:95,w:300,h:240,title:'总结会议',sub:'纪要 / 待办事项',kind:'task'},
  ]} labels={[{x:270,y:420,text:'从最熟悉的一件事开始：今天，要发一篇小红书。',color:colors.dark}]}/>;
}
