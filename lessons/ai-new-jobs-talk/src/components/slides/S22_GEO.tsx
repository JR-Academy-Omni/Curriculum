import DeepJobSlide from '../DeepJobSlide';
import { INDUSTRY_DEEP } from '../../data/jobs';
import { colors } from '../ui';

export default function S22_GEO() {
	return <DeepJobSlide job={INDUSTRY_DEEP[0]} accentColor={colors.industryCyan} accentBg={colors.industryBg} chapterTag="CHAPTER 3 · INDUSTRY" />;
}
