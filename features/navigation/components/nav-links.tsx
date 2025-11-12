"use client";

import Link from "next/link";
import { NavItem } from "../types";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavLinksProps {
  items: NavItem[];
  className?: string;
}

export function NavLinks({ items, className = "" }: NavLinksProps) {
  const pathname = usePathname();
  return (
    <nav className={`flex items-center gap-8 ${className}`}>
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "font-normal text-black hover:text-primary hover:underline transition-colors",
            pathname === item.href && "text-primary font-semibold underline",
          )}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
