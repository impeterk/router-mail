import { exportLocalizedTemplates } from "@/lib/exports";
import { loadLocalizedTemplates } from "@/lib/loaders";
import type { Route } from "./+types/export-localized";
import { z } from "zod";

const formSchema = z.object({
  filePath: z.string().default(""),
  ext: z.string().default(""),
  locales: z.string().default(""),
});

export async function action({ request }: Route.ActionArgs) {
  let formData = await request.formData();
  const {
    filePath,
    ext,
    locales: rawLocales,
  } = formSchema.parse(Object.fromEntries(formData));

  console.log({ filePath, ext, rawLocales });
  if (!filePath || !ext || !rawLocales) {
    return Response.json({ success: false, error: true });
  }

  try {
    const locales = JSON.parse(rawLocales);
    console.log({ actionLocales: locales });
    const templates = await loadLocalizedTemplates(filePath, ext, locales);
    const { success, error } = await exportLocalizedTemplates({
      fileName: filePath,
      templates,
    });
    return Response.json({ success, error });
  } catch (e) {
    console.log(e);
    return Response.json({ sucess: false, error: e });
  }
}
