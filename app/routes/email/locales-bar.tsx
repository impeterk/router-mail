import { Button } from "@/components/ui/button";
import { useSearchParams } from "react-router";

export default function LocalesBar({
  locales,
  activeLocale,
}: {
  locales: string[];
  activeLocale: string;
}) {
  const [__, setSearchParams] = useSearchParams();

  if (!locales.length) {
    return null;
  }

  return (
    <div className="w-full rounded drop-shadow-lg bg-background mb-4">
      {locales.map((locale) => (
        <Button
          key={locale}
          onClick={() => {
            setSearchParams((prev) => {
              prev.set("locale", locale);
              return prev;
            });
          }}
          variant={activeLocale == locale ? "default" : "secondary"}
        >
          {locale}
        </Button>
      ))}
    </div>
  );
}
