import SlideLayout from "../SlideLayout";
import { Expand, Wrench, BarChart2, AlertTriangle } from "lucide-react";

const errors = [
  { num: "01", Icon: Expand,    title: "Começar grande demais", desc: "Projetos ambiciosos demais travam na execução e nunca geram resultado.",          accent: "hsl(0,84%,60%)",   tip: "Comece com um caso de uso específico e mensurável." },
  { num: "02", Icon: Wrench,    title: "Focar na tecnologia",   desc: "Escolher a ferramenta antes de entender o problema a resolver.",                  accent: "hsl(38,92%,50%)",  tip: "Defina o problema primeiro. A ferramenta vem depois." },
  { num: "03", Icon: BarChart2, title: "Não medir resultado",   desc: "Sem métricas claras, é impossível saber se a IA está gerando valor.",             accent: "hsl(300,80%,55%)", tip: "KPIs antes de implementar. Sempre." },
];

export default function Slide04() {
  return (
    <SlideLayout>
      <div className="absolute animate-glow-breathe" style={{
        top: 100, right: 60, width: 380, height: 380,
        background: "radial-gradient(circle, hsl(38,92%,40%) 0%, transparent 70%)",
        borderRadius: "50%", opacity: 0.07,
      }} />

      <div className="relative z-10" style={{
        height: "100%", display: "flex", alignItems: "center",
        justifyContent: "center", padding: "0 96px",
      }}>
        <div style={{ width: "100%" }}>

          <div className="anim-fade-down delay-100" style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
            <AlertTriangle style={{ width: 18, height: 18, color: "hsl(38,92%,55%)" }} />
            <p style={{ fontSize: 15, fontWeight: 700, letterSpacing: "0.2em", color: "hsl(38,92%,55%)", textTransform: "uppercase", margin: 0 }}>
              O Erro Mais Comum
            </p>
          </div>

          <h2 className="anim-blur-in delay-200" style={{
            fontSize: 56, fontWeight: 800, lineHeight: 1.1,
            color: "white", marginBottom: 36, marginTop: 0,
          }}>
            Três armadilhas que travam<br />o valor da IA
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 28 }}>
            {errors.map(({ num, Icon, title, desc, accent, tip }, i) => (
              <div key={num} className="anim-fade-left" style={{
                display: "flex", alignItems: "stretch",
                background: "rgba(255,255,255,0.04)",
                border: `1px solid ${accent}20`,
                borderRadius: 12, overflow: "hidden",
                animationDelay: `${0.3 + i * 0.15}s`,
              }}>
                <div style={{ width: 4, background: accent, flexShrink: 0 }} />
                <div style={{
                  width: 80, display: "flex", alignItems: "center", justifyContent: "center",
                  background: `${accent}10`, borderRight: `1px solid ${accent}15`, flexShrink: 0,
                }}>
                  <span className="anim-count-up" style={{
                    fontSize: 36, fontWeight: 900, color: accent,
                    animationDelay: `${0.5 + i * 0.15}s`,
                  }}>{num}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 20, padding: "20px 28px", flex: 1 }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 10, background: `${accent}15`,
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  }}>
                    <Icon style={{ width: 22, height: 22, color: accent }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: 22, fontWeight: 700, color: "white", margin: 0 }}>{title}</h3>
                    <p style={{ fontSize: 18, color: "rgba(255,255,255,0.55)", margin: "6px 0 0", lineHeight: 1.5 }}>{desc}</p>
                  </div>
                  <div style={{
                    background: `${accent}12`, border: `1px solid ${accent}25`,
                    borderRadius: 8, padding: "10px 16px", maxWidth: 280, flexShrink: 0,
                  }}>
                    <p style={{ fontSize: 13, color: accent, margin: 0, lineHeight: 1.4, fontWeight: 600 }}>
                      💡 {tip}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="anim-fade-up delay-800" style={{
            background: "linear-gradient(90deg, hsl(270,80%,15%), hsl(280,70%,20%))",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 12, padding: "16px 28px",
            display: "flex", alignItems: "center", gap: 16,
          }}>
            <span style={{ fontSize: 30, color: "hsl(300,80%,65%)", flexShrink: 0 }}>"</span>
            <p style={{ fontSize: 20, fontStyle: "italic", color: "rgba(255,255,255,0.85)", margin: 0 }}>
              Complexidade cedo demais trava o valor. Simplicidade estratégica gera resultado.
            </p>
          </div>

        </div>
      </div>
    </SlideLayout>
  );
}
