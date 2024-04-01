import Image from "next/image";
import Link from "next/link";

import ProjectCard from "./components/ProjectCard";

const projectsSummaries = [
  {
    id: 0,
    client: "APRIL ON",
    title: "Redesigning the status system for clarity",
    description:
      "As a UX designer, I was tasked with leading the redesign and implementation of the status system in APRIL ON",
    tags: ["UX Design", "UI Design", "Front-end development", "Desktop"],
    thumbnail: "./",
  },
  {
    id: 1,
    client: "Kids on the Block",
    title: "Back online with a strong brand identity",
    description:
      "As a UX designer, I was tasked with leading the redesign and implementation of the status system in APRIL ON",
    tags: ["UX Design", "UI Design", "Front-end development", "Desktop"],
    thumbnail: "",
  },
];

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
