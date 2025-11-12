import { cn } from "@/lib/utils";

interface WhyUsFeatureCardProps {
  title: string;
  description: string;
  className?: string;
}

export const WhyUsFeatureCard = ({
  title,
  description,
  className,
}: WhyUsFeatureCardProps) => {
  return (
    <div className={cn("rounded-[12px] p-4", className)}>
      <h3 className="text-xl font-semibold text-black mb-2.5">{title}</h3>
      <p className="font-normal leading-relaxed xl:max-w-117 w-full">
        {description}
      </p>
    </div>
  );
};
