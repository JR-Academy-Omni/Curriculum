import { motion, useReducedMotion } from 'framer-motion';
import { assetPath } from '../ui';

export default function OriginalSlide({ number, title }: { number: number; title: string }) {
	const reducedMotion = useReducedMotion();
	return (
		<motion.figure initial={reducedMotion ? false : { opacity: 0, scale: 0.995 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: reducedMotion ? 0 : 0.28 }} aria-label={`第 ${number} 页：${title}`} style={{ width: '100%', height: '100%', margin: 0, background: '#fff' }}>
			<img src={assetPath(`slides/slide-${String(number).padStart(2, '0')}.png`)} alt={`第 ${number} 页：${title}`} draggable={false} style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block', userSelect: 'none' }} />
		</motion.figure>
	);
}
