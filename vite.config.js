// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/brisadesignweb/', // <-- nome do teu repositório no GitHub
  plugins: [react()],
});
