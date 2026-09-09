import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	plugins: [react()],
	// Production entry: /curriculum/lessons/ai-engineer-cohort-05-final/
	base: process.env.NODE_ENV === 'production' ? '/curriculum/lessons/ai-engineer-cohort-05-final/' : '/',
});
