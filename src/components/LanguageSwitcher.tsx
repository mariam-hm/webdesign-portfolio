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
      <MenuButton className="font-calistoga hover:text-light-primary uppercase transition duration-200">
        {locale}
      </MenuButton>
      <MenuItems anchor="bottom">
        <div className="bg-white/100 drop-shadow z-100">
          <MenuItem>
            <button
              onClick={() => handleLocaleChange("en")}
              className="flex justify-start items-center px-4 py-2 bg-white/100 hover:bg-zinc-100/100 font-calistoga text-zinc-700"
            >
              English
            </button>
          </MenuItem>
          <MenuItem>
            <button
              onClick={() => handleLocaleChange("fr")}
              className="flex justify-start items-center px-4 py-2 bg-white/100 hover:bg-zinc-100/100 font-calistoga text-zinc-700"
            >
              Français
            </button>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  );
}
