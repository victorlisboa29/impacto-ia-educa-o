import SlideLayout from "../SlideLayout";
import { Search, TrendingUp, BarChart3, Rocket } from "lucide-react";

const steps = [
  { num: "01", label: "Problema\nClaro",    Icon: Search,    color: "hsl(270,80%,60%)" },
  { num: "02", label: "Quick\nWins",        Icon: TrendingUp, color: "hsl(280,85%,65%)" },
  { num: "03", label: "Medir\nResultado",   Icon: BarChart3,  color: "hsl(300,80%,60%)" },
  { num: "04", label: "Escalar",            Icon: Rocket,     color: "hsl(160,84%,45%)" },
];

export default function Slide05() {
  return (
    <SlideLayout>
      <div className="absolute animate-spin-slow" style={{
        top: 160, right: 80, width: 340, height: 340,
        border: "1px solid rgba(200,100,255,0.07)", borderRadius: "50%",
      }} />
      <div className="absolute animate-spin-reverse" style={{
        top: 210, right: 120, width: 240, height: 240,
        border: "1px solid rgba(200,100,255,0.05)", borderRadius: "50%",
      }} />
      <div className="absolute animate-glow-breathe" style={{
        bottom: 100, right: 140, width: 240, height: 240,
        background: "radial-gradient(circle, hsl(300,80%,40%) 0%, transparent 70%)",
        borderRadius: "50%",
      }} />
      <div className="absolute animate-glow-breathe" style={{
        top: 200, left: 30, width: 200, height: 200,
        background: "radial-gradient(circle, hsl(270,80%,40%) 0%, transparent 70%)",
        borderRadius: "50%", animationDelay: "1.5s",
      }} />

      <div className="relative z-10" style={{
        height: "100%", display: "flex", alignItems: "center",
        justifyContent: "center", padding: "0 96px",
      }}>
        <div style={{ width: "100%" }}>

          <p className="anim-fade-down delay-100" style={{
            fontSize: 16, fontWeight: 700, letterSpacing: "0.2em",
            color: "hsl(280,100%,82%)", textTransform: "uppercase",
            marginBottom: 20, marginTop: 0,
          }}>Framework</p>

          <h2 className="anim-blur-in delay-300" style={{
            fontSize: 80, fontWeight: 900, lineHeight: 0.95,
            color: "white", margin: 0, letterSpacing: "-1px",
          }}>
            O que funciona<br />
            <span style={{
              background: "linear-gradient(90deg, hsl(270,80%,65%), hsl(300,80%,60%))",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>na prática</span>
          </h2>

          <div className="anim-scale-in delay-500" style={{
            width: 80, height: 3,
            background: "linear-gradient(90deg, hsl(300,80%,55%), transparent)",
            borderRadius: 2, margin: "32px 0",
          }} />

          <p className="anim-fade-up delay-600" style={{
            fontSize: 24, color: "rgba(255,255,255,0.6)",
            lineHeight: 1.5, margin: "0 0 48px 0",
          }}>
            Um framework simples para gerar resultado com IA generativa na educação
          </p>

          {/* Preview steps */}
          <div className="anim-fade-up delay-700" style={{ display: "flex", gap: 16, alignItems: "center" }}>
            {steps.map(({ num, label, Icon, color }, i) => (
              <div key={num} style={{ display: "flex", alignItems: "center", gap: 16, flex: 1 }}>
                <div style={{
                  flex: 1, background: `${color}10`,
                  border: `1px solid ${color}30`,
                  borderRadius: 10, padding: "16px 20px",
                  display: "flex", alignItems: "center", gap: 12,
                }}>
                  <div style={{
                    width: 38, height: 38, borderRadius: 8, background: `${color}20`,
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  }}>
                    <Icon style={{ width: 20, height: 20, color }} />
                  </div>
                  <div>
                    <span style={{ fontSize: 11, color, fontWeight: 700, display: "block" }}>{num}</span>
                    <span style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", fontWeight: 600, whiteSpace: "pre-line", lineHeight: 1.2 }}>{label}</span>
                  </div>
                </div>
                {i < 3 && <span style={{ color: "rgba(255,255,255,0.2)", fontSize: 20, flexShrink: 0 }}>→</span>}
              </div>
            ))}
          </div>

        </div>
      </div>
    </SlideLayout>
  );
}
