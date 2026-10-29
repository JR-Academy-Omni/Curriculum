import SystemDiagram from '../SystemDiagram';

export default function N08_Master() {
  return <SystemDiagram {...{
  "stage": "SoT 的作用 · 一处更新，下游核对",
  "title": "改期一次，哪些东西必须重做？",
  "takeaway": "更新宣传只是活动的一部分；下一页看真实活动的策划、执行、复盘和客户跟进 Skills。",
  "nodes": [
    {
      "id": "sot",
      "x": 0,
      "y": 180,
      "w": 270,
      "h": 170,
      "title": "已确认新日期",
      "kind": "doc",
      "sub": "日期已改期"
    },
    {
      "id": "master",
      "x": 405,
      "y": 180,
      "w": 280,
      "h": 170,
      "title": "更新内容底稿",
      "kind": "doc",
      "sub": "重新生成"
    },
    {
      "id": "post",
      "x": 890,
      "y": 20,
      "w": 300,
      "h": 120,
      "title": "旧图文",
      "kind": "post",
      "sub": "过期 → 重做"
    },
    {
      "id": "script",
      "x": 890,
      "y": 205,
      "w": 300,
      "h": 120,
      "title": "旧脚本",
      "kind": "doc",
      "sub": "过期 → 重写"
    },
    {
      "id": "sub",
      "x": 890,
      "y": 390,
      "w": 300,
      "h": 120,
      "title": "旧字幕",
      "kind": "phone",
      "sub": "过期 → 重做"
    }
  ],
  "edges": [
    {
      "from": "sot",
      "to": "master"
    },
    {
      "from": "master",
      "to": "post"
    },
    {
      "from": "master",
      "to": "script"
    },
    {
      "from": "master",
      "to": "sub"
    }
  ],
  "labels": [
    {
      "x": 65,
      "y": 60,
      "text": "先改共用资料，再更新各平台内容"
    },
    {
      "x": 310,
      "y": 445,
      "text": "已发布 ≠ 自动更新；需撤回 / 修订并确认结果"
    }
  ]
}} />;
}
