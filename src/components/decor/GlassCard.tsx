import type { ReactNode } from "react";

type GlassCardProps = {
  children: ReactNode;
  variant?: "light" | "dark";
  className?: string;
  id?: string;
};

export function GlassCard({ children, variant = "light", className = "", id }: GlassCardProps) {
  const lightClasses = "bg-white/60 border border-white/40 shadow-lg";
  const darkClasses = "bg-white/10 border border-white/20 shadow-lg";

  return (
    <div
      id={id}
      className={`rounded-2xl backdrop-blur-xl ${variant === "light" ? lightClasses : darkClasses} ${className}`}
    >
      {children}
    </div>
  );
}
