import { ReactNode } from "react";

type SlideVariant = "dark" | "light" | "accent";

interface SlideLayoutProps {
  children: ReactNode;
  variant?: SlideVariant;
  className?: string;
}

const backgrounds: Record<SlideVariant, string> = {
  dark: "bg-gradient-to-br from-[hsl(270,100%,6%)] via-[hsl(270,70%,12%)] to-[hsl(275,60%,18%)]",
  light: "bg-gradient-to-br from-[hsl(270,30%,97%)] via-[hsl(270,40%,95%)] to-[hsl(275,45%,92%)]",
  accent: "bg-gradient-to-br from-[hsl(270,80%,15%)] via-[hsl(275,75%,25%)] to-[hsl(280,70%,30%)]",
};

export default function SlideLayout({ children, variant = "dark", className = "" }: SlideLayoutProps) {
  return (
    <div className={`relative w-full h-full overflow-hidden ${backgrounds[variant]} ${className}`}>
      {/* Network-style dot pattern */}
      {variant !== "light" && (
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(circle, hsl(280,80%,80%) 1px, transparent 1px)",
            backgroundSize: "45px 45px",
          }}
        />
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
      <div className="relative z-10 w-full h-full">{children}</div>
    </div>
  );
}
