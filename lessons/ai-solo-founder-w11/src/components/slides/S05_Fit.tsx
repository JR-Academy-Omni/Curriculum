import { Teaching, Three } from '../Teaching';
export default function S05_Fit() {
  return <Teaching tag="原理 03 · 适用条件" title="复制一个方法之前，先检查前提" subtitle="同一种玩法，可以在不同阶段产生完全不同的结果。"><Three items={[
    { title: '客户与任务', text: '谁现在需要？能否接触？他为什么愿意迈出下一步？', detail: '没有明确买家，再多曝光也可能只增加围观。' },
    { title: '价值与入口', text: '第一次得到什么？在哪个场景看见？有没有需要别人参与的真实任务？', detail: '单人任务，不需要硬塞协作邀请。' },
    { title: '成本与证据', text: '现金、销售工时、交付成本能否承担？做完后怎样判断？', detail: '免费层也有成本；功能存在不等于增长已被证明。' },
  ]} /></Teaching>;
}
