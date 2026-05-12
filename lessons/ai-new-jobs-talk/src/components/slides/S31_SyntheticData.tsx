import DeepJobSlide from '../DeepJobSlide';
import { MISSING_JOBS } from '../../data/jobs';
import { colors } from '../ui';

export default function S31_SyntheticData() {
	return <DeepJobSlide job={MISSING_JOBS[2]} accentColor={colors.yellow} accentBg="#fef9d9" chapterTag="CHAPTER 4 · MISSING" />;
}
