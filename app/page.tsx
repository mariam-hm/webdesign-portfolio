import ProjectCard from "./components/ProjectCard";
import { projectsSummaries } from "./_data/data";

export default function Home() {
  return (
    <main>
      <div className="intro flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-start w-4/5">
          <h1 className="mb-8 text-zinc-700">
            👋 Hello, I’m <span style={{ color: "#FF6F6B" }}>Mariam</span>
          </h1>

          <h3>
            I am a UX designer and Web developer who makes things more appealing
            and streamlined for better user experience
          </h3>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <h2 id="projects" className="border-none">
          My projects
        </h2>
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
