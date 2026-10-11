import { FestivalFrame, Diagram, Node, Arrow, ChartText } from '../FestivalDiagram';
import { colors } from '../deck';

export default function F02_TeamReferral() {
  return <FestivalFrame title="邀请飞轮：奖励真实到场，降低一个人来的顾虑" subtitle="组队与个人邀请是两套路径：组队看全员签到；个人邀请看被邀请人签到。" takeaway="OPC 借鉴：把奖励绑定获值动作，再让获值的人邀请下一位。" evidence="依据：festival-team / enrollment-lottery；已核实源码能力，未核实本场配置与增长效果。">
    <Diagram title="已报名学生生成邀请信息，同学报名签到后按条件奖励，获得价值的新学生进入下一轮邀请">{id => <>
      <Node x={25} y={42} width={250} title="已报名学生" detail="与同学一起更安心" color={colors.yellow} />
      <Node x={380} y={42} width={260} title="邀请码 / 邀请入口" detail="绑定是谁带来的" color={colors.blue} />
      <Node x={755} y={42} width={250} title="同学完成报名" detail="独立报名记录" color={colors.white} />
      <Node x={1130} y={42} width={250} title="同学真实签到" detail="从注册走向获值" color={colors.green} />
      <Arrow d="M 292 100 L 360 100" arrowId={id} /><Arrow d="M 658 100 L 735 100" arrowId={id} /><Arrow d="M 1023 100 L 1110 100" arrowId={id} />
      <Node x={1080} y={330} title="按条件奖励" detail="个人邀请 / 组队券" color={colors.red} />
      <Arrow d="M 1255 176 L 1255 308" arrowId={id} /><ChartText x={1190} y={255} size={21}>组队：满员 + 全签到</ChartText>
      <Node x={560} y={330} title="体验过的新学生" detail="愿意介绍下一位" color={colors.green} />
      <Arrow d="M 1060 388 L 880 388" arrowId={id} />
      <Arrow d="M 540 388 L 460 388 Q 415 388 415 330 L 415 180" arrowId={id} /><ChartText x={405} y={447}>下一圈邀请</ChartText>
      <ChartText x={715} y={502} size={25}>看：每位获值学生，实际带来多少位新获值学生？</ChartText>
    </>}</Diagram>
  </FestivalFrame>;
}
