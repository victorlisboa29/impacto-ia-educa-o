import SlideLayout from "../SlideLayout";
import { Headphones, TrendingUp, GraduationCap } from "lucide-react";

const areas = [
  {
    Icon: Headphones, title: "Atendimento", accent: "hsl(300,80%,60%)",
    desc: "Chatbot inteligente para dúvidas, suporte e retenção. Resposta 24/7 com personalização.",
    stats: [{ v: "24/7", l: "disponível" }, { v: "-45%", l: "tickets manuais" }, { v: "+30%", l: "satisfação" }],
    useCases: ["Chatbot de suporte", "FAQ automatizado", "Retenção proativa"],
  },
  {
    Icon: TrendingUp, title: "Suporte ao Professor", accent: "hsl(270,80%,65%)",
    desc: "IA que prepara planos de aula, gera relatórios de desempenho e identifica alunos em risco automaticamente.",
    stats: [{ v: "-70%", l: "preparo de aulas" }, { v: "+35%", l: "engajamento" }, { v: "2x", l: "tempo p/ ensinar" }],
    useCases: ["Planos de aula com IA", "Relatórios automáticos", "Alertas de risco"],
  },
  {
    Icon: GraduationCap, title: "Suporte ao Aluno", accent: "hsl(160,84%,45%)",
    desc: "Assistente acadêmico, recomendações personalizadas e acompanhamento proativo.",
    stats: [{ v: "-26%", l: "evasão" }, { v: "+18%", l: "engajamento" }, { v: "100%", l: "personalizado" }],
    useCases: ["Tutor virtual", "Alertas de risco", "Recomendação de conteúdo"],
  },
];

export default function Slide10() {
  return (
    <SlideLayout>
      <div className="absolute animate-glow-breathe" style={{
        top: 50, right: 40, width: 380, height: 380,
        background: "radial-gradient(circle, hsl(270,80%,40%) 0%, transparent 70%)",
        borderRadius: "50%", opacity: 0.09,
      }} />

      <div style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center", padding: "0 96px" }}>
        <div style={{ width: "100%" }}>

          <p className="anim-fade-down delay-100" style={{
            fontSize: 15, fontWeight: 700, letterSpacing: "0.2em",
            color: "hsl(270,80%,65%)", textTransform: "uppercase",
            marginBottom: 12, marginTop: 0,
          }}>Onde Focar Agora</p>

          <h2 className="anim-blur-in delay-200" style={{
            fontSize: 56, fontWeight: 800, lineHeight: 1.1,
            color: "white", marginBottom: 28, marginTop: 0,
          }}>
            3 áreas de alto impacto<br />
            <span style={{ color: "hsl(280,100%,82%)" }}>para começar hoje</span>
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 22, marginBottom: 22 }}>
            {areas.map(({ Icon, title, desc, accent, stats, useCases }, i) => (
              <div key={title} className="anim-fade-up" style={{
                background: "rgba(255,255,255,0.04)",
                border: `1px solid ${accent}25`,
                borderRadius: 14, overflow: "hidden",
                display: "flex", flexDirection: "column",
                animationDelay: `${0.3 + i * 0.12}s`,
              }}>
                <div style={{ height: 3, background: accent }} />
                <div style={{ padding: "22px 24px", flex: 1, display: "flex", flexDirection: "column", gap: 12 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <div style={{
                      width: 48, height: 48, borderRadius: 12, background: `${accent}18`,
                      display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                    }}>
                      <Icon style={{ width: 24, height: 24, color: accent }} />
                    </div>
                    <h3 style={{ fontSize: 22, fontWeight: 700, color: "white", margin: 0 }}>{title}</h3>
                  </div>
                  <p style={{ fontSize: 15, color: "rgba(255,255,255,0.55)", lineHeight: 1.55, margin: 0 }}>{desc}</p>
                  <div style={{ display: "flex", gap: 8 }}>
                    {stats.map(({ v, l }) => (
                      <div key={l} style={{
                        flex: 1, background: `${accent}10`, border: `1px solid ${accent}20`,
                        borderRadius: 6, padding: "8px 10px", textAlign: "center",
                      }}>
                        <div style={{ fontSize: 18, fontWeight: 900, color: accent }}>{v}</div>
                        <div style={{ fontSize: 10, color: "rgba(255,255,255,0.35)", lineHeight: 1.2 }}>{l}</div>
                      </div>
                    ))}
                  </div>
                  <div style={{ borderTop: `1px solid ${accent}15`, paddingTop: 10 }}>
                    {useCases.map((uc) => (
                      <div key={uc} style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 5 }}>
                        <span style={{ color: accent, fontSize: 11, flexShrink: 0 }}>▸</span>
                        <span style={{ fontSize: 13, color: "rgba(255,255,255,0.5)" }}>{uc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="anim-fade-up delay-700" style={{
            background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)",
            borderLeft: "3px solid hsl(300,80%,55%)",
            borderRadius: 10, padding: "14px 24px",
          }}>
            <p style={{ fontSize: 19, fontStyle: "italic", color: "rgba(255,255,255,0.75)", margin: 0 }}>
              "Casos simples geram resultado rápido — e resultado rápido gera confiança para escalar."
            </p>
          </div>

        </div>
      </div>
    </SlideLayout>
  );
}
