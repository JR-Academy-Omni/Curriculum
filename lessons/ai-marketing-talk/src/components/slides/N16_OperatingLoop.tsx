import SystemDiagram from '../SystemDiagram';

export default function N16_OperatingLoop() {
  return <SystemDiagram {...{
  "stage": "中介公司 · 老板决定 → 管理 AI 派工",
  "title": "一个决定，拆成每个人能执行的任务",
  "takeaway": "收到任务 ≠ 答应做 ≠ 做完；做完还要交结果。",
  "nodes": [
    {
      "id": "manager",
      "x": 0,
      "y": 130,
      "w": 250,
      "h": 250,
      "title": "老板批准",
      "kind": "person",
      "sub": "东区推广计划"
    },
    {
      "id": "management",
      "x": 305,
      "y": 175,
      "w": 275,
      "h": 180,
      "title": "管理 Agent",
      "kind": "ai",
      "sub": "依据岗位和任务量\n拆解工作、确认派工"
    },
    {
      "id": "market",
      "x": 690,
      "y": 5,
      "w": 330,
      "h": 170,
      "title": "市场同事",
      "kind": "task",
      "rows": [
        "截止：今天 · 回执"
      ],
      "sub": "准备东区推广内容"
    },
    {
      "id": "sales",
      "x": 690,
      "y": 195,
      "w": 330,
      "h": 170,
      "title": "销售同事",
      "kind": "task",
      "rows": [
        "截止：今天 · 记录"
      ],
      "sub": "跟进东区客户咨询"
    },
    {
      "id": "ops",
      "x": 690,
      "y": 380,
      "w": 330,
      "h": 170,
      "title": "运营同事",
      "kind": "task",
      "rows": [
        "截止：明天 · 方案"
      ],
      "sub": "提交活动执行方案"
    },
    {
      "id": "board",
      "x": 1105,
      "y": 90,
      "w": 275,
      "h": 350,
      "title": "个人任务看板",
      "kind": "task",
      "sub": "分别跟进",
      "rows": [
        "已送达",
        "已接单",
        "已完成 + 结果"
      ]
    }
  ],
  "edges": [
    { "from": "manager", "to": "management" },
    {
      "from": "management",
      "to": "market"
    },
    {
      "from": "management",
      "to": "sales"
    },
    {
      "from": "management",
      "to": "ops"
    },
    {
      "from": "market",
      "to": "board"
    },
    {
      "from": "sales",
      "to": "board"
    },
    {
      "from": "ops",
      "to": "board"
    }
  ]
}} />;
}
