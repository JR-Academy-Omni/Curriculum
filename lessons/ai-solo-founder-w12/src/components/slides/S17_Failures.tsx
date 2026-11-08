import { DeckFrame, Table, Takeaway, colors } from '../kit';

export default function S17_Failures() {
	return <DeckFrame tag="04 · 它会怎么失败" title="没人看着的时候，它会这样断掉" subtitle="前四种的共同点：都会给你一个「跑完了」的样子。第五种连样子都没有。" accent={colors.red}>
		<Table size={21} widths="1fr 1.5fr 1.5fr" head={['怎么断', '你会看到什么', '提前补什么']} rows={[
			['网络 / 网页打不开', '一份照样很完整的产出', '回执里必须附来源；打不开就写 needs-human'],
			['凭证过期', '从某天起再也没成功过，没有任何提醒', '日报每天都发；连续两天没有 done 就叫你'],
			['环境没准备好', '找不到文件、缺依赖，Agent 绕过去了', '任务卡写清输入在哪；缺了就停'],
			['限流 / 超时', '只做了一半', '分小批；进度写进文件'],
			['额度用完', '什么都没有：它压根没跑', '设用量上限 + 「没交回执 = 报警」'],
		]} />
		<div style={{ marginTop: 20 }}><Takeaway>绿灯只说明程序正常结束了，不说明事情做成了。</Takeaway></div>
	</DeckFrame>;
}
