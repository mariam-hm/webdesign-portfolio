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
  page,
  tags,
}: ProjectCard) {
  return (
    <div>
      Project card featured here!!!
      {/* <div>
        <h4>{client}</h4>
        <h3>{title}</h3>
        <div>{description && documentToReactComponents(description)}</div>
        <ul>{tags && tags.map((tag: any) => <Tag {...tag} key={tag.id} />)}</ul>
      </div>
      <Link href={page}>
        <Image
          className="max-w-2xl rounded-lg hover:shadow-md"
          src={coverImage.url}
          alt={coverImage.description}
          width={coverImage.width}
          height={coverImage.height}
          quality={100}
        />
      </Link> */}
    </div>
  );
}
