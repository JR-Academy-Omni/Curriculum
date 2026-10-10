import { Teaching, Three } from '../Teaching';
export default function S42_Selection() {
  return <Teaching tag="迁移 · 教学模拟" title="服务、SaaS、咨询，各自从哪里起手？" subtitle="按项目的客户任务与成本选一个动作，不必从同一个平台开始。"><Three items={[
    { title: '装修跟进服务', text: '温暖介绍 → 脱敏交付样例 → 小范围付费试点', detail: '先别用：没有自然高频任务的连续打卡。' },
    { title: '垂直文档 SaaS', text: '具体搜索问题 → 小检查器 → 第一任务模板', detail: '先检查：免费使用的边际成本与自然付费需求。' },
    { title: '专业咨询', text: '行业合作方 → 小诊断或演示课 → 明确范围的试点', detail: '先别用：没有访客基础的再营销。' },
  ]} /></Teaching>;
}
