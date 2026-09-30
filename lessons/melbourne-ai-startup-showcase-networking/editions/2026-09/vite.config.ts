import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	plugins: [react()],
	// 部署到 jiangren.com.au/curriculum/lessons/melbourne-ai-startup-showcase-networking/editions/2026-09/ —— 把 melbourne-ai-startup-showcase-networking/editions/2026-09 换成本 deck 的 slug
	base: process.env.NODE_ENV === 'production' ? '/curriculum/lessons/melbourne-ai-startup-showcase-networking/editions/2026-09/' : '/',
});
