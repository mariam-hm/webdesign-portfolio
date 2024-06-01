"use client";

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

export default function LanguageSwitcher() {
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
  );
}