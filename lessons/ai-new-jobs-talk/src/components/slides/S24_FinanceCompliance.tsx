import DeepJobSlide from '../DeepJobSlide';
import { INDUSTRY_DEEP } from '../../data/jobs';
import { colors } from '../ui';

export default function S24_FinanceCompliance() {
	return <DeepJobSlide job={INDUSTRY_DEEP[2]} accentColor={colors.industryCyan} accentBg={colors.industryBg} chapterTag="CHAPTER 4 · INDUSTRY" />;
}
