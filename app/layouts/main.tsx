import { AppSidebar } from "@/components/app-sidebar";
import { Header } from "@/components/header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { loadAllTemplates } from "@/lib/loaders";
import type { Node } from "@/lib/types";
import { Outlet } from "react-router";

export async function loader() {
  return loadAllTemplates();
}

export default function Layout({ loaderData }: { loaderData: Node }) {
  const nodes = loaderData;
  return (
    <SidebarProvider>
      <AppSidebar nodes={nodes} />
      <SidebarInset className="bg-sidebar-foreground/10 dark:bg-background grid grid-rows-[auto_1fr] relative">
        <Header />
        <section className="container w-full mx-auto max-w-7xl px-8 py-4">
          <Outlet />
        </section>
      </SidebarInset>
    </SidebarProvider>
  );
}
