import { TablesInsert } from "@/types/supabase/Database";
import { generateCoolName } from "./generateCoolName";

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
