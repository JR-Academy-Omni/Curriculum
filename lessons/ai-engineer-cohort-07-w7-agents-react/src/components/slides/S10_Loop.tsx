import { Code, Page, Say } from './_parts';

export default function S10_Loop() {
	return (
		<Page part="第 1 部分" at={["01_control.py · react_loop()"]} title="第 3 级：多了一个循环，控制权就变了">
		  <Code size={26} code={"while 还没结束 and 步数 < 上限:\n    action = 模型(目前知道的一切, 工具列表)   # 模型决定\n    observation = 代码执行(action)            # 代码执行\n    把 action 和 observation 记下来"} />
		  <Say>路径事先不知道：查完订单发现超期，可能去查政策，也可能直接交人工。</Say>
		</Page>
	);
}
