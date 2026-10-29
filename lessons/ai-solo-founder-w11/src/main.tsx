import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import '@fontsource-variable/bricolage-grotesque';
import '@fontsource-variable/dm-sans';
import '@fontsource-variable/noto-sans-sc';
import '@fontsource/space-mono/400.css';
import '@fontsource/space-mono/700.css';
import './styles/presentation.css';
import { MotionConfig } from 'framer-motion';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<MotionConfig reducedMotion="user"><App /></MotionConfig>
	</StrictMode>,
);
