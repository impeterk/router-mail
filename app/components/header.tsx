import { Separator } from "@radix-ui/react-separator";
import { useSidebar } from "./ui/sidebar";
import { Button } from "./ui/button";
import { PanelLeft } from "lucide-react";
import ViewSwitch from "./view-switch";

export function Header() {
  return (
    <header className="flex items-center gap-2 transition-[width,height] ease-linear border-b bg-sidebar h-16 sticky top-0 left-0 z-[100]">
      <div className="flex items-center gap-2 px-8 w-full">
        <SidebarTrigger />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <ViewSwitch />
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
