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
  ]),
] satisfies RouteConfig;
