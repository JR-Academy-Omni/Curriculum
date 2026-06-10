import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	plugins: [react()],
	// 部署到 jiangren.com.au/curriculum/lessons/ai-marketing-talk/
	base: process.env.NODE_ENV === 'production' ? '/curriculum/lessons/ai-marketing-talk/' : '/',
});
