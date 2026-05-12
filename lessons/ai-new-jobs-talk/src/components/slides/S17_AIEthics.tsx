import DeepJobSlide from '../DeepJobSlide';
import { GOV_DEEP } from '../../data/jobs';
import { colors } from '../ui';

export default function S17_AIEthics() {
	return <DeepJobSlide job={GOV_DEEP[2]} accentColor={colors.govOrange} accentBg={colors.govBg} chapterTag="CHAPTER 2 · GOVERNANCE" />;
}
