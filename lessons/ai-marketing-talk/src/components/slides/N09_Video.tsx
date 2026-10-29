import SystemDiagram from '../SystemDiagram';

export default function N09_Video() {
  return <SystemDiagram {...{
  "stage": "同样的搭法 · 做视频",
  "title": "换成视频，搭法完全一样",
  "takeaway": "资料用同一份；做视频有自己的步骤和检查标准。",
  "nodes": [
    {
      "id": "sot",
      "x": 0,
      "y": 165,
      "w": 200,
      "h": 155,
      "title": "课程资料",
      "kind": "doc",
      "sub": "日期 / 承诺"
    },
    {
      "id": "script",
      "x": 265,
      "y": 165,
      "w": 215,
      "h": 155,
      "title": "脚本与分镜",
      "kind": "doc",
      "sub": "按当前版本"
    },
    {
      "id": "asset",
      "x": 545,
      "y": 165,
      "w": 215,
      "h": 155,
      "title": "素材与配音",
      "kind": "folder",
      "sub": "素材能否使用"
    },
    {
      "id": "edit",
      "x": 825,
      "y": 165,
      "w": 215,
      "h": 155,
      "title": "剪辑与字幕",
      "kind": "phone",
      "sub": "画面 / 字幕对齐"
    },
    {
      "id": "video",
      "x": 1110,
      "y": 30,
      "w": 255,
      "h": 400,
      "title": "视频成品",
      "kind": "phone",
      "sub": "模拟预览",
      "rows": [
        "10月22日",
        "片头 → 演示 → 结尾"
      ]
    }
  ],
  "edges": [
    {
      "from": "sot",
      "to": "script"
    },
    {
      "from": "script",
      "to": "asset"
    },
    {
      "from": "asset",
      "to": "edit"
    },
    {
      "from": "edit",
      "to": "video"
    }
  ],
  "labels": [
    {
      "x": 310,
      "y": 415,
      "text": "脚本改动 → 配音、字幕也要检查重做"
    },
    {
      "x": 550,
      "y": 465,
      "text": "配音前先确认使用权"
    }
  ]
}} />;
}
