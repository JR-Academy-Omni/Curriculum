import DeepJobTransitionSlide from '../DeepJobTransitionSlide';
import { GOV_DEEP } from '../../data/jobs';
import { colors } from '../ui';

export default function S15b_CAIOTransition() {
	return <DeepJobTransitionSlide job={GOV_DEEP[0]} accentColor={colors.govOrange} accentBg={colors.govBg} chapterTag="APPENDIX · CAIO" />;
}
