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
      <div style={{ height: "100%", display: "flex", padding: "36px 64px 36px 64px", gap: 48 }}>

        {/* LEFT — TOP 3 destaque */}
        <div style={{ width: 340, flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "center", gap: 16 }}>

          {/* Logo */}
          <div style={{ fontSize: 15, fontWeight: 300, letterSpacing: "0.3em", color: "white", marginBottom: 8 }}>
            N U A G E
          </div>

          {/* AWS badge */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
            <span style={{ color: "#00a8e0", fontWeight: 900, fontSize: 18 }}>aws</span>
            <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 11, lineHeight: 1.2 }}>partner<br />network</span>
            <div style={{
              background: "hsl(300,80%,50%)", color: "white",
              fontSize: 12, fontWeight: 700, padding: "4px 12px", borderRadius: 6, lineHeight: 1.3,
            }}>
              Advanced<br />Consulting Partner
            </div>
          </div>

          {/* TOP 3 */}
          <div style={{ lineHeight: 1 }}>
            <div style={{ fontSize: 80, fontWeight: 900, color: "white", lineHeight: 1, letterSpacing: "-2px" }}>TOP</div>
            <div style={{
              fontSize: 160, fontWeight: 900, lineHeight: 0.85, letterSpacing: "-4px",
              background: "linear-gradient(135deg, hsl(300,80%,55%) 0%, hsl(270,80%,60%) 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>3</div>
            <div style={{ fontSize: 64, fontWeight: 900, color: "white", lineHeight: 1, letterSpacing: "-1px", marginTop: 4 }}>BRASIL</div>
          </div>

          {/* Stats row */}
          <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
            {[{ v: "8x", l: "Competências" }, { v: "10x", l: "SDPs" }, { v: "ADV", l: "Partner" }].map(({ v, l }) => (
              <div key={l} style={{
                flex: 1, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 10, padding: "10px 8px", textAlign: "center",
              }}>
                <div style={{ fontSize: 22, fontWeight: 900, color: "hsl(300,80%,60%)", lineHeight: 1 }}>{v}</div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", marginTop: 4, lineHeight: 1.2 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* DIVIDER */}
        <div style={{ width: 1, background: "rgba(255,255,255,0.08)", flexShrink: 0 }} />

        {/* RIGHT — cards grid */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: 12 }}>

          {/* Section label */}
          <div style={{ marginBottom: 4 }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", color: "rgba(255,255,255,0.35)", textTransform: "uppercase" }}>
              Diferenciais
            </span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gridTemplateRows: "1fr 1fr", gap: 12 }}>
            {cards.map(({ icon: Icon, title, sub }) => (
              <div key={title} style={{
                background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.09)",
                borderRadius: 14, padding: "16px 18px", display: "flex", flexDirection: "column", gap: 10,
              }}>
                <div style={{
                  width: 34, height: 34, borderRadius: 9,
                  background: "rgba(200,50,200,0.15)",
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                }}>
                  <Icon style={{ width: 16, height: 16, color: "hsl(300,80%,65%)" }} />
                </div>
                <div>
                  <p style={{ color: "white", fontWeight: 600, fontSize: 14, lineHeight: 1.3, margin: 0 }}>{title}</p>
                  <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 12, lineHeight: 1.4, margin: "6px 0 0" }}>{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </SlideLayout>
  );
}
