import { Separator } from "@radix-ui/react-separator";
import { useSidebar } from "./ui/sidebar";
import { Button } from "./ui/button";
import { Moon, PanelLeft, Sun } from "lucide-react";
import ViewSwitch from "./view-switch";
import { useTheme } from "./theme-provider";
export function Header() {
  return (
    <header className="flex items-center gap-2 transition-[width,height] ease-linear border-b bg-sidebar h-16 sticky top-0 left-0 z-[100]">
      <div className="flex items-center gap-2 px-8 w-full">
        <SidebarTrigger />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <ThemeSwitch />
        <ViewSwitch />
      </div>
    </header>
  );
}

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  return (
    <Button
      variant="outline"
      size="icon"
      className="rounded-[0.5rem] ml-auto"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <Sun className=" rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute  rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

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
