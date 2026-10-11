import { MotionArrow } from '../MotionArrow';
import { ChartFrame, ChartDefs, ChartNode, ChartArrow } from '../GrowthChart';
import { colors } from '../deck';
export default function V03_TrackedJourney(){return <ChartFrame tag="增长系统 · Website / App" title="链接带人回来，行为数据让循环看得见" subtitle="同一条旅程：用户得到价值，系统记录来源，再触发下一步" footnote="追踪与自动化方案示意，尚未接入真实后台。去重、获得必要授权；分享次数不能替代新用户获值人数。">
  <svg viewBox="0 0 1400 530" role="img" aria-label="用户从朋友链接进入网站，完成任务并分享；记录来源和关键行为，检查邀请回流并触发相应动作" style={{width:1400,height:530}}>
    <ChartDefs id="tracking-arrow"/>
    <text x="12" y="37" fontSize="22" fontWeight="800" fill={colors.dark}>用户看到的旅程</text>
    <ChartArrow id="tracking-arrow" d="M 292 113 L 355 113"/><ChartArrow id="tracking-arrow" d="M 649 113 L 715 113"/><ChartArrow id="tracking-arrow" d="M 1009 113 L 1075 113"/>
    <ChartNode x={12} y={57} w={280} title="朋友分享链接" detail="带推荐来源" fill={colors.yellow}/>
    <ChartNode x={370} y={57} w={280} title="网站 / App 承接" detail="看见同一份价值承诺"/>
    <ChartNode x={730} y={57} w={280} title="完成核心任务" detail="领取成果 / 使用工具" fill={colors.green}/>
    <ChartNode x={1090} y={57} w={280} title="展示 / 邀请朋友" detail="生成可追踪的新链接" fill={colors.blue}/>
    {[152,510,870,1230].map(x=><MotionArrow key={x} d={`M ${x} 176 L ${x} 251`} strokeWidth={2} dashArray="6 6" delay={.25}/>)}
    <rect x="12" y="259" width="1358" height="111" rx="24" fill={colors.dark}/>
    {[[152,'谁带来的？','来源与推荐关系'],[510,'是谁进来了？','去重身份与访问'],[870,'得到价值了吗？','完成关键行为'],[1230,'新人回来了吗？','回流后继续获值']].map(([x,title,detail])=><g key={x}><text x={x} y="300" textAnchor="middle" fontSize="25" fontWeight="800" fill={colors.yellow}>{title}</text><text x={x} y="339" textAnchor="middle" fontSize="21" fill={colors.white}>{detail}</text></g>)}
    <ChartArrow id="tracking-arrow" d="M 510 378 L 510 411"/><ChartArrow id="tracking-arrow" d="M 870 378 L 870 411"/><ChartArrow id="tracking-arrow" d="M 1230 378 L 1230 411"/>
    <ChartNode x={370} y={427} w={280} h={84} title="未完成 → 提醒" fill={colors.white}/><ChartNode x={730} y={427} w={280} h={84} title="已获值 → 分享入口" fill={colors.white}/><ChartNode x={1090} y={427} w={280} h={84} title="新人获值 → 奖励" fill={colors.white}/>
    <text x="12" y="463" fontSize="22" fontWeight="800" fill={colors.dark}>行为触发自动化</text><text x="12" y="519" fontSize="21" fill={colors.dark}>有退出 / 频次 / 成本控制</text>
    <text x="760" y="40" textAnchor="middle" fontSize="19" fill={colors.dark}>新用户沿同一路径获值 ↺</text><ChartArrow id="tracking-arrow" d="M 1270 35 C 1335 -3 235 -3 167 48" dash/>
  </svg>
</ChartFrame>;}
