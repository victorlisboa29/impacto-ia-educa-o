import SlideLayout from "../SlideLayout";
import { X, Check, ArrowRight, Clock, FileX, AlertOctagon, BookOpen, Zap, Sparkles, BarChart2, BookCheck } from "lucide-react";

const before = [
  { icon: Clock,        text: "Horas perdidas preparando aulas do zero" },
  { icon: FileX,        text: "Sem feedback rápido sobre desempenho da turma" },
  { icon: AlertOctagon, text: "Dificuldade em identificar alunos em risco" },
  { icon: BookOpen,     text: "Conteúdo genérico, sem personalização" },
];

const after = [
  { icon: Zap,       text: "Planos de aula gerados em minutos com IA" },
  { icon: BarChart2, text: "Relatórios automáticos de desempenho por turma" },
  { icon: Sparkles,  text: "Alertas proativos de alunos com baixo engajamento" },
  { icon: BookCheck, text: "Conteúdo adaptado ao perfil de cada turma" },
];

const metrics = [
  { value: "-70%", label: "tempo de preparo de aulas",    color: "hsl(160,84%,50%)" },
  { value: "+35%", label: "engajamento dos alunos",       color: "hsl(160,84%,50%)" },
  { value: "2x",   label: "mais tempo para ensinar",      color: "hsl(160,84%,50%)" },
];

export default function Slide09() {
  return (
    <SlideLayout>
      <div style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center", padding: "0 96px" }}>
        <div style={{ width: "100%" }}>

          <p className="anim-fade-down delay-100" style={{
            fontSize: 15, fontWeight: 700, letterSpacing: "0.2em",
            color: "hsl(270,80%,65%)", textTransform: "uppercase",
            marginBottom: 12, marginTop: 0,
          }}>Exemplo Prático</p>

          <h2 className="anim-blur-in delay-200" style={{
            fontSize: 52, fontWeight: 800, lineHeight: 1.1,
            color: "white", marginBottom: 28, marginTop: 0,
          }}>
            IA como assistente do professor:<br />
            <span style={{ color: "hsl(160,84%,60%)" }}>mais tempo para o que importa</span>
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: 24, alignItems: "center", marginBottom: 20 }}>

            {/* BEFORE */}
            <div className="anim-fade-left delay-300" style={{
              background: "rgba(255,50,50,0.05)",
              border: "1px solid rgba(255,80,80,0.2)",
              borderRadius: 14, padding: "24px 28px",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
                <div style={{ width: 28, height: 28, borderRadius: "50%", background: "rgba(255,80,80,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <X style={{ width: 16, height: 16, color: "hsl(0,84%,65%)" }} />
                </div>
                <p style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.15em", color: "hsl(0,84%,65%)", margin: 0 }}>ANTES</p>
              </div>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
                {before.map(({ icon: Icon, text }, j) => (
                  <li key={text} className="anim-fade-left" style={{ display: "flex", gap: 12, alignItems: "center", animationDelay: `${0.4 + j * 0.08}s` }}>
                    <div style={{ width: 32, height: 32, borderRadius: 6, background: "rgba(255,80,80,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon style={{ width: 16, height: 16, color: "hsl(0,84%,60%)" }} />
                    </div>
                    <span style={{ fontSize: 18, color: "rgba(255,255,255,0.55)", lineHeight: 1.4 }}>{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Arrow */}
            <div className="anim-scale-in delay-500" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
              <div style={{
                width: 52, height: 52, borderRadius: "50%",
                background: "linear-gradient(135deg, hsl(270,80%,40%), hsl(300,80%,40%))",
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 0 24px hsl(270,80%,40%)",
              }}>
                <ArrowRight style={{ width: 26, height: 26, color: "white" }} />
              </div>
              <span style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em" }}>IA</span>
            </div>

            {/* AFTER */}
            <div className="anim-fade-right delay-300" style={{
              background: "rgba(22,80,50,0.2)",
              border: "1px solid rgba(100,220,130,0.25)",
              borderRadius: 14, padding: "24px 28px",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
                <div style={{ width: 28, height: 28, borderRadius: "50%", background: "rgba(100,220,130,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Check style={{ width: 16, height: 16, color: "hsl(160,84%,55%)" }} />
                </div>
                <p style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.15em", color: "hsl(160,84%,55%)", margin: 0 }}>DEPOIS</p>
              </div>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
                {after.map(({ icon: Icon, text }, j) => (
                  <li key={text} className="anim-fade-right" style={{ display: "flex", gap: 12, alignItems: "center", animationDelay: `${0.4 + j * 0.08}s` }}>
                    <div style={{ width: 32, height: 32, borderRadius: 6, background: "rgba(100,220,130,0.12)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon style={{ width: 16, height: 16, color: "hsl(160,84%,50%)" }} />
                    </div>
                    <span style={{ fontSize: 18, color: "hsl(142,70%,80%)", lineHeight: 1.4 }}>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Metrics */}
          <div className="anim-fade-up delay-700" style={{ display: "flex", gap: 16 }}>
            {metrics.map(({ value, label, color }) => (
              <div key={label} style={{
                flex: 1, background: `${color}10`, border: `1px solid ${color}30`,
                borderRadius: 10, padding: "14px 24px",
                display: "flex", alignItems: "center", gap: 14,
              }}>
                <span style={{ fontSize: 28, fontWeight: 900, color }}>{value}</span>
                <span style={{ fontSize: 14, color: "rgba(255,255,255,0.5)" }}>{label}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </SlideLayout>
  );
}
