import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import { reactRouterDevTools } from "react-router-devtools";
import tsconfigPaths from "vite-tsconfig-paths";

const RRDevTools = process.env.RDT ? reactRouterDevTools() : null;

export default defineConfig({
  plugins: [
    RRDevTools,
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
