import SlideLayout from "../SlideLayout";
import { ArrowUpRight, Cloud, Database, Code2, Headphones, MoveRight } from "lucide-react";

const cols = [
  { Icon: MoveRight,  title: "MIGRAÇÃO",        highlight: true,  color: "hsl(270,80%,65%)", items: ["Assessment de ambientes", "Migração e modernização", "Estratégia CAF"] },
  { Icon: Cloud,      title: "INFRAESTRUTURA",   highlight: false, color: "hsl(280,85%,68%)", items: ["Implementação em nuvem", "Reestruturação", "Well Architected", "FinOps"] },
  { Icon: Database,   title: "DADOS & BI",       highlight: false, color: "hsl(300,80%,65%)", items: ["Estruturas de dados", "BI e Analytics", "Inteligência artificial", "Data Analytics"] },
  { Icon: Code2,      title: "DESENVOLVIMENTO",  highlight: false, color: "hsl(195,90%,55%)", items: ["Cloud Native", "DevSecOps", "Modernização", "Apps móveis"] },
  { Icon: Headphones, title: "SUPORTE & MSP",    highlight: false, color: "hsl(160,84%,50%)", items: ["Suporte gerenciado", "AMS | MSP", "NOC | SOC"] },
];

export default function SlideOfertas() {
  return (
    <SlideLayout>
      <div className="absolute animate-glow-breathe" style={{
        top: -60, right: -60, width: 480, height: 480,
        background: "radial-gradient(circle, hsl(270,80%,40%) 0%, transparent 70%)",
        borderRadius: "50%", opacity: 0.1,
      }} />

      <div style={{
        height: "100%", display: "flex", flexDirection: "column",
        padding: "40px 80px", gap: 20,
      }}>

        {/* Header */}
        <div className="anim-fade-down delay-100" style={{
          display: "flex", alignItems: "flex-end", justifyContent: "space-between",
        }}>
          <div>
            <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.25em", color: "hsl(270,80%,65%)", textTransform: "uppercase", margin: "0 0 6px 0" }}>Portfólio</p>
            <h2 style={{ fontSize: 44, fontWeight: 900, letterSpacing: "-0.5px", lineHeight: 1, margin: 0 }}>
              <span style={{ color: "white" }}>Ofertas & Serviços </span>
              <span style={{
                background: "linear-gradient(90deg, hsl(270,80%,65%), hsl(300,80%,60%))",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>NuageIT</span>
            </h2>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 6, opacity: 0.5 }}>
            <span style={{ color: "#FF9900", fontWeight: 900, fontSize: 16 }}>aws</span>
            <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 12 }}>Partner</span>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: "linear-gradient(90deg, hsl(270,80%,50%), transparent)", opacity: 0.2 }} />

        {/* Service columns */}
        <div style={{ display: "flex", gap: 14, flex: 1, minHeight: 0 }}>
          {cols.map(({ Icon, title, highlight, color, items }, i) => (
            <div key={title} className="anim-fade-up" style={{
              flex: 1, display: "flex", flexDirection: "column",
              borderRadius: 12,
              background: highlight ? `linear-gradient(160deg, ${color}18, ${color}08)` : "rgba(255,255,255,0.025)",
              border: `1px solid ${color}${highlight ? "35" : "18"}`,
              padding: "20px 18px", gap: 12,
              animationDelay: `${0.2 + i * 0.08}s`,
              position: "relative", overflow: "hidden",
            }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: color, borderRadius: "12px 12px 0 0" }} />

              <div style={{
                width: 44, height: 44, borderRadius: 10,
                background: `${color}20`, border: `1px solid ${color}35`,
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0, marginTop: 4,
              }}>
                <Icon style={{ width: 22, height: 22, color }} />
              </div>

              <p style={{ color: "white", fontWeight: 800, fontSize: 13, lineHeight: 1.2, letterSpacing: "0.06em", textTransform: "uppercase", margin: 0 }}>
                {title}
              </p>

              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 6, flex: 1 }}>
                {items.map((item) => (
                  <li key={item} style={{ display: "flex", gap: 6, alignItems: "flex-start" }}>
                    <span style={{ color, fontSize: 11, lineHeight: 1.6, flexShrink: 0 }}>▸</span>
                    <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 13, lineHeight: 1.5 }}>{item}</span>
                  </li>
                ))}
              </ul>

              {highlight && (
                <ArrowUpRight style={{ width: 14, height: 14, color, alignSelf: "flex-end", opacity: 0.6 }} />
              )}
            </div>
          ))}
        </div>

        {/* Bottom banners */}
        <div className="anim-fade-up delay-700" style={{ display: "flex", gap: 14 }}>
          <div style={{
            flex: 1, border: "1px solid rgba(255,255,255,0.12)", borderRadius: 8,
            padding: "12px 24px", textAlign: "center", background: "rgba(255,255,255,0.02)",
          }}>
            <p style={{ color: "rgba(255,255,255,0.7)", fontWeight: 700, fontSize: 14, letterSpacing: "0.18em", margin: 0 }}>
              🔒 &nbsp; SEGURANÇA E CONFORMIDADE
            </p>
          </div>
          <div style={{
            flex: 1.4,
            background: "linear-gradient(90deg, hsl(300,80%,40%), hsl(270,80%,45%))",
            borderRadius: 8, padding: "12px 24px", textAlign: "center",
          }}>
            <p style={{ color: "white", fontWeight: 900, fontSize: 16, letterSpacing: "0.18em", margin: 0 }}>
              ✦ &nbsp; INTELIGÊNCIA ARTIFICIAL GENERATIVA
            </p>
          </div>
        </div>

      </div>
    </SlideLayout>
  );
}
