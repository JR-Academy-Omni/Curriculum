import { FestivalFrame, Diagram, Arrow, ChartText } from '../FestivalDiagram';
import { colors } from '../deck';

export default function F04_Automation() {
  const rows = [
    ['学生签到', '首次 + 活动规则', '发券 / 邀请奖励', '核对入账', colors.green],
    ['截图提交', '人工审核通过', '按规则奖励', '核对奖励记录', colors.green],
    ['报名后未到场', '同意提醒 + 临近活动', '发送到场提醒', '看送达 / 后续签到', colors.yellow],
    ['分享链接带来访问', '来源关联到报名', '记录内容获客', '看新报名 / 到场', colors.yellow],
  ];
  return <FestivalFrame title="网站 / App：让每一圈都有记录，也能触发下一步" subtitle="前两行是代码中已有规则；后两行是教学设计，未声称已部署自动化。" takeaway="自动化的单位是“事件 → 条件 → 动作 → 结果”，执行后还要回读。" evidence="依据：enrollment-lottery / festival-coupon / social-task；提醒及内容归因流程待实现验证。">
    <Diagram title="四条事件驱动流程：签到按规则奖励、截图人工审核奖励、未到场提醒计划、内容来源归因计划">{id => <>
      {['记录用户事件', '判断条件', '触发动作', '回读结果'].map((title, i) => <ChartText key={title} x={171 + i * 355} y={44} size={29}>{title}</ChartText>)}
      {rows.map(([event, rule, action, result, color], r) => <g key={event}>
        {[event, rule, action, result].map((text, c) => <g key={text}><rect x={28 + c * 355} y={80 + r * 112} width={288} height={82} rx={19} fill={color} stroke={colors.dark} strokeWidth={2} /><ChartText x={172 + c * 355} y={129 + r * 112} size={c === 1 ? 22 : 24}>{text}</ChartText>{c < 3 && <Arrow d={`M ${326 + c * 355} ${121 + r * 112} L ${365 + c * 355} ${121 + r * 112}`} arrowId={id} />}</g>)}
      </g>)}
      <ChartText x={320} y={527} size={20}>绿色：代码中已有规则（线上状态未验证）</ChartText><ChartText x={1040} y={527} size={20}>黄色：新增教学设计</ChartText>
    </>}</Diagram>
  </FestivalFrame>;
}
