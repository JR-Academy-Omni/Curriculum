import SystemDiagram from '../SystemDiagram';

export default function N03_Repeat() {
  return <SystemDiagram {...{
  "stage": "保存做法 · 真实 Skill 示例",
  "title": "明天还做一次，能不能不用重教？",
  "takeaway": "Skill 保存怎么做，资料提供写什么；下一步，把多个步骤接起来。",
  "nodes": [
    {
      "id": "day1",
      "x": 0,
      "y": 40,
      "w": 250,
      "h": 115,
      "title": "周一",
      "kind": "person",
      "sub": "重新解释"
    },
    {
      "id": "day2",
      "x": 0,
      "y": 220,
      "w": 250,
      "h": 115,
      "title": "周二",
      "kind": "person",
      "sub": "再解释一次"
    },
    {
      "id": "day3",
      "x": 0,
      "y": 400,
      "w": 250,
      "h": 115,
      "title": "周三",
      "kind": "person",
      "sub": "又解释一次"
    },
    {
      "id": "skill",
      "x": 445,
      "y": 135,
      "w": 390,
      "h": 280,
      "title": "/xhs-draft",
      "kind": "folder",
      "sub": "本地已有的写作 Skill",
      "rows": [
        "输入：主题 / 读者 / 素材",
        "做法：按不同切口写稿",
        "产出：小红书文案草稿"
      ]
    },
    {
      "id": "ai",
      "x": 1030,
      "y": 200,
      "w": 290,
      "h": 180,
      "title": "AI 照着做",
      "kind": "ai",
      "sub": "方法不再丢失"
    }
  ],
  "edges": [
    {
      "from": "day1",
      "to": "skill"
    },
    {
      "from": "day2",
      "to": "skill"
    },
    {
      "from": "day3",
      "to": "skill"
    },
    {
      "from": "skill",
      "to": "ai"
    }
  ]
}} />;
}
