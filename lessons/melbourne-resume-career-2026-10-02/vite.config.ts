import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	plugins: [react()],
	// 部署到 jracademy.ai/curriculum/lessons/melbourne-resume-career-2026-10-02/ —— 把 melbourne-resume-career-2026-10-02 换成本 deck 的 slug
	base: process.env.NODE_ENV === 'production' ? '/curriculum/lessons/melbourne-resume-career-2026-10-02/' : '/',
});
