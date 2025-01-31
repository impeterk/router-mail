import { redirect, type LoaderFunctionArgs } from "react-router";
import { exportSingleTemplate as exportTemplate } from "@/lib/exports";
import { useViewStore } from "@/stores/view";
import { useStore } from "@nanostores/react";
import { loadTemplate } from "@/lib/loaders";
export async function loader({ request, params }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const ext = url.searchParams.get("ext");
  const path = params["*"];
  if (!path || !ext) {
    throw redirect("/");
  }
  const template = await loadTemplate(path, ext);
  exportTemplate({ fileName: path, content: template });
  return template;
}

export default function Component({ loaderData }: { loaderData: string }) {
  const html = loaderData;
  const view = useStore(useViewStore.$view);
  return (
    <div className="max-w-fit rounded-xl overflow-clip border drop-shadow-lg mx-auto">
      <section
        className={view === "mobile" ? "max-w-[360px]" : "max-w-[600px]"}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
