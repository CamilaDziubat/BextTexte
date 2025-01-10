// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///C:/Users/Camila%20Dziubat/Desktop/Bext_Texte/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/Users/Camila%20Dziubat/Desktop/Bext_Texte/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///C:/Users/Camila%20Dziubat/Desktop/Bext_Texte/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
var __vite_injected_original_import_meta_url = "file:///C:/Users/Camila%20Dziubat/Desktop/Bext_Texte/vite.config.ts";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    vueJsx()
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  },
  root: "./",
  // Define a raiz do projeto
  build: {
    outDir: "dist",
    // Define o diretório de saída
    rollupOptions: {
      input: "./index.html"
      // Define o arquivo de entrada
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxDYW1pbGEgRHppdWJhdFxcXFxEZXNrdG9wXFxcXEJleHRfVGV4dGVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXENhbWlsYSBEeml1YmF0XFxcXERlc2t0b3BcXFxcQmV4dF9UZXh0ZVxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvQ2FtaWxhJTIwRHppdWJhdC9EZXNrdG9wL0JleHRfVGV4dGUvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBmaWxlVVJMVG9QYXRoLCBVUkwgfSBmcm9tICdub2RlOnVybCdcblxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuaW1wb3J0IHZ1ZUpzeCBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUtanN4J1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIHZ1ZSgpLFxuICAgIHZ1ZUpzeCgpLFxuICBdLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgICdAJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYycsIGltcG9ydC5tZXRhLnVybCkpXG4gICAgfVxuICB9LFxuICByb290OiAnLi8nLCAvLyBEZWZpbmUgYSByYWl6IGRvIHByb2pldG9cbiAgYnVpbGQ6IHtcbiAgICBvdXREaXI6ICdkaXN0JywgLy8gRGVmaW5lIG8gZGlyZXRcdTAwRjNyaW8gZGUgc2FcdTAwRURkYVxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIGlucHV0OiAnLi9pbmRleC5odG1sJyAvLyBEZWZpbmUgbyBhcnF1aXZvIGRlIGVudHJhZGFcbiAgICB9XG4gIH1cbn0pIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE0VCxTQUFTLGVBQWUsV0FBVztBQUUvVixTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFNBQVM7QUFDaEIsT0FBTyxZQUFZO0FBSmtMLElBQU0sMkNBQTJDO0FBT3RQLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxJQUNKLE9BQU87QUFBQSxFQUNUO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLGNBQWMsSUFBSSxJQUFJLFNBQVMsd0NBQWUsQ0FBQztBQUFBLElBQ3REO0FBQUEsRUFDRjtBQUFBLEVBQ0EsTUFBTTtBQUFBO0FBQUEsRUFDTixPQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUE7QUFBQSxJQUNSLGVBQWU7QUFBQSxNQUNiLE9BQU87QUFBQTtBQUFBLElBQ1Q7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
