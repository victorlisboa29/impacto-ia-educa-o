import SlideLayout from "../SlideLayout";
import { Unlock, Coins, Tag } from "lucide-react";

const beneficios = [
  {
    num: "01", Icon: Unlock, color: "hsl(270,80%,65%)", tag: "POC / POV",
    title: "INVESTIMENTO\nEM PROJETOS",
    items: [
      "Isenção total ou parcial dos investimentos em projetos produtivos e POC/POV",
      "Análise gratuita de ambientes para migração e modernização",
    ],
  },
  {
    num: "02", Icon: Coins, color: "hsl(38,92%,55%)", tag: "Até 3 meses",
    title: "CRÉDITOS\nCONTA AWS",
    items: [
      "Teste serviços AWS sem custos",
      "Até 3 meses de incentivos (créditos) AWS",
      "Incentivos para educação e projetos de GenIA",
    ],
  },
  {
    num: "03", Icon: Tag, color: "hsl(160,84%,50%)", tag: "Recorrente",
    title: "DESCONTO\nFATURA AWS",
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
      <div className="absolute animate-glow-breathe" style={{
        bottom: 0, right: 0, width: 560, height: 560,
        background: "radial-gradient(circle, hsl(270,80%,35%) 0%, transparent 70%)",
        borderRadius: "50%", opacity: 0.1,
      }} />

      <div style={{
        height: "100%", display: "flex", flexDirection: "column",
        justifyContent: "center", padding: "48px 96px", gap: 32,
      }}>

        {/* Header */}
        <div className="anim-fade-down delay-100">
          <p style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.25em", color: "hsl(270,80%,65%)", textTransform: "uppercase", margin: "0 0 8px 0" }}>
            Parceria Estratégica
          </p>
          <h2 style={{ fontSize: 46, fontWeight: 900, color: "white", lineHeight: 1.1, margin: 0 }}>
            Benefícios AWS{" "}
            <span style={{ fontWeight: 300, color: "rgba(255,255,255,0.6)" }}>desbloqueados</span>
            <br />
            <span style={{
              background: "linear-gradient(90deg, hsl(270,80%,65%), hsl(300,80%,60%))",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>pela NuageIT</span>
          </h2>
        </div>

        {/* Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24 }}>
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
                padding: "20px 22px 16px",
                display: "flex", alignItems: "flex-start", justifyContent: "space-between",
              }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: "50%", flexShrink: 0,
                    background: color,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 18, fontWeight: 900, color: "white",
                    boxShadow: `0 4px 16px ${color}50`,
                  }}>
                    {num}
                  </div>
                  <p style={{ color: "white", fontWeight: 800, fontSize: 18, lineHeight: 1.3, whiteSpace: "pre-line", margin: 0 }}>
                    {title}
                  </p>
                </div>
                <Icon style={{ width: 22, height: 22, color, opacity: 0.7, flexShrink: 0 }} />
              </div>

              {/* Tag */}
              <div style={{ background: `${color}12`, borderBottom: `1px solid ${color}15`, padding: "6px 22px" }}>
                <span style={{
                  display: "inline-block",
                  background: `${color}25`, border: `1px solid ${color}40`,
                  borderRadius: 100, padding: "2px 12px",
                  fontSize: 11, fontWeight: 700, color, letterSpacing: "0.08em",
                }}>
                  {tag}
                </span>
              </div>

              {/* Items */}
              <div style={{ background: "rgba(255,255,255,0.02)", padding: "18px 22px 22px", flex: 1 }}>
                <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                  {items.map((item) => (
                    <li key={item} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <span style={{ color, fontSize: 14, lineHeight: 1, marginTop: 3, flexShrink: 0 }}>✓</span>
                      <span style={{ color: "rgba(255,255,255,0.75)", fontSize: 16, lineHeight: 1.55 }}>{item}</span>
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
          borderRadius: 10, padding: "14px 24px",
          display: "flex", alignItems: "center", gap: 14,
        }}>
          <span style={{ fontSize: 22 }}>💡</span>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.6)", margin: 0, fontStyle: "italic" }}>
            Esses benefícios são exclusivos para clientes que migram ou expandem sua infraestrutura com a NuageIT como parceira AWS.
          </p>
        </div>

      </div>
    </SlideLayout>
  );
}
