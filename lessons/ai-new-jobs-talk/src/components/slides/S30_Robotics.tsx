import DeepJobSlide from '../DeepJobSlide';
import { MISSING_JOBS } from '../../data/jobs';
import { colors } from '../ui';

export default function S30_Robotics() {
	return <DeepJobSlide job={MISSING_JOBS[1]} accentColor={colors.techPurple} accentBg={colors.techBg} chapterTag="CHAPTER 2 · TECHNICAL" />;
}
