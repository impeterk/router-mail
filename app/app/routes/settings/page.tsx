import { Cog } from "lucide-react";
import { exportConfig, appConfigformSchema } from "@/lib/exports";
import { redirect, useSearchParams } from "react-router";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import type { Route } from "./+types/page";
import { ErrorMessage, SuccessMessage } from "./messages";
import { SettingsForm } from "./form";
import appConfig from "@@/app.config.json";

export default function SettingsPage() {
  const [searchParams] = useSearchParams();
  const state = searchParams.get("state");
  return (
    <Card className="container mx-auto max-w-xl my-4">
      <CardHeader>
        <CardTitle className="inline-flex gap-2 items-center">
          <Cog />
          Settings
        </CardTitle>
        {state === "success" && <SuccessMessage />}
        {state === "error" && <ErrorMessage />}
      </CardHeader>
      <SettingsForm />
    </Card>
  );
}

export async function action({ request }: Route.ActionArgs) {
  let formData = await request.formData();

  try {
    const newConfig = appConfigformSchema.parse(
      Object.fromEntries(formData)
    ) as typeof appConfig;
    await exportConfig(newConfig);
  } catch (e) {
    console.log(e);
    return redirect("?state=error");
  }
  return redirect("?state=success");
}
