import { fileURLToPath, URL } from "node:url"

import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import vitePluginImp from "vite-plugin-imp"
import svgLoader from "vite-svg-loader"
import checker from "vite-plugin-checker"
import Unfonts from "unplugin-fonts/vite"

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.BASE_URL || "/",
  plugins: [
    vue(),
    svgLoader({
      defaultImport: "component",
    }),
    vitePluginImp({
      libList: [
        {
          libName: "lodash",
          libDirectory: "",
          camel2DashComponentName: false,
        },
      ],
    }),
    checker({
      vueTsc: true,
      overlay: {
        initialIsOpen: false,
      },
      eslint: {
        lintCommand:
          "eslint --ext .vue,.js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts --ignore-path .eslintignore",
      },
    }),
    Unfonts({
      // Google Fonts API V2
      google: {
        families: [
          {
            /**
             * Family name (required)
             */
            name: "Play",

            /**
             * Family styles
             */
            styles: "wght@100;300;400;500;700",
            /**
             * enable non-blocking renderer
             *   <link rel="preload" href="xxx" as="style" onload="this.rel='stylesheet'">
             * default: true
             */
            defer: true,
          },
        ],
      },
    }),
  ],
  server: {
    host: true,
    port: 9000,
  },
  build: {
    sourcemap: true,
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@/comp": fileURLToPath(new URL("./src/components", import.meta.url)),
      "@/api": fileURLToPath(new URL("./src/api", import.meta.url)),
    },
  },
})
