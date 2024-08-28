import react from '@vitejs/plugin-react';
import UnoCSS from 'unocss/vite';
import { defineConfig } from 'vite';
import fs from 'fs'; // Add this import
import path from 'path'; // Add this import

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    https: {
      key: fs.readFileSync(path.resolve(__dirname, '/home/toddl/certbot_keys/privkey.pem')),
      cert: fs.readFileSync(path.resolve(__dirname, '/home/toddl/certbot_keys/fullchain.pem'))
    },
    host: 'www.bluelobster.ai',
    port: 3000
  },
  plugins: [UnoCSS(), react()],
  build: { outDir: '../content/web/', emptyOutDir: true },
});
