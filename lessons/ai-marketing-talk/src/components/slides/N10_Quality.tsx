import SystemDiagram from '../SystemDiagram';

export default function N10_Quality() {
  return <SystemDiagram {...{
  "stage": "质量检查 · 发出前后都要检查",
  "title": "生成完别急着发：先检查，再确认发出",
  "takeaway": "内容不对就重做，发布失败就停下，确认发出才算完成。",
  "nodes": [
    {
      "id": "draft",
      "x": 0,
      "y": 185,
      "w": 230,
      "h": 140,
      "title": "待发布内容",
      "kind": "post",
      "sub": "图文 / 视频"
    },
    {
      "id": "check",
      "x": 330,
      "y": 185,
      "w": 260,
      "h": 140,
      "title": "自动检查",
      "kind": "gate",
      "sub": "事实 / 品牌 / 格式"
    },
    {
      "id": "approve",
      "x": 680,
      "y": 185,
      "w": 225,
      "h": 140,
      "title": "负责人确认",
      "kind": "person",
      "sub": "高风险承诺"
    },
    {
      "id": "publish",
      "x": 1000,
      "y": 185,
      "w": 225,
      "h": 140,
      "title": "按批准去发布",
      "kind": "store",
      "sub": "已接通的发布工具"
    },
    {
      "id": "proof",
      "x": 1000,
      "y": 410,
      "w": 340,
      "h": 125,
      "title": "检查结果并记下来",
      "kind": "task",
      "sub": "成功留记录 / 失败找人"
    },
    {
      "id": "retry",
      "x": 310,
      "y": 420,
      "w": 350,
      "h": 115,
      "title": "退回具体制作环节",
      "kind": "task",
      "sub": "哪里不对 / 用哪份资料"
    }
  ],
  "edges": [
    {
      "from": "draft",
      "to": "check"
    },
    {
      "from": "check",
      "to": "approve",
      "label": "通过",
      "lx": 640,
      "ly": 220
    },
    {
      "from": "approve",
      "to": "publish"
    },
    {
      "from": "publish",
      "to": "proof",
      "start": "bottom",
      "end": "top"
    },
    {
      "from": "check",
      "to": "retry",
      "start": "bottom",
      "end": "top",
      "label": "失败",
      "lx": 460,
      "ly": 365
    },
    {
      "from": "retry",
      "to": "draft",
      "start": "left",
      "end": "bottom",
      "path": "M310 477L115 477L115 325",
      "dashed": true
    }
  ]
}} />;
}
