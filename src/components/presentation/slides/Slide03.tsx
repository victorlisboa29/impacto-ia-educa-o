import SlideLayout from "../SlideLayout";
import { TrendingDown, DoorOpen, AlertCircle, Cog } from "lucide-react";

const pains = [
  { Icon: TrendingDown, title: "Perda de matrículas",       desc: "Leads sem retorno rápido desistem. A demora no atendimento custa matrículas todos os dias.", accent: "hsl(0,84%,60%)",   metric: "21x",  metricLabel: "menos conversão após 1h sem resposta · HBR / InsideSales", bars: [75, 40, 60, 30] },
  { Icon: DoorOpen,     title: "Evasão",                    desc: "Alunos abandonam o curso antes de concluir. Falta acompanhamento proativo.",                   accent: "hsl(38,92%,50%)",  metric: "55%",  metricLabel: "dos alunos não concluem o ensino superior · INEP",         bars: [55, 40, 60, 30] },
  { Icon: AlertCircle,  title: "Inadimplência",             desc: "Fluxo de caixa comprometido. Cobranças reativas e pouco personalizadas.",                       accent: "hsl(25,95%,53%)",  metric: "35%",  metricLabel: "das vendas vão para quem responde primeiro · InsideSales",  bars: [40, 40, 60, 30] },
  { Icon: Cog,          title: "Operação sobrecarregada",   desc: "Equipes fazendo tarefas repetitivas que poderiam ser automatizadas.",                           accent: "hsl(300,80%,55%)", metric: "60%",  metricLabel: "das horas de trabalho são automatizáveis · McKinsey",      bars: [65, 40, 60, 30] },
];

export default function Slide03() {
  return (
    <SlideLayout>
      <div className="absolute animate-glow-breathe" style={{
        bottom: -60, left: -60, width: 480, height: 480,
        background: "radial-gradient(circle, hsl(0,84%,40%) 0%, transparent 70%)",
        borderRadius: "50%", opacity: 0.07,
      }} />

      <div className="relative z-10" style={{
        height: "100%", display: "flex", alignItems: "center",
        justifyContent: "center", padding: "0 96px",
      }}>
        <div style={{ width: "100%" }}>

          <p className="anim-fade-down delay-100" style={{
            fontSize: 15, fontWeight: 700, letterSpacing: "0.2em",
            color: "hsl(270,80%,65%)", textTransform: "uppercase",
            marginBottom: 12, marginTop: 0,
          }}>Dores do Setor</p>

          <h2 className="anim-blur-in delay-200" style={{
            fontSize: 56, fontWeight: 800, lineHeight: 1.1,
            color: "white", marginBottom: 32, marginTop: 0,
          }}>
            Os problemas que precisam<br />de solução{" "}
            <span style={{ color: "hsl(0,84%,65%)" }}>agora</span>
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 20, marginBottom: 28 }}>
            {pains.map(({ Icon, title, desc, accent, metric, metricLabel, bars }, i) => (
              <div key={title} className="anim-fade-up" style={{
                background: "rgba(255,255,255,0.04)",
                border: `1px solid ${accent}20`,
                borderRadius: 14, overflow: "hidden",
                display: "flex", flexDirection: "column",
                animationDelay: `${0.3 + i * 0.1}s`,
              }}>
                <div style={{ height: 3, background: accent }} />
                <div style={{ padding: "20px 22px", flex: 1, display: "flex", flexDirection: "column", gap: 10 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{
                      width: 38, height: 38, borderRadius: 8, background: `${accent}18`,
                      display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                    }}>
                      <Icon style={{ width: 20, height: 20, color: accent }} />
                    </div>
                    <h3 style={{ fontSize: 18, fontWeight: 700, color: "white", margin: 0, lineHeight: 1.2 }}>{title}</h3>
                  </div>

                  <p style={{ fontSize: 15, color: "rgba(255,255,255,0.55)", lineHeight: 1.55, margin: 0, flex: 1 }}>{desc}</p>

                  {/* Mini bar chart */}
                  <div style={{ marginTop: "auto" }}>
                    <div style={{
                      height: 48, background: "rgba(255,255,255,0.04)",
                      borderRadius: 6, overflow: "hidden",
                      display: "flex", alignItems: "flex-end",
                      padding: "0 10%", gap: "8%",
                    }}>
                      {bars.map((h, j) => (
                        <div key={j} className="anim-bar-grow" style={{
                          flex: 1, height: `${h}%`,
                          background: j === 0 ? accent : `${accent}40`,
                          borderRadius: "3px 3px 0 0",
                          animationDelay: `${0.5 + i * 0.1 + j * 0.05}s`,
                        }} />
                      ))}
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 2, marginTop: 6 }}>
                      <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
                        <span style={{ fontSize: 22, fontWeight: 900, color: accent }}>{metric}</span>
                        <span style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", lineHeight: 1.3 }}>
                          {metricLabel.split(" · ")[0]}
                        </span>
                      </div>
                      {metricLabel.includes(" · ") && (
                        <span style={{ fontSize: 10, color: "rgba(255,255,255,0.2)", fontStyle: "italic" }}>
                          Fonte: {metricLabel.split(" · ")[1]}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="anim-fade-up delay-800" style={{
            fontSize: 19, fontStyle: "italic", color: "hsl(280,100%,82%)", margin: 0,
            borderLeft: "2px solid hsl(300,80%,55%)", paddingLeft: 20,
          }}>
            "IA só importa quando resolve problemas reais — e esses são os problemas reais."
          </p>

        </div>
      </div>
    </SlideLayout>
  );
}
