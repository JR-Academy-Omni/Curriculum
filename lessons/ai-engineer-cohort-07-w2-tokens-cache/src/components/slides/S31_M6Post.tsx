import { Slide, Inner, Title, colors } from '../ui';
import { col, ModuleTag, Note, QuizCards, type QuizItem } from './_shared';

const items: QuizItem[] = [
	{ q: '公司官网的退货政策 FAQ', ok: true, a: '可以 · key 带政策版本，政策一更新就失效' },
	{ q: '「我这个月工资多少？」', ok: false, a: '不能跨用户复用 · 含 PII，原则上不缓存' },
	{ q: '实时库存查询的结果', ok: false, a: '基本不行 · 对新鲜度要求高，最多用极短的 TTL' },
	{ q: '被用户投诉答错的那条缓存答案', ok: false, a: '立刻失效 · 要能按反馈清除，避免错误继续扩散' },
];

// M6 后测：这个能缓存吗？
export default function S31_M6Post() {
	return (
		<Slide bg={colors.white}>
			<Inner style={col}>
				<ModuleTag id="M6" phase="post" />
				<Title size="50px" style={{ marginBottom: 8 }}>这个能放进 Response Cache 吗？</Title>
				<Note style={{ marginBottom: 20 }}>先举手投票，再点卡片看答案；能缓存的，说出 key 里必须带什么</Note>
				<QuizCards items={items} cols={2} minHeight={150} />
			</Inner>
		</Slide>
	);
}
