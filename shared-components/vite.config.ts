import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig ({
  build: {
    lib: {
      entry: 'src/index.ts',
      name: "shared-components",
      fileName: "index",
      formats: ["cjs",'es','umd']
    },
    rollupOptions: {
      external: ["react"],
    },
  },
});
