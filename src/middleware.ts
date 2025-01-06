import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import consts from "./lib/consts";

/**
 * Get the preferred locale based on the request headers.
 * @param request - Incoming Next.js request
 * @returns Preferred locale
 */
function getLocale(request: NextRequest): string {
  // Extract the 'accept-language' header
  const acceptLanguage = request.headers.get("accept-language") || "";
  const headers = { "accept-language": acceptLanguage };

  // Use Negotiator to parse supported languages
  const languages = new Negotiator({ headers }).languages();

  // Match the preferred language against supported locales
  return match(languages, consts.LOCALES, consts.DEFAULT_LOCALE);
}

// Middleware function for locale handling
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the pathname already contains a locale
  const pathnameHasLocale = consts.LOCALES.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // If the pathname includes a locale, do nothing
  if (pathnameHasLocale) return;

  // Get the preferred locale
  const locale = getLocale(request);

  // Redirect to the same path prefixed with the preferred locale
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

// Middleware config
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|images|favicon.ico).*)"],
};
