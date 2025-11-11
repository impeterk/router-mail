"use client";
import {
  ChevronRight,
  EllipsisVertical,
  File,
  FolderClosed,
  FolderOpen,
} from "lucide-react";
import {
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
} from "@/components/ui/sidebar";
import { NavLink, useLocation } from "react-router";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import type { Node } from "@/lib/types";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "./ui/dropdown-menu";
import ExportAllTemplates from "./export-all";

export function NavTemplates({ templates }: { templates: Node }) {
  const { pathname } = useLocation();
  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>
        Templates
        <TemplatesActions />
      </SidebarGroupLabel>
      <SidebarMenu>
        {templates.nodes &&
          templates.nodes.map((item, index) => (
            <Tree key={index} node={item} activeLink={pathname} />
          ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}

function TemplatesActions() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <SidebarGroupAction>
          <EllipsisVertical />
        </SidebarGroupAction>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="right" align="start">
        <DropdownMenuLabel>Options</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onSelect={() => setOpen(false)}>
          <ExportAllTemplates />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function Tree({ node, activeLink }: { node: Node; activeLink: string }) {
  const [isOpen, setIsOpen] = useState(
    activeLink.includes(node.name) || node?.level! < 1
  );

  if (!node.nodes?.length) {
    return (
      <NavLink to={node.link!}>
        {({ isActive }) => (
          <SidebarMenuButton isActive={isActive}>
            <File />
            {node.name}
          </SidebarMenuButton>
        )}
      </NavLink>
    );
  }

  return (
    <SidebarMenuItem>
      <Collapsible
        className="group/collapsible [&[data-state=open]>button>svg:first-child]:rotate-90"
        open={isOpen}
        onOpenChange={setIsOpen}
      >
        <CollapsibleTrigger asChild>
          <SidebarMenuButton>
            <ChevronRight className="transition-transform" />
            {isOpen ? (
              <FolderOpen className="group/collapsible [&[data-state=open]]:block" />
            ) : (
              <FolderClosed className="group/collapsible  [&[data-state=closed]]:block" />
            )}
            {node.name}
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub>
            {node.nodes.map((subItem, index) => (
              <Tree key={index} node={subItem} activeLink={activeLink} />
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </Collapsible>
    </SidebarMenuItem>
  );
}
