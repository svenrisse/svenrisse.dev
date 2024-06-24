import Link from "next/link";
import { Rss } from "lucide-react";
import { siteConfig } from "~/config/site.config";
import { portfolioConfig } from "~/config/portfolio.config";
import { Button } from "./ui/button";
import ThemeToggler from "./theme/ThemeToggler";
import { Socials } from "./Socials";

export default function Hero() {
  return (
    <>
      <Link href="/">
        <span className="font-mono text-sm underline">{siteConfig.name}</span>
      </Link>
      <div className="mt-6 flex items-center justify-between">
        <h1 className="head-text-sm">{portfolioConfig.name}</h1>
        <div className="flex items-center gap-2">
          <Button size="icon" variant="ghost" className="rounded-full" asChild>
            <Link href="/feed">
              <Rss size={18} />
              <span className="sr-only">rss feed</span>
            </Link>
          </Button>
          <ThemeToggler />
        </div>
      </div>
      <h3 className="mt-2 text-lg">{portfolioConfig.tagline}</h3>
      <p className="my-6 max-w-2xl">{portfolioConfig.bio}</p>
      <Socials />
      <div className="text-muted-foreground mt-16 max-w-2xl space-y-2 rounded-lg border-l-4 py-2 pl-4">
        <p>
          <span className="text-primary/90 font-semibold">Frontend:</span>{" "}
          React, Next.js, Tailwindcss, Framer motion
        </p>
        <p>
          <span className="text-primary/90 font-semibold">Backend:</span>{" "}
          Hono.js, Express.js, Fastapi, Fiber, Mux
        </p>
        <p>
          <span className="text-primary/90 font-semibold">Mobile:</span> React
          Native, Expo, Flutter
        </p>
        <p>
          <span className="text-primary/90 font-semibold">Web3:</span> Solana,
          Anchor, Solana Wallet Provider, Solana Mobile Wallet Provider
        </p>
        <p>
          <span className="text-primary/90 font-semibold">
            Microcontroller:
          </span>{" "}
          Arduino (UNO, Nano, Micro, Mini), ESP32, ESP8266 PlatformIO, Raspberry
          Pi
        </p>
      </div>
    </>
  );
}
