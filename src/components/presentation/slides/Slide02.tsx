import SlideLayout from "../SlideLayout";
import { Brain, Target, Zap, Layers, Bot, Cpu, Sparkles } from "lucide-react";

const chaosIcons = [
  { Icon: Bot,      left: 120, top: 190, size: 22, delay: "0s",   opacity: 0.22 },
  { Icon: Cpu,      left: 200, top: 740, size: 18, delay: "0.5s", opacity: 0.18 },
  { Icon: Zap,      left: 70,  top: 480, size: 20, delay: "1s",   opacity: 0.16 },
  { Icon: Layers,   left: 160, top: 920, size: 16, delay: "1.5s", opacity: 0.14 },
  { Icon: Sparkles, left: 50,  top: 650, size: 18, delay: "0.8s", opacity: 0.18 },
];

export default function Slide02() {
  return (
    <SlideLayout>
      {chaosIcons.map(({ Icon, left, top, size, delay, opacity }, i) => (
        <div key={i} className="absolute animate-float-slow" style={{ left, top, opacity, animationDelay: delay, pointerEvents: "none" }}>
          <Icon style={{ width: size, height: size, color: "hsl(270,80%,65%)" }} />
        </div>
      ))}

      <div className="absolute animate-spin-slow" style={{
        bottom: -80, left: -40, width: 360, height: 360,
        border: "1px solid rgba(200,100,255,0.06)", borderRadius: "50%",
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
          }}>Contexto</p>

          <h2 className="anim-blur-in delay-200" style={{
            fontSize: 56, fontWeight: 800, lineHeight: 1.1,
            color: "white", marginBottom: 36, marginTop: 0,
          }}>
            A IA está em todo lugar.<br />
            <span style={{ color: "hsl(280,100%,82%)" }}>Mas por onde começar?</span>
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 24 }}>
            {[
              {
                Icon: Brain, color: "hsl(270,80%,65%)",
                title: "IA generativa está em toda parte",
                desc: "Ferramentas, modelos e promessas surgem todos os dias. O excesso de opções paralisa a tomada de decisão.",
                stat: "100+", statLabel: "ferramentas de IA lançadas em 2024",
              },
              {
                Icon: Target, color: "hsl(300,80%,65%)",
                title: "Falta foco estratégico",
                desc: "Sem priorização clara, iniciativas de IA viram projetos-piloto sem escala e sem resultado mensurável.",
                stat: "73%", statLabel: "dos projetos de IA não chegam à produção",
              },
            ].map(({ Icon, color, title, desc, stat, statLabel }, i) => (
              <div key={title} className="anim-fade-up" style={{
                background: "rgba(255,255,255,0.04)",
                border: `1px solid ${color}25`,
                borderTop: `3px solid ${color}`,
                borderRadius: 14, padding: "28px 32px",
                animationDelay: `${0.4 + i * 0.15}s`,
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 14 }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 10, background: `${color}18`,
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  }}>
                    <Icon style={{ width: 24, height: 24, color }} />
                  </div>
                  <span style={{ fontSize: 20, fontWeight: 700, color: "white", lineHeight: 1.2 }}>{title}</span>
                </div>
                <p style={{ fontSize: 18, color: "rgba(255,255,255,0.55)", lineHeight: 1.6, margin: "0 0 16px 0" }}>{desc}</p>
                <div style={{ display: "flex", alignItems: "center", gap: 10, borderTop: `1px solid ${color}20`, paddingTop: 14 }}>
                  <span style={{ fontSize: 28, fontWeight: 900, color }}>{stat}</span>
                  <span style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", lineHeight: 1.3 }}>{statLabel}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="anim-fade-up delay-700" style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderLeft: "3px solid hsl(300,80%,55%)",
            borderRadius: 10, padding: "16px 24px",
            display: "flex", alignItems: "center", gap: 16,
          }}>
            <span style={{ fontSize: 36, color: "hsl(300,80%,55%)", lineHeight: 1, flexShrink: 0 }}>"</span>
            <p style={{ fontSize: 20, fontStyle: "italic", color: "rgba(255,255,255,0.8)", margin: 0 }}>
              O desafio não é acesso à tecnologia — é foco e execução.
            </p>
          </div>

        </div>
      </div>
    </SlideLayout>
  );
}
