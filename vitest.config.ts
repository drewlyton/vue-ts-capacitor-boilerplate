/// <reference types="vitest" />
import { mergeConfig } from 'vite';
import viteConfig from './vite.config';
import { defineConfig } from 'vitest/config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: 'happy-dom',
      include: ['./src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
      watchExclude: [
        '.*\\/node_modules\\/.*',
        '.*\\/build\\/.*',
        '.*\\/src-capacitor\\/.*',
      ],
    },
  })
);
