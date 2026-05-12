import DeepJobTransitionSlide from '../DeepJobTransitionSlide';
import { INDUSTRY_DEEP } from '../../data/jobs';
import { colors } from '../ui';

export default function S24b_FinanceComplianceTransition() {
	return <DeepJobTransitionSlide job={INDUSTRY_DEEP[2]} accentColor={colors.industryCyan} accentBg={colors.industryBg} chapterTag="CHAPTER 3 · INDUSTRY" />;
}
