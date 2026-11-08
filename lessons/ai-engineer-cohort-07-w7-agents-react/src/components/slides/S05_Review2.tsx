import { Quiz } from './_parts';

export default function S05_Review2() {
	return (
		<Quiz part="W6 复习" q="工具参数通过了 schema 校验，就可以执行了吗？" options={['A · 可以', 'B · 不一定，还要查授权']} answer="B。" why="格式对，不代表这个人有权限。今天的第 7 部分还会回到这里。" />
	);
}
