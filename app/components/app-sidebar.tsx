"use client";

import * as React from "react";
import { Frame, Map, PieChart } from "lucide-react";

import { NavProjects } from "@/components/nav-projects";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Link } from "react-router";
import { Separator } from "@radix-ui/react-separator";

// This is sample data.
const data = {
  projects: [
    {
      name: "Design Engineering",
      url: "/something",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "/else",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "/templates",
      icon: Map,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
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
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <Separator className="border-1 border mx-4" />
      <SidebarContent>
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
