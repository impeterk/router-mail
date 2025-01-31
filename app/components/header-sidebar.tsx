import { Separator } from "@radix-ui/react-separator";
import { useSidebar } from "./ui/sidebar";
import { Button } from "./ui/button";
import { PanelLeft } from "lucide-react";

export function Header() {
  return (
    <header className="flex shrink-0 items-center gap-2 transition-[width,height] ease-linear border-b bg-sidebar h-16">
      <div className="flex items-center gap-2 px-8">
        <SidebarTrigger />
        <Separator orientation="vertical" className="mr-2 h-4" />
      </div>
    </header>
  );
}

const SidebarTrigger = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <Button
      variant="ghost"
      size="icon"
      className="rounded-xl"
      onClick={() => {
        toggleSidebar();
      }}
    >
      <PanelLeft className="text-3xl" />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  );
};
