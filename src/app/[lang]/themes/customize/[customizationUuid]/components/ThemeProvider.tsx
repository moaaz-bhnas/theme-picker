"use client";

import React, { createContext, useContext, ReactNode } from "react";
import useSWR from "swr";
import { usePathname } from "next/navigation";
import { getThemeName } from "../lib/getThemeName";
import SupabaseUtils from "@/lib/supabase/supabaseUtils";
import { createClient } from "@/lib/supabase/client";
import { extractResultValue } from "@/lib/hof/extractResultValue";
import { Tables } from "@/types/supabase/Database";

type ThemeContextType = {
  theme?: Tables<"themes"> & { customizations: Tables<"customizations">[] };
  customizations: Tables<"customizations">[];
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const themeName = getThemeName(pathname);

  const { data: theme } = useSWR(["theme", themeName], async function fetchThemeData([, themeName]) {
    const supabaseUtils = new SupabaseUtils(createClient());
    const result = await supabaseUtils.getThemeByHandle<
      Tables<"themes"> & { customizations: Tables<"customizations">[] }
    >(themeName, `*, customizations(*)`);
    return extractResultValue(result);
  });

  return (
    <ThemeContext.Provider value={{ theme, customizations: theme?.customizations || [] }}>
      {children}
    </ThemeContext.Provider>
  );
}
