import { AnimatedGroup, DeckFrame, Label } from '../deck';
import { colors, fonts } from '../ui';

const checks = [
	{
		index: '01',
		title: '你能独立跑起一个项目吗？',
		body: '会 clone repo、安装依赖、配置环境变量，并从终端读懂报错。',
		note: '不要求刷算法题，但不能只会复制 Prompt。',
		color: colors.blue,
	},
	{
		index: '02',
		title: '你能改基础代码吗？',
		body: '能读懂 Python function，调用 API、处理 JSON，并为一个错误加日志和测试。',
		note: 'RAG、Agent、MCP 会在课上学，编程基本功不会从零讲。',
		color: colors.yellow,
	},
	{
		index: '03',
		title: '13 周能稳定投入时间吗？',
		body: '现行大纲共 118 小时 25 分钟，平均约 9 小时/周，包含 Live、录播、自学、Lab 与 Quest。',
		note: '只看回放不写项目，最后不会凭空长出工程能力。',
		color: colors.green,
	},
];

export default function S12(){return <DeckFrame
	tag="报名前，先做 3 个自测"
	title="不要求你已经会 Agent，但你得能把代码跑起来"
	subtitle="这门课从软件工程继续往 AI Engineering 走，不从变量、循环和 Git 安装开始讲。"
	accent={colors.blue}
	titleSize={51}
>
	<div style={{display:'flex',flexDirection:'column',gap:24,height:'100%'}}>
		<div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:22}}>
			{checks.map((check,index)=><AnimatedGroup key={check.index} delay={.12+index*.08} style={{display:'flex'}}>
				<div style={{flex:1,background:colors.white,border:`2px solid ${colors.dark}`,borderRadius:18,boxShadow:`8px 8px 0 ${check.color}`,padding:'22px 24px',borderTop:`11px solid ${check.color}`}}>
					<div style={{fontFamily:fonts.mono,fontWeight:900,fontSize:16,color:colors.dark}}>{check.index}</div>
					<div style={{fontFamily:fonts.heading,fontWeight:900,fontSize:27,lineHeight:1.2,marginTop:10}}>{check.title}</div>
					<p style={{fontSize:18,lineHeight:1.48,margin:'14px 0 0',color:'#3f3b38'}}>{check.body}</p>
					<p style={{fontSize:15.5,lineHeight:1.42,margin:'13px 0 0',color:'#726a63'}}>{check.note}</p>
				</div>
			</AnimatedGroup>)}
		</div>

		<AnimatedGroup delay={.4} style={{display:'grid',gridTemplateColumns:'1.12fr .88fr',gap:22,flex:1}}>
			<div style={{background:colors.dark,color:colors.white,border:`2px solid ${colors.dark}`,borderRadius:18,padding:'21px 26px',boxShadow:`8px 8px 0 ${colors.green}`}}>
				<Label bg={colors.green} color={colors.black}>可以直接申请</Label>
				<div style={{fontFamily:fonts.heading,fontSize:25,fontWeight:900,marginTop:13}}>前两项能独立完成，并且每周时间留得出来</div>
				<div style={{fontSize:17,lineHeight:1.45,color:'#dfe1e9',marginTop:8}}>你缺的正是后面的 Context、RAG、Agent、Memory、Evals 和 Production 方法。</div>
			</div>
			<div style={{background:'#fff1ea',border:`2px solid ${colors.dark}`,borderRadius:18,padding:'21px 26px',boxShadow:`8px 8px 0 ${colors.red}`}}>
				<Label bg={colors.red}>先补基础，再报名</Label>
				<div style={{fontFamily:fonts.heading,fontSize:24,fontWeight:900,marginTop:13}}>如果项目还跑不起来，先补 Python、Git、终端和 API</div>
				<div style={{fontSize:16.5,lineHeight:1.42,color:'#554b45',marginTop:8}}>否则前三周会一直卡在项目底座，后面的 AI 内容也接不上。</div>
			</div>
		</AnimatedGroup>
	</div>
</DeckFrame>;}
