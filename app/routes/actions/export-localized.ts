import { exportLocalizedTemplates } from "@/lib/exports";
import { loadLocalizedTemplates } from "@/lib/loaders";
import type { Route } from "./+types/export-localized";
import { z } from "zod";

const formSchema = z.object({
  filePath: z.string().default(""),
  ext: z.string().default(""),
  rawLocales: z.string().default(""),
});

export async function action({ request }: Route.ActionArgs) {
  let formData = await request.formData();
  const { filePath, ext, rawLocales } = formSchema.parse(
    Object.fromEntries(formData)
  );

  if (!filePath || !ext || rawLocales) {
    console.log({ filePath, ext, rawLocales });
    return Response.json({ data: false, error: true });
  }

  const locales = JSON.parse(rawLocales);
  const templates = await loadLocalizedTemplates(filePath, ext, locales);
  const { success, error } = await exportLocalizedTemplates({
    fileName: filePath,
    templates,
  });

  // const { data, error } = await exportAllTemplates();
  return Response.json({ success, error });
}
