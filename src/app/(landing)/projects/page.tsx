import { projects } from ".velite";
import ProjectCard from "~/components/ProjectCard";

export default function ProjectHome() {
  const projectsSorted = projects.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <div className="mt-10 space-y-6">
      {projectsSorted.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
}
