import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";
import { fetchNavbarMenu } from "@/contentful/getLayoutData";

export default async function Navbar({ locale }: any) {
  // Internationalization
  const navbarMenu = await fetchNavbarMenu();

  return (
    <nav>
      <div className="flex justify-between font-calistoga">
        <Link href="/">
          <div>Mariam Hammoud</div>
        </Link>

        <div className="flex gap-4">
          {navbarMenu &&
            navbarMenu.pageLinks.map((item: any) => (
              //<Link href={"/" + item.link} key={item.link}>
              <Link href={`/${locale}/${item.link}`} key={item.link}>
                <span className="">{item.title}</span>
              </Link>
            ))}
        </div>

        <LanguageSwitcher />
      </div>
    </nav>
  );
}
