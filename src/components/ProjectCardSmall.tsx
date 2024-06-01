import { type ProjectCard } from "@/types";
import Link from "next/link";

export default function ProjectCardSmall({
  title,
  client,
  description,
  coverImage,
  page,
  tags,
}: ProjectCard) {
  return (
    // Don't forget the locale in the link
    <Link href={page}>
      <div className="bg-zinc-100 shadow-md">
        <h5>{client}</h5>
        <h4>{title}</h4>
      </div>
    </Link>
  );
}
