import ProjectCardSmall from "./ProjectCardSmall";
import { type ProjectCard } from "@/types";

export default function ProjectsGroup({ textContent, projectCardsGroup }: any) {
  return (
    <section className="container">
      <h4>{textContent}</h4>
      <div className="grid sm:grid-cols-2 md:grid-cols-3">
        {projectCardsGroup.map((card: ProjectCard) => (
          <ProjectCardSmall {...card} />
        ))}
      </div>
    </section>
  );
}
