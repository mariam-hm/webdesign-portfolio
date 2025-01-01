import ProjectCardSmall from "./ProjectCardSmall";
import { type ProjectCard } from "@/types";

export default function ProjectsGroup({ textContent, projectCardsGroup }: any) {
  const columnsClass =
    projectCardsGroup.length >= 3
      ? "lg:grid-cols-3"
      : "lg:grid-cols-" + projectCardsGroup.length.toString();

  return (
    <section className="container flex justify-center items-start">
      <div
        className={`grid justify-center items-start gap-8 mt-8 grid-cols-1 ${columnsClass}`}
      >
        {projectCardsGroup.map((card: ProjectCard) => (
          <ProjectCardSmall {...card} />
        ))}
      </div>
    </section>
  );
}
