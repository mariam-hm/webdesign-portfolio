import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";
import { fetchNavbarMenu } from "@/contentful/getLayoutData";

export default async function Navbar({ locale }: any) {
  // Internationalization
  const navbarMenu = await fetchNavbarMenu(locale);

  return (
    <nav className="bg-light-background drop-shadow w-100">
      <div>
        <Link href={`/${locale}`}>
          <div>Mariam Hammoud</div>
        </Link>

        <div>
          {navbarMenu &&
            navbarMenu.pageLinks.map((item: any) => (
              <Link href={`/${locale}/${item.link}`} key={item.link}>
                <span>{item.title}</span>
              </Link>
            ))}
        </div>

        <LanguageSwitcher />
      </div>
    </nav>
  );
}
