import { z } from "zod";
import type { Route } from "./+types/save-config";
import appConfig from "@@/app.config.json";
import { inferZodSchema } from "@/lib/utils";
import { exportConfig } from "@/lib/exports";
import { redirect } from "react-router";
const appConfigSchema = inferZodSchema(appConfig);

const formSchema = z.object(appConfigSchema._def.shape());

export async function action({ request }: Route.ActionArgs) {
  console.log("action was called");
  let formData = await request.formData();
  try {
    const newConfig = formSchema.parse(
      Object.fromEntries(formData)
    ) as typeof appConfig;
    await exportConfig(newConfig);
  } catch (e) {
    // console.log(e);
    return redirect("?state=error");
  }

  return redirect("?state=success");
}
