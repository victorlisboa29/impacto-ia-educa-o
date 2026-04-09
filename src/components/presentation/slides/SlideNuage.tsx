import SlideLayout from "../SlideLayout";
import { Shield, Award, Star, Trophy, BookOpen, Users, MapPin } from "lucide-react";

const cards = [
  { icon: Shield,   title: "Consultoria Especializada",  sub: "Parceiro AWS nível Advanced",    color: "hsl(270,80%,65%)" },
  { icon: Award,    title: "Especialistas Reconhecidos", sub: "Certificados em múltiplas áreas", color: "hsl(280,85%,68%)" },
  { icon: Star,     title: "Selos de Especialidade",     sub: "Serverless, Dados e mais",        color: "hsl(300,80%,65%)" },
  { icon: Trophy,   title: "TOP 10 AWS LATAM",           sub: "Reconhecidos pela CIOReview",     color: "hsl(38,92%,55%)"  },
  { icon: BookOpen, title: "Partner of the Year",        sub: "Troféu AWS de excelência",        color: "hsl(160,84%,50%)" },
  { icon: Users,    title: "Great Place to Work",        sub: "Ambiente orientado a valor",      color: "hsl(195,90%,55%)" },
];

const stats = [
  { v: "8x",    l: "Competências AWS", color: "hsl(300,80%,60%)" },
  { v: "10x",   l: "SDPs Ativos",      color: "hsl(270,80%,65%)" },
  { v: "TOP 3", l: "Brasil AWS",       color: "hsl(38,92%,55%)"  },
];

export default function SlideNuage() {
  return (
    <SlideLayout>
      {/* Decorative rings */}
      <div className="absolute animate-spin-slow" style={{
        top: -100, right: -60, width: 420, height: 420,
        border: "1px solid rgba(200,100,255,0.06)", borderRadius: "50%",
      }} />
      <div className="absolute animate-spin-reverse" style={{
        bottom: -60, left: -40, width: 320, height: 320,
        border: "1px solid rgba(200,100,255,0.04)", borderRadius: "50%",
      }} />
      <div className="absolute animate-glow-breathe" style={{
        top: 50, right: 60, width: 380, height: 380,
        background: "radial-gradient(circle, hsl(300,80%,40%) 0%, transparent 70%)",
        borderRadius: "50%", opacity: 0.12,
      }} />

      <div className="relative z-10" style={{
        width: "100%", height: "100%", boxSizing: "border-box",
        display: "flex", flexDirection: "column", justifyContent: "center",
        padding: "48px 96px", gap: 24,
      }}>

        {/* Header */}
        <div className="anim-fade-down delay-100" style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            {/* TOP 3 badge */}
            <div style={{
              background: "linear-gradient(135deg, hsl(300,80%,30%), hsl(270,80%,25%))",
              border: "1px solid hsla(300,80%,55%,0.3)",
              borderRadius: 12, padding: "10px 20px",
              display: "flex", alignItems: "baseline", gap: 6,
            }}>
              <span style={{ fontSize: 16, fontWeight: 700, color: "rgba(255,255,255,0.6)", letterSpacing: "0.1em" }}>TOP</span>
              <span style={{
                fontSize: 56, fontWeight: 900, lineHeight: 1,
                background: "linear-gradient(135deg, hsl(300,80%,65%), hsl(270,80%,70%))",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>3</span>
              <span style={{ fontSize: 16, fontWeight: 700, color: "rgba(255,255,255,0.6)", letterSpacing: "0.1em" }}>BRASIL</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <MapPin style={{ width: 14, height: 14, color: "rgba(255,255,255,0.3)" }} />
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", letterSpacing: "0.2em" }}>NUAGE IT</span>
            </div>
          </div>

          {/* AWS badge */}
          <div style={{
            display: "flex", alignItems: "center", gap: 10,
            background: "rgba(255,153,0,0.08)", border: "1px solid rgba(255,153,0,0.2)",
            borderRadius: 8, padding: "8px 18px",
          }}>
            <span style={{ color: "#FF9900", fontWeight: 900, fontSize: 20, letterSpacing: "0.05em" }}>aws</span>
            <div style={{ width: 1, height: 20, background: "rgba(255,153,0,0.3)" }} />
            <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 13, fontWeight: 600, letterSpacing: "0.05em" }}>
              Advanced Consulting Partner
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="anim-scale-in delay-200" style={{
          height: 1, borderRadius: 1,
          background: "linear-gradient(90deg, hsl(300,80%,50%), hsl(270,80%,50%), transparent)",
          opacity: 0.25,
        }} />

        {/* Cards 3×2 */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
          {cards.map(({ icon: Icon, title, sub, color }, i) => (
            <div key={title} className="anim-fade-up" style={{
              background: "rgba(255,255,255,0.03)",
              border: `1px solid ${color}22`,
              borderLeft: `3px solid ${color}`,
              borderRadius: 10, padding: "18px 20px",
              display: "flex", alignItems: "center", gap: 14,
              animationDelay: `${0.3 + i * 0.07}s`,
            }}>
              <div style={{
                width: 44, height: 44, borderRadius: 8, flexShrink: 0,
                background: `${color}18`,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <Icon style={{ width: 22, height: 22, color }} />
              </div>
              <div>
                <p style={{ color: "white", fontWeight: 600, fontSize: 15, lineHeight: 1.2, margin: 0 }}>{title}</p>
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 12, lineHeight: 1.4, margin: "4px 0 0" }}>{sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div className="anim-fade-up delay-700" style={{
          display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16,
        }}>
          {stats.map(({ v, l, color }, i) => (
            <div key={l} style={{
              background: `${color}0d`,
              border: `1px solid ${color}30`,
              borderRadius: 10, padding: "18px 24px",
              display: "flex", alignItems: "center", gap: 16,
              animationDelay: `${0.7 + i * 0.08}s`,
            }}>
              <span className="anim-count-up" style={{
                fontSize: 36, fontWeight: 900, color,
                animationDelay: `${0.8 + i * 0.1}s`,
                flexShrink: 0,
              }}>{v}</span>
              <div style={{ width: 1, height: 28, background: `${color}30`, flexShrink: 0 }} />
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", letterSpacing: "0.05em", lineHeight: 1.3 }}>{l}</span>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
