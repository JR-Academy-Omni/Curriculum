import DeepJobTransitionSlide from '../DeepJobTransitionSlide';
import { TECH_DEEP } from '../../data/jobs';
import { colors } from '../ui';

export default function S06b_AIEngineerTransition() {
	return <DeepJobTransitionSlide job={TECH_DEEP[0]} accentColor={colors.techPurple} accentBg={colors.techBg} chapterTag="CHAPTER 1 · TECHNICAL" />;
}
