import LessonPage from '../LessonPage';

// Source and adaptation notes: PRD.md, page 20.
export default function S20_Review() {
 return <LessonPage {...{"tag": "EVALUATE + SAFEGUARD", "title": "AI 说好了以后，人看什么", "subtitle": "review 是对照契约和证据检查，不是再问一次“你确定吗”。", "mode": "grid", "blocks": [["范围", "Diff 是否只涉及已允许文件？有没有夹带改动？"], ["契约", "URL/API、业务含义、权限与状态是否改变？"], ["数据", "有没有密钥、真实个人资料、未确认事实或越权写回？"], ["路径", "成功、失败、拒绝和人工确认点是否被正确处理？"], ["检查", "测试真的运行了吗？结果、环境和未验证项是什么？"], ["结论", "Reviewer 写通过/未通过/未验证、理由及下一步。"]], "footer": "本地检查通过、人工 review 通过、已经部署是不同状态。"}} />;
}
