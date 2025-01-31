import { Files } from "lucide-react";
import { Button } from "./ui/button";
import { SidebarMenu } from "./ui/sidebar";
import { useFetcher } from "react-router";

export default function ExportAllTemplates() {
  let fetcher = useFetcher();
  let busy = fetcher.state !== "idle";
  return (
    <SidebarMenu>
      <fetcher.Form
        method="GET"
        action="/actions/export-all"
        className="flex justify-center"
      >
        <Button
          className="rounded-[0.5rem] font-semibold"
          size={"lg"}
          disabled={busy}
        >
          <Files />
          Export all templates
        </Button>
      </fetcher.Form>
    </SidebarMenu>
  );
}
