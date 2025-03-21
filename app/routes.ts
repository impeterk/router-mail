import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("layouts/main.tsx", [
    index("routes/home.tsx"),
    route("/*", "routes/email/page.tsx"),
    route("/docs", "routes/docs/page.tsx"),
  ]),
  route("/actions/export-all", "routes/actions/export-all.ts"),
] satisfies RouteConfig;
