import SlideLayout from "../SlideLayout";
import { Shield, Award, Star, Trophy, BookOpen, Users, MapPin } from "lucide-react";

const cards = [
  { icon: Shield, title: "Consultoria Especializada", sub: "Parceiro AWS nível Advanced", color: "hsl(270,80%,65%)" },
  { icon: Award, title: "Especialistas Reconhecidos", sub: "Certificados em múltiplas áreas", color: "hsl(280,85%,68%)" },
  { icon: Star, title: "Selos de Especialidade", sub: "Serverless, Dados e mais", color: "hsl(300,80%,65%)" },
  { icon: Trophy, title: "TOP 10 AWS LATAM", sub: "Reconhecidos pela CIOReview", color: "hsl(38,92%,55%)" },
  { icon: BookOpen, title: "Partner of the Year", sub: "Troféu AWS de excelência", color: "hsl(160,84%,50%)" },
  { icon: Users, title: "Great Place to Work", sub: "Ambiente orientado a valor", color: "hsl(195,90%,55%)" },
];

const stats = [
  { v: "8x", l: "Competências AWS", color: "hsl(300,80%,60%)" },
  { v: "10x", l: "SDPs Ativos", color: "hsl(270,80%,65%)" },
  { v: "TOP 3", l: "Brasil AWS", color: "hsl(38,92%,55%)" },
  { v: "ADV", l: "Partner Tier", color: "hsl(160,84%,50%)" },
];

export default function SlideNuage() {
  return (
    <SlideLayout>
      {/* Decorative rings */}
      <div className="absolute animate-spin-slow" style={{
        top: "-9%", right: "-5%", width: "21%", height: "37%",
        border: "1px solid rgba(200,100,255,0.06)", borderRadius: "50%",
      }} />
      <div className="absolute animate-spin-reverse" style={{
        bottom: "-5%", left: "-3%", width: "16%", height: "28%",
        border: "1px solid rgba(200,100,255,0.04)", borderRadius: "50%",
      }} />
      {/* Glow */}
      <div className="absolute animate-glow-breathe" style={{
        top: "5%", right: "5%", width: "20%", height: "35%",
        background: "radial-gradient(circle, hsl(300,80%,40%) 0%, transparent 70%)",
        borderRadius: "50%", opacity: 0.15,
      }} />

      <div className="relative z-10" style={{
        width: "100%", height: "100%", boxSizing: "border-box",
        display: "flex", flexDirection: "column", justifyContent: "center",
        padding: "3.5% 6%", gap: "2.5%",
      }}>

        {/* Header */}
        <div className="anim-fade-down delay-100" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "2%" }}>
            {/* Big TOP 3 badge */}
            <div style={{
              background: "linear-gradient(135deg, hsl(300,80%,30%), hsl(270,80%,25%))",
              border: "1px solid hsla(300,80%,55%,0.3)",
              borderRadius: 12, padding: "0.8% 1.6%",
              display: "flex", alignItems: "baseline", gap: "0.5%",
            }}>
              <span style={{ fontSize: "clamp(10px, 0.9vw, 16px)", fontWeight: 700, color: "rgba(255,255,255,0.6)", letterSpacing: "0.1em" }}>TOP</span>
              <span style={{
                fontSize: "clamp(28px, 3vw, 56px)", fontWeight: 900, lineHeight: 1,
                background: "linear-gradient(135deg, hsl(300,80%,65%), hsl(270,80%,70%))",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>3</span>
              <span style={{ fontSize: "clamp(10px, 0.9vw, 16px)", fontWeight: 700, color: "rgba(255,255,255,0.6)", letterSpacing: "0.1em" }}>BRASIL</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5%" }}>
              <MapPin style={{ width: "clamp(10px, 0.9vw, 14px)", height: "clamp(10px, 0.9vw, 14px)", color: "rgba(255,255,255,0.3)" }} />
              <span style={{ fontSize: "clamp(9px, 0.8vw, 14px)", color: "rgba(255,255,255,0.4)", letterSpacing: "0.2em" }}>NUAGE IT</span>
            </div>
          </div>
          {/* AWS badge */}
          <div style={{
            display: "flex", alignItems: "center", gap: "0.8%",
            background: "rgba(255,153,0,0.08)", border: "1px solid rgba(255,153,0,0.2)",
            borderRadius: 8, padding: "0.5% 1.2%",
          }}>
            <span style={{ color: "#FF9900", fontWeight: 900, fontSize: "clamp(12px, 1.1vw, 20px)", letterSpacing: "0.05em" }}>aws</span>
            <div style={{ width: 1, height: "2vh", background: "rgba(255,153,0,0.3)" }} />
            <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "clamp(8px, 0.7vw, 12px)", fontWeight: 600, letterSpacing: "0.05em" }}>Advanced Consulting Partner</span>
          </div>
        </div>

        {/* Gradient divider */}
        <div className="anim-scale-in delay-200" style={{
          height: 1, borderRadius: 1,
          background: "linear-gradient(90deg, hsl(300,80%,50%), hsl(270,80%,50%), transparent)",
          opacity: 0.25,
        }} />

        {/* Cards grid 3x2 */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1.2%" }}>
          {cards.map(({ icon: Icon, title, sub, color }, i) => (
            <div key={title} className="anim-fade-up" style={{
              background: "rgba(255,255,255,0.03)",
              border: `1px solid ${color}22`,
              borderLeft: `3px solid ${color}`,
              borderRadius: 10, padding: "1.4% 1.6%",
              display: "flex", alignItems: "center", gap: "1.2%",
              animationDelay: `${0.3 + i * 0.07}s`,
              transition: "background 0.2s",
            }}>
              <div style={{
                width: "3.8vh", height: "3.8vh", minWidth: 30, minHeight: 30,
                borderRadius: 8, flexShrink: 0,
                background: `${color}18`,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <Icon style={{ width: "55%", height: "55%", color }} />
              </div>
              <div>
                <p style={{ color: "white", fontWeight: 600, fontSize: "clamp(10px, 0.9vw, 15px)", lineHeight: 1.2, margin: 0 }}>{title}</p>
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "clamp(8px, 0.72vw, 12px)", lineHeight: 1.4, margin: "0.2vh 0 0" }}>{sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats row — animated counters */}
        <div className="anim-fade-up delay-700" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "1.2%" }}>
          {stats.map(({ v, l, color }, i) => (
            <div key={l} style={{
              background: `${color}0d`,
              border: `1px solid ${color}30`,
              borderRadius: 10, padding: "1% 1.5%",
              display: "flex", flexDirection: "column", alignItems: "center", gap: "0.3%",
              animationDelay: `${0.7 + i * 0.08}s`,
            }}>
              <span className="anim-count-up" style={{
                fontSize: "clamp(16px, 1.8vw, 32px)", fontWeight: 900, color,
                animationDelay: `${0.8 + i * 0.1}s`,
              }}>{v}</span>
              <span style={{ fontSize: "clamp(8px, 0.7vw, 11px)", color: "rgba(255,255,255,0.4)", textAlign: "center", letterSpacing: "0.05em" }}>{l}</span>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
