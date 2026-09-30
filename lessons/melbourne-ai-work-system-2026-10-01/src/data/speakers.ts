/** Source: research/canva-transcript.md, pages 4–7, read 2026-09-30.
 * Portraits: original photos supplied by the user on 2026-09-30; see research/assets.md.
 * Order follows the user-supplied Canva presentation. Missing presentation URLs
 * stay undefined; the content layer renders text, never an invented link.
 */
export interface Speaker {
  id: string;
  name: string;
  role: string;
  affiliation?: string;
  title: string;
  subtitle?: string;
  image: string;
  accent: string;
  portraitPosition?: string;
  circularPortrait?: boolean;
  topics: { title: string; description?: string }[];
  href?: string;
}

export const speakers: Speaker[] = [
  {
    id: 'michael', name: 'Michael', role: '澳洲 VET 持证培训师',
    title: 'AI Marketing 自动化运营', image: 'michael-portrait.jpg', accent: '#38B6FF',
    portraitPosition: '50% 0%',
    topics: [
      { title: '内容生产', description: '选题与多媒体创作' },
      { title: '线索管理', description: '多渠道收集与分类' },
      { title: '转化优化', description: '客户跟进与数据复盘' },
    ],
  },
  {
    id: 'lightman', name: 'Lightman', role: '匠人学院创始人 / CEO',
    title: '企业如何实现 AI 自动化？', subtitle: '分享匠人正在推进的 AI 工作系统实践',
    image: 'lightman-portrait.jpg', accent: '#FFDE59',
    portraitPosition: '50% 0%',
    topics: [{ title: '管理协调' }, { title: '业务流程' }, { title: '人机分工' }],
  },
  {
    id: 'li-min', name: '李敏', role: '资深注册会计师',
    affiliation: '李敏税务会计事务所创始人 · Bupa 私人医疗保险公司代表',
    title: 'AI 对会计行业的影响', image: 'li-min-portrait.jpg', accent: '#7ED957',
    portraitPosition: '50% 0%',
    topics: [
      { title: '提升效率', description: '数据整理与报表' },
      { title: '识别风险', description: '异常分析与合规问题' },
      { title: '专业升级', description: '判断、分析与咨询' },
    ],
    href: '../melbourne-ai-work-system-2026-10-01-li-min/',
  },
  {
    id: 'michael-yang', name: 'Michael Yang', role: 'Lending Area Manager, Melbourne CBD',
    title: '从 AI 到金融智能', subtitle: '探索未来置业之路', image: 'michael-yang-portrait.jpg', accent: '#ff5757',
    circularPortrait: true,
    topics: [
      { title: '市场洞察', description: '房价、租金与利率' },
      { title: '财务评估', description: '贷款成本与现金流' },
      { title: '规划决策', description: '预算优化与风险识别' },
    ],
  },
];

export const companyIntroUrl = 'https://australiaitgroup.github.io/presentation/company-intro/#1';
