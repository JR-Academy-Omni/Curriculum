import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Lesson1App from './Lesson1App';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Lesson1App />
	</StrictMode>,
);
