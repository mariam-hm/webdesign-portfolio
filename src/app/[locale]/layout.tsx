import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import { locales } from "@/app/i18n/settings";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  console.log("lang: ", params.locale);
  return (
    <main>
      <Navbar locale={params.locale} />
      {children}
      <Footer />
    </main>
  );
}
