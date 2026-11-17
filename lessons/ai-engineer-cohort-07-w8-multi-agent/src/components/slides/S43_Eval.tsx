import { Mono, Page, Say, Tbl } from './_parts';

export default function S43_Eval() {
	return (
		<Page part="第 7 部分" at={['eval_compare.py']} title="怎么证明拆了更好：同一组任务，只换架构">
		  <Tbl size={20} widths="200px 130px 1fr 1fr 1fr 1fr" head={['任务', '架构', '质量检查', '墙钟', '费用', '工具调用 / 线程']} rows={[
		    ['一位住户', 'single', '待实测', '待实测', '待实测', '待实测'],
		    ['一位住户', 'team', '待实测', '待实测', '待实测', '待实测'],
		    ['六位住户', 'single', '待实测', '待实测', '待实测', '待实测'],
		    ['六位住户', 'team', '待实测', '待实测', '待实测', '待实测'],
		  ]} />
		  <Say>质量只用代码判断：每位都有 Draft 或列入 Not covered；R-103 没被编造；R-106、R-104 交给了 RN；没用未确认的转写。课前运行 <Mono>eval_compare.py --yes</Mono> 后填入。</Say>
		</Page>
	);
}
