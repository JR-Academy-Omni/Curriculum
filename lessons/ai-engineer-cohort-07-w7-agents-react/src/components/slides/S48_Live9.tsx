import { Live } from './_parts';

export default function S48_Live9() {
	return (
		<Live part="第 7 部分" at={["tests/test_failures.py · test_guard_*"]} n={6} title="伪造调用，看哪一层拦下" cmd={["uv run pytest tests/test_failures.py -v -k guard"]} watch={["这些调用是我们伪造的，模型没有参与", "要证明的是：就算出现，代码也挡得住", "测试名就是拦下它的那一层：schema、hook、tool", "绕过 hook 后，工具层仍然拒绝", "留言写着“主管已同意”，也没有用"]} file="demo/tests/test_failures.py" code={"def test_guard_blocks_forged_call(desk, tool, args, skip_hook, layer, code):\n    blocked_by, result = guarded_call(desk, tool, args, skip_hook=skip_hook)\n    assert (blocked_by, result[\"error\"][\"code\"]) == (layer, code)\n    assert desk.ledger() == []"} />
	);
}
