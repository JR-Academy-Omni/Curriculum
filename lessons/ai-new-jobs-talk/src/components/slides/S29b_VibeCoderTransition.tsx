import DeepJobTransitionSlide from '../DeepJobTransitionSlide';
import { MISSING_JOBS } from '../../data/jobs';
import { colors } from '../ui';

export default function S29b_VibeCoderTransition() {
	return <DeepJobTransitionSlide job={MISSING_JOBS[0]} accentColor={colors.techPurple} accentBg={colors.techBg} chapterTag="CHAPTER 2 · TECHNICAL" />;
}
