export default function ProjectCard({ projectSummary }) {
  return (
    <div>
      <h3>{projectSummary.client}</h3>
      <h2>{projectSummary.title}</h2>
      <p>{projectSummary.description}</p>
      <ul>
        {projectSummary.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <Image
        src={projectSummary.thumbnail}
        alt={projectSummary.client + projectSummary.title}
        quality={100}
        placeholder="blur"
      />
    </div>
  );
}
