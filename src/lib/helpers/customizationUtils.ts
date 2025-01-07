import { TablesInsert } from "@/types/supabase/Database";

export function initCustomization(uuid: string, themeUuid: string) {
  const result: TablesInsert<"customizations"> = {
    uuid,
    color: "zinc",
    localized_fields: {
      en: {},
      ar: {},
    },
    logo: "",
    raduis: 0.5,
    theme_uuid: themeUuid,
  };

  return result;
}
