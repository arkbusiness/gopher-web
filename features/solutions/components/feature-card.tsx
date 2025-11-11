import { ReactNode } from "react";
interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export const SolutionFeatureCard = ({
  icon,
  title,
  description,
}: FeatureCardProps) => {
  return (
    <div className="flex flex-col gap-4 rounded-[14px] p-4 pb-9.5 bg-warm h-[26.06rem]">
      <div>{icon}</div>
      <h3 className="text-xl font-medium text-black">{title}</h3>
      <p className="font-normal">{description}</p>
    </div>
  );
};
