import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	plugins: [react()],
	base: process.env.NODE_ENV === 'production' ? '/curriculum/web-code-bootcamp-or-learn-to-code-1/' : '/',
});
