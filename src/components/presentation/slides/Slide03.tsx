import SlideLayout from "../SlideLayout";
import { TrendingDown, DoorOpen, AlertCircle, Cog } from "lucide-react";

const pains = [
  {
    Icon: TrendingDown,
    title: "Captação cara",
    desc: "Custo por aluno subindo, ROI caindo. Canais tradicionais perdem eficiência.",
    accent: "hsl(0,84%,60%)",
    metric: "+34%", metricLabel: "custo por lead em 3 anos",
    barH: "75%",
  },
  {
    Icon: DoorOpen,
    title: "Evasão",
    desc: "Alunos abandonam o curso antes de concluir. Falta acompanhamento proativo.",
    accent: "hsl(38,92%,50%)",
    metric: "26%", metricLabel: "taxa média de evasão no Brasil",
    barH: "55%",
  },
  {
    Icon: AlertCircle,
    title: "Inadimplência",
    desc: "Fluxo de caixa comprometido. Cobranças reativas e pouco personalizadas.",
    accent: "hsl(25,95%,53%)",
    metric: "18%", metricLabel: "das mensalidades em atraso",
    barH: "40%",
  },
  {
    Icon: Cog,
    title: "Operação sobrecarregada",
    desc: "Equipes fazendo tarefas repetitivas que poderiam ser automatizadas.",
    accent: "hsl(300,80%,55%)",
    metric: "60%", metricLabel: "do tempo em tarefas manuais",
    barH: "65%",
  },
];

export default function Slide03() {
  return (
    <SlideLayout>
      {/* Background glow bottom left */}
      <div className="absolute animate-glow-breathe" style={{
        bottom: "-5%", left: "-5%", width: "25%", height: "40%",
        background: "radial-gradient(circle, hsl(0,84%,40%) 0%, transparent 70%)",
        borderRadius: "50%", opacity: 0.08,
      }} />

      <div className="relative z-10" style={{
        height: "100%", display: "flex", alignItems: "center",
        justifyContent: "center", padding: "0 6%",
      }}>
        <div style={{ width: "100%" }}>

          <p className="anim-fade-down delay-100" style={{
            fontSize: "clamp(10px, 0.9vw, 16px)", fontWeight: 700,
            letterSpacing: "0.2em", color: "hsl(270,80%,65%)",
            textTransform: "uppercase", marginBottom: "0.8%", marginTop: 0,
          }}>Dores do Setor</p>

          <h2 className="anim-blur-in delay-200" style={{
            fontSize: "clamp(22px, 3vw, 56px)", fontWeight: 800,
            lineHeight: 1.1, color: "white", marginBottom: "2.5%", marginTop: 0,
          }}>
            Os problemas que precisam<br />de solução <span style={{ color: "hsl(0,84%,65%)" }}>agora</span>
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "1.8%", marginBottom: "2.5%" }}>
            {pains.map(({ Icon, title, desc, accent, metric, metricLabel, barH }, i) => (
              <div key={title} className="anim-fade-up" style={{
                background: "rgba(255,255,255,0.04)",
                border: `1px solid ${accent}20`,
                borderRadius: 14, overflow: "hidden",
                display: "flex", flexDirection: "column",
                animationDelay: `${0.3 + i * 0.1}s`,
              }}>
                {/* Top accent */}
                <div style={{ height: 3, background: accent }} />

                <div style={{ padding: "2% 2.2%", flex: 1, display: "flex", flexDirection: "column", gap: "1%" }}>
                  {/* Icon + title */}
                  <div style={{ display: "flex", alignItems: "center", gap: "1%" }}>
                    <div style={{
                      width: "3.8vh", height: "3.8vh", minWidth: 28, minHeight: 28,
                      borderRadius: 8, background: `${accent}18`,
                      display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                    }}>
                      <Icon style={{ width: "55%", height: "55%", color: accent }} />
                    </div>
                    <h3 style={{ fontSize: "clamp(12px, 1.1vw, 19px)", fontWeight: 700, color: "white", margin: 0, lineHeight: 1.2 }}>{title}</h3>
                  </div>

                  <p style={{ fontSize: "clamp(10px, 0.9vw, 16px)", color: "rgba(255,255,255,0.55)", lineHeight: 1.55, margin: 0, flex: 1 }}>{desc}</p>

                  {/* Mini bar chart */}
                  <div style={{ marginTop: "auto" }}>
                    <div style={{
                      height: "5vh", minHeight: 36,
                      background: "rgba(255,255,255,0.04)",
                      borderRadius: 6, overflow: "hidden",
                      display: "flex", alignItems: "flex-end",
                      padding: "0 8%", gap: "8%",
                    }}>
                      {[barH, "40%", "60%", "30%"].map((h, j) => (
                        <div key={j} className="anim-bar-grow" style={{
                          flex: 1, height: h,
                          background: j === 0 ? accent : `${accent}40`,
                          borderRadius: "3px 3px 0 0",
                          animationDelay: `${0.5 + i * 0.1 + j * 0.05}s`,
                        }} />
                      ))}
                    </div>
                    {/* Metric */}
                    <div style={{ display: "flex", alignItems: "baseline", gap: "0.5%", marginTop: "0.5%" }}>
                      <span style={{ fontSize: "clamp(14px, 1.4vw, 24px)", fontWeight: 900, color: accent }}>{metric}</span>
                      <span style={{ fontSize: "clamp(8px, 0.7vw, 11px)", color: "rgba(255,255,255,0.35)", lineHeight: 1.3 }}>{metricLabel}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quote */}
          <p className="anim-fade-up delay-800" style={{
            fontSize: "clamp(12px, 1.1vw, 20px)", fontStyle: "italic",
            color: "hsl(280,100%,82%)", margin: 0,
            borderLeft: "2px solid hsl(300,80%,55%)", paddingLeft: "1.5%",
          }}>
            "IA só importa quando resolve problemas reais — e esses são os problemas reais."
          </p>

        </div>
      </div>
    </SlideLayout>
  );
}
