import SlideLayout from "../SlideLayout";
import { Brain, Target, Zap, Layers, Bot, Cpu, Sparkles } from "lucide-react";

// Floating chaos icons to illustrate "too many options"
const chaosIcons = [
  { Icon: Bot, x: "12%", y: "18%", size: 18, delay: "0s", opacity: 0.25 },
  { Icon: Cpu, x: "22%", y: "72%", size: 14, delay: "0.5s", opacity: 0.2 },
  { Icon: Zap, x: "8%", y: "45%", size: 16, delay: "1s", opacity: 0.18 },
  { Icon: Layers, x: "18%", y: "88%", size: 12, delay: "1.5s", opacity: 0.15 },
  { Icon: Sparkles, x: "5%", y: "62%", size: 14, delay: "0.8s", opacity: 0.2 },
];

export default function Slide02() {
  return (
    <SlideLayout>
      {/* Subtle chaos floating icons — background layer */}
      {chaosIcons.map(({ Icon, x, y, size, delay, opacity }, i) => (
        <div key={i} className="absolute animate-float-slow" style={{
          left: x, top: y, opacity, animationDelay: delay, pointerEvents: "none",
        }}>
          <Icon style={{ width: size, height: size, color: "hsl(270,80%,65%)" }} />
        </div>
      ))}

      <div className="absolute animate-spin-slow" style={{
        bottom: "-7%", left: "-3%", width: "18%", height: "32%",
        border: "1px solid rgba(200,100,255,0.06)", borderRadius: "50%",
      }} />

      <div className="relative z-10" style={{
        height: "100%", display: "flex", alignItems: "center",
        justifyContent: "center", padding: "0 6%",
      }}>
        <div style={{ width: "100%" }}>

          {/* Label */}
          <p className="anim-fade-down delay-100" style={{
            fontSize: "clamp(10px, 0.9vw, 16px)", fontWeight: 700,
            letterSpacing: "0.2em", color: "hsl(270,80%,65%)",
            textTransform: "uppercase", marginBottom: "0.8%", marginTop: 0,
          }}>Contexto</p>

          {/* Title */}
          <h2 className="anim-blur-in delay-200" style={{
            fontSize: "clamp(22px, 3vw, 56px)", fontWeight: 800,
            lineHeight: 1.1, color: "white", marginBottom: "3%", marginTop: 0,
          }}>
            Muitas possibilidades.<br />
            <span style={{ color: "hsl(280,100%,82%)" }}>Pouca clareza</span> de onde começar.
          </h2>

          {/* Two cards */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2%", marginBottom: "2.5%" }}>
            {[
              {
                Icon: Brain,
                color: "hsl(270,80%,65%)",
                title: "IA generativa está em toda parte",
                desc: "Ferramentas, modelos e promessas surgem todos os dias. O excesso de opções paralisa a tomada de decisão.",
                stat: "100+", statLabel: "ferramentas de IA lançadas em 2024",
              },
              {
                Icon: Target,
                color: "hsl(300,80%,65%)",
                title: "Falta foco estratégico",
                desc: "Sem priorização clara, iniciativas de IA viram projetos-piloto sem escala e sem resultado mensurável.",
                stat: "73%", statLabel: "dos projetos de IA não chegam à produção",
              },
            ].map(({ Icon, color, title, desc, stat, statLabel }, i) => (
              <div key={title} className="anim-fade-up" style={{
                background: "rgba(255,255,255,0.04)",
                border: `1px solid ${color}25`,
                borderTop: `3px solid ${color}`,
                borderRadius: 14, padding: "2.5% 2.8%",
                animationDelay: `${0.4 + i * 0.15}s`,
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1.2%", marginBottom: "1.2%" }}>
                  <div style={{
                    width: "4vh", height: "4vh", minWidth: 32, minHeight: 32,
                    borderRadius: 10, background: `${color}18`,
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  }}>
                    <Icon style={{ width: "55%", height: "55%", color }} />
                  </div>
                  <span style={{ fontSize: "clamp(13px, 1.2vw, 21px)", fontWeight: 700, color: "white", lineHeight: 1.2 }}>{title}</span>
                </div>
                <p style={{ fontSize: "clamp(11px, 1vw, 18px)", color: "rgba(255,255,255,0.55)", lineHeight: 1.6, margin: "0 0 1.5% 0" }}>{desc}</p>
                {/* Mini stat */}
                <div style={{
                  display: "flex", alignItems: "center", gap: "1%",
                  borderTop: `1px solid ${color}20`, paddingTop: "1.2%",
                }}>
                  <span style={{ fontSize: "clamp(16px, 1.6vw, 28px)", fontWeight: 900, color }}>{stat}</span>
                  <span style={{ fontSize: "clamp(9px, 0.8vw, 13px)", color: "rgba(255,255,255,0.4)", lineHeight: 1.3 }}>{statLabel}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Quote */}
          <div className="anim-fade-up delay-700" style={{
            background: "linear-gradient(90deg, rgba(270,80%,18%,0.3), rgba(255,255,255,0.03))",
            border: "1px solid rgba(255,255,255,0.08)",
            borderLeft: "3px solid hsl(300,80%,55%)",
            borderRadius: 10, padding: "1.2% 2%",
            display: "flex", alignItems: "center", gap: "1.5%",
          }}>
            <span style={{ fontSize: "clamp(20px, 2vw, 36px)", color: "hsl(300,80%,55%)", lineHeight: 1, flexShrink: 0 }}>"</span>
            <p style={{ fontSize: "clamp(12px, 1.1vw, 20px)", fontStyle: "italic", color: "rgba(255,255,255,0.8)", margin: 0 }}>
              O desafio não é acesso à tecnologia — é foco e execução.
            </p>
          </div>

        </div>
      </div>
    </SlideLayout>
  );
}
