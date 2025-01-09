export function getThemeName(pathname: string): string | null {
  const match = pathname.match(/\/themes\/customize\/[^/]+\/([^/]+)/); // Extract theme name based on structure
  return match ? match[1] : null; // Return the theme name or null if not found
}
