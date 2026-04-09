import SlideLayout from "../SlideLayout";
import { Shield, Award, Star, Trophy, BookOpen, Users } from "lucide-react";

const cards = [
  { icon: Shield, title: "Consultoria Especializada", sub: "Parceiro estratégico AWS nível Advanced" },
  { icon: Award, title: "Especialistas Reconhecidos", sub: "Certificados em Security, DevOps e Educação" },
  { icon: Star, title: "Selos de Especialidade", sub: "Serverless, Dados e múltiplos serviços AWS" },
  { icon: Trophy, title: "TOP 10 AWS LATAM", sub: "CIOReview entre os melhores da região" },
  { icon: BookOpen, title: "Partner of the Year", sub: "Troféu AWS pela excelência nas entregas" },
  { icon: Users, title: "Great Place to Work", sub: "Ambiente consultivo e orientado a valor" },
];

export default function SlideNuage() {
  return (
    <SlideLayout>
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", justifyContent: "center",
        padding: "50px 120px", gap: 28, overflow: "hidden",
      }}>

        {/* Header — TOP 3 + branding in one compact row */}
        <div className="anim-fade-down delay-200" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
            <span style={{ fontSize: 40, fontWeight: 900, color: "white", lineHeight: 1 }}>TOP</span>
            <span className="anim-count-up delay-500" style={{
              fontSize: 80, fontWeight: 900, lineHeight: 0.85,
              background: "linear-gradient(135deg, hsl(300,80%,55%), hsl(270,80%,60%))",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>3</span>
            <span style={{ fontSize: 32, fontWeight: 900, color: "white", lineHeight: 1 }}>BRASIL</span>
            <div style={{ width: 1, height: 40, background: "rgba(255,255,255,0.12)", margin: "0 16px" }} />
            <span style={{ fontSize: 16, fontWeight: 300, letterSpacing: "0.3em", color: "rgba(255,255,255,0.7)" }}>N U A G E</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ color: "#00a8e0", fontWeight: 900, fontSize: 16 }}>aws</span>
            <div style={{
              background: "hsl(300,80%,50%)", color: "white",
              fontSize: 11, fontWeight: 700, padding: "4px 10px", borderRadius: 5,
            }}>
              Advanced Consulting Partner
            </div>
          </div>
        </div>

        {/* Gradient divider */}
        <div className="anim-scale-in delay-300" style={{
          height: 2, borderRadius: 1,
          background: "linear-gradient(90deg, hsl(300,80%,50%), hsl(270,80%,50%), transparent)",
          opacity: 0.4,
        }} />

        {/* Section label */}
        <div className="anim-fade-up delay-400">
          <span style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.2em", color: "rgba(255,255,255,0.3)", textTransform: "uppercase" }}>
            Diferenciais
          </span>
        </div>

        {/* Cards grid — 3x2 horizontal layout */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {cards.map(({ icon: Icon, title, sub }, i) => (
            <div
              key={title}
              className="anim-fade-up"
              style={{
                background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 14, padding: "20px 22px",
                display: "flex", alignItems: "flex-start", gap: 14,
                animationDelay: `${0.5 + i * 0.08}s`,
              }}
            >
              <div style={{
                width: 42, height: 42, borderRadius: 10, flexShrink: 0,
                background: "rgba(200,50,200,0.12)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <Icon style={{ width: 20, height: 20, color: "hsl(300,80%,65%)" }} />
              </div>
              <div style={{ minWidth: 0 }}>
                <p style={{ color: "white", fontWeight: 600, fontSize: 17, lineHeight: 1.2, margin: 0 }}>{title}</p>
                <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 14, lineHeight: 1.4, margin: "5px 0 0" }}>{sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div className="anim-fade-up delay-800" style={{ display: "flex", gap: 12 }}>
          {[{ v: "8x", l: "Competências AWS" }, { v: "10x", l: "SDPs Alcançados" }, { v: "ADV", l: "Partner Tier" }].map(({ v, l }) => (
            <div key={l} style={{
              background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: 8, padding: "8px 18px", display: "flex", alignItems: "center", gap: 10,
            }}>
              <span style={{ fontSize: 18, fontWeight: 900, color: "hsl(300,80%,60%)" }}>{v}</span>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.4)" }}>{l}</span>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
