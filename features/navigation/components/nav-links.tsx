import Link from "next/link";
import { NavItem } from "../types";

interface NavLinksProps {
  items: NavItem[];
  className?: string;
}

export function NavLinks({ items, className = "" }: NavLinksProps) {
  return (
    <nav className={`flex items-center gap-8 ${className}`}>
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="font-normal text-black transition-colors"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
