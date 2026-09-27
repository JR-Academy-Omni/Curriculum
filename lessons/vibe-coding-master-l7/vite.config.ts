import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	plugins: [react()],
	// 部署到 jiangren.com.au/curriculum/lessons/vibe-coding-master-l7/
	base: process.env.NODE_ENV === 'production' ? '/curriculum/lessons/vibe-coding-master-l7/' : '/',
});
