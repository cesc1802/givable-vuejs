import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import svgLoader from "vite-svg-loader";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";

export default defineConfig({
  plugins: [
    vue(),
    svgLoader(),
    AutoImport({
      imports: ["vue", "vue-router"],
      dts: "./src/auto-imports.d.ts",
    }),
    Components({
      dts: "./src/components.d.ts",
      resolvers: [], // Add your custom resolvers here if needed
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        // Disable code splitting: all code goes into a single chunk.
        manualChunks: () => "index",
        // Specify the output file name.
        entryFileNames: "index.js",
        chunkFileNames: "index.js",
      },
    },
  },
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@layouts": path.resolve(__dirname, "src/layouts"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@router": path.resolve(__dirname, "src/router"),
      "@store": path.resolve(__dirname, "src/store"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
