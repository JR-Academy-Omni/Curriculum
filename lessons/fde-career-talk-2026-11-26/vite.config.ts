import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	plugins: [react()],
	// 部署到 jracademy.ai/curriculum/lessons/fde-career-talk-2026-11-26/ —— 把 fde-career-talk-2026-11-26 换成本 deck 的 slug
	base: process.env.NODE_ENV === 'production' ? '/curriculum/lessons/fde-career-talk-2026-11-26/' : '/',
});
