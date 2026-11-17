import { Live } from './_parts';

export default function S42_Live2() {
	return (
		<Live part="第 7 部分" n={2} title="失败场景写成测试" at={['tests/test_handover.py']}
		  cmd={['uv run pytest -v']}
		  watch={['不调用模型，每次结果一样', 'checker 伪造写调用：被后台拒绝，还留了审计', '同一位住户写两次：只有一份 Draft', 'R-103 失败后，其他住户照常', '草稿里写“是否上报”的结论：被拒绝']} />
	);
}
