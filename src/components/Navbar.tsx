"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { navbarConfig } from "~/config/navbar.config";
import { cn } from "~/lib/utils";

export default function Navbar() {
  return (
    <div className="nav-container inline-flex items-center rounded-lg text-sm">
      {navbarConfig.map((item, index) => (
        <NavItem
          key={index}
          url={item.url}
          className={cn(
            index == 0 && "rounded-l-lg border-l-[0.5px]",
            index == navbarConfig.length - 1 && "rounded-r-lg border-r-[0.5px]",
          )}
        >
          {item.title}
        </NavItem>
      ))}
    </div>
  );
}

type NavItemProps = {
  children: React.ReactNode;
  url: string;
  className?: string;
};
const NavItem = ({ children, url, className }: NavItemProps) => {
  const pathname = usePathname();
  const active = pathname === url || (pathname.includes(url) && url !== "/");

  return (
    <Link href={url}>
      <div
        className={cn(
          "hover:bg-secondary bg-background min-w-16 cursor-pointer border-t-[0.5px] p-2 text-center transition-all duration-100 ease-out lg:min-w-24",
          active ? "current hover:bg-background" : "nav-item",
          className,
        )}
      >
        {children}
      </div>
    </Link>
  );
};
