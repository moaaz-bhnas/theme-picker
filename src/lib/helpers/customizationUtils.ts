import { TablesInsert } from "@/types/supabase/Database";
import consts from "../config/consts";

export function generateCoolName(): string {
  // Pick random adjective and noun
  const adj = consts.ADJECTIVES[Math.floor(Math.random() * consts.ADJECTIVES.length)];
  const noun = consts.NOUNS[Math.floor(Math.random() * consts.NOUNS.length)];

  // Combine them
  return `${adj} ${noun}`;
}

export function initCustomization(uuid: string, themeUuid: string) {
  const result: TablesInsert<"customizations"> = {
    uuid,
    name: generateCoolName(),
    color: "zinc",
    raduis: 0.5,
    localized_fields: {
      en: {},
      ar: {},
    },
    theme_uuid: themeUuid,
  };

  return result;
}
