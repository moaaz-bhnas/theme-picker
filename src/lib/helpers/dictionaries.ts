import "server-only";

const dictionaries = {
  en: () => import("@/dictionaries/en.json").then((module) => module.default),
  ar: () => import("@/dictionaries/ar.json").then((module) => module.default),
};

export async function getDictionary(locale: "en" | "ar") {
  return dictionaries[locale]();
}
