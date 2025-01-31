import { exportAllTemplates } from "@/lib/exports";
import type { Route } from "./+types/export-all";

export async function loader(_: Route.LoaderArgs) {
  const { data, error } = await exportAllTemplates();
  return Response.json({ data, error });
}
