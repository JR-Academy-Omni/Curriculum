import { PartnerProfile } from '../PartnerProfile';
import { colors } from '../deck';

export default function Slide02a_JRAcademy() {
  return <PartnerProfile title="JR Academy 匠人学院" logo="jr-academy-logo.png" accent={colors.yellow}
    summary={'面向华人学习者与科技从业者的\nIT 与 AI 教育平台。'}
    summaryEnglish="IT and AI education for Chinese-speaking learners and tech professionals."
    description={'通过课程、项目实践与职业支持，\n帮助学习者提升技能、连接行业。'}
    descriptionEnglish="Courses, hands-on projects and career support to build skills and industry connections." />;
}
