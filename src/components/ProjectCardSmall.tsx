import { type ProjectCard } from "@/types";
import Link from "next/link";
import Image from "next/image";
import { ProjectCard } from "@/types";

export default function ProjectCardSmall({
  title,
  client,
  description,
  coverImage,
  pageSlug,
  tags,
}: ProjectCard) {
  return (
    <Link
      href={pageSlug}
      className="group max-w-80 no-underline text-zinc-700 hover:text-zinc-700"
    >
      <div className="rounded-md overflow-hidden hover:drop-shadow-md transition duration-300">
        <Image
          src={coverImage.url}
          height={coverImage.height}
          width={coverImage.width}
          alt={coverImage.description}
        />
      </div>

      <div className="text-center pb-4 px-4">
        <h5 className="text-base font-lato uppercase text-zinc-400 group-hover:text-light-primary">
          {client}
        </h5>
        <h4 className="mt-0 text-lg">{title}</h4>
      </div>
    </Link>
    // Don't forget the locale in the link
    // <Link href={page}>

    // </Link>
  );
}
