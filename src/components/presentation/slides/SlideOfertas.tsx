import SlideLayout from "../SlideLayout";
import { ArrowUpRight, Cloud, Database, Code2, Headphones, MoveRight } from "lucide-react";

const cols = [
  {
    Icon: MoveRight,
    title: "MIGRAÇÃO",
    highlight: true,
    color: "hsl(270,80%,65%)",
    items: ["Assessment de ambientes", "Migração e modernização", "Estratégia CAF"],
  },
  {
    Icon: Cloud,
    title: "INFRAESTRUTURA",
    highlight: false,
    color: "hsl(280,85%,68%)",
    items: ["Implementação em nuvem", "Reestruturação", "Well Architected", "FinOps"],
  },
  {
    Icon: Database,
    title: "DADOS & BI",
    highlight: false,
    color: "hsl(300,80%,65%)",
    items: ["Estruturas de dados", "BI e Analytics", "Inteligência artificial", "Data Analytics"],
  },
  {
    Icon: Code2,
    title: "DESENVOLVIMENTO",
    highlight: false,
    color: "hsl(195,90%,55%)",
    items: ["Cloud Native", "DevSecOps", "Modernização", "Apps móveis"],
  },
  {
    Icon: Headphones,
    title: "SUPORTE & MSP",
    highlight: false,
    color: "hsl(160,84%,50%)",
    items: ["Suporte gerenciado", "AMS | MSP", "NOC | SOC"],
  },
];

export default function SlideOfertas() {
  return (
    <SlideLayout>
      {/* Glow top right */}
      <div className="absolute animate-glow-breathe" style={{
        top: "-5%", right: "-5%", width: "25%", height: "40%",
        background: "radial-gradient(circle, hsl(270,80%,40%) 0%, transparent 70%)",
        borderRadius: "50%", opacity: 0.12,
      }} />

      <div style={{
        height: "100%", display: "flex", flexDirection: "column",
        padding: "3% 5%", gap: "2%",
      }}>

        {/* Header */}
        <div className="anim-fade-down delay-100" style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
          <div>
            <p style={{ fontSize: "clamp(9px, 0.8vw, 14px)", fontWeight: 700, letterSpacing: "0.25em", color: "hsl(270,80%,65%)", textTransform: "uppercase", margin: "0 0 0.4% 0" }}>Portfólio</p>
            <h2 style={{ fontSize: "clamp(20px, 2.4vw, 44px)", fontWeight: 900, letterSpacing: "-0.5px", lineHeight: 1, margin: 0 }}>
              <span style={{ color: "white" }}>Ofertas & Serviços </span>
              <span style={{
                background: "linear-gradient(90deg, hsl(270,80%,65%), hsl(300,80%,60%))",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>NuageIT</span>
            </h2>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5%", opacity: 0.5 }}>
            <span style={{ color: "#FF9900", fontWeight: 900, fontSize: "clamp(10px, 0.9vw, 16px)" }}>aws</span>
            <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "clamp(8px, 0.7vw, 12px)" }}>Partner</span>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: "linear-gradient(90deg, hsl(270,80%,50%), transparent)", opacity: 0.2 }} />

        {/* Service columns */}
        <div style={{ display: "flex", gap: "1.2%", flex: 1, minHeight: 0 }}>
          {cols.map(({ Icon, title, highlight, color, items }, i) => (
            <div key={title} className="anim-fade-up" style={{
              flex: 1, display: "flex", flexDirection: "column",
              borderRadius: 12,
              background: highlight
                ? `linear-gradient(160deg, ${color}18, ${color}08)`
                : "rgba(255,255,255,0.025)",
              border: `1px solid ${color}${highlight ? "35" : "18"}`,
              padding: "1.8% 1.5%", gap: "1.2%",
              animationDelay: `${0.2 + i * 0.08}s`,
              position: "relative", overflow: "hidden",
            }}>
              {/* Top accent line */}
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: color, borderRadius: "12px 12px 0 0" }} />

              {/* Icon */}
              <div style={{
                width: "4.5vh", height: "4.5vh", minWidth: 34, minHeight: 34,
                borderRadius: 10,
                background: `${color}20`,
                border: `1px solid ${color}35`,
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0, marginTop: "0.5%",
              }}>
                <Icon style={{ width: "50%", height: "50%", color }} />
              </div>

              {/* Title */}
              <p style={{
                color: "white", fontWeight: 800,
                fontSize: "clamp(9px, 0.82vw, 14px)",
                lineHeight: 1.2, letterSpacing: "0.06em",
                textTransform: "uppercase", margin: 0,
              }}>
                {title}
              </p>

              {/* Items */}
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6%", flex: 1 }}>
                {items.map((item) => (
                  <li key={item} style={{ display: "flex", gap: "0.6%", alignItems: "flex-start" }}>
                    <span style={{ color, fontSize: "clamp(8px, 0.7vw, 11px)", lineHeight: 1.6, flexShrink: 0 }}>▸</span>
                    <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "clamp(8px, 0.78vw, 13px)", lineHeight: 1.5 }}>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Arrow indicator */}
              {highlight && (
                <ArrowUpRight style={{ width: "clamp(10px, 0.9vw, 14px)", height: "clamp(10px, 0.9vw, 14px)", color, alignSelf: "flex-end", opacity: 0.6 }} />
              )}
            </div>
          ))}
        </div>

        {/* Bottom banners */}
        <div className="anim-fade-up delay-700" style={{ display: "flex", gap: "1.2%" }}>
          <div style={{
            flex: 1, border: "1px solid rgba(255,255,255,0.12)", borderRadius: 8,
            padding: "0.8% 2%", textAlign: "center",
            background: "rgba(255,255,255,0.02)",
          }}>
            <p style={{ color: "rgba(255,255,255,0.7)", fontWeight: 700, fontSize: "clamp(9px, 0.85vw, 15px)", letterSpacing: "0.18em", margin: 0 }}>
              🔒 &nbsp; SEGURANÇA E CONFORMIDADE
            </p>
          </div>
          <div style={{
            flex: 1.4,
            background: "linear-gradient(90deg, hsl(300,80%,40%), hsl(270,80%,45%))",
            borderRadius: 8, padding: "0.8% 2%", textAlign: "center",
          }}>
            <p style={{ color: "white", fontWeight: 900, fontSize: "clamp(10px, 1vw, 17px)", letterSpacing: "0.18em", margin: 0 }}>
              ✦ &nbsp; INTELIGÊNCIA ARTIFICIAL GENERATIVA
            </p>
          </div>
        </div>

      </div>
    </SlideLayout>
  );
}
