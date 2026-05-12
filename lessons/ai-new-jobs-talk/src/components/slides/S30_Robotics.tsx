import DeepJobSlide from '../DeepJobSlide';
import { MISSING_JOBS } from '../../data/jobs';
import { colors } from '../ui';

export default function S30_Robotics() {
	return <DeepJobSlide job={MISSING_JOBS[1]} accentColor={colors.yellow} accentBg="#fef9d9" chapterTag="CHAPTER 4 · MISSING" />;
}
