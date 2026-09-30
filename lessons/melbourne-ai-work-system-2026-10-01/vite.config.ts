import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	plugins: [react()],
	// 部署到 jracademy.ai/curriculum/lessons/melbourne-ai-work-system-2026-10-01/ —— 把 melbourne-ai-work-system-2026-10-01 换成本 deck 的 slug
	base: process.env.NODE_ENV === 'production' ? '/curriculum/lessons/melbourne-ai-work-system-2026-10-01/' : '/',
});
