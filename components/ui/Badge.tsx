import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "cyan" | "blue" | "emerald" | "purple" | "subtle" | "outline";
  size?: "sm" | "md";
  className?: string;
  dot?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "subtle",
  size = "md",
  className,
  dot = false,
}) => {
  const variants = {
    cyan: "bg-cyan-500/10 text-cyan-400 border-cyan-500/25",
    blue: "bg-blue-500/10 text-blue-400 border-blue-500/25",
    emerald: "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    purple: "bg-purple-500/10 text-purple-400 border-purple-500/25",
    subtle: "bg-white/[0.04] text-slate-300 border-white/10 hover:border-white/20",
    outline: "bg-transparent text-slate-400 border-white/15",
  };

  const dotColors = {
    cyan: "bg-cyan-400",
    blue: "bg-blue-400",
    emerald: "bg-emerald-400",
    purple: "bg-purple-400",
    subtle: "bg-slate-400",
    outline: "bg-slate-400",
  };

  const sizes = {
    sm: "text-xs px-2.5 py-0.5 rounded-full",
    md: "text-xs px-3 py-1 rounded-md",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 font-medium border transition-colors",
        variants[variant],
        sizes[size],
        className
      )}
    >
      {dot && (
        <span
          className={cn("w-1.5 h-1.5 rounded-full animate-pulse", dotColors[variant])}
        />
      )}
      {children}
    </span>
  );
};
