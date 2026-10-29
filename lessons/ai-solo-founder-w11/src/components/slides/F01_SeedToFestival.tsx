import { FestivalFrame, Diagram, Node, Arrow, ChartText } from '../FestivalDiagram';
import { colors } from '../deck';

export default function F01_SeedToFestival() {
  return <FestivalFrame title="后续飞轮设计：让活动成果进入下一届" subtitle="前三轮展示活动规模与运营迭代；活动后的内容与推荐回流，需要另外设计和追踪。" takeaway="回流的是信任、内容和新报名；增长从第一批真实体验开始。" evidence="依据：EVENT.md及现有源码；历史规模见讲师回顾。此图为回流设计，跨届回流效果未实测。">
    <Diagram title="种子学生经网站报名到场，分享体验与邀请同学，新增学生回到网站，内容资产继续积累">{id => <>
      <Node x={30} y={38} title="种子学生" detail="先找有落地需求的人" color={colors.yellow} />
      <Node x={550} y={38} title="网站报名 / 领票" detail="来源 + 报名记录" color={colors.blue} />
      <Node x={1070} y={38} title="到场获得价值" detail="交朋友 · 城市落地" color={colors.green} />
      <Arrow d="M 338 96 L 530 96" arrowId={id} /><Arrow d="M 858 96 L 1050 96" arrowId={id} />
      <Arrow d="M 1220 163 L 1220 316" arrowId={id} />
      <Node x={1070} y={336} title="分享体验 / 邀同学" detail="内容 + 可信推荐" color={colors.red} />
      <Node x={550} y={336} title="新学生" detail="看到价值，愿意来" color={colors.yellow} />
      <Node x={30} y={336} title="内容资产积累" detail="授权回顾 / 有用攻略" color={colors.white} />
      <Arrow d="M 1050 394 L 868 394" arrowId={id} />
      <Arrow d="M 1220 470 L 1220 494 Q 1220 514 1180 514 L 220 514 Q 180 514 180 485 L 180 473" arrowId={id} dashed />
      <ChartText x={650} y={505} size={19}>分享体验 → 可复用内容库存</ChartText>
      <Arrow d="M 700 324 L 700 177" arrowId={id} /><ChartText x={780} y={260}>下一圈</ChartText>
      <Arrow d="M 180 322 L 180 246 Q 180 217 224 217 L 490 217 Q 525 217 550 181" arrowId={id} dashed />
      <ChartText x={338} y={273} size={20}>官网内容回流：教学设计</ChartText>
    </>}</Diagram>
  </FestivalFrame>;
}
