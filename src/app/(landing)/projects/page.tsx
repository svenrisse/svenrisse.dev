import { projects } from ".velite";
import ProjectCard from "~/components/ProjectCard";

export default function Home() {
  return (
    <div className="mt-10 space-y-6">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
}
