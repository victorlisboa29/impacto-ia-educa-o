import SlideLayout from "../SlideLayout";
import { Shield, Award, Star, Trophy, BookOpen, Users } from "lucide-react";

const cards = [
  { icon: Shield, title: "Consultoria Especializada", sub: "Parceiro AWS nível Advanced" },
  { icon: Award, title: "Especialistas Reconhecidos", sub: "Certificados em múltiplas áreas" },
  { icon: Star, title: "Selos de Especialidade", sub: "Serverless, Dados e mais" },
  { icon: Trophy, title: "TOP 10 AWS LATAM", sub: "Reconhecidos pela CIOReview" },
  { icon: BookOpen, title: "Partner of the Year", sub: "Troféu AWS de excelência" },
  { icon: Users, title: "Great Place to Work", sub: "Ambiente orientado a valor" },
];

export default function SlideNuage() {
  return (
    <SlideLayout>
      {/* Decorative ring */}
      <div className="absolute animate-spin-slow" style={{
        top: -100, right: -100, width: 400, height: 400,
        border: "1px solid rgba(200,100,255,0.06)", borderRadius: "50%",
      }} />

      <div className="relative z-10" style={{
        width: "100%", height: "100%", boxSizing: "border-box",
        display: "flex", flexDirection: "column", justifyContent: "center",
        padding: "50px 140px", gap: 24,
      }}>

        {/* Header row */}
        <div className="anim-fade-down delay-200" style={{
          display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap",
        }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
            <span style={{ fontSize: 36, fontWeight: 900, color: "white" }}>TOP</span>
            <span style={{
              fontSize: 64, fontWeight: 900, lineHeight: 0.85,
              background: "linear-gradient(135deg, hsl(300,80%,55%), hsl(270,80%,60%))",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>3</span>
            <span style={{ fontSize: 28, fontWeight: 900, color: "white" }}>BRASIL</span>
          </div>
          <div style={{ width: 1, height: 36, background: "rgba(255,255,255,0.12)" }} />
          <span style={{ fontSize: 16, fontWeight: 300, letterSpacing: "0.3em", color: "rgba(255,255,255,0.7)" }}>NUAGE</span>
          <div style={{ flex: 1 }} />
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ color: "#00a8e0", fontWeight: 900, fontSize: 16 }}>aws</span>
            <div style={{
              background: "hsl(300,80%,50%)", color: "white",
              fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 5,
            }}>
              Advanced Consulting Partner
            </div>
          </div>
        </div>

        {/* Gradient divider */}
        <div className="anim-scale-in delay-300" style={{
          height: 2, borderRadius: 1,
          background: "linear-gradient(90deg, hsl(300,80%,50%), hsl(270,80%,50%), transparent)",
          opacity: 0.3,
        }} />

        {/* Cards grid 3x2 */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14 }}>
          {cards.map(({ icon: Icon, title, sub }, i) => (
            <div
              key={title}
              className="anim-fade-up"
              style={{
                background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 12, padding: "18px 20px",
                display: "flex", alignItems: "flex-start", gap: 14,
                animationDelay: `${0.4 + i * 0.08}s`,
              }}
            >
              <div style={{
                width: 40, height: 40, borderRadius: 10, flexShrink: 0,
                background: "rgba(200,50,200,0.12)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <Icon style={{ width: 18, height: 18, color: "hsl(300,80%,65%)" }} />
              </div>
              <div>
                <p style={{ color: "white", fontWeight: 600, fontSize: 16, lineHeight: 1.2, margin: 0 }}>{title}</p>
                <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 13, lineHeight: 1.4, margin: "4px 0 0" }}>{sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div className="anim-fade-up delay-700" style={{ display: "flex", gap: 12 }}>
          {[{ v: "8x", l: "Competências" }, { v: "10x", l: "SDPs" }, { v: "ADV", l: "Partner Tier" }].map(({ v, l }) => (
            <div key={l} style={{
              background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: 8, padding: "8px 16px", display: "flex", alignItems: "center", gap: 8,
            }}>
              <span style={{ fontSize: 18, fontWeight: 900, color: "hsl(300,80%,60%)" }}>{v}</span>
              <span style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>{l}</span>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
