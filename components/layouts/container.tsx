import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("max-w-[1728px] mx-auto px-6 md:px-16", className)}>
      {children}
    </div>
  );
}
