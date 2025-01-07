import "server-only";
import { SupabaseClient } from "@supabase/supabase-js";
import { cache } from "react";
import { Database, Tables, TablesInsert } from "@/types/supabase/Database";

export default class SupabaseUtils {
  constructor(private supabase: SupabaseClient<Database>) {}

  getThemes = cache(async () => {
    const result = await this.supabase.from("themes").select("*");
    return result.data || [];
  });

  getTheme = cache(async <Table = Tables<"themes">>(uuid: string, fields = "*") => {
    const result = await this.supabase.from("themes").select(fields).eq("uuid", uuid).returns<Table[]>().single();
    return result.data || null;
  });

  getThemeImage(bucket: string, path: string) {
    const result = this.supabase.storage.from(bucket).getPublicUrl(path);
    return result.data.publicUrl || "";
  }

  getCustomization = cache(async <Table = Tables<"customizations">>(uuid: string, fields = "*") => {
    const result = await this.supabase
      .from("customizations")
      .select(fields)
      .eq("uuid", uuid)
      .returns<Table[]>()
      .single();

    return result.data || null;
  });

  async createCustomization<Table = Tables<"customizations">>(
    customization: TablesInsert<"customizations">,
    fields = "*"
  ) {
    const result = await this.supabase
      .from("customizations")
      .insert(customization)
      .select(fields)
      .returns<Table[]>()
      .single();

    return result.data || null;
  }
}
