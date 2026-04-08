import { ReactNode } from "react";

type SlideVariant = "dark" | "light" | "accent";

interface SlideLayoutProps {
  children: ReactNode;
  variant?: SlideVariant;
  className?: string;
}

const backgrounds: Record<SlideVariant, string> = {
  dark: "bg-[#0a0414]",
  light: "bg-gradient-to-br from-[hsl(270,30%,97%)] via-[hsl(270,40%,95%)] to-[hsl(275,45%,92%)]",
  accent: "bg-gradient-to-br from-[hsl(270,80%,15%)] via-[hsl(275,75%,25%)] to-[hsl(280,70%,30%)]",
};

export default function SlideLayout({ children, variant = "dark", className = "" }: SlideLayoutProps) {
  return (
    <div className={`relative w-full h-full overflow-hidden ${backgrounds[variant]} ${className}`}>

      {/* Deep mesh gradient — executive dark background */}
      {variant === "dark" && (
        <>
          {/* Base radial orbs */}
          <div className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse 80% 60% at 10% 20%, hsl(270,80%,14%) 0%, transparent 60%),
                radial-gradient(ellipse 60% 50% at 90% 80%, hsl(280,70%,10%) 0%, transparent 55%),
                radial-gradient(ellipse 50% 40% at 50% 50%, hsl(265,60%,8%) 0%, transparent 70%)
              `,
            }}
          />
          {/* Accent glow top-right */}
          <div className="absolute -top-24 right-[-6%] w-[520px] h-[520px] rounded-full opacity-20 animate-pulse-slow"
            style={{ background: "radial-gradient(circle, hsl(270,80%,50%) 0%, transparent 70%)" }}
          />
          {/* Magenta glow bottom-left */}
          <div className="absolute bottom-[-10%] -left-12 w-[380px] h-[380px] rounded-full opacity-15 animate-pulse-slow"
            style={{ background: "radial-gradient(circle, hsl(300,80%,50%) 0%, transparent 70%)", animationDelay: "1.5s" }}
          />
          {/* Subtle grid lines */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `
                linear-gradient(hsl(270,60%,70%) 1px, transparent 1px),
                linear-gradient(90deg, hsl(270,60%,70%) 1px, transparent 1px)
              `,
              backgroundSize: "80px 80px",
            }}
          />
          {/* Fine dot layer */}
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: "radial-gradient(circle, hsl(280,80%,80%) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        </>
      )}

      {variant === "light" && (
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, hsl(270,60%,40%) 1px, transparent 1px)",
            backgroundSize: "45px 45px",
          }}
        />
      )}

      {variant === "accent" && (
        <>
          <div className="absolute -top-24 right-[-6%] w-[500px] h-[500px] rounded-full opacity-20"
            style={{ background: "radial-gradient(circle, hsl(270,80%,60%) 0%, transparent 70%)" }}
          />
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: "radial-gradient(circle, hsl(280,80%,80%) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        </>
      )}

      <div className="relative z-10 w-full h-full">{children}</div>
    </div>
  );
}
