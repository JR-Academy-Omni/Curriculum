import SystemDiagram from '../SystemDiagram';

export default function N13_CompanyOS() {
  return <SystemDiagram {...{
  "stage": "倒推搭建 · 让刚才的公司流程跑起来",
  "title": "刚才的公司系统，需要接好哪些组件？",
  "takeaway": "这是系统构成；下一页讲负责人和技术人员怎样把资料、Skills、权限和软件接好。",
  "nodes": [
    {
      "id": "sot",
      "x": 25,
      "y": 42,
      "w": 370,
      "h": 110,
      "title": "① 确认好资料",
      "kind": "doc",
      "sub": "SoT：房源 / 客户 / 预算"
    },
    {
      "id": "skill",
      "x": 505,
      "y": 42,
      "w": 370,
      "h": 110,
      "title": "② 写清怎么做",
      "kind": "folder",
      "sub": "Skills / 工作步骤 / 检查标准"
    },
    {
      "id": "approve",
      "x": 985,
      "y": 42,
      "w": 370,
      "h": 110,
      "title": "③ 谁来拍板",
      "kind": "person",
      "sub": "负责人 / 重要决定"
    },
    {
      "id": "trigger",
      "x": 25,
      "y": 229,
      "w": 370,
      "h": 110,
      "title": "④ 什么时候开始",
      "kind": "clock",
      "sub": "每天定时 / 收到汇报"
    },
    {
      "id": "runner",
      "x": 505,
      "y": 229,
      "w": 370,
      "h": 110,
      "title": "⑤ AI 按步骤做",
      "kind": "ai",
      "sub": "管理 Agent → 执行 Agent"
    },
    {
      "id": "connector",
      "x": 985,
      "y": 229,
      "w": 370,
      "h": 110,
      "title": "⑥ 连接现有软件",
      "kind": "store",
      "sub": "客户管理 / 发内容 / 消息"
    },
    {
      "id": "task",
      "x": 25,
      "y": 416,
      "w": 370,
      "h": 110,
      "title": "个人任务",
      "kind": "task",
      "sub": "谁做 / 何时 / 怎样算完成"
    },
    {
      "id": "ledger",
      "x": 505,
      "y": 416,
      "w": 370,
      "h": 110,
      "title": "每次工作记录",
      "kind": "store",
      "sub": "做了什么 / 成功了吗"
    },
    {
      "id": "systems",
      "x": 985,
      "y": 416,
      "w": 370,
      "h": 110,
      "title": "现有业务系统",
      "kind": "store",
      "sub": "客户 / 内容 / 工作进展"
    }
  ],
  "edges": [
    {
      "from": "sot",
      "to": "runner",
      "start": "bottom",
      "end": "top",
      "path": "M210 152L210 190L600 190L600 229"
    },
    {
      "from": "skill",
      "to": "runner",
      "start": "bottom",
      "end": "top"
    },
    {
      "from": "approve",
      "to": "connector",
      "start": "bottom",
      "end": "top",
      "label": "批准",
      "lx": 1220,
      "ly": 192
    },
    {
      "from": "trigger",
      "to": "runner"
    },
    {
      "from": "runner",
      "to": "connector"
    },
    {
      "from": "connector",
      "to": "systems",
      "start": "bottom",
      "end": "top"
    },
    {
      "from": "systems",
      "to": "ledger",
      "start": "left",
      "end": "right",
      "label": "确认结果",
      "lx": 930,
      "ly": 450
    },
    {
      "from": "runner",
      "to": "ledger",
      "start": "bottom",
      "end": "top"
    },
    {
      "from": "runner",
      "to": "task",
      "start": "left",
      "end": "right",
      "path": "M505 284L445 284L445 471L395 471"
    }
  ],
  "zones": [
    {
      "x": 0,
      "y": 0,
      "w": 1380,
      "h": 165,
      "label": "先准备好 · 资料、做法、负责人"
    },
    {
      "x": 0,
      "y": 183,
      "w": 1380,
      "h": 165,
      "label": "再接起来 · 请技术人员配置自动执行"
    },
    {
      "x": 0,
      "y": 370,
      "w": 1380,
      "h": 175,
      "label": "最后检查 · 不必换掉现在的软件"
    }
  ]
}} />;
}
