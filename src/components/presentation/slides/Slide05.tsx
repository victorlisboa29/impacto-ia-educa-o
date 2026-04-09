import SlideLayout from "../SlideLayout";
import { Search, TrendingUp, BarChart3, Rocket } from "lucide-react";

const steps = [
  { num: "01", label: "Problema\nClaro", Icon: Search, color: "hsl(270,80%,60%)" },
  { num: "02", label: "Quick\nWins", Icon: TrendingUp, color: "hsl(280,85%,65%)" },
  { num: "03", label: "Medir\nResultado", Icon: BarChart3, color: "hsl(300,80%,60%)" },
  { num: "04", label: "Escalar", Icon: Rocket, color: "hsl(160,84%,45%)" },
];

export default function Slide05() {
  return (
    <SlideLayout>
      {/* Decorative rings */}
      <div className="absolute animate-spin-slow" style={{
        top: "15%", right: "5%", width: "18%", height: "32%",
        border: "1px solid rgba(200,100,255,0.07)", borderRadius: "50%",
      }} />
      <div className="absolute animate-spin-reverse" style={{
        top: "20%", right: "8%", width: "12%", height: "22%",
        border: "1px solid rgba(200,100,255,0.05)", borderRadius: "50%",
      }} />
      <div className="absolute animate-glow-breathe" style={{
        bottom: "10%", right: "12%", width: "12%", height: "22%",
        background: "radial-gradient(circle, hsl(300,80%,40%) 0%, transparent 70%)",
        borderRadius: "50%",
      }} />
      <div className="absolute animate-glow-breathe" style={{
        top: "20%", left: "2%", width: "10%", height: "18%",
        background: "radial-gradient(circle, hsl(270,80%,40%) 0%, transparent 70%)",
        borderRadius: "50%", animationDelay: "1.5s",
      }} />

      <div className="relative z-10" style={{
        height: "100%", display: "flex", alignItems: "center",
        justifyContent: "center", padding: "0 6%",
      }}>
        <div style={{ width: "100%" }}>

          <p className="anim-fade-down delay-100" style={{
            fontSize: "clamp(11px, 1vw, 18px)", fontWeight: 700,
            letterSpacing: "0.2em", color: "hsl(280,100%,82%)",
            textTransform: "uppercase", marginBottom: "1.5%", marginTop: 0,
          }}>Framework</p>

          <h2 className="anim-blur-in delay-300" style={{
            fontSize: "clamp(32px, 4.2vw, 80px)", fontWeight: 900,
            lineHeight: 0.95, color: "white", margin: 0, letterSpacing: "-1px",
          }}>
            O que funciona<br />
            <span style={{
              background: "linear-gradient(90deg, hsl(270,80%,65%), hsl(300,80%,60%))",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>na prática</span>
          </h2>

          <div className="anim-scale-in delay-500" style={{
            width: "8%", height: 3,
            background: "linear-gradient(90deg, hsl(300,80%,55%), transparent)",
            borderRadius: 2, margin: "2.5% 0",
          }} />

          <p className="anim-fade-up delay-600" style={{
            fontSize: "clamp(14px, 1.3vw, 24px)", color: "rgba(255,255,255,0.6)",
            lineHeight: 1.5, margin: "0 0 4% 0",
          }}>
            Um framework simples para gerar resultado com IA generativa na educação
          </p>

          {/* Preview of the 4 steps */}
          <div className="anim-fade-up delay-700" style={{
            display: "flex", gap: "1.5%", alignItems: "center",
          }}>
            {steps.map(({ num, label, Icon, color }, i) => (
              <div key={num} style={{ display: "flex", alignItems: "center", gap: "1.5%", flex: 1 }}>
                <div style={{
                  flex: 1,
                  background: `${color}10`,
                  border: `1px solid ${color}30`,
                  borderRadius: 10, padding: "1.5% 1.8%",
                  display: "flex", alignItems: "center", gap: "1%",
                  animationDelay: `${0.7 + i * 0.1}s`,
                }}>
                  <div style={{
                    width: "3.5vh", height: "3.5vh", minWidth: 28, minHeight: 28,
                    borderRadius: 8, background: `${color}20`,
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  }}>
                    <Icon style={{ width: "55%", height: "55%", color }} />
                  </div>
                  <div>
                    <span style={{ fontSize: "clamp(8px, 0.7vw, 12px)", color, fontWeight: 700, display: "block" }}>{num}</span>
                    <span style={{ fontSize: "clamp(9px, 0.82vw, 14px)", color: "rgba(255,255,255,0.7)", fontWeight: 600, whiteSpace: "pre-line", lineHeight: 1.2 }}>{label}</span>
                  </div>
                </div>
                {i < 3 && (
                  <span style={{ color: "rgba(255,255,255,0.2)", fontSize: "clamp(12px, 1.2vw, 20px)", flexShrink: 0 }}>→</span>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </SlideLayout>
  );
}
