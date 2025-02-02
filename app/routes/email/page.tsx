import { redirect, type LoaderFunctionArgs } from "react-router";
import { exportSingleTemplate as exportTemplate } from "@/lib/exports";
import { useViewStore } from "@/stores/view";
import { useStore } from "@nanostores/react";
import { loadTemplate } from "@/lib/loaders";
import type { Route } from "./+types/page";
export async function loader({ request, params }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const ext = url.searchParams.get("ext");
  const path = params["*"];
  if (!path || !ext) {
    throw redirect("/");
  }
  const template = await loadTemplate(path, ext);
  exportTemplate({ fileName: path, content: template });
  return { template };
}

export default function Component({ loaderData }: Route.ComponentProps) {
  const { template } = loaderData;
  const view = useStore(useViewStore.$view);
  return (
    <div className="max-w-fit rounded-xl overflow-clip border drop-shadow-lg mx-auto overflow-y-scroll">
      <section
        className={view === "mobile" ? "max-w-[360px]" : "max-w-[600px]"}
        dangerouslySetInnerHTML={{ __html: template }}
      />
    </div>
  );
}
