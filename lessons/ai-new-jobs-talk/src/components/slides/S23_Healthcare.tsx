import DeepJobSlide from '../DeepJobSlide';
import { INDUSTRY_DEEP } from '../../data/jobs';
import { colors } from '../ui';

export default function S23_Healthcare() {
	return <DeepJobSlide job={INDUSTRY_DEEP[1]} accentColor={colors.industryCyan} accentBg={colors.industryBg} chapterTag="CHAPTER 3 · INDUSTRY" />;
}
