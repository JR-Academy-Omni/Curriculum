import DeepJobTransitionSlide from '../DeepJobTransitionSlide';
import { GOV_DEEP } from '../../data/jobs';
import { colors } from '../ui';

export default function S17b_AIEthicsTransition() {
	return <DeepJobTransitionSlide job={GOV_DEEP[2]} accentColor={colors.govOrange} accentBg={colors.govBg} chapterTag="CHAPTER 2 · GOVERNANCE" />;
}
