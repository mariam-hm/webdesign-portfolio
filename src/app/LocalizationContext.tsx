"use client";

import { usePathname } from "next/navigation";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

// Define the interface for the context value
interface LocalizationContextType {
  locale: string;
  setLocale: (locale: string) => void;
}

// Create the context
export const LocalizationContext = createContext<
  LocalizationContextType | undefined
>(undefined);

// Provider component
export const LocalizationProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const pathname = usePathname();
  const [locale, setLocale] = useState<string>(
    pathname.split("/")[1] || "en-CA"
  );

  useEffect(() => {
    const currentLocale = pathname.split("/")[1];

    if (currentLocale !== locale) {
      setLocale(currentLocale || "en-CA");
    }
  }, [pathname]);

  return (
    <LocalizationContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocalizationContext.Provider>
  );
};

// // Function to use the context => TO REMOVE IF WE SIMPLY USE useContext?
// export const useLocalizationContext = () => {
//   const context = useContext(LocalizationContext);
//   if (!context) {
//     throw new Error(
//       "useLocalizationContext must be used within a LocalizationProvider"
//     );
//   }
//   return context;
// };
