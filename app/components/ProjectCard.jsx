import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ projectSummary }) {
  return (
    <div className="flex justify-center items-center gap-12 my-28">
      <div className="flex flex-col justify-center items-start">
        <h4 style={{ color: "#FF6F6B" }}>{projectSummary.client}</h4>
        <h3>{projectSummary.title}</h3>
        <p className="my-4">{projectSummary.description}</p>
        <ul className="p-0">
          {projectSummary.tags.map((tag) => (
            <li className="tag" key={tag}>
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <Link href={projectSummary.link}>
        <Image
          className="max-w-2xl rounded-lg hover:shadow-md"
          src={projectSummary.thumbnail}
          alt={projectSummary.client + " - " + projectSummary.title}
          quality={100}
        />
      </Link>
    </div>
  );
}
