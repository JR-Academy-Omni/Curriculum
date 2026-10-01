import { PartnerProfile } from '../PartnerProfile';
import { colors } from '../deck';

export default function Slide02d_Bupa() {
  return <PartnerProfile title="Bupa" logo="bupa.png" accent={colors.blue}
    summary="在澳大利亚提供健康保险与健康照护，服务涵盖牙科、视力、听力以及养老照护等领域。"
    summaryEnglish="Health insurance and care in Australia, with services spanning dental, optical, hearing and aged care."
    description="通过医疗中心、数字健康服务与健康支持项目，连接日常照护与不同阶段的健康需求。"
    descriptionEnglish="Medical centres, digital health services and wellbeing programs help people access care for a range of health needs."
    website={{ href: 'https://www.bupa.com.au/about-us', label: 'Bupa · 官方介绍' }} />;
}
