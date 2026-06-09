import DeepJobTransitionSlide from '../DeepJobTransitionSlide';
import { MISSING_JOBS } from '../../data/jobs';
import { colors } from '../ui';

export default function S32b_AISalesEngTransition() {
	return <DeepJobTransitionSlide job={MISSING_JOBS[3]} accentColor={colors.industryCyan} accentBg={colors.industryBg} chapterTag="CHAPTER 4 · INDUSTRY" />;
}
