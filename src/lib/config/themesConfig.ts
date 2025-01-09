import { TablesInsert } from "@/types/supabase/Database";

export const minimalThemeLocalizedFields: TablesInsert<"customizations">["localized_fields"] = {
  // Structure: {section}.{element}
  en: {
    "hero.headline": "Build Your Dream Store",
  },
  ar: {
    "hero.headline": "بناء متجرك الرائع",
  },
};

export enum ThemeSectionName {
  hero = "hero",
}
