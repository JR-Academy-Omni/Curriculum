import { DeckFrame, AnimatedGroup, Label, colors, fonts } from '../deck';

const week = [
	['课前', '录播 + Lab', '先把基础知识和单项操作过一遍', colors.yellow],
	['LIVE 01', '学原理', '讲清系统关系、设计选择和取舍', colors.blue],
	['LIVE 02', '做进项目', '当周把这项能力写进 CareKind', colors.red],
	['课后', '留下证据', '提交代码、测试、Trace 或 Eval 结果', colors.green],
] as const;

const reasons = [
	['学完马上用', '知识不会停在笔记里，当周就会进入真实代码。'],
	['13 周不换项目', '上周留下的状态、权限和技术债，下周还要继续处理。'],
	['每周都能纠偏', '老师看到的是运行结果，可以在问题堆大之前一起修正。'],
] as const;

export default function S05() {
	return <DeckFrame tag="每周怎么学" title="先准备，再学原理，当周做进项目" subtitle="每周围绕同一个 CareKind 系统推进，学到的内容不会等到结课才开始拼装。" accent={colors.blue} titleSize={52}>
		<div style={{display:'grid',gridTemplateRows:'1.08fr .78fr',gap:28,height:'100%'}}>
			<div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:22,alignItems:'stretch'}}>
				{week.map((item, index) => <AnimatedGroup key={item[0]} delay={.08 + index * .08}>
					<div style={{height:'100%',position:'relative',background:colors.white,border:`2px solid ${colors.dark}`,borderRadius:20,boxShadow:`8px 8px 0 ${item[3]}`,padding:'22px 23px',display:'flex',flexDirection:'column'}}>
						<Label bg={item[3]}>{item[0]}</Label>
						<div style={{fontFamily:fonts.heading,fontSize:30,fontWeight:900,marginTop:20}}>{item[1]}</div>
						<div style={{fontSize:19,lineHeight:1.45,marginTop:12,color:'#4d4742'}}>{item[2]}</div>
						{index < week.length - 1 && <div style={{position:'absolute',right:-25,top:'50%',width:24,height:4,background:colors.dark}} />}
					</div>
				</AnimatedGroup>)}
			</div>

			<AnimatedGroup delay={.42}>
				<div style={{height:'100%',background:colors.dark,color:colors.white,borderRadius:22,boxShadow:`10px 10px 0 ${colors.yellow}`,padding:'22px 28px',display:'grid',gridTemplateColumns:'220px repeat(3,1fr)',gap:24,alignItems:'center'}}>
					<div style={{fontFamily:fonts.heading,fontSize:30,fontWeight:900,lineHeight:1.2}}>为什么<br/>这样安排</div>
					{reasons.map((reason, index) => <div key={reason[0]} style={{borderLeft:`6px solid ${[colors.yellow, colors.blue, colors.green][index]}`,paddingLeft:18}}>
						<div style={{fontFamily:fonts.heading,fontSize:23,fontWeight:900}}>{reason[0]}</div>
						<div style={{fontSize:17,lineHeight:1.45,color:'#e6e8f2',marginTop:8}}>{reason[1]}</div>
					</div>)}
				</div>
			</AnimatedGroup>
		</div>
	</DeckFrame>;
}
