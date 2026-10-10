import { Teaching } from '../Teaching';
import { Panel, colors } from '../deck';
export default function S45_Sources() {
  const items = [
    ['Hacking Growth · Sean Ellis / Morgan Brown', '快速测试、跨获客/激活/留存/收入的整体方向。', 'https://www.penguinrandomhouse.com/books/545936/hacking-growth-by-sean-ellis-founder-of-growthhackerscom-and-morgan-brown/'],
    ['Traction · Gabriel Weinberg / Justin Mares', '渠道选择与 Bullseye 的方向，课堂用小范围验证来聚焦。', 'https://www.penguinrandomhouse.com/books/319121/traction-by-gabriel-weinberg-and-justin-mares/9781591848363/'],
    ['HubSpot · Flywheel', '客户体验形成回流；给关键环节加力、减少摩擦。', 'https://www.hubspot.com/flywheel?product=breeze'],
    ['Reforge · Growth Loops', '这一轮的输出，如何成为下一轮的输入。', 'https://www.reforge.com/blog/growth-loops'],
    ['GrowthHackers · ICE', 'Impact / Confidence / Ease；官方支持文档采用平均值。', 'https://growthhackers.happyfox.com/kb/article/3-prioritizing-your-ideas-with-ice/'],
  ];
  return <Teaching tag="参考阅读" title="方法框架的来源" subtitle="书籍部分核对出版社公开介绍；课程是原创整理，未声称全书逐章复述。"><Panel style={{ padding: 28 }}><div style={{ display: 'grid', gap: 16 }}>{items.map(([name,desc,url]) => <div key={url}><a href={url} target="_blank" rel="noreferrer" style={{ fontSize: 27, fontWeight: 800, color: colors.dark }}>{name} ↗</a><p style={{ fontSize: 22, margin: '7px 0 0' }}>{desc}</p></div>)}</div></Panel></Teaching>;
}
