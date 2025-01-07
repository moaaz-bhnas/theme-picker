import { TablesInsert } from "@/types/supabase/Database";

export function generateCoolName(): string {
  const adjectives = [
    "Vibrant",
    "Serene",
    "Lush",
    "Radiant",
    "Bold",
    "Elegant",
    "Mystic",
    "Daring",
    "Cozy",
    "Dynamic",
    "Majestic",
    "Royal",
    "Sleek",
    "Chic",
    "Rustic",
    "Timeless",
    "Epic",
    "Modern",
  ];

  const nouns = [
    "Sunset",
    "Harmony",
    "Bliss",
    "Aura",
    "Galaxy",
    "Echo",
    "Vibe",
    "Haven",
    "Whisper",
    "Fusion",
    "Dream",
    "Pulse",
    "Flare",
    "Nova",
    "Zen",
    "Mirage",
    "Frost",
    "Charm",
  ];

  // Pick random adjective and noun
  const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];

  // Combine them
  return `${adj} ${noun}`;
}

export function initCustomization(uuid: string, themeUuid: string) {
  const result: TablesInsert<"customizations"> = {
    uuid,
    handle: generateCoolName(),
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
