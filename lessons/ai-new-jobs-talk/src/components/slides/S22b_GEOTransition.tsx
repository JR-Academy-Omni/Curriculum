import DeepJobTransitionSlide from '../DeepJobTransitionSlide';
import { INDUSTRY_DEEP } from '../../data/jobs';
import { colors } from '../ui';

export default function S22b_GEOTransition() {
	return <DeepJobTransitionSlide job={INDUSTRY_DEEP[0]} accentColor={colors.industryCyan} accentBg={colors.industryBg} chapterTag="CHAPTER 4 · INDUSTRY" />;
}
