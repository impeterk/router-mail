import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    reactRouter(),
    tsconfigPaths({
      projects: ["./tsconfig.json"],
    }),
  ],
  assetsInclude: ["**/*.md"],
  build: {
    cssMinify: true,
    ssr: false,
  },
  server: {
    port: 3000,
  },
});
