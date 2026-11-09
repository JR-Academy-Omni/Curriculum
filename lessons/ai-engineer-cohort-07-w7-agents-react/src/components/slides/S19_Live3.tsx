import { Live } from './_parts';

export default function S19_Live3() {
	return (
		<Live part="第 2 部分" at={["01_control.py · react_loop()"]} n={1} title="手写循环跑起来" cmd={["uv run python 01_control.py react", "uv run python 01_control.py react --task \"客户 C003 问：订单 A3072 能退款吗？\""]} watch={["两次任务，走的路径不一样", "每一步：先 Action，再 Observation", "循环结束的原因打印在最后", "换一下：在聊天框提议下一个任务"]} />
	);
}
