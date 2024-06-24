import { portfolioConfig } from "~/config/portfolio.config";
import { Button } from "./ui/button";
import { IconMap } from "./IconMap";

export const Socials = () => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button
        variant="outline"
        className="hover:border-primary/30 hover:bg-background shadow-none transition-all duration-100 hover:border-b-4 active:scale-[0.97] active:border-b"
      >
        <a href={portfolioConfig.resume} target="_blank">
          Resume
        </a>
      </Button>
      {Object.keys(portfolioConfig.links).map((key: string, index: number) => {
        const link =
          portfolioConfig.links[key as keyof typeof portfolioConfig.links];
        return (
          <Button
            key={key}
            size="icon"
            variant="outline"
            className="hover:border-primary/30 hover:bg-background shadow-none transition-all duration-100 hover:border-[0.2px] hover:border-b-4 active:scale-[0.97] active:border-b"
            asChild
          >
            <a href={link} target="_blank">
              {IconMap[key as keyof typeof IconMap]}
              <span className="sr-only">{`${key} - ${link}`}</span>
            </a>
          </Button>
        );
      })}
    </div>
  );
};
