import { ReactNode } from "react";

type SlideVariant = "dark" | "light" | "accent";

interface SlideLayoutProps {
  children: ReactNode;
  variant?: SlideVariant;
  className?: string;
}

const backgrounds: Record<SlideVariant, string> = {
  dark: "bg-gradient-to-br from-slide-dark via-[hsl(226,38%,14%)] to-[hsl(222,38%,18%)]",
  light: "bg-gradient-to-br from-slide-light-bg via-slide-light-bg-2 to-slide-light-bg-3",
  accent: "bg-gradient-to-br from-[hsl(240,48%,15%)] via-[hsl(243,50%,25%)] to-[hsl(243,50%,32%)]",
};

export default function SlideLayout({ children, variant = "dark", className = "" }: SlideLayoutProps) {
  return (
    <div className={`relative w-full h-full overflow-hidden ${backgrounds[variant]} ${className}`}>
      {/* Dot pattern overlay */}
      {variant !== "light" && (
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      )}
      <div className="relative z-10 w-full h-full">{children}</div>
    </div>
  );
}
