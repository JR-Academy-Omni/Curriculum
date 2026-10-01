import SystemDiagram from '../SystemDiagram';

export default function N15_Distribution() {
  return <SystemDiagram {...{
  "stage": "中介公司 · 员工向管理 Agent 汇报",
  "title": "员工直接向 AI 汇报，经理只接需要决定的事",
  "takeaway": "AI 整理和追问，员工提供证据，拿不准的事交给经理。",
  "nodes": [
    {
      "id": "report",
      "x": 0,
      "y": 75,
      "w": 335,
      "h": 320,
      "title": "员工汇报",
      "kind": "doc",
      "sub": "销售同事 · 模拟",
      "rows": [
        "“东区客户已跟进，",
        "活动费用待核对。”"
      ]
    },
    {
      "id": "ask",
      "x": 470,
      "y": 90,
      "w": 310,
      "h": 260,
      "title": "管理 Agent 补问",
      "kind": "ai",
      "sub": "哪个项目？单据在哪？\n财务负责人？截止时间？"
    },
    {
      "id": "record",
      "x": 930,
      "y": 10,
      "w": 420,
      "h": 300,
      "title": "整理成工作记录",
      "kind": "task",
      "sub": "确认后写入",
      "rows": [
        "东区客户：已跟进",
        "活动费用：待核对",
        "单据 / 负责人：待补齐"
      ]
    },
    {
      "id": "manager",
      "x": 1000,
      "y": 410,
      "w": 350,
      "h": 120,
      "title": "老板 / 负责人决策",
      "kind": "person",
      "sub": "超预算支出是否批准？"
    }
  ],
  "edges": [
    {
      "from": "report",
      "to": "ask"
    },
    {
      "from": "ask",
      "to": "record"
    },
    {
      "from": "record",
      "to": "manager",
      "start": "bottom",
      "end": "top",
      "label": "请经理决定",
      "lx": 1190,
      "ly": 357
    }
  ]
}} />;
}
