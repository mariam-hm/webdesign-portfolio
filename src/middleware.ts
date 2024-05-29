import createMiddleware from "next-intl/middleware";
import { locales, defaultLocale } from "./i18n";

export default createMiddleware({
  locales: locales, // A list of all locales that are supported
  defaultLocale: defaultLocale, // Used when no locale matches
});

// Dynamically generate the matcher pattern

export const config = {
  // Match only internationalized pathnames
  // TODO Find a way to not hardcode the locales here?
  matcher: ["/", "/(en|fr)/:path*"],
};
