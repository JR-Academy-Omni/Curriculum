import DeepJobSlide from '../DeepJobSlide';
import { GOV_DEEP } from '../../data/jobs';
import { colors } from '../ui';

export default function S15_CAIO() {
	return <DeepJobSlide job={GOV_DEEP[0]} accentColor={colors.govOrange} accentBg={colors.govBg} chapterTag="CHAPTER 2 · GOVERNANCE" />;
}
