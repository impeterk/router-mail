"use client";

import { BookOpenText, ChevronRight, type LucideIcon } from "lucide-react";

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { Link, NavLink } from "react-router";
import MjmlIcon from "./icons/mjm-icon";

export function NavFooter() {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Documentation</SidebarGroupLabel>
      <SidebarMenu>
        <SidebarMenuItem>
          <NavLink to="/docs">
            {({ isActive }) => (
              <SidebarMenuButton isActive={isActive}>
                <BookOpenText /> How to email
              </SidebarMenuButton>
            )}
          </NavLink>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarMenuButton asChild>
            <Link to="https://documentation.mjml.io/" target="_blank">
              <MjmlIcon /> MJML Docs
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  );
}
