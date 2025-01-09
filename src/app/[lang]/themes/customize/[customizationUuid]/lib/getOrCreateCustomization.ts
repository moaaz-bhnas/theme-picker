"server-only";

import SupabaseUtils from "@/lib/supabase/supabaseUtils";
import { Database, Tables } from "@/types/supabase/Database";
import { SupabaseClient } from "@supabase/supabase-js";
import { initCustomization } from "./initCustomization";

type JoinedCustomization = Tables<"customizations"> & { themes: Tables<"themes"> };

export async function getOrCreateCustomization(
  supabase: SupabaseClient<Database>,
  customizationUuid: string,
  themeHandle: string
) {
  const supabaseUtils = new SupabaseUtils(supabase);

  const result = await supabaseUtils.getCustomization<JoinedCustomization>(customizationUuid, `*, themes(*)`);
  if (result.isErr()) return result;

  const themeResult = await supabaseUtils.getThemeByHandle(themeHandle);
  if (themeResult.isErr()) return themeResult;

  const newCustomizationResult = await supabaseUtils.createCustomization(
    initCustomization(customizationUuid, themeResult.value.uuid)
  );

  return newCustomizationResult;
}
