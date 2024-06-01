import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { fallbackLng, locales } from "./app/i18n/settings";

export function middleware(request: NextRequest) {
  console.log("Hello from the middleware!");
  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname;

  //console.log("Request: ", request);
  console.log("Pathname: ", pathname);

  // Check if the default locale is in the pathname
  if (
    pathname.startsWith(`/${fallbackLng}/`) ||
    pathname === `/${fallbackLng}`
  ) {
    console.log(
      "URL: ",
      pathname.replace(
        `/${fallbackLng}`,
        pathname === `/${fallbackLng}` ? "/" : ""
      ),
      request.url
    );
    return NextResponse.redirect(
      new URL(
        pathname.replace(
          `/${fallbackLng}`,
          pathname === `/${fallbackLng}` ? "/" : ""
        ),
        request.url
      ),
      301
    );
  }

  // Check if the pathname is missing any locale
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    const RewriteUrl = request.nextUrl;
    RewriteUrl.pathname = `/${fallbackLng}${pathname}`;

    console.log(
      "Pathname missing locale: ",
      RewriteUrl.pathname,
      "-",
      request.url
    );

    return NextResponse.rewrite(new URL(RewriteUrl, request.url));
  }
}

export const config = {
  /*
   * Match all request paths except for the ones starting with:
   * - api (API routes)
   * - _next/static (static files)
   * - _next/image (image optimization files)
   * - favicon.ico (favicon file)
   */
  matcher: ["/((?!api|_next/static|_next/image|images|favicon.ico).*)"],
};
