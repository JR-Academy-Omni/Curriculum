import { FestivalFrame, Diagram, Node, Arrow, ChartText } from '../FestivalDiagram';
import { colors } from '../deck';

export default function H03_TaskTickets() {
  return <FestivalFrame title="第二阶段：任务越多，纸券越多" subtitle="第3–5届：做更多任务，就拿更多纸券；很多人手里累积了很多券。" takeaway="更多券提高中奖机会，推动继续做任务；分享和邀请还能带来新人。" evidence="多券为讲师口述；参与循环与获客支线为教学拆解，分享带来的新增尚未独立归因。">
    <Diagram title="完成任务得到更多纸券，中奖机会增加后继续做任务；如果任务包含分享邀请，可能吸引同学并形成新增，需要记录验证">{id => <>
      <Node x={40} y={38} title="完成一个任务" detail="用户付出一次行动" color={colors.yellow} />
      <Node x={1040} y={38} title="得到更多纸券" detail="有效抽奖机会累积" color={colors.blue} />
      <Node x={1040} y={276} title="中奖机会增加" detail="愿意再做任务拿券" color={colors.green} />
      <Arrow d="M 360 96 L 1020 96" arrowId={id} /><Arrow d="M 1190 170 L 1190 256" arrowId={id} />
      <Arrow d="M 1020 334 L 450 334 Q 330 334 250 292 Q 180 255 180 174" arrowId={id} />
      <ChartText x={640} y={286} size={29}>参与循环</ChartText>
      <Arrow d="M 40 96 L 15 96 L 15 458 L 20 458" arrowId={id} dashed />
      <Node x={30} y={400} width={280} title="如任务含分享" detail="已有学生输出内容" color={colors.red} />
      <Node x={550} y={400} width={280} title="更多同学看见" detail="可能产生新需求" color={colors.white} />
      <Node x={1070} y={400} width={280} title="新增报名 / 到场？" detail="需要记录验证" color={colors.white} />
      <Arrow d="M 325 458 L 530 458" arrowId={id} dashed /><Arrow d="M 845 458 L 1050 458" arrowId={id} dashed />
    </>}</Diagram>
  </FestivalFrame>;
}
