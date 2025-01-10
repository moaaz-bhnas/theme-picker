import { SupabaseClient } from "@supabase/supabase-js";
import { Database, Tables, TablesInsert } from "@/types/supabase/Database";
import { err, ok } from "neverthrow";

export default class SupabaseUtils {
  constructor(private supabase: SupabaseClient<Database>) {}

  // Generalized fetch method
  private async fetchSingle<Table>(
    table: keyof Database["public"]["Tables"],
    filters: Record<string, any>,
    fields = "*"
  ) {
    let query = this.supabase.from(table).select(fields);

    Object.entries(filters).forEach(([key, value]) => {
      query = query.eq(key, value);
    });

    const result = await query.returns<Table[]>().single();
    if (result.error) return err(result.error);

    return ok(result.data);
  }

  // Generalized create method
  private async createRecord<Table>(table: keyof Database["public"]["Tables"], data: any, fields = "*") {
    const result = await this.supabase.from(table).insert(data).select(fields).returns<Table[]>().single();

    if (result.error) return err(result.error);

    return ok(result.data);
  }

  // Methods for themes
  async getThemes() {
    const result = await this.supabase.from("themes").select("*");
    if (result.error) return err(result.error);

    return ok(result.data);
  }

  async getTheme<Table = Tables<"themes">>(uuid: string, fields = "*") {
    return this.fetchSingle<Table>("themes", { uuid }, fields);
  }

  async getThemeByHandle<Table = Tables<"themes">>(handle: string, fields = "*") {
    return this.fetchSingle<Table>("themes", { handle }, fields);
  }

  // Methods for customizations
  async getCustomization<Table = Tables<"customizations">>(uuid: string, fields = "*") {
    return this.fetchSingle<Table>("customizations", { uuid }, fields);
  }

  async createCustomization<Table = Tables<"customizations">>(
    customization: TablesInsert<"customizations">,
    fields = "*"
  ) {
    return this.createRecord<Table>("customizations", customization, fields);
  }

  getThemeImage(bucket: string, path: string) {
    const result = this.supabase.storage.from(bucket).getPublicUrl(path);

    return result.data.publicUrl || "";
  }
}
