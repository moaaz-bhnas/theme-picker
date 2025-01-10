"use client";

import React, { createContext, useContext, ReactNode } from "react";
import { Tables } from "@/types/supabase/Database";

type ThemeContextType = {
  theme: Tables<"themes">;
  customizations: Tables<"customizations">;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
}

export function ThemeProvider({
  children,
  theme,
  customizations,
}: {
  children: ReactNode;
  theme: Tables<"themes">;
  customizations: Tables<"customizations">;
}) {
  return <ThemeContext.Provider value={{ theme, customizations }}>{children}</ThemeContext.Provider>;
}
