import { Lab } from './_LabLayout';

// 动手① 写第一份 CLAUDE.md
export default function L01_FirstClaudeMd() {
	return (
		<Lab
			n="①"
			min="15 分钟"
			title={<>写你的第一份 <span style={{ color: '#FFDE59' }}>CLAUDE.md</span></>}
			sub="挑一个你真实的项目目录，给 AI 装上内核"
			demo={[
				{ kind: 'cmd', text: 'cd 你的项目目录' },
				{ kind: 'cmd', text: 'claude   # 启动 Claude Code' },
				{ kind: 'say', text: '/init —— 帮我扫一遍这个项目，生成一份 CLAUDE.md' },
				{ kind: 'note', text: '它会读代码结构，写出项目说明草稿' },
				{ kind: 'say', text: '在文件最前面加 3 条铁律：我最常重复纠正你的 3 件事' },
				{ kind: 'note', text: '例：命名用 camelCase / 不要改已上线 URL / 提交前先跑测试' },
			]}
			todo={[
				'打开一个你自己的项目，启动 claude',
				'用 /init 生成 CLAUDE.md 初稿',
				'写下「我这周最常重复教 AI 的 3 件事」当铁律',
				'把长内容拆出去，全局文件保持短',
			]}
			verify="开一个新对话问「我们项目的命名规范是什么」—— 它不用你解释就答得出"
		/>
	);
}
