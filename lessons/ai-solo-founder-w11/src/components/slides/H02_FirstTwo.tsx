import { FestivalFrame, Diagram, Node, Arrow, ChartText } from '../FestivalDiagram';
import { colors } from '../deck';

export default function H02_FirstTwo() {
  return <FestivalFrame title="第一阶段：奖品把人吸引来，抽奖把人留下" subtitle="前两届：推广 + 奖品 + 抽奖，每人到场拿一张纸券；初期现场到场300人。" takeaway="获客之后，还有一道题：怎样让人愿意继续留在现场？" evidence="讲师口述回顾；300为初期现场到场人数，不作为每届人数；没有活动后留存与转化率数据。">
    <Diagram title="推广与奖品吸引学生到场，每人获得一张纸券，等待抽奖形成现场停留动力">{id => <>
      <Node x={30} y={90} title="推广 / 奖品" detail="给一个愿意来的理由" color={colors.yellow} />
      <Node x={550} y={90} title="学生到场" detail="口述回顾：300人" color={colors.green} />
      <Node x={1070} y={90} title="每人一张纸券" detail="获得抽奖资格" color={colors.blue} />
      <Arrow d="M 345 148 L 530 148" arrowId={id} /><Arrow d="M 865 148 L 1050 148" arrowId={id} />
      <Arrow d="M 1220 222 L 1220 320" arrowId={id} />
      <Node x={1070} y={340} title="等待开奖" detail="奖品兑现有时点" color={colors.red} />
      <Node x={550} y={340} title="留在活动现场" detail="等待带来停留动力" color={colors.green} />
      <Arrow d="M 1050 398 L 865 398" arrowId={id} />
      <ChartText x={275} y={368} size={27}>看到了什么？</ChartText>
      <ChartText x={275} y={415} size={25}>吸引到场 + 当场停留</ChartText>
      <ChartText x={700} y={514} size={26}>抽奖给了现场参与一个等待与兑现的时点。</ChartText>
    </>}</Diagram>
  </FestivalFrame>;
}
