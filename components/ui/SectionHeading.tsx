import React from "react";
import { Badge } from "./Badge";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badgeText?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badgeText,
  title,
  subtitle,
  centered = true,
  className,
}) => {
  return (
    <div
      className={cn(
        "max-w-3xl mb-12 sm:mb-16",
        centered ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {badgeText && (
        <div className={cn("mb-3", centered ? "flex justify-center" : "")}>
          <Badge variant="cyan" dot size="sm">
            {badgeText}
          </Badge>
        </div>
      )}

      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-3 sm:mt-4 text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};
