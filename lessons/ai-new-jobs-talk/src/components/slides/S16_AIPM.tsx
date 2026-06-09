import DeepJobSlide from '../DeepJobSlide';
import { GOV_DEEP } from '../../data/jobs';
import { colors } from '../ui';

export default function S16_AIPM() {
	return <DeepJobSlide job={GOV_DEEP[1]} accentColor={colors.govOrange} accentBg={colors.govBg} chapterTag="CHAPTER 3 · GOVERNANCE" />;
}
