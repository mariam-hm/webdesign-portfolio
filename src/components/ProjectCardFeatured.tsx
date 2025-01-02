import { type ProjectCard } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Tag from "@/components/Tag";

export default function ProjectCard({
  title,
  client,
  description,
  coverImage,
  pageSlug,
  tags,
}: ProjectCard) {
  return (
    <div className="container grid lg:grid-cols-[1fr_2fr] grid-cols-1 justify-stretch items-center gap-2 my-16 lg:gap-12 lg:my-28">
      <div className="flex flex-col justify-center items-start md:items-center lg:items-start order-2 lg:order-1">
        {client && (
          <h4 className="font-lato text-base text-light-primary uppercase md:text-center lg:text-left">
            {client}
          </h4>
        )}
        {title && <h3 className="mt-0 md:text-center lg:text-left">{title}</h3>}
        {description && (
          <div className="my-4">{documentToReactComponents(description)}</div>
        )}
        <div className="flex p-0 ml-0 flex-wrap gap-1">
          {tags &&
            tags.map((tag) => (
              <Tag {...tag} key={tag.id}>
                {tag}
              </Tag>
            ))}
        </div>
      </div>

      <div className="flex justify-center items-center order-1 lg:order-2">
        <Link href={pageSlug}>
          <Image
            className="md:max-w-2xl md:max-h-96 rounded-lg hover:drop-shadow-md transition duration-300"
            src={coverImage.url}
            width={coverImage.width}
            height={coverImage.height}
            alt={client + " - " + title}
            quality={100}
            style={{ objectFit: "cover" }}
          />
        </Link>
      </div>
    </div>
  );
}
