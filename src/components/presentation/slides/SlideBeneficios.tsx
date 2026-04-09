import SlideLayout from "../SlideLayout";
import { Unlock, Coins, Tag } from "lucide-react";

const beneficios = [
  {
    num: "01",
    Icon: Unlock,
    title: "INVESTIMENTO\nEM PROJETOS",
    color: "hsl(270,80%,65%)",
    tag: "POC / POV",
    items: [
      "Isenção total ou parcial dos investimentos em projetos produtivos e POC/POV",
      "Análise gratuita de ambientes para migração e modernização",
    ],
  },
  {
    num: "02",
    Icon: Coins,
    title: "CRÉDITOS\nCONTA AWS",
    color: "hsl(38,92%,55%)",
    tag: "Até 3 meses",
    items: [
      "Teste serviços AWS sem custos",
      "Até 3 meses de incentivos (créditos) AWS",
      "Incentivos para educação e projetos de GenIA",
    ],
  },
  {
    num: "03",
    Icon: Tag,
    title: "DESCONTO\nFATURA AWS",
    color: "hsl(160,84%,50%)",
    tag: "Recorrente",
    items: [
      "Desconto recorrente na fatura AWS",
      "Nacionalização e postergação de vencimento",
      "3h consultivas/mês + plataforma de gestão",
    ],
  },
];

export default function SlideBeneficios() {
  return (
    <SlideLayout>
      {/* Background glow */}
      <div className="absolute animate-glow-breathe" style={{
        bottom: "0%", right: "0%", width: "30%", height: "50%",
        background: "radial-gradient(circle, hsl(270,80%,35%) 0%, transparent 70%)",
        borderRadius: "50%", opacity: 0.12,
      }} />

      <div style={{
        height: "100%", display: "flex", flexDirection: "column",
        justifyContent: "center", padding: "3.5% 6%", gap: "3%",
      }}>

        {/* Header */}
        <div className="anim-fade-down delay-100">
          <p style={{ fontSize: "clamp(9px, 0.85vw, 15px)", fontWeight: 700, letterSpacing: "0.25em", color: "hsl(270,80%,65%)", textTransform: "uppercase", margin: "0 0 0.6% 0" }}>
            Parceria Estratégica
          </p>
          <h2 style={{ fontSize: "clamp(20px, 2.5vw, 46px)", fontWeight: 900, color: "white", lineHeight: 1.1, margin: 0 }}>
            Benefícios AWS <span style={{ fontWeight: 300, color: "rgba(255,255,255,0.6)" }}>desbloqueados</span><br />
            <span style={{
              background: "linear-gradient(90deg, hsl(270,80%,65%), hsl(300,80%,60%))",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>pela NuageIT</span>
          </h2>
        </div>

        {/* Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "2%" }}>
          {beneficios.map(({ num, Icon, title, color, tag, items }, idx) => (
            <div key={num} className="anim-fade-up" style={{
              display: "flex", flexDirection: "column",
              borderRadius: 14, overflow: "hidden",
              border: `1px solid ${color}25`,
              animationDelay: `${0.3 + idx * 0.12}s`,
            }}>

              {/* Card header */}
              <div style={{
                background: `linear-gradient(135deg, ${color}20, ${color}08)`,
                borderBottom: `1px solid ${color}20`,
                padding: "1.8% 2% 1.5%",
                display: "flex", alignItems: "flex-start", justifyContent: "space-between",
              }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "1.2%" }}>
                  {/* Number circle */}
                  <div style={{
                    width: "4.2vh", height: "4.2vh", minWidth: 34, minHeight: 34,
                    borderRadius: "50%", flexShrink: 0,
                    background: color,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "clamp(11px, 1.1vw, 18px)", fontWeight: 900, color: "white",
                    boxShadow: `0 4px 16px ${color}50`,
                  }}>
                    {num}
                  </div>
                  <div>
                    <p style={{
                      color: "white", fontWeight: 800,
                      fontSize: "clamp(11px, 1.05vw, 18px)",
                      lineHeight: 1.3, whiteSpace: "pre-line", margin: 0,
                    }}>
                      {title}
                    </p>
                  </div>
                </div>
                {/* Icon */}
                <Icon style={{ width: "clamp(14px, 1.3vw, 22px)", height: "clamp(14px, 1.3vw, 22px)", color, opacity: 0.7, flexShrink: 0 }} />
              </div>

              {/* Tag pill */}
              <div style={{
                background: `${color}12`, borderBottom: `1px solid ${color}15`,
                padding: "0.5% 2%",
              }}>
                <span style={{
                  display: "inline-block",
                  background: `${color}25`, border: `1px solid ${color}40`,
                  borderRadius: 100, padding: "0.2% 1%",
                  fontSize: "clamp(8px, 0.7vw, 11px)", fontWeight: 700,
                  color, letterSpacing: "0.08em",
                }}>
                  {tag}
                </span>
              </div>

              {/* Items */}
              <div style={{
                background: "rgba(255,255,255,0.02)",
                padding: "1.5% 2% 2%", flex: 1,
              }}>
                <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "0.9%" }}>
                  {items.map((item) => (
                    <li key={item} style={{ display: "flex", gap: "0.8%", alignItems: "flex-start" }}>
                      <span style={{ color, fontSize: "clamp(10px, 0.9vw, 14px)", lineHeight: 1, marginTop: "0.4vh", flexShrink: 0 }}>✓</span>
                      <span style={{ color: "rgba(255,255,255,0.75)", fontSize: "clamp(10px, 0.95vw, 16px)", lineHeight: 1.55 }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="anim-fade-up delay-700" style={{
          background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 10, padding: "1% 2%",
          display: "flex", alignItems: "center", gap: "1%",
        }}>
          <span style={{ fontSize: "clamp(14px, 1.3vw, 22px)" }}>💡</span>
          <p style={{ fontSize: "clamp(11px, 1vw, 17px)", color: "rgba(255,255,255,0.6)", margin: 0, fontStyle: "italic" }}>
            Esses benefícios são exclusivos para clientes que migram ou expandem sua infraestrutura com a NuageIT como parceira AWS.
          </p>
        </div>

      </div>
    </SlideLayout>
  );
}
