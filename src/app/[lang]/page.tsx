import { useTranslations, useLocale } from "next-intl";

export default function Home() {
  const locale = useLocale();

  console.log("Locale from page: ", locale);

  const translate = useTranslations("Index");
  return <h1>{translate("title")}</h1>;
}
