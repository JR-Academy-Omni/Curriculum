import TutorBio from './_TutorBio';
import { colors } from '../ui';

export default function L12_TutorBio_Ray() {
	return (
		<TutorBio
			name="Ray Ma"
			role="Cloud Solution Architect"
			org="ex-VMware · ex-Google offer"
			accentColor={colors.orange}
			icon="☁️"
			bullets={[
				'AWS Community 10+ 年（2010-至今）· 2014 AWS MVP',
				'Azure Technical Lead · 双云架构经验',
				'拿过 Google offer · VMware 资深架构师背景',
				'本课负责：AWS / Azure / DevOps / CI/CD 全段',
				'最擅长把"复杂云架构"讲到学员一听就懂',
			]}
			stack={['AWS', 'Azure', 'CI/CD', 'IaC', 'DevOps', 'Architecture']}
			quote="云不难，难的是知道为什么这个服务比那个服务便宜十倍。要会算，不要硬背。"
		/>
	);
}
