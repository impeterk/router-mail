import { loadFinalHtml } from "@/lib/loaders";
import type { Route } from "./+types/export-localized";
import { z } from "zod";
import { mailer } from "@/lib/mailer";

const formSchema = z.object({
  email: z.string(),
  template: z.string(),
});

export async function action({ request }: Route.ActionArgs) {
  let formData = await request.formData();
  const { email, template } = formSchema.parse(Object.fromEntries(formData));

  console.log({ email, template });
  if (!email || !template) {
    return { error: true, success: false };
  }

  const { html, error } = await loadFinalHtml(template);
  if (error) {
    return { error: true, success: false };
  }

  const id = await mailer({ to: email, html });

  if (!id) {
    return { error: true, success: false };
  }

  return { error: false, succes: true };
}
