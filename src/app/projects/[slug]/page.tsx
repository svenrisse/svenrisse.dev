import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects } from ".velite";
import { siteConfig } from "~/config/site.config";
import Picture from "~/components/Picture";
import { IconMap } from "~/components/IconMap";
import { MDXContentRenderer } from "~/components/mdx/MDXContentRenderer";

type ProjectPageProps = {
  params: {
    slug: string;
  };
};

function getProjectFromParam(params: { slug: string }) {
  const slug = params.slug;
  const project = projects.find((project) => project.slugAsParams === slug);

  if (!project) {
    null;
  }
  return project;
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const project = getProjectFromParam(params);

  if (!project) {
    return {};
  }

  const ogUrl = new URL(`${siteConfig.siteUrl}${project.image.src}`);
  ogUrl.searchParams.set("heading", project.title);
  ogUrl.searchParams.set("type", "Blog Post");
  ogUrl.searchParams.set("mode", "dark");

  return {
    title: `${project.title} | ${siteConfig.name} | ${siteConfig.creator.name}`,
    description: project.description,
    keywords: [...project.tags, ...siteConfig.keywords, project.title],
    openGraph: {
      title: `${project.title} | ${siteConfig.name} | ${siteConfig.creator.name}`,
      description: project.description,
      type: "article",
      url: `${siteConfig.siteUrl}/projects/${project.slugAsParams}`,
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | ${siteConfig.name}`,
      description: project.description,
      images: [ogUrl.toString()],
    },
  };
}

export async function generateStaticParams(): Promise<
  ProjectPageProps["params"][]
> {
  return projects.map((project) => ({
    slug: project.slugAsParams,
  }));
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectFromParam(params);

  if (!project) {
    notFound();
  }

  return (
    <main className="relative w-full p-0 sm:p-5 lg:h-screen">
      <div className="flex h-full w-full flex-wrap justify-between rounded-2xl sm:border lg:divide-x">
        <div className="relative w-full p-2 md:p-8 lg:w-2/5">
          <div className="mb-2 flex justify-between">
            <Link href="/" className="group/back text-xs">
              <ArrowLeft
                size={18}
                className="transform-gpu transition-transform duration-100 ease-in-out group-hover/back:-translate-x-1"
              />
              <span className="sr-only">rdsx.dev</span>
            </Link>
          </div>
          <Picture
            image={project.image}
            width={600}
            height={400}
            alt={project.title}
            className="mx-auto rounded-xl border border-b-8"
          />
          <h1 className="head-text-sm mb-4 mt-6 p-1">{project.title}</h1>
          <div className="mb-8">
            <div className="mb-4 flex flex-wrap items-center gap-2">
              {project.links.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  className="social-link"
                >
                  {IconMap[link.name.toLowerCase() as keyof typeof IconMap]}
                  <span className="sr-only">
                    {`${link.name} - ${link.url}`}
                  </span>
                </a>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {project.tags.map((tag) => (
                <p
                  key={tag}
                  className="bg-secondary cursor-pointer rounded p-1 text-xs"
                >
                  {tag}
                </p>
              ))}
            </div>
          </div>
          <p className="mb-4 rounded border-l-4 p-1 pl-3">
            {project.description}
          </p>
        </div>
        <div
          id="tab-section"
          className="relative w-full overflow-y-scroll p-2 md:p-8 lg:h-full lg:w-3/5"
        >
          <MDXContentRenderer code={project.body} />
        </div>
      </div>
    </main>
  );
}
