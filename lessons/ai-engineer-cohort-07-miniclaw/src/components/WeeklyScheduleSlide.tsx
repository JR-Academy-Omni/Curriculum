import { DeckFrame, AnimatedGroup, Label, colors, fonts } from './deck';

export type WeekSchedule = {
	week: string;
	theoryTitle: string;
	theoryBody: string;
	practiceTitle: string;
	practiceBody: string;
	delivery: string;
	color: string;
	theoryDuration?: string;
	practiceDuration?: string;
};

export default function WeeklyScheduleSlide({
	tag,
	title,
	subtitle,
	weeks,
	accent,
}: {
	tag: string;
	title: string;
	subtitle: string;
	weeks: WeekSchedule[];
	accent: string;
}) {
	const compact = weeks.length === 3;
	return <DeckFrame tag={tag} title={title} subtitle={subtitle} accent={accent} titleSize={46}>
		<div style={{height:'100%',display:'grid',gridTemplateRows:`repeat(${weeks.length},1fr)`,gap:compact?13:18,minHeight:0}}>
			{weeks.map((week, index) => <AnimatedGroup key={week.week} delay={.06 + index * .08} style={{display:'flex',minHeight:0}}>
				<div style={{flex:1,display:'grid',gridTemplateColumns:'86px 1fr 1fr .82fr',gap:0,background:colors.white,border:`2px solid ${colors.dark}`,borderRadius:20,boxShadow:`8px 8px 0 ${week.color}`,overflow:'hidden'}}>
					<div style={{background:week.color,display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',gap:8,color:week.color===colors.yellow||week.color===colors.green||week.color===colors.blue?colors.dark:colors.white}}>
						<div style={{fontFamily:fonts.mono,fontSize:compact?16:18,fontWeight:900}}>WEEK</div>
						<div style={{fontFamily:fonts.heading,fontSize:compact?34:42,fontWeight:900}}>{week.week.replace('W','')}</div>
					</div>

					<div style={{padding:compact?'14px 18px':'20px 22px',borderRight:'1px solid #dcd5ce',display:'flex',flexDirection:'column',justifyContent:'center'}}>
						<Label bg={colors.purple}>理论 LIVE · {week.theoryDuration ?? '90 MIN'}</Label>
						<div style={{fontFamily:fonts.heading,fontSize:compact?20:25,fontWeight:900,lineHeight:1.12,marginTop:compact?9:14}}>{week.theoryTitle}</div>
						<div style={{fontSize:compact?14.5:17,lineHeight:1.34,color:'#49433f',marginTop:compact?6:9,fontWeight:650}}>{week.theoryBody}</div>
					</div>

					<div style={{padding:compact?'14px 18px':'20px 22px',borderRight:'1px solid #dcd5ce',display:'flex',flexDirection:'column',justifyContent:'center'}}>
						<Label bg={colors.blue} color={colors.dark}>实践 LIVE · {week.practiceDuration ?? '120 MIN'}</Label>
						<div style={{fontFamily:fonts.heading,fontSize:compact?20:25,fontWeight:900,lineHeight:1.12,marginTop:compact?9:14}}>{week.practiceTitle}</div>
						<div style={{fontSize:compact?14.5:17,lineHeight:1.34,color:'#49433f',marginTop:compact?6:9,fontWeight:650}}>{week.practiceBody}</div>
					</div>

					<div style={{padding:compact?'14px 17px':'20px 22px',background:colors.dark,color:colors.white,display:'flex',flexDirection:'column',justifyContent:'center'}}>
						<div style={{fontFamily:fonts.mono,fontSize:compact?12:14,fontWeight:900,color:week.color}}>当周交付</div>
						<div style={{fontSize:compact?14:17,lineHeight:1.38,fontWeight:800,marginTop:compact?8:12}}>{week.delivery}</div>
					</div>
				</div>
			</AnimatedGroup>)}
		</div>
	</DeckFrame>;
}
