import { cn } from "@/lib/utils";
import { type VariantProps } from "class-variance-authority";
import Link from "next/link";
import * as React from "react";
import { buttonVariants } from "./button";

export interface LinkButtonProps
  extends React.ComponentProps<"a">,
    VariantProps<typeof buttonVariants> {
  href: string;
}

export function LinkButton({
  className,
  variant,
  size,
  href,
  children,
  ...props
}: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        buttonVariants({ variant, size, className }),
        "cursor-pointer flex gap-x-[6px] items-center",
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
