import DeepJobSlide from '../DeepJobSlide';
import { TECH_DEEP } from '../../data/jobs';
import { colors } from '../ui';

export default function S06_AIEngineer() {
	return <DeepJobSlide job={TECH_DEEP[0]} accentColor={colors.techPurple} accentBg={colors.techBg} chapterTag="CHAPTER 1 · TECHNICAL" />;
}
