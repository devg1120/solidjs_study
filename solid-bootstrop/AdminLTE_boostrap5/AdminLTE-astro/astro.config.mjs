import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
     srcDir: './src/html',
/*
vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "src/scss/adminlte.scss";`
        }
      }
    }
  },
*/
});
