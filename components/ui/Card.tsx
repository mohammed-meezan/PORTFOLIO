import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glowOnHover?: boolean;
  gradientBorder?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  glowOnHover = true,
  gradientBorder = false,
  ...props
}) => {
  return (
    <div
      className={cn(
        "relative rounded-2xl bg-surface-100/80 border border-white/[0.08] p-6 backdrop-blur-xl transition-all duration-300",
        glowOnHover && "hover:border-cyan-500/30 hover:shadow-glow-cyan hover:-translate-y-1",
        gradientBorder && "before:absolute before:inset-0 before:-z-10 before:rounded-2xl before:p-[1px] before:bg-gradient-to-b before:from-cyan-500/20 before:to-transparent",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
