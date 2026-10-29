import { Teaching, Three } from '../Teaching';
import { Panel, Label, colors } from '../deck';
export default function P05(){return <Teaching tag="增长原理 05 · 价值与留存" title="用户为什么回来，为什么愿意推荐？" subtitle="满意是线索；实际复用、续费或推荐才是行为证据。先按你的产品自然周期观察。"><div style={{height:390}}><Three items={[
{title:'首次价值',text:'用自己的真实任务得到可用结果，才算完成激活。',detail:'预约工具：成功处理一次预约。注册或看完演示不等于获值。'},
{title:'重复价值',text:'下一个自然需求到来时，客户再次选择你。',detail:'高频工具看重复任务；低频咨询看下一次需求、续约或相关介绍。'},
{title:'推荐动机',text:'给朋友有用的结果、协作需要或相关奖励，让推荐有理由。',detail:'客户满意不保证主动推荐。观察邀请动作与新人的首次价值。'}
]}/></div><p style={{fontSize:22,margin:'18px 0 0'}}>看同一批客户：首次获值 → 到下一周期仍获值 → 实际推荐 → 新人获值；同时记录退单、投诉与支持工时。</p></Teaching>;}