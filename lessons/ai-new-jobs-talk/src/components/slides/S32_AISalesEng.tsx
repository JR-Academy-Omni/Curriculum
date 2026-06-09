import DeepJobSlide from '../DeepJobSlide';
import { MISSING_JOBS } from '../../data/jobs';
import { colors } from '../ui';

export default function S32_AISalesEng() {
	return <DeepJobSlide job={MISSING_JOBS[3]} accentColor={colors.industryCyan} accentBg={colors.industryBg} chapterTag="CHAPTER 4 · INDUSTRY" />;
}
