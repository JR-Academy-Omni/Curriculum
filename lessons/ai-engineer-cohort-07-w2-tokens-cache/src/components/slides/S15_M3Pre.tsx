import { TestSlide } from './_shared';

// M3 前测：塞一个大文件只回 OK，会不会慢、慢在哪
export default function S15_M3Pre() {
	return (
		<TestSlide
			module="M3"
			kind="pre"
			question="通过管道塞给 Claude Code 一个大文件，只让它回一个 “OK”。会变慢吗？慢在哪？"
			items={['不会变慢 —— 输出一样只有一个词', '会变慢 —— 第一个字出来得更晚（TTFT 变长）', '会变慢 —— 字一个一个写得更慢']}
		/>
	);
}
