import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SidebarInput } from "@/components/ui/sidebar";
import { useTemplatesStore } from "@/stores/template";
import { useFetcher } from "react-router";
import appConfig from "@@/app.config.json";
import { LoaderCircle, Send } from "lucide-react";

export default function SendsingleTemplate() {
  const fetcher = useFetcher();
  const { currTempl } = useTemplatesStore;
  let busy = fetcher.state !== "idle";

  return (
    <Card className="shadow-none">
      <fetcher.Form action="/actions/send-template" method="post">
        <CardHeader className="p-4 pb-0">
          <CardTitle className="text-sm text-center">Send template</CardTitle>
          <CardDescription>
            Send a single template for testing purposes
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-2.5 p-4">
          <SidebarInput
            type="email"
            name="email"
            placeholder="Email"
            defaultValue={appConfig.email}
          />
          <input
            hidden
            type="text"
            name="template"
            defaultValue={currTempl}
            readOnly
            required
          />
          <Button
            className="w-full bg-sidebar-primary text-sidebar-primary-foreground shadow-none"
            size="sm"
            disabled={busy}
          >
            {busy ? (
              <>
                <LoaderCircle className="animate-spin" />
              </>
            ) : (
              <>
                <Send className="size-4" />
              </>
            )}
            Send template
          </Button>
        </CardContent>
      </fetcher.Form>
    </Card>
  );
}
