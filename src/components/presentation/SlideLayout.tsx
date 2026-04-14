import { ReactNode } from "react";

type SlideVariant = "dark" | "light" | "accent";

interface SlideLayoutProps {
  children: ReactNode;
  variant?: SlideVariant;
  className?: string;
}

export default function SlideLayout({ children, className = "" }: SlideLayoutProps) {
  return (
    <div className={`relative w-full h-full overflow-hidden bg-[#07030f] ${className}`}>

      {/* AURORA LAYER */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-[20%] -left-[10%] w-[900px] h-[700px] rounded-full opacity-30 animate-aurora-1"
          style={{ background: "radial-gradient(ellipse, hsl(270,80%,40%) 0%, transparent 65%)", filter: "blur(80px)" }}
        />
        <div
          className="absolute -top-[15%] right-[-5%] w-[700px] h-[600px] rounded-full opacity-20 animate-aurora-2"
          style={{ background: "radial-gradient(ellipse, hsl(250,90%,55%) 0%, transparent 65%)", filter: "blur(90px)" }}
        />
        <div
          className="absolute bottom-[-20%] right-[-5%] w-[800px] h-[600px] rounded-full opacity-25 animate-aurora-3"
          style={{ background: "radial-gradient(ellipse, hsl(300,80%,45%) 0%, transparent 65%)", filter: "blur(80px)" }}
        />
        <div
          className="absolute bottom-[-10%] -left-[5%] w-[600px] h-[500px] rounded-full opacity-20 animate-aurora-1"
          style={{ background: "radial-gradient(ellipse, hsl(240,70%,35%) 0%, transparent 65%)", filter: "blur(70px)", animationDelay: "3s" }}
        />
        <div
          className="absolute top-[20%] left-[35%] w-[500px] h-[400px] rounded-full opacity-10 animate-aurora-2"
          style={{ background: "radial-gradient(ellipse, hsl(280,100%,60%) 0%, transparent 70%)", filter: "blur(100px)", animationDelay: "1.5s" }}
        />
      </div>

      {/* GRID LINES */}
      <div
        className="absolute inset-0 opacity-[0.045] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(hsl(270,50%,70%) 1px, transparent 1px), linear-gradient(90deg, hsl(270,50%,70%) 1px, transparent 1px)",
          backgroundSize: "90px 90px",
        }}
      />

      {/* DOT MATRIX */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, hsl(280,70%,80%) 1.2px, transparent 1.2px)",
          backgroundSize: "45px 45px",
        }}
      />

      {/* VIGNETTE */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 90% 85% at 50% 50%, transparent 40%, rgba(7,3,15,0.75) 100%)" }}
      />

      <div className="relative z-10 w-full h-full">{children}</div>
    </div>
  );
}
