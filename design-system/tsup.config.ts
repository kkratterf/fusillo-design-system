import { defineConfig } from 'tsup';

export default defineConfig({
  format: ['cjs', 'esm'],
  entry: ['./components/index.ts'],
  splitting: false,
  sourcemap: true,
  clean: true,
});
