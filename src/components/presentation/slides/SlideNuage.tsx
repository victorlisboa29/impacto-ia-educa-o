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
      <div style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "50px 100px", gap: 32 }}>

        {/* Header row — Logo + TOP 3 + AWS badge */}
        <div style={{ display: "flex", alignItems: "flex-end", gap: 40 }}>

          {/* TOP 3 BRASIL — compact horizontal */}
          <div className="anim-fade-left delay-200" style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
            <span style={{ fontSize: 48, fontWeight: 900, color: "white", letterSpacing: "-1px", lineHeight: 1 }}>TOP</span>
            <span className="anim-count-up delay-500" style={{
              fontSize: 100, fontWeight: 900, lineHeight: 0.8, letterSpacing: "-3px",
              background: "linear-gradient(135deg, hsl(300,80%,55%), hsl(270,80%,60%))",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>3</span>
            <span style={{ fontSize: 36, fontWeight: 900, color: "white", letterSpacing: "-1px", lineHeight: 1 }}>BRASIL</span>
          </div>

          {/* Divider */}
          <div className="anim-scale-in delay-400" style={{ width: 1, height: 60, background: "rgba(255,255,255,0.12)", flexShrink: 0 }} />

          {/* Branding */}
          <div className="anim-fade-right delay-300" style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <span style={{ fontSize: 18, fontWeight: 300, letterSpacing: "0.3em", color: "white" }}>N U A G E</span>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ color: "#00a8e0", fontWeight: 900, fontSize: 18 }}>aws</span>
              <div style={{
                background: "hsl(300,80%,50%)", color: "white",
                fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 5,
              }}>
                Advanced Consulting Partner
              </div>
            </div>
          </div>

          {/* Spacer */}
          <div style={{ flex: 1 }} />

          {/* Stats pills */}
          <div className="anim-fade-right delay-600" style={{ display: "flex", gap: 10 }}>
            {[{ v: "8x", l: "Competências" }, { v: "10x", l: "SDPs" }, { v: "ADV", l: "Partner" }].map(({ v, l }) => (
              <div key={l} style={{
                background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 8, padding: "8px 16px", display: "flex", alignItems: "center", gap: 8,
              }}>
                <span style={{ fontSize: 18, fontWeight: 900, color: "hsl(300,80%,60%)" }}>{v}</span>
                <span style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>{l}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Divider line */}
        <div className="anim-scale-in delay-400" style={{
          height: 1, background: "linear-gradient(90deg, hsl(300,80%,50%), hsl(270,80%,50%), transparent)",
          opacity: 0.3,
        }} />

        {/* Cards grid — 3x2 */}
        <div>
          <div className="anim-fade-up delay-400" style={{ marginBottom: 14 }}>
            <span style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.2em", color: "rgba(255,255,255,0.3)", textTransform: "uppercase" }}>
              Diferenciais
            </span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {cards.map(({ icon: Icon, title, sub }, i) => (
              <div
                key={title}
                className="anim-fade-up"
                style={{
                  background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 14, padding: "22px 24px",
                  display: "flex", alignItems: "flex-start", gap: 16,
                  animationDelay: `${0.5 + i * 0.08}s`,
                }}
              >
                <div style={{
                  width: 44, height: 44, borderRadius: 11, flexShrink: 0,
                  background: "rgba(200,50,200,0.12)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <Icon style={{ width: 20, height: 20, color: "hsl(300,80%,65%)" }} />
                </div>
                <div style={{ minWidth: 0 }}>
                  <p style={{ color: "white", fontWeight: 600, fontSize: 18, lineHeight: 1.2, margin: 0 }}>{title}</p>
                  <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 15, lineHeight: 1.4, margin: "6px 0 0" }}>{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
