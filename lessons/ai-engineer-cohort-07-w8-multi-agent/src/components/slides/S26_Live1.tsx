import { Live } from './_parts';

export default function S26_Live1() {
	return (
		<Live part="第 4 部分" n={1} title="同一个交班，交给一个团队" at={['handover.py · run()']}
		  cmd={['cd w8','uv run python handover.py --mode team']}
		  watch={['+ thread：协调者开了几个线程', '[Shift lead -> Note drafter]：每个任务里带了什么', 'R-103 返回 ERROR 后，协调者怎么报', 'R-106 有没有交给 RN', '最后一行：耗时、费用、线程数']} />
	);
}
