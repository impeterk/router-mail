import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Languages } from "lucide-react";
import { useFetcher, useLocation, useSearchParams } from "react-router";

export default function LocalesBar({
  locales,
  activeLocale,
}: {
  locales: string[];
  activeLocale: string;
}) {
  const [searchParams, setSearchParams] = useSearchParams();
  const ext = searchParams.get("ext") ?? "jsx";
  if (!locales.length) {
    return null;
  }

  return (
    <div className="sticky top-16 z-[100] flex items-center mb-4 gap-2">
      <div className="w-full rounded-md drop-shadow-lg bg-background">
        {locales.map((locale, idx) => (
          <Button
            key={locale}
            onClick={() => {
              setSearchParams((prev) => {
                prev.set("locale", locale);
                return prev;
              });
            }}
            variant={activeLocale == locale ? "default" : "secondary"}
            className={cn(
              "rounded-none h-10",
              idx == 0 && "rounded-l-md",
              idx === locales.length - 1 && "rounded-r-md"
            )}
          >
            {locale}
          </Button>
        ))}
      </div>
      <ExportLocalesButton locales={locales} ext={ext} />
    </div>
  );
}

const ExportLocalesButton = ({
  locales,
  ext,
}: {
  locales: string[];
  ext: string;
}) => {
  let fetcher = useFetcher();
  const { pathname } = useLocation();
  let busy = fetcher.state !== "idle";
  console.log({ btnlocales: JSON.stringify(locales) });
  return (
    <fetcher.Form method="post" action="/actions/export-localized">
      <input hidden defaultValue={pathname.slice(1)} name="filePath" />
      <input hidden defaultValue={ext} name="ext" />
      <input hidden defaultValue={JSON.stringify(locales)} name="locales" />
      <Button disabled={busy} size={"lg"}>
        <Languages className="size-6" />
        Export all Locales
      </Button>
    </fetcher.Form>
  );
};
