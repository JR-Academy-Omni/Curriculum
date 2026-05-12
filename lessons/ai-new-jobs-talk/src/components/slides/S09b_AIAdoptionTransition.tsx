import DeepJobTransitionSlide from '../DeepJobTransitionSlide';
import { TECH_DEEP } from '../../data/jobs';
import { colors } from '../ui';

export default function S09b_AIAdoptionTransition() {
	return <DeepJobTransitionSlide job={TECH_DEEP[3]} accentColor={colors.techPurple} accentBg={colors.techBg} chapterTag="CHAPTER 1 · TECHNICAL" />;
}
