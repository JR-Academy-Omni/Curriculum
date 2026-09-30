import { PartnerProfile } from '../PartnerProfile';
import { colors } from '../deck';

export default function Slide02c_ANZ() {
  return <PartnerProfile title="ANZ" logo="anz.png" accent={colors.blue} logoWidth={400} logoHeight={400}
    summary="面向个人与企业客户提供银行及金融服务，业务涵盖日常账户、商业融资与支付等需求。"
    summaryEnglish="Banking and financial services for individuals and businesses, including everyday accounts, business finance and payment solutions."
    description="从企业起步到持续经营，通过商业银行服务与实用资源，支持企业管理资金、开展业务。"
    descriptionEnglish="Business banking services and practical resources support businesses as they start, manage their finances and grow."
    website={{ href: 'https://www.anz.com.au/about-us/our-company/', label: 'ANZ · 官方介绍' }} />;
}
