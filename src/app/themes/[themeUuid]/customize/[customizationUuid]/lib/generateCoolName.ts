import consts from "@/lib/config/consts";

export function generateCoolName(): string {
  // Pick random adjective and noun
  const adj = consts.ADJECTIVES[Math.floor(Math.random() * consts.ADJECTIVES.length)];
  const noun = consts.NOUNS[Math.floor(Math.random() * consts.NOUNS.length)];

  // Combine them
  return `${adj} ${noun}`;
}
