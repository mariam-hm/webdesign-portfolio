"use client";

import Link from "next/link";
import LanguageButton from "./LanguageButton";

import { Fragment } from "react";
// Internationalization
import { useTranslation } from "@/app/i18n/client";
import type { LocaleTypes } from "@/app/i18n/settings";
import {
  useRouter,
  usePathname,
  useParams,
  useSelectedLayoutSegments,
} from "next/navigation";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";

export default function Navbar(menu: any) {
  // Internationalization
  const locale = useParams()?.locale as LocaleTypes;
  const pathname = usePathname();
  const currentRoute = pathname;
  const { t } = useTranslation(locale, "common");

  const { push } = useRouter();
  const router = useRouter();
  const urlSegments = useSelectedLayoutSegments();

  async function handleLocaleChange(event: any) {
    const newLocale = event;

    // This is used by the Header component which is used in `app/[locale]/layout.tsx` file,
    // urlSegments will contain the segments after the locale.
    // We replace the URL with the new locale and the rest of the segments.
    router.push(`/${newLocale}/${urlSegments.join("/")}`);
  }

  return (
    <nav>
      <div className="flex justify-between font-calistoga">
        <Link href="/">
          <div>Mariam Hammoud</div>
        </Link>

        <div className="flex gap-4">
          {menu &&
            menu.pageLinks.map((item: any) => (
              //<Link href={"/" + item.link} key={item.link}>
              <Link href={`/${locale}/${item.link}`}>
                <span className="">{item.title}</span>
              </Link>
            ))}
        </div>

        <Menu>
          <MenuButton>{t("hello")}</MenuButton>
          <MenuItems anchor="bottom">
            <MenuItem>
              <button
                onClick={() => handleLocaleChange("en")}
                className="block w-full text-left data-[focus]:bg-blue-100"
              >
                English
              </button>
            </MenuItem>
            <MenuItem>
              <button
                onClick={() => handleLocaleChange("fr")}
                className="block data-[focus]:bg-blue-100"
              >
                Français
              </button>
            </MenuItem>
          </MenuItems>
        </Menu>
      </div>
    </nav>
  );
}
