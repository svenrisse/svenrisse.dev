import Link from "next/link";
import { Rss } from "lucide-react";
import { siteConfig } from "~/config/site.config";
import { portfolioConfig } from "~/config/portfolio.config";
import { Button } from "./ui/button";
import ThemeToggler from "./theme/ThemeToggler";
import { Socials } from "./Socials";
import { toolConfig } from "~/config/tools.config";

export default function Hero() {
  return (
    <>
      <Link href="/">
        <span className="font-mono text-sm underline">{siteConfig.name}</span>
      </Link>
      <div className="mt-6 flex items-center justify-between">
        <h1 className="head-text-sm">{portfolioConfig.name}</h1>
        <div className="flex items-center gap-2">
          <ThemeToggler />
        </div>
      </div>
      <h3 className="mt-2 text-lg">{portfolioConfig.tagline}</h3>
      <p className="my-6 max-w-2xl">{portfolioConfig.bio}</p>
      <Socials />
      <div className="text-muted-foreground mt-16 max-w-2xl space-y-2 rounded-lg border-l-4 py-2 pl-4">
        {Object.entries(toolConfig).map(([key, val], i) => (
          <p key={i}>
            <span className="text-primary/90 font-semibold">{key}: </span>
            {val.map((v, i) => (
              <span key={i}>
                {v}
                {i !== val.length - 1 && ","}{" "}
              </span>
            ))}
          </p>
        ))}
      </div>
    </>
  );
}
