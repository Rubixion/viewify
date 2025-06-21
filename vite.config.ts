import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/viewify/', // Replace with your repo name (e.g., '/my-repo/')
  plugins: [react()],
});