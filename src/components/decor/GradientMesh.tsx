"use client";

type GradientMeshProps = {
  variant?: "light" | "dark";
  className?: string;
};

export function GradientMesh({ variant = "light", className = "" }: GradientMeshProps) {
  const lightClasses =
    "bg-gradient-to-br from-brand-blue/30 via-brand-green/20 to-brand-navy/10";
  const darkClasses =
    "bg-gradient-to-br from-brand-blue/40 via-brand-green/30 to-brand-navy/50";

  return (
    <div className={`absolute inset-0 -z-10 overflow-hidden ${className}`}>
      {/* Blob 1 - Blue */}
      <div
        className={`absolute rounded-full blur-[100px] ${variant === "light" ? "bg-brand-blue/20" : "bg-brand-blue/30"} animate-float`}
        style={{
          width: "500px",
          height: "500px",
          top: "-10%",
          right: "-10%",
          animationDelay: "0s",
        }}
      />

      {/* Blob 2 - Green */}
      <div
        className={`absolute rounded-full blur-[100px] ${variant === "light" ? "bg-brand-green/15" : "bg-brand-green/25"} animate-float`}
        style={{
          width: "600px",
          height: "600px",
          bottom: "-15%",
          left: "-5%",
          animationDelay: "2s",
        }}
      />

      {/* Blob 3 - Navy (only in dark variant) */}
      {variant === "dark" && (
        <div
          className="absolute rounded-full blur-[100px] bg-brand-navy/40 animate-float"
          style={{
            width: "700px",
            height: "700px",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            animationDelay: "4s",
          }}
        />
      )}
    </div>
  );
}
