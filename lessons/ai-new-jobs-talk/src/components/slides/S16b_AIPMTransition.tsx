import DeepJobTransitionSlide from '../DeepJobTransitionSlide';
import { GOV_DEEP } from '../../data/jobs';
import { colors } from '../ui';

export default function S16b_AIPMTransition() {
	return <DeepJobTransitionSlide job={GOV_DEEP[1]} accentColor={colors.govOrange} accentBg={colors.govBg} chapterTag="CHAPTER 3 · GOVERNANCE" />;
}
