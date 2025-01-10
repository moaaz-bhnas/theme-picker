"server-only";

import SupabaseUtils from "@/lib/supabase/supabaseUtils";
import { Database, Tables } from "@/types/supabase/Database";
import { SupabaseClient } from "@supabase/supabase-js";
import { initCustomization } from "./initCustomization";
import { ErrorCode } from "@/types/supabase/Custom";

type JoinedCustomization = Tables<"customizations"> & { themes: Tables<"themes"> };

export async function getOrCreateCustomization(
  supabase: SupabaseClient<Database>,
  customizationUuid: string,
  themeUuid: string
) {
  const supabaseUtils = new SupabaseUtils(supabase);

  const getResult = await supabaseUtils.getCustomization<JoinedCustomization>(customizationUuid, `*, themes(*)`);

  if (getResult.isOk() || (getResult.isErr() && getResult.error.code != ErrorCode.NOT_FOUND)) {
    return getResult;
  }

  const createResult = await supabaseUtils.createCustomization<JoinedCustomization>(
    initCustomization(customizationUuid, themeUuid),
    `*, themes(*)`
  );

  return createResult;
}
