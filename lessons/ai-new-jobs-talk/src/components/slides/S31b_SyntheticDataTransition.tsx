import DeepJobTransitionSlide from '../DeepJobTransitionSlide';
import { MISSING_JOBS } from '../../data/jobs';
import { colors } from '../ui';

export default function S31b_SyntheticDataTransition() {
	return <DeepJobTransitionSlide job={MISSING_JOBS[2]} accentColor={colors.techPurple} accentBg={colors.techBg} chapterTag="CHAPTER 2 · TECHNICAL" />;
}
