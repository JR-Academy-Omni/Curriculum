import { PartFrame, Agenda } from './_shared';

// 目录：今天八个部分；每部分开始前回到这张目录（C02–C08）
export default function S01b_Agenda() {
	return (
		<PartFrame part="frame" title="今天的目录">
			<Agenda />
		</PartFrame>
	);
}
