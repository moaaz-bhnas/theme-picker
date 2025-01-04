import { Locale } from "@/types/Locale";

export default function isRtl(locale: Locale) {
  return locale == "ar";
}
