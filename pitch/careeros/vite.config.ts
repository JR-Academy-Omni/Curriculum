import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Investor deck served at jracademy.ai/curriculum/pitch/careeros/ (noindex); relative base.
export default defineConfig({
	plugins: [react()],
	base: './',
});
