import { Quiz } from './_parts';

export default function S32_Check3() {
	return (
		<Quiz part="第 5 部分" q="Policy checker 发现 R-102 的 Draft 漏了“家属已通知”。它该怎么做？"
		  options={['A. 直接改 Draft', 'B. 自己调用 flag_for_rn_review', 'C. 在回报里写 ISSUE 和政策条款，交给协调者', 'D. 再派一个 drafter 重写']}
		  answer="C"
		  why="它只有读权限，也没有派活的权限。修改和升级都由协调者决定，事实以记录为准。" />
	);
}
