"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { useRouter } from "next/router";

// Define the interface for the context value
interface LocalizationContextType {
  locale: string;
  setLocale: (locale: string) => void;
}

// Create the context
const LocalizationContext = createContext<LocalizationContextType | undefined>(
  undefined
);

// Provider component
export const LocalizationProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const router = useRouter();
  const [locale, setLocale] = useState<string>(router.locale || "en-CA");

  useEffect(() => {
    if (router.locale !== locale) {
      setLocale(router.locale || "en-CA");
    }
  }, [router.locale]);

  return (
    <LocalizationContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocalizationContext.Provider>
  );
};

// Function to use the context => TO REMOVE IF WE SIMPLY USE useContext?
export const useLocalizationContext = () => {
  const context = useContext(LocalizationContext);
  if (!context) {
    throw new Error(
      "useLocalizationContext must be used within a LocalizationProvider"
    );
  }
  return context;
};
