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
    <div>Project card small here !!!</div>
    // Don't forget the locale in the link
    // <Link href={page}>
    //   <div className="">
    //     <h5>{client}</h5>
    //     <h4>{title}</h4>
    //   </div>
    // </Link>
  );
}
