"use client";

import React from "react";
import { useTheme } from "./ThemeProvider";
import { LocalizedFields } from "@/types/supabase/Custom";
import { Locale } from "@/types/Locale";

type Props = {
  lang: Locale;
};

function HeaderThemeName({ lang }: Props) {
  const { theme } = useTheme();

  if (!theme) return <></>;

  return (
    <h1 className="text-lg font-extrabold tracking-tight">{(theme.localized_fields as LocalizedFields)[lang].title}</h1>
  );
}

export default HeaderThemeName;
