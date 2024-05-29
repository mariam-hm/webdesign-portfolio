"use client";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { useContext } from "react";
import { useRouter } from "next/navigation";
//import { LocalizationContext } from "../app/LocalizationContext"; // Adjust the import path

export default function LanguageButton() {
  // const localizationContext = useContext(LocalizationContext);
  // const router = useRouter();

  // if (!localizationContext) {
  //   throw new Error(
  //     "LocalizationContext must be used within a LocalizationProvider"
  //   );
  // }

  // const { locale, setLocale } = localizationContext;

  // const changeLanguage = (newLocale: string) => {
  //   setLocale(newLocale);
  //   console.log("Locale set: ", newLocale);
  // };

  return (
    <Menu>
      <MenuButton>Language</MenuButton>
      <MenuItems anchor="bottom end">
        <MenuItem>
          <button className="block data-[focus]:bg-blue-100">Français</button>
        </MenuItem>
        <MenuItem>
          <button className="block data-[focus]:bg-blue-100">English</button>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
}
