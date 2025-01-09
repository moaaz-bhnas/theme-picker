export function getThemeName(pathname: string): string {
  const match = pathname.match(/\/themes\/customize\/[^/]+\/([^/]+)/); // Extract theme name based on structure

  if (!match) {
    throw new Error("Theme name not found");
  }

  return match[1]; // Return the theme name or null if not found
}
