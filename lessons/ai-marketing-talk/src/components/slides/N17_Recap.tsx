import SystemDiagram from '../SystemDiagram';

export default function N17_Recap() {
  return <SystemDiagram {...{
  "stage": "中介公司 · 从目标到结果的完整闭环",
  "title": "企业自动化的完整一圈",
  "takeaway": "把任务发到人，把结果收回来；出问题就找人处理。",
  "nodes": [
    {
      "id": "event",
      "x": 0,
      "y": 185,
      "w": 185,
      "h": 135,
      "title": "目标 / 汇报",
      "kind": "person",
      "sub": "工作入口"
    },
    {
      "id": "sot",
      "x": 240,
      "y": 185,
      "w": 185,
      "h": 135,
      "title": "看确认资料",
      "kind": "doc",
      "sub": "只看允许看的"
    },
    {
      "id": "plan",
      "x": 480,
      "y": 185,
      "w": 185,
      "h": 135,
      "title": "管理 AI 安排",
      "kind": "ai",
      "sub": "选择流程"
    },
    {
      "id": "approve",
      "x": 720,
      "y": 185,
      "w": 185,
      "h": 135,
      "title": "批准后派工",
      "kind": "gate",
      "sub": "只做允许做的"
    },
    {
      "id": "execute",
      "x": 960,
      "y": 185,
      "w": 185,
      "h": 135,
      "title": "工具 / 员工",
      "kind": "store",
      "sub": "实际行动"
    },
    {
      "id": "proof",
      "x": 1195,
      "y": 185,
      "w": 185,
      "h": 135,
      "title": "检查结果",
      "kind": "task",
      "sub": "结果记下来"
    },
    {
      "id": "fail",
      "x": 730,
      "y": 425,
      "w": 415,
      "h": 115,
      "title": "出错 → 记录 → 找人",
      "kind": "task",
      "sub": "先查上一轮，别重复操作"
    }
  ],
  "edges": [
    {
      "from": "event",
      "to": "sot"
    },
    {
      "from": "sot",
      "to": "plan"
    },
    {
      "from": "plan",
      "to": "approve"
    },
    {
      "from": "approve",
      "to": "execute"
    },
    {
      "from": "execute",
      "to": "proof"
    },
    {
      "from": "proof",
      "to": "sot",
      "start": "top",
      "end": "top",
      "path": "M1287 185L1287 80L332 80L332 185",
      "label": "确认结果 → 更新进展 → 安排下一步",
      "lx": 805,
      "ly": 80
    },
    {
      "from": "execute",
      "to": "fail",
      "start": "bottom",
      "end": "top",
      "dashed": true
    }
  ]
}} />;
}
