import SlideLayout from "../SlideLayout";
import { Shield, Award, Star, Trophy, BookOpen, Users } from "lucide-react";

const cards = [
  { icon: Shield, title: "Consultoria Especializada", sub: "Parceiro estratégico AWS nível Advanced em TI e Cloud" },
  { icon: Award, title: "Especialistas Reconhecidos", sub: "Certificados em Networking, Security, DevOps e Educação" },
  { icon: Star, title: "Selos de Especialidade", sub: "Cobertura em Serverless, Dados e múltiplos serviços AWS" },
  { icon: Trophy, title: "TOP 10 AWS LATAM", sub: "Reconhecidos pela CIOReview entre os melhores da região" },
  { icon: BookOpen, title: "Partner of the Year", sub: "Troféu AWS pelo nível de excelência nas entregas" },
  { icon: Users, title: "Great Place to Work", sub: "Ambiente consultivo, colaborativo e orientado a valor" },
];

export default function SlideNuage() {
  return (
    <SlideLayout>
      <div style={{ height: "100%", display: "flex", padding: "60px 80px", gap: 60 }}>

        {/* LEFT — TOP 3 destaque */}
        <div style={{ width: 480, flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "center", gap: 20 }}>

          {/* Logo */}
          <div style={{ fontSize: 22, fontWeight: 300, letterSpacing: "0.3em", color: "white", marginBottom: 8 }}>
            N U A G E
          </div>

          {/* AWS badge */}
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
            <span style={{ color: "#00a8e0", fontWeight: 900, fontSize: 24 }}>aws</span>
            <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 16, lineHeight: 1.2 }}>partner<br />network</span>
            <div style={{
              background: "hsl(300,80%,50%)", color: "white",
              fontSize: 16, fontWeight: 700, padding: "6px 16px", borderRadius: 8, lineHeight: 1.3,
            }}>
              Advanced<br />Consulting Partner
            </div>
          </div>

          {/* TOP 3 */}
          <div style={{ lineHeight: 1 }}>
            <div style={{ fontSize: 100, fontWeight: 900, color: "white", lineHeight: 1, letterSpacing: "-2px" }}>TOP</div>
            <div style={{
              fontSize: 200, fontWeight: 900, lineHeight: 0.85, letterSpacing: "-4px",
              background: "linear-gradient(135deg, hsl(300,80%,55%) 0%, hsl(270,80%,60%) 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>3</div>
            <div style={{ fontSize: 80, fontWeight: 900, color: "white", lineHeight: 1, letterSpacing: "-1px", marginTop: 4 }}>BRASIL</div>
          </div>

          {/* Stats row */}
          <div style={{ display: "flex", gap: 14, marginTop: 20 }}>
            {[{ v: "8x", l: "Competências" }, { v: "10x", l: "SDPs" }, { v: "ADV", l: "Partner" }].map(({ v, l }) => (
              <div key={l} style={{
                flex: 1, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 12, padding: "14px 12px", textAlign: "center",
              }}>
                <div style={{ fontSize: 28, fontWeight: 900, color: "hsl(300,80%,60%)", lineHeight: 1 }}>{v}</div>
                <div style={{ fontSize: 16, color: "rgba(255,255,255,0.5)", marginTop: 6, lineHeight: 1.2 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* DIVIDER */}
        <div style={{ width: 1, background: "rgba(255,255,255,0.08)", flexShrink: 0 }} />

        {/* RIGHT — cards grid */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: 16 }}>

          {/* Section label */}
          <div style={{ marginBottom: 8 }}>
            <span style={{ fontSize: 16, fontWeight: 700, letterSpacing: "0.2em", color: "rgba(255,255,255,0.35)", textTransform: "uppercase" }}>
              Diferenciais
            </span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gridTemplateRows: "1fr 1fr", gap: 16 }}>
            {cards.map(({ icon: Icon, title, sub }) => (
              <div key={title} style={{
                background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.09)",
                borderRadius: 16, padding: "24px 24px", display: "flex", flexDirection: "column", gap: 14,
              }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 12,
                  background: "rgba(200,50,200,0.15)",
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                }}>
                  <Icon style={{ width: 24, height: 24, color: "hsl(300,80%,65%)" }} />
                </div>
                <div>
                  <p style={{ color: "white", fontWeight: 600, fontSize: 20, lineHeight: 1.3, margin: 0 }}>{title}</p>
                  <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 16, lineHeight: 1.5, margin: "8px 0 0" }}>{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </SlideLayout>
  );
}
