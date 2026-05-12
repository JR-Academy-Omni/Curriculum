import DeepJobTransitionSlide from '../DeepJobTransitionSlide';
import { TECH_DEEP } from '../../data/jobs';
import { colors } from '../ui';

export default function S07b_FDETransition() {
	return <DeepJobTransitionSlide job={TECH_DEEP[1]} accentColor={colors.techPurple} accentBg={colors.techBg} chapterTag="CHAPTER 1 · TECHNICAL" />;
}
