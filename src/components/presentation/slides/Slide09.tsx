import SlideLayout from "../SlideLayout";
import { X, Check, ArrowRight, Clock, User, PhoneOff, AlertOctagon, Zap, Sparkles, UserCheck, Target } from "lucide-react";

const before = [
  { icon: Clock, text: "Resposta lenta ao lead (horas/dias)" },
  { icon: User, text: "Atendimento genérico" },
  { icon: PhoneOff, text: "Perda de leads fora do horário" },
  { icon: AlertOctagon, text: "Equipe sobrecarregada" },
];

const after = [
  { icon: Zap, text: "Resposta instantânea 24/7" },
  { icon: Sparkles, text: "Atendimento personalizado com IA" },
  { icon: UserCheck, text: "Qualificação automática do lead" },
  { icon: Target, text: "Equipe focada em fechar matrículas" },
];

const metrics = [
  { value: "+40%", label: "conversão de leads", color: "hsl(160,84%,50%)" },
  { value: "24/7", label: "disponibilidade", color: "hsl(160,84%,50%)" },
  { value: "-60%", label: "tempo de resposta", color: "hsl(160,84%,50%)" },
];

export default function Slide09() {
  return (
    <SlideLayout>
      <div style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center", padding: "0 6%" }}>
        <div style={{ width: "100%" }}>

          <p className="anim-fade-down delay-100" style={{
            fontSize: "clamp(10px, 0.9vw, 16px)", fontWeight: 700,
            letterSpacing: "0.2em", color: "hsl(270,80%,65%)",
            textTransform: "uppercase", marginBottom: "0.8%", marginTop: 0,
          }}>Exemplo Prático</p>

          <h2 className="anim-blur-in delay-200" style={{
            fontSize: "clamp(20px, 2.8vw, 52px)", fontWeight: 800,
            lineHeight: 1.1, color: "white", marginBottom: "2.5%", marginTop: 0,
          }}>
            Captação com IA: atendimento<br />
            <span style={{ color: "hsl(160,84%,60%)" }}>automatizado que converte</span>
          </h2>

          {/* Before / Arrow / After */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: "2%", alignItems: "center", marginBottom: "2%" }}>

            {/* BEFORE */}
            <div className="anim-fade-left delay-300" style={{
              background: "rgba(255,50,50,0.05)",
              border: "1px solid rgba(255,80,80,0.2)",
              borderRadius: 14, padding: "2.2% 2.5%",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.8%", marginBottom: "1.5%" }}>
                <div style={{ width: "3vh", height: "3vh", minWidth: 22, minHeight: 22, borderRadius: "50%", background: "rgba(255,80,80,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <X style={{ width: "60%", height: "60%", color: "hsl(0,84%,65%)" }} />
                </div>
                <p style={{ fontSize: "clamp(10px, 0.9vw, 15px)", fontWeight: 700, letterSpacing: "0.15em", color: "hsl(0,84%,65%)", margin: 0 }}>ANTES</p>
              </div>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "1.1%" }}>
                {before.map(({ icon: Icon, text }, j) => (
                  <li key={text} className="anim-fade-left" style={{
                    display: "flex", gap: "1%", alignItems: "center",
                    animationDelay: `${0.4 + j * 0.08}s`,
                  }}>
                    <div style={{ width: "3.2vh", height: "3.2vh", minWidth: 24, minHeight: 24, borderRadius: 6, background: "rgba(255,80,80,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon style={{ width: "55%", height: "55%", color: "hsl(0,84%,60%)" }} />
                    </div>
                    <span style={{ fontSize: "clamp(11px, 1vw, 18px)", color: "rgba(255,255,255,0.55)", lineHeight: 1.4 }}>{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Arrow */}
            <div className="anim-scale-in delay-500" style={{
              display: "flex", flexDirection: "column", alignItems: "center", gap: "0.8%",
            }}>
              <div style={{
                width: "5vh", height: "5vh", minWidth: 40, minHeight: 40,
                borderRadius: "50%",
                background: "linear-gradient(135deg, hsl(270,80%,40%), hsl(300,80%,40%))",
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 0 20px hsl(270,80%,40%)",
              }}>
                <ArrowRight style={{ width: "55%", height: "55%", color: "white" }} />
              </div>
              <span style={{ fontSize: "clamp(8px, 0.7vw, 11px)", color: "rgba(255,255,255,0.3)", textAlign: "center", letterSpacing: "0.1em" }}>IA</span>
            </div>

            {/* AFTER */}
            <div className="anim-fade-right delay-300" style={{
              background: "rgba(22,80,50,0.2)",
              border: "1px solid rgba(100,220,130,0.25)",
              borderRadius: 14, padding: "2.2% 2.5%",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.8%", marginBottom: "1.5%" }}>
                <div style={{ width: "3vh", height: "3vh", minWidth: 22, minHeight: 22, borderRadius: "50%", background: "rgba(100,220,130,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Check style={{ width: "60%", height: "60%", color: "hsl(160,84%,55%)" }} />
                </div>
                <p style={{ fontSize: "clamp(10px, 0.9vw, 15px)", fontWeight: 700, letterSpacing: "0.15em", color: "hsl(160,84%,55%)", margin: 0 }}>DEPOIS</p>
              </div>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "1.1%" }}>
                {after.map(({ icon: Icon, text }, j) => (
                  <li key={text} className="anim-fade-right" style={{
                    display: "flex", gap: "1%", alignItems: "center",
                    animationDelay: `${0.4 + j * 0.08}s`,
                  }}>
                    <div style={{ width: "3.2vh", height: "3.2vh", minWidth: 24, minHeight: 24, borderRadius: 6, background: "rgba(100,220,130,0.12)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon style={{ width: "55%", height: "55%", color: "hsl(160,84%,50%)" }} />
                    </div>
                    <span style={{ fontSize: "clamp(11px, 1vw, 18px)", color: "hsl(142,70%,80%)", lineHeight: 1.4 }}>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Impact metrics */}
          <div className="anim-fade-up delay-700" style={{ display: "flex", gap: "1.5%" }}>
            {metrics.map(({ value, label, color }) => (
              <div key={label} style={{
                flex: 1, background: `${color}10`,
                border: `1px solid ${color}30`,
                borderRadius: 10, padding: "1% 2%",
                display: "flex", alignItems: "center", gap: "1.2%",
              }}>
                <span style={{ fontSize: "clamp(16px, 1.6vw, 28px)", fontWeight: 900, color }}>{value}</span>
                <span style={{ fontSize: "clamp(9px, 0.8vw, 14px)", color: "rgba(255,255,255,0.5)" }}>{label}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </SlideLayout>
  );
}
