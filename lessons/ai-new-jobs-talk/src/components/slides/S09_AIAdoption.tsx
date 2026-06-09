import DeepJobSlide from '../DeepJobSlide';
import { TECH_DEEP } from '../../data/jobs';
import { colors } from '../ui';

export default function S09_AIAdoption() {
	return <DeepJobSlide job={TECH_DEEP[3]} accentColor={colors.govOrange} accentBg={colors.govBg} chapterTag="CHAPTER 3 · GOVERNANCE" />;
}
