import SlideLayout from "../SlideLayout";
import { Shield, Award, Star, Trophy, BookOpen, Users } from "lucide-react";

const cards = [
  { icon: Shield, title: "Consultoria Especializada", sub: "Parceiro estratégico AWS nível Advanced" },
  { icon: Award, title: "Especialistas Reconhecidos", sub: "Certificados em Security, DevOps e Educação" },
  { icon: Star, title: "Selos de Especialidade", sub: "Serverless, Dados e múltiplos serviços" },
  { icon: Trophy, title: "TOP 10 AWS LATAM", sub: "CIOReview entre os melhores da região" },
  { icon: BookOpen, title: "Partner of the Year", sub: "Troféu AWS pela excelência nas entregas" },
  { icon: Users, title: "Great Place to Work", sub: "Ambiente consultivo e orientado a valor" },
];

export default function SlideNuage() {
  return (
    <SlideLayout>
      <div style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "60px 100px", gap: 36 }}>

        {/* Top row — logo + AWS badge */}
        <div className="anim-fade-down delay-200" style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <span style={{ fontSize: 20, fontWeight: 300, letterSpacing: "0.3em", color: "white" }}>N U A G E</span>
          <div style={{ width: 1, height: 24, background: "rgba(255,255,255,0.15)" }} />
          <span style={{ color: "#00a8e0", fontWeight: 900, fontSize: 20 }}>aws</span>
          <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, lineHeight: 1.2 }}>partner network</span>
          <div style={{
            background: "hsl(300,80%,50%)", color: "white",
            fontSize: 12, fontWeight: 700, padding: "4px 12px", borderRadius: 6, lineHeight: 1.3,
          }}>
            Advanced Consulting Partner
          </div>
        </div>

        {/* Main content — TOP 3 + cards side by side */}
        <div style={{ display: "flex", gap: 60, alignItems: "center" }}>

          {/* LEFT — TOP 3 */}
          <div className="anim-fade-left delay-400" style={{ flexShrink: 0 }}>
            <div style={{ lineHeight: 1 }}>
              <div style={{ fontSize: 64, fontWeight: 900, color: "white", letterSpacing: "-2px" }}>TOP</div>
              <div className="anim-count-up delay-600" style={{
                fontSize: 160, fontWeight: 900, lineHeight: 0.8, letterSpacing: "-4px",
                background: "linear-gradient(135deg, hsl(300,80%,55%), hsl(270,80%,60%))",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>3</div>
              <div style={{ fontSize: 56, fontWeight: 900, color: "white", letterSpacing: "-1px", marginTop: 4 }}>BRASIL</div>
            </div>
          </div>

          {/* RIGHT — 3x2 cards grid */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <div className="anim-fade-right delay-300" style={{ marginBottom: 12 }}>
              <span style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.2em", color: "rgba(255,255,255,0.3)", textTransform: "uppercase" }}>
                Diferenciais
              </span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
              {cards.map(({ icon: Icon, title, sub }, i) => (
                <div
                  key={title}
                  className={`anim-scale-in`}
                  style={{
                    background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.09)",
                    borderRadius: 12, padding: "18px", display: "flex", flexDirection: "column", gap: 10,
                    animationDelay: `${0.4 + i * 0.1}s`,
                  }}
                >
                  <div style={{
                    width: 38, height: 38, borderRadius: 9,
                    background: "rgba(200,50,200,0.15)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <Icon style={{ width: 18, height: 18, color: "hsl(300,80%,65%)" }} />
                  </div>
                  <div>
                    <p style={{ color: "white", fontWeight: 600, fontSize: 16, lineHeight: 1.3, margin: 0 }}>{title}</p>
                    <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 13, lineHeight: 1.4, margin: "5px 0 0" }}>{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="anim-fade-up delay-800" style={{ display: "flex", gap: 16 }}>
          {[{ v: "8x", l: "Competências AWS" }, { v: "10x", l: "SDPs Alcançados" }, { v: "ADV", l: "Partner Tier" }].map(({ v, l }) => (
            <div key={l} style={{
              background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 10, padding: "12px 24px", display: "flex", alignItems: "center", gap: 12,
            }}>
              <span style={{ fontSize: 22, fontWeight: 900, color: "hsl(300,80%,60%)", lineHeight: 1 }}>{v}</span>
              <span style={{ fontSize: 14, color: "rgba(255,255,255,0.45)", lineHeight: 1.2 }}>{l}</span>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
