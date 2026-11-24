import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	plugins: [react()],
	// 部署到 jracademy.ai/curriculum/lessons/system-design-c1-video-streaming/ —— 把 system-design-c1-video-streaming 换成本 deck 的 slug
	base: process.env.NODE_ENV === 'production' ? '/curriculum/lessons/system-design-c1-video-streaming/' : '/',
});
