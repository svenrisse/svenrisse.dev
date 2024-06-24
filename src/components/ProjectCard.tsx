import { StepForward } from "lucide-react";
import Link from "next/link";
import type { z } from "velite";
import { IconMap } from "./IconMap";
import Picture from "./Picture";
import type { projects } from "velite.config";

type ProjectCardProps = {
  project: z.infer<typeof projects.schema>;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="flex justify-between gap-2 overflow-hidden rounded-2xl border border-b-8 p-3">
      <div className="tablet:w-3/5 w-full space-y-2">
        <Link
          href={`/projects/${project.slugAsParams}`}
          className="group/link space-y-2"
        >
          <div className="inline-flex items-center gap-1">
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="font-heading text-xl font-semibold">
                {project.title}
              </h1>
            </div>
            <span className="-translate-x-1 opacity-0 transition-all duration-100 ease-in-out group-hover/link:translate-x-0 group-hover/link:opacity-100">
              <StepForward size={12} />
            </span>
          </div>
          <p className="text-muted-foreground max-w-2xl text-sm">
            {project.description}
          </p>
        </Link>
        <div className="flex flex-wrap items-center gap-2">
          {project.tags.map((tag) => (
            <p
              key={tag}
              className="bg-muted cursor-pointer rounded px-2 py-1 text-xs"
            >
              {tag}
            </p>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {project.links.map((link, i) => (
            <a key={i} href={link.url} target="_blank" className="social-link">
              {IconMap[link.name.toLowerCase() as keyof typeof IconMap]}
              <span className="sr-only">{`${link.name} - ${link.url}`}</span>
            </a>
          ))}
        </div>
      </div>
      <div className="tablet:block hidden aspect-video w-2/5 transform-gpu overflow-hidden rounded-xl transition-all duration-100 ease-in-out hover:border">
        <Link href={`/projects/${project.slugAsParams}`}>
          <Picture
            image={project.image}
            width={250}
            height={100}
            quality={100}
            alt={project.title}
            className="h-full w-full scale-100 transform-gpu object-cover transition-all ease-in-out hover:scale-105"
          />
        </Link>
      </div>
    </div>
  );
}
