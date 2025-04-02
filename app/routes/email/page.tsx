import { redirect, type LoaderFunctionArgs } from "react-router";
import { exportSingleTemplate as exportTemplate } from "@/lib/exports";
import { useViewStore } from "@/stores/view";
import { loadTemplate } from "@/lib/loaders";
import type { Route } from "./+types/page";
import LocalesBar from "./locales-bar";
import { Button } from "@/components/ui/button";
export async function loader({ request, params }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const ext = url.searchParams.get("ext");
  const locale = url.searchParams.get("locale") || "";
  const path = params["*"];
  if (!path || !ext) {
    throw redirect("/");
  }
  const { template, locales, config, activeLocale } = await loadTemplate(
    path,
    ext,
    locale
  );
  exportTemplate({ fileName: path, content: template, locale: activeLocale });
  return { template, locales, config, activeLocale };
}

export default function Component({ loaderData }: Route.ComponentProps) {
  const { template, locales, activeLocale } = loaderData;
  const { view } = useViewStore;
  return (
    <>
      <LocalesBar locales={locales} activeLocale={activeLocale} />
      <div className="max-w-fit rounded-xl overflow-clip border drop-shadow-lg mx-auto overflow-y-auto">
        <section
          className={view === "mobile" ? "max-w-[360px]" : "max-w-[600px]"}
          dangerouslySetInnerHTML={{ __html: template }}
        />
      </div>
    </>
  );
}
