import { initCustomization } from "@/lib/helpers/customizationUtils";
import { createClient } from "@/lib/supabase/server";
import SupabaseUtils from "@/lib/supabase/supabaseUtils";
import { Tables } from "@/types/supabase/Database";
import React from "react";

type Props = {
  params: {
    lang: string;
    themeUuid: string;
    customizationUuid: string;
  };
};

type JoinedCustomization = Tables<"customizations"> & { themes: Tables<"themes"> };

async function CustomizeThemePage({ params }: Props) {
  const { lang, themeUuid, customizationUuid } = params;
  const supabaseUtils = new SupabaseUtils(createClient());

  // Get customization + theme
  const customization = await (async function getCustomization() {
    let result = await supabaseUtils.getCustomization<JoinedCustomization>(customizationUuid, `*, themes(*)`);

    if (!result) {
      result = await supabaseUtils.createCustomization(initCustomization(customizationUuid, themeUuid), `*, themes(*)`);
    }

    return result;
  })();

  return <div>Customize page</div>;
}

export default CustomizeThemePage;
