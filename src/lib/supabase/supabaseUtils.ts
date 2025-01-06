import "server-only";
import { SupabaseClient } from "@supabase/supabase-js";
import { cache } from "react";
import { Database } from "@/types/supabase/Database";

export default class SupabaseUtils {
  constructor(private supabase: SupabaseClient<Database>) {}

  getThemes = cache(async () => {
    const result = await this.supabase.from("themes").select("*");
    return result.data || [];
  });

  getThemeImage(bucket: string, path: string) {
    const result = this.supabase.storage.from(bucket).getPublicUrl(path);
    return result.data.publicUrl || "";
  }
}
