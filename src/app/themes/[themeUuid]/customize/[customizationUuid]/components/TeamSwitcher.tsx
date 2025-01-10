"use client";

import * as React from "react";
import { ChevronsUpDown, GitBranchIcon, Plus, SquareStackIcon } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from "@/components/ui/sidebar";
import { useTheme } from "./ThemeProvider";
import { Locale } from "@/types/Locale";
import { LocalizedFields } from "@/types/supabase/Custom";
import { Tables } from "@/types/supabase/Database";
import { generateCoolName } from "../lib/generateCoolName";

const versions: Tables<"customizations">[] = [
  {
    name: generateCoolName(),
    color: "",
    created_at: "",
    localized_fields: null,
    raduis: 0,
    theme_uuid: "",
    uuid: "",
  },
  {
    name: generateCoolName(),
    color: "",
    created_at: "",
    localized_fields: null,
    raduis: 0,
    theme_uuid: "",
    uuid: "",
  },
  {
    name: generateCoolName(),
    color: "",
    created_at: "",
    localized_fields: null,
    raduis: 0,
    theme_uuid: "",
    uuid: "",
  },
];

export function TeamSwitcher({
  teams,
}: {
  teams: {
    name: string;
    logo: React.ElementType;
    plan: string;
  }[];
}) {
  const { isMobile } = useSidebar();
  const [activeTeam, setActiveTeam] = React.useState(teams[0]);
  const { theme, customizations } = useTheme();

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                <GitBranchIcon className="size-4" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">
                  {(theme.localized_fields as LocalizedFields)[Locale.en].title}
                </span>
                <span className="truncate text-xs">{customizations.name}</span>
              </div>
              <ChevronsUpDown className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            align="start"
            side={isMobile ? "bottom" : "right"}
            sideOffset={4}
          >
            <DropdownMenuLabel className="text-xs text-muted-foreground">Saved versions</DropdownMenuLabel>
            {versions.map((team, index) => (
              <DropdownMenuItem key={team.name} /*onClick={() => setActiveTeam(team)}*/ className="gap-2 p-2">
                {/* <div className="flex size-6 items-center justify-center rounded-sm border">
                  <team.logo className="size-4 shrink-0" />
                </div> */}
                {team.name}
                {/* <DropdownMenuShortcut>⌘{index + 1}</DropdownMenuShortcut> */}
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuItem className="gap-2 p-2">
              <div className="flex size-6 items-center justify-center rounded-md border bg-background">
                <Plus className="size-4" />
              </div>
              <div className="font-medium text-muted-foreground">Add customization</div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
