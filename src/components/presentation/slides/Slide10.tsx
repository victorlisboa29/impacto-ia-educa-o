import SlideLayout from "../SlideLayout";
import { Headphones, TrendingUp, GraduationCap } from "lucide-react";

const areas = [
  {
    Icon: Headphones,
    title: "Atendimento",
    desc: "Chatbot inteligente para dúvidas, suporte e retenção. Resposta 24/7 com personalização.",
    accent: "hsl(300,80%,60%)",
    stats: [
      { v: "24/7", l: "disponível" },
      { v: "-45%", l: "tickets manuais" },
      { v: "+30%", l: "satisfação" },
    ],
    useCases: ["Chatbot de suporte", "FAQ automatizado", "Retenção proativa"],
  },
  {
    Icon: TrendingUp,
    title: "Captação",
    desc: "IA para qualificar leads, personalizar abordagem e aumentar conversão de matrículas.",
    accent: "hsl(270,80%,65%)",
    stats: [
      { v: "+40%", l: "conversão" },
      { v: "5min", l: "1ª resposta" },
      { v: "-30%", l: "custo/lead" },
    ],
    useCases: ["Qualificação de leads", "Follow-up automático", "Personalização de oferta"],
  },
  {
    Icon: GraduationCap,
    title: "Suporte ao Aluno",
    desc: "Assistente acadêmico, recomendações personalizadas e acompanhamento proativo.",
    accent: "hsl(160,84%,45%)",
    stats: [
      { v: "-26%", l: "evasão" },
      { v: "+18%", l: "engajamento" },
      { v: "100%", l: "personalizado" },
    ],
    useCases: ["Tutor virtual", "Alertas de risco", "Recomendação de conteúdo"],
  },
];

export default function Slide10() {
  return (
    <SlideLayout>
      {/* Glow */}
      <div className="absolute animate-glow-breathe" style={{
        top: "5%", right: "3%", width: "20%", height: "35%",
        background: "radial-gradient(circle, hsl(270,80%,40%) 0%, transparent 70%)",
        borderRadius: "50%", opacity: 0.1,
      }} />

      <div style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center", padding: "0 6%" }}>
        <div style={{ width: "100%" }}>

          <p className="anim-fade-down delay-100" style={{
            fontSize: "clamp(10px, 0.9vw, 16px)", fontWeight: 700,
            letterSpacing: "0.2em", color: "hsl(270,80%,65%)",
            textTransform: "uppercase", marginBottom: "0.8%", marginTop: 0,
          }}>Onde Focar Agora</p>

          <h2 className="anim-blur-in delay-200" style={{
            fontSize: "clamp(22px, 3vw, 56px)", fontWeight: 800,
            lineHeight: 1.1, color: "white", marginBottom: "2.5%", marginTop: 0,
          }}>
            3 áreas de alto impacto<br />
            <span style={{ color: "hsl(280,100%,82%)" }}>para começar hoje</span>
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "2%", marginBottom: "2%" }}>
            {areas.map(({ Icon, title, desc, accent, stats, useCases }, i) => (
              <div key={title} className="anim-fade-up" style={{
                background: "rgba(255,255,255,0.04)",
                border: `1px solid ${accent}25`,
                borderRadius: 14, overflow: "hidden",
                display: "flex", flexDirection: "column",
                animationDelay: `${0.3 + i * 0.12}s`,
              }}>
                <div style={{ height: 3, background: accent }} />
                <div style={{ padding: "2.2% 2.4%", flex: 1, display: "flex", flexDirection: "column", gap: "1.2%" }}>

                  {/* Icon + title */}
                  <div style={{ display: "flex", alignItems: "center", gap: "1.2%" }}>
                    <div style={{
                      width: "5vh", height: "5vh", minWidth: 38, minHeight: 38,
                      borderRadius: 12, background: `${accent}18`,
                      display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                    }}>
                      <Icon style={{ width: "55%", height: "55%", color: accent }} />
                    </div>
                    <h3 style={{ fontSize: "clamp(14px, 1.3vw, 22px)", fontWeight: 700, color: "white", margin: 0 }}>{title}</h3>
                  </div>

                  <p style={{ fontSize: "clamp(10px, 0.9vw, 16px)", color: "rgba(255,255,255,0.55)", lineHeight: 1.55, margin: 0 }}>{desc}</p>

                  {/* Stats row */}
                  <div style={{ display: "flex", gap: "0.8%" }}>
                    {stats.map(({ v, l }) => (
                      <div key={l} style={{
                        flex: 1, background: `${accent}10`,
                        border: `1px solid ${accent}20`,
                        borderRadius: 6, padding: "0.6% 0.8%",
                        textAlign: "center",
                      }}>
                        <div style={{ fontSize: "clamp(11px, 1.1vw, 18px)", fontWeight: 900, color: accent }}>{v}</div>
                        <div style={{ fontSize: "clamp(7px, 0.65vw, 10px)", color: "rgba(255,255,255,0.35)", lineHeight: 1.2 }}>{l}</div>
                      </div>
                    ))}
                  </div>

                  {/* Use cases */}
                  <div style={{ borderTop: `1px solid ${accent}15`, paddingTop: "1%" }}>
                    {useCases.map((uc) => (
                      <div key={uc} style={{ display: "flex", alignItems: "center", gap: "0.6%", marginBottom: "0.4%" }}>
                        <span style={{ color: accent, fontSize: "clamp(8px, 0.7vw, 11px)", flexShrink: 0 }}>▸</span>
                        <span style={{ fontSize: "clamp(9px, 0.82vw, 14px)", color: "rgba(255,255,255,0.5)" }}>{uc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quote */}
          <div className="anim-fade-up delay-700" style={{
            background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)",
            borderLeft: "3px solid hsl(300,80%,55%)",
            borderRadius: 10, padding: "1% 2%",
          }}>
            <p style={{ fontSize: "clamp(12px, 1.1vw, 20px)", fontStyle: "italic", color: "rgba(255,255,255,0.75)", margin: 0 }}>
              "Casos simples geram resultado rápido — e resultado rápido gera confiança para escalar."
            </p>
          </div>

        </div>
      </div>
    </SlideLayout>
  );
}
