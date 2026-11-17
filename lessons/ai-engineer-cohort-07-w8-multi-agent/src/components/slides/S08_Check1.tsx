import { Quiz } from './_parts';

export default function S08_Check1() {
	return (
		<Quiz part="第 1 部分" q="这四件事，各放在哪一级？"
		  options={['① 把确认后的 note 导出成 PDF', '② 把一段已确认的观察整理成 Draft', '③ 交班：查六位住户、对照政策、决定谁交 RN', '④ R-106 的淤青要不要上报']}
		  answer="① Workflow　② Single call　③ Agent　④ 人（RN 和机构经理）"
		  why="④ 不是“用更强的模型”能解决的：这是责任，不是能力。" />
	);
}
