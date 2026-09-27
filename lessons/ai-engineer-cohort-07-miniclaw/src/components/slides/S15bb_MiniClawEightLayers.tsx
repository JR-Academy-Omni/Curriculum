import { AnimatedGroup, DeckFrame, Label, colors, fonts } from '../deck';

const harnessLoop = ['Input', 'Context Builder', 'LLM Call', 'Tool Decision', 'Tool Execution', 'Observation', 'Loop / Finish'];

export default function S15bbMiniClawEightLayers(){return <DeckFrame tag="MINICLAW · BUILD BLUEPRINT" title="自己做 MiniClaw，从一开始就拆成八层" subtitle="Harness 放在中间控制一轮运行。Memory、Tool Runtime、Sandbox 提供状态和行动能力，Skills 与 Observability 贯穿整个系统。" accent={colors.red} titleSize={47}>
	<div style={{height:'100%',display:'grid',gridTemplateRows:'68px 68px 150px 125px 68px',gap:13}}>
		<AnimatedGroup delay={.06}><div style={{height:'100%',display:'grid',gridTemplateColumns:'250px 1fr',alignItems:'center',background:colors.white,border:`2px solid ${colors.dark}`,borderRadius:14,boxShadow:`6px 6px 0 ${colors.blue}`,padding:'0 20px'}}><div style={{fontFamily:fonts.heading,fontSize:21,fontWeight:900}}>01 · Channels / UI</div><div style={{fontFamily:fonts.mono,fontSize:14,color:'#56504b'}}>Web　App　Slack　WeChat　API　CLI　TUI</div></div></AnimatedGroup>
		<AnimatedGroup delay={.12}><div style={{height:'100%',display:'grid',gridTemplateColumns:'250px 1fr',alignItems:'center',background:colors.white,border:`2px solid ${colors.dark}`,borderRadius:14,boxShadow:`6px 6px 0 ${colors.yellow}`,padding:'0 20px'}}><div style={{fontFamily:fonts.heading,fontSize:21,fontWeight:900}}>02 · Gateway / Control Plane</div><div style={{fontFamily:fonts.mono,fontSize:14,color:'#56504b'}}>Auth　User　Agent　Routing　Rate Limit　Run State</div></div></AnimatedGroup>

		<AnimatedGroup delay={.2} style={{background:colors.dark,color:colors.white,borderRadius:17,boxShadow:`8px 8px 0 ${colors.red}`,padding:'17px 20px'}}>
			<div style={{display:'flex',alignItems:'center',gap:16}}><Label bg={colors.red} color={colors.white}>03 · AGENT HARNESS</Label><div style={{fontSize:15,color:'#cbd1df'}}>每一步有输入、状态、停止条件和可追踪结果</div></div>
			<div style={{display:'grid',gridTemplateColumns:'repeat(7,1fr)',gap:10,marginTop:15}}>{harnessLoop.map((step,index)=><div key={step} style={{position:'relative',background:index===4?'#253357':'#171e36',border:'1px solid #444e6b',borderRadius:9,padding:'11px 8px',textAlign:'center',fontFamily:fonts.mono,fontSize:12.5,fontWeight:800,color:index===4?colors.yellow:colors.white}}>{step}{index<harnessLoop.length-1&&<span aria-hidden style={{position:'absolute',right:-11,top:'50%',width:11,height:2,background:colors.red}}/>}</div>)}</div>
		</AnimatedGroup>

		<div style={{display:'grid',gridTemplateColumns:'1fr 1.15fr .9fr',gap:16}}>
			<AnimatedGroup delay={.32} style={{background:'#edf8ff',border:`2px solid ${colors.dark}`,borderRadius:15,padding:'17px 19px',boxShadow:`6px 6px 0 ${colors.blue}`}}><div style={{fontFamily:fonts.heading,fontSize:20,fontWeight:900}}>04 · Memory</div><div style={{fontSize:14.5,lineHeight:1.48,color:'#4e5860',marginTop:10}}>Short-term　Long-term<br/>Knowledge　User memory</div></AnimatedGroup>
			<AnimatedGroup delay={.38} style={{background:'#effbea',border:`2px solid ${colors.dark}`,borderRadius:15,padding:'17px 19px',boxShadow:`6px 6px 0 ${colors.green}`}}><div style={{fontFamily:fonts.heading,fontSize:20,fontWeight:900}}>05 · Tool Runtime</div><div style={{fontSize:14.5,lineHeight:1.48,color:'#4b5747',marginTop:10}}>MCP　API　Shell　Browser　Code</div></AnimatedGroup>
			<AnimatedGroup delay={.44} style={{background:'#fff3e9',border:`2px solid ${colors.dark}`,borderRadius:15,padding:'17px 19px',boxShadow:`6px 6px 0 ${colors.orange}`}}><div style={{fontFamily:fonts.heading,fontSize:20,fontWeight:900}}>06 · Sandbox</div><div style={{fontSize:14.5,lineHeight:1.48,color:'#5a5149',marginTop:10}}>Docker / VM<br/>FS　Network　Permissions</div></AnimatedGroup>
		</div>

		<div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16}}>
			<AnimatedGroup delay={.5}><div style={{height:'100%',display:'flex',alignItems:'center',gap:18,background:colors.white,border:`2px solid ${colors.dark}`,borderRadius:14,padding:'0 20px',boxShadow:`6px 6px 0 ${colors.purple}`}}><strong style={{fontFamily:fonts.heading,fontSize:19}}>07 · Skills / Instructions / Resource Loader</strong></div></AnimatedGroup>
			<AnimatedGroup delay={.56}><div style={{height:'100%',display:'flex',alignItems:'center',gap:18,background:colors.yellow,border:`2px solid ${colors.dark}`,borderRadius:14,padding:'0 20px',boxShadow:`6px 6px 0 ${colors.red}`}}><strong style={{fontFamily:fonts.heading,fontSize:19}}>08 · Observability / Eval / Audit</strong><span style={{fontFamily:fonts.mono,fontSize:12}}>Trace · Token · Tools · Errors · Cost</span></div></AnimatedGroup>
		</div>
	</div>
</DeckFrame>;}
