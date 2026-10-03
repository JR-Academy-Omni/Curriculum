import LessonPage from '../LessonPage';

// Source and adaptation notes: PRD.md, page 15.
export default function S15_Rules() {
 return <LessonPage {...{"tag": "GROUND · 复用规则分层", "title": "Rules 少而可执行", "subtitle": "按职责组织；第一周先写最少必要规则。", "mode": "grid", "blocks": [["数据", "只用 synthetic data；不向 Prompt、日志或仓库写入密钥/真实个人资料。"], ["契约", "保持现有 URL/API 和业务含义；不替人确认事实。"], ["改动", "只改允许文件；保留其他未提交工作，不自动清理或回退。"], ["检查", "报告实际运行结果、未验证项；遇到未知业务或超范围改动先停。"]], "footer": "规则必须能够判断“遵守 / 违反”，不用“尽量优秀”这样的口号。"}} />;
}
