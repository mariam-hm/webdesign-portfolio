import ProjectCardSmall from "./ProjectCardSmall";
import { type ProjectCard } from "@/types";

export default function ProjectsGroup({ textContent, projectCardsGroup }: any) {
  const columnsNumber =
    projectCardsGroup.length >= 3 ? 3 : projectCardsGroup.length;

  console.log("projectCardsGroup", projectCardsGroup);
  return (
    <section className="container">
      <div className="flex justify-center items-center gap-8 mt-8">
        {projectCardsGroup.map((card: ProjectCard) => (
          <ProjectCardSmall {...card} />
        ))}
      </div>
    </section>
  );
}
