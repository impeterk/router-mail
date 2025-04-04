import * as React from "react";

import { NavTemplates } from "@/components/nav-templates";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { Link } from "react-router";
import { NavFooter } from "./nav-footer";
import type { Node } from "@/lib/types";
import { Button } from "./ui/button";
import ExportAllTemplates from "./export-all";
import { useTemplatesStore } from "@/stores/template";
import SendsingleTemplate from "./send-single-template";

export function AppSidebar({
  nodes,
  ...props
}: React.ComponentProps<typeof Sidebar> & { nodes: Node }) {
  const { currTempl } = useTemplatesStore;
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarLogo />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarSeparator />
      <SidebarContent>
        <SidebarGroupContent>
          <NavTemplates templates={nodes} />
        </SidebarGroupContent>
      </SidebarContent>
      <SidebarFooter>
        <SendsingleTemplate />
        <NavFooter />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}

function SidebarLogo() {
  return (
    <Link to="/">
      <SidebarMenuButton
        size="lg"
        className="hover:bg-inherit flex justify-center"
      >
        <div className="flex aspect-square size-12 items-center justify-center rounded-lg  text-sidebar-primary-foreground">
          <img src="/favicon.ico" className="size-full" />
        </div>
        <div className="grid text-left text-sm leading-tight">
          <span className="truncate font-semibold">Emails</span>
          <span className="truncate text-xs">are hard</span>
        </div>
      </SidebarMenuButton>
    </Link>
  );
}
