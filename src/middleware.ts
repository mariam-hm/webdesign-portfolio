import { NextResponse } from "next/server";
import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import nextConfig from "../next.config.mjs";

const { locales, defaultLocale } = nextConfig.i18n;

// Function to get the preferred locale from the request
// function getLocale(request: Request): string {
//   console.log("getLocale entered!");
//   const negotiatorHeaders = {
//     "accept-language": request.headers.get("accept-language") || "",
//   };
//   const negotiator = new Negotiator({ headers: negotiatorHeaders });
//   const languages = negotiator.languages();

//   return matchLocale(languages, locales, defaultLocale);
// }

// export function middleware(request: Request) {
//   console.log("middleware entered!");
//   const { pathname } = new URL(request.url);

//   if (
//     locales.some(
//       (locale: string) =>
//         pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
//     )
//   ) {
//     console.log("Locale already present in pathname:", pathname);
//     return NextResponse.next();
//   } else {
//     const locale = getLocale(request);
//     console.log("Locale to redirect to:", locale);
//     const newUrl = new URL(`/${locale}${pathname}`, request.url);
//     console.log("Redirecting to:", newUrl.toString());

//     return NextResponse.redirect(newUrl);
//   }
// }

// export const config = {
//   matcher: [
//     "/((?!_next).*)", // Skip all internal paths (_next)
//   ],
// };

export function middleware(request: Request) {
  console.log("Hello from the middleware!");
}
