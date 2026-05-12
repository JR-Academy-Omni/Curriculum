import { Slide, Inner, colors, fonts } from './ui';

interface Props {
	from: string;
	to: string;
	bg?: string;
}

export default function TransitionSlide({ from, to, bg = colors.dark }: Props) {
	return (
		<Slide bg={bg}>
			<Inner center>
				<div style={{ textAlign: 'center', maxWidth: 1200 }}>
					<div style={{
						fontFamily: fonts.mono, fontSize: 14, color: colors.yellow,
						fontWeight: 700, letterSpacing: 3, marginBottom: 32,
					}}>TRANSITION</div>
					<div style={{
						fontSize: 26, color: 'rgba(255,255,255,0.5)', marginBottom: 24,
						lineHeight: 1.4, fontWeight: 500,
					}}>{from}</div>
					<div style={{
						fontFamily: fonts.heading, fontSize: 64, fontWeight: 900,
						color: colors.white, lineHeight: 1.15, letterSpacing: -1,
					}}>{to}</div>
				</div>
			</Inner>
		</Slide>
	);
}
