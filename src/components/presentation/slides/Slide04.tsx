import SlideLayout from "../SlideLayout";
import { Expand, Wrench, BarChart2, AlertTriangle } from "lucide-react";

const errors = [
  {
    num: "01",
    Icon: Expand,
    title: "Começar grande demais",
    desc: "Projetos ambiciosos demais travam na execução e nunca geram resultado.",
    accent: "hsl(0,84%,60%)",
    tip: "Comece com um caso de uso específico e mensurável.",
  },
  {
    num: "02",
    Icon: Wrench,
    title: "Focar na tecnologia",
    desc: "Escolher a ferramenta antes de entender o problema a resolver.",
    accent: "hsl(38,92%,50%)",
    tip: "Defina o problema primeiro. A ferramenta vem depois.",
  },
  {
    num: "03",
    Icon: BarChart2,
    title: "Não medir resultado",
    desc: "Sem métricas claras, é impossível saber se a IA está gerando valor.",
    accent: "hsl(300,80%,55%)",
    tip: "KPIs antes de implementar. Sempre.",
  },
];

export default function Slide04() {
  return (
    <SlideLayout>
      {/* Warning glow */}
      <div className="absolute animate-glow-breathe" style={{
        top: "10%", right: "5%", width: "20%", height: "35%",
        background: "radial-gradient(circle, hsl(38,92%,40%) 0%, transparent 70%)",
        borderRadius: "50%", opacity: 0.08,
      }} />

      <div className="relative z-10" style={{
        height: "100%", display: "flex", alignItems: "center",
        justifyContent: "center", padding: "0 6%",
      }}>
        <div style={{ width: "100%" }}>

          {/* Label with warning icon */}
          <div className="anim-fade-down delay-100" style={{ display: "flex", alignItems: "center", gap: "0.8%", marginBottom: "0.8%" }}>
            <AlertTriangle style={{ width: "clamp(12px, 1.1vw, 18px)", height: "clamp(12px, 1.1vw, 18px)", color: "hsl(38,92%,55%)" }} />
            <p style={{ fontSize: "clamp(10px, 0.9vw, 16px)", fontWeight: 700, letterSpacing: "0.2em", color: "hsl(38,92%,55%)", textTransform: "uppercase", margin: 0 }}>
              O Erro Mais Comum
            </p>
          </div>

          <h2 className="anim-blur-in delay-200" style={{
            fontSize: "clamp(22px, 3vw, 56px)", fontWeight: 800,
            lineHeight: 1.1, color: "white", marginBottom: "3%", marginTop: 0,
          }}>
            Três armadilhas que travam<br />o valor da IA
          </h2>

          {/* Error cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.8%", marginBottom: "2.5%" }}>
            {errors.map(({ num, Icon, title, desc, accent, tip }, i) => (
              <div key={num} className="anim-fade-left" style={{
                display: "flex", alignItems: "stretch",
                background: "rgba(255,255,255,0.04)",
                border: `1px solid ${accent}20`,
                borderRadius: 12, overflow: "hidden",
                animationDelay: `${0.3 + i * 0.15}s`,
              }}>
                {/* Left accent bar */}
                <div style={{ width: 4, background: accent, flexShrink: 0 }} />

                {/* Number */}
                <div style={{
                  width: "7%", minWidth: 52, display: "flex", alignItems: "center", justifyContent: "center",
                  background: `${accent}10`, borderRight: `1px solid ${accent}15`, flexShrink: 0,
                }}>
                  <span className="anim-count-up" style={{
                    fontSize: "clamp(18px, 2vw, 36px)", fontWeight: 900, color: accent,
                    animationDelay: `${0.5 + i * 0.15}s`,
                  }}>{num}</span>
                </div>

                {/* Icon + content */}
                <div style={{ display: "flex", alignItems: "center", gap: "2%", padding: "1.6% 2.2%", flex: 1 }}>
                  <div style={{
                    width: "4vh", height: "4vh", minWidth: 32, minHeight: 32,
                    borderRadius: 10, background: `${accent}15`,
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  }}>
                    <Icon style={{ width: "55%", height: "55%", color: accent }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: "clamp(13px, 1.2vw, 22px)", fontWeight: 700, color: "white", margin: 0 }}>{title}</h3>
                    <p style={{ fontSize: "clamp(11px, 1vw, 18px)", color: "rgba(255,255,255,0.55)", margin: "0.3% 0 0", lineHeight: 1.5 }}>{desc}</p>
                  </div>
                  {/* Tip pill */}
                  <div style={{
                    background: `${accent}12`, border: `1px solid ${accent}25`,
                    borderRadius: 8, padding: "0.8% 1.4%",
                    maxWidth: "28%", flexShrink: 0,
                  }}>
                    <p style={{ fontSize: "clamp(9px, 0.78vw, 13px)", color: accent, margin: 0, lineHeight: 1.4, fontWeight: 600 }}>
                      💡 {tip}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Conclusion */}
          <div className="anim-fade-up delay-800" style={{
            background: "linear-gradient(90deg, hsl(270,80%,15%), hsl(280,70%,20%))",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 12, padding: "1.2% 2.2%",
            display: "flex", alignItems: "center", gap: "1.5%",
          }}>
            <span style={{ fontSize: "clamp(18px, 1.8vw, 30px)", color: "hsl(300,80%,65%)", flexShrink: 0 }}>"</span>
            <p style={{ fontSize: "clamp(12px, 1.1vw, 20px)", fontStyle: "italic", color: "rgba(255,255,255,0.85)", margin: 0 }}>
              Complexidade cedo demais trava o valor. Simplicidade estratégica gera resultado.
            </p>
          </div>

        </div>
      </div>
    </SlideLayout>
  );
}
