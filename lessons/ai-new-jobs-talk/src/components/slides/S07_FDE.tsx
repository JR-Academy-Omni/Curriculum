import DeepJobSlide from '../DeepJobSlide';
import { TECH_DEEP } from '../../data/jobs';
import { colors } from '../ui';

export default function S07_FDE() {
	return <DeepJobSlide job={TECH_DEEP[1]} accentColor={colors.techPurple} accentBg={colors.techBg} chapterTag="CHAPTER 1 · TECHNICAL" />;
}
