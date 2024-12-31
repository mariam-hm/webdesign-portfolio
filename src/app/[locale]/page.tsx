import type { Metadata } from "next";
import { componentMap } from "@/app/componentMap";
import { fetchAllPages, fetchPage } from "@/contentful/getPageData";
import { locales, LocaleTypes } from "@/app/i18n/settings";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const page = await fetchPage("home", params.locale);

  const title = page.title;
  const description = page.description || "";

  return {
    title: title,
    description: description,
  };
}

export async function generateStaticParams() {
  let paths = locales.map((locale: LocaleTypes) => ({
    locale: locale,
  }));

  return paths;
}

export default async function Page({ params }: any) {
  const page = await fetchPage("home", params.locale);

  const RenderComponent = ({ component }: any) => {
    const Component = componentMap[component._type];

    if (!Component) {
      return null;
    }

    return <Component {...component} />;
  };

  return (
    <div>
      {page &&
        page.content.map((component, index: number) => (
          <RenderComponent key={index} component={component} />
        ))}
    </div>
  );
}
