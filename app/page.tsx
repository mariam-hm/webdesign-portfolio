import ProjectCard from "./components/ProjectCard";
import { projectsSummaries } from "./_data/data";

export default function Home() {
  return (
    <main>
      <div>
        <h1>👋 Hello, I’m Mariam</h1>

        <h2>
          I am a UX designer and Web developer who makes things more appealing
          and streamlined for better user experience
        </h2>
      </div>

      <div>
        <h2>My projects</h2>
        {projectsSummaries.map((projectSummary) => (
          <ProjectCard
            projectSummary={projectSummary}
            key={projectSummary.id}
          />
        ))}
      </div>
    </main>
  );
}
