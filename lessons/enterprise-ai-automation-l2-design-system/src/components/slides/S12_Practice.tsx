import { DeckFrame, Panel, Steps } from '../kit';


export default function S12_Practice() {
	return (
		<DeckFrame tag="课堂实操" title="用自己的企业资料做一份报价单" subtitle="交付两份文件：可重复使用的品牌规范，以及一份可以给客户审阅的报价单 PDF。">
			<Panel><Steps size={28} items={['把客户需求和初步明细写成报价 Markdown。','确认数量、价格和条款，形成报价 SoT，再按品牌规范生成 HTML。','回到 SoT 改一个数量，重出 HTML，核对新旧总额。','导出 PDF，和同桌互看。请对方指出买什么、多少钱、何时到期、怎么接受。']} /></Panel>
		</DeckFrame>
	);
}
