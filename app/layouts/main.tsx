import { AppSidebar } from "@/components/app-sidebar";
import { Header } from "@/components/header-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Header />
        <main>
          <Outlet />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
