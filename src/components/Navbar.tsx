import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";
import { fetchNavbarMenu } from "@/contentful/getLayoutData";

export default async function Navbar({ locale }: any) {
  // Internationalization
  const navbarMenu = await fetchNavbarMenu(locale);

  return (
    <nav className="bg-light-background drop-shadow w-100">
      <div className="container flex justify-between py-4">
        {/* Brand Name */}
        <div className="font-calistoga text-zinc-700 relative after:content-[''] after:block after:border-b after:border-light-primary after:top-2 after:scale-x-0 hover:after:scale-x-100 after:origin-center after:transition-transform after:duration-200">
          <Link
            className="no-underline hover:text-light-primary"
            href={`/${locale}`}
          >
            <div>Mariam Hammoud</div>
          </Link>
        </div>

        {/* Navbar Links */}
        <div className="flex gap-4">
          {navbarMenu &&
            navbarMenu.pageLinks.map((item: any) => (
              <div className="font-calistoga text-zinc-700 relative after:content-[''] after:block after:border-b after:border-light-primary after:top-2 after:scale-x-0 hover:after:scale-x-100 after:origin-center after:transition-transform after:duration-200">
                <Link
                  className="no-underline text-zinc-700 hover:text-light-primary"
                  href={`/${locale}/${item.link}`}
                  key={item.link}
                >
                  <span>{item.title}</span>
                </Link>
              </div>
            ))}

          {/* Language Switcher */}
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
}
