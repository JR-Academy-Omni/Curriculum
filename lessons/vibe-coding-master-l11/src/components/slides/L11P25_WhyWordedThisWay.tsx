import { Page, PageHead, WhyTable, Note } from '../deck';

/**
 * P23 · 这七段为什么这么组词
 * 🔴 系列固定要求（prompt 原理层），不许省：学员要的不是这一份模板，
 *    是以后面对新场景自己能组词。
 * 讲完切回 P22 继续动手（§9.2）。
 */
export default function L11P23_WhyWordedThisWay() {
	return (
		<Page>
			<PageHead phase="talk" title="这七段为什么这么组词" sub="你要带走的不是这张模板，是以后自己能组词的那套理由。" />

			<WhyTable
				lineW={300}
				size={20}
				rows={[
					{ line: '目标用名词，不用动词', why: <>动词是过程，名词是产物。<strong>产物才能被检查，过程只能被相信。</strong></> },
					{ line: '判据必须来自它之外', why: <>让它自己判断自己做完没有，等于没有判据（L6 铁律）。</> },
					{ line: '边界写成否定句', why: <>「不许碰 X」比「只碰 Y」可靠：<strong>Y 你列不全，X 你划得清。</strong>显式收窄比穷举授权有效。</> },
					{ line: '预答写成问答，不写成背景资料', why: <>资料它会跳读；问答是它<strong>需要那个答案时能对上号</strong>的形状。</> },
					{ line: '出口要给一个具体文件名', why: <>「不确定就停下」是态度，「写进这个文件」才是动作。<strong>没有落点的指令等于没有指令。</strong></> },
					{ line: '状态写死成三个词', why: <>自然语言没法被脚本判。<strong>写死枚举值，是把「人来读」变成「机器来判」的唯一办法。</strong></>, star: true },
					{ line: '一定要有 needs-human 这档', why: <>二选一会逼它撒谎 —— 它没做成但确实正常结束了，于是填「成功」。<strong>第三个选项是给它说实话的余地。</strong></>, star: true },
					{ line: '重跑规则写在任务书里，不留给脚本', why: <>幂等不是脚本的属性，是<strong>这件事本身的属性</strong>。只有你知道它重跑安不安全。</> },
				]}
				style={{ flex: 1 }}
			/>

			<Note>讲完这一页切回上一页，继续写。</Note>
		</Page>
	);
}
