import type { Metadata } from "next";
import type { Experience as ExperienceType } from "../../../types";
import { experiencesConfig } from "~/config/experience.config";
import { siteConfig } from "~/config/site.config";

export async function generateMetadata(): Promise<Metadata> {
  const description = `Hey, I'm ${
    siteConfig.creator.name
  }. I've worked with a variety of companies and have experience in different roles. I've also made a few projects on my own. Here's a list of my work experience.
    ${experiencesConfig
      .map((exp) => {
        return `${exp.title} at ${exp.company.name}.`;
      })
      .join("\n")}
    `;
  const keywords = [
    ...siteConfig.keywords,
    "Experience",
    ...experiencesConfig.map((exp) => exp.company.name),
  ];
  const title = `Experience | ${siteConfig.creator.name} | ${siteConfig.name}`;
  const og = `${siteConfig.siteUrl}/experience-og.png`;

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url: `${siteConfig.siteUrl}/experience`,
      siteName: siteConfig.name,
      images: [
        {
          url: og,
          width: 1800,
          height: 1000,
          alt: title,
        },
      ],
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      site: siteConfig.creator.url,
      title,
      description,
      images: {
        url: og,
        width: 1800,
        height: 1000,
        alt: title,
      },
    },
  };
}

export default function ExperienceSection() {
  return (
    <div className="mt-10 w-full max-w-xl space-y-10">
      {experiencesConfig.map((exp, i) => {
        return <Experience key={i} experience={exp} />;
      })}
    </div>
  );
}

const Experience = ({ experience }: { experience: ExperienceType }) => {
  return (
    <div>
      <div className="flex flex-wrap justify-between">
        <p className="font-semibold">
          <a
            href={experience.company.url}
            target="_blank"
            className="font-heading text-lg hover:underline"
          >
            {experience.company.name}
          </a>
          <span className="bg-secondary ml-2 rounded px-2 py-1 text-xs">
            {experience.location.name}
          </span>
        </p>
        <p className="text-muted-foreground text-xs">
          {experience.start} - {experience.end}
        </p>
      </div>
      <p className="tracking-tight">{experience.title}</p>
      <ul className="text-muted-foreground list-disc pl-5 text-sm">
        {experience.description.map((exp, i) => {
          return <li key={i}>{exp}</li>;
        })}
      </ul>
    </div>
  );
};
