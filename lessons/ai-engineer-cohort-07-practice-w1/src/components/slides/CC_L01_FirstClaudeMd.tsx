// Migrated teaching page; original source: lessons/claude-code-master/src/components/slides/L01_FirstClaudeMd.tsx
import { Lab } from './_LabLayout';
// 动手① 写第一份 CLAUDE.md
export default function L01_FirstClaudeMd() {
    return (<Lab n="①" min="15 分钟" title={<>写你的第一份 <span style={{ color: '#FFDE59' }}>CLAUDE.md</span></>} sub="先完成 PRD 与 Rules，再给已核查的项目写入口索引" demo={[
            { kind: 'cmd', text: 'cd 你的项目目录' },
            { kind: 'cmd', text: 'claude   # 启动 Claude Code' },
            { kind: 'say', text: '/init —— 帮我扫一遍这个项目，生成一份 CLAUDE.md' },
            { kind: 'note', text: '它会读代码结构生成草稿；不能据此猜测业务需求' },
            { kind: 'say', text: '引用已确认的 PRD 和 Rules 路径，写清权限与实际检查方法' },
            { kind: 'note', text: '例：命名用 camelCase / 不要改已上线 URL / 提交前先跑测试' },
        ]} todo={[
            '打开一个你自己的项目，启动 claude',
            '用 /init 生成 CLAUDE.md 初稿',
            '把已确认的 PRD、规则、数据约束链接到入口；未知项标待确认',
            '把长内容拆出去，全局文件保持短',
        ]} verify="开一个新对话问「我们项目的命名规范是什么」—— 核对它是否引用正确规则；能回答不等于执行一定遵守"/>);
}
