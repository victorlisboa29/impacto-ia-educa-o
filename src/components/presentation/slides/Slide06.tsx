import SlideLayout from "../SlideLayout";
import { Search, TrendingUp, BarChart3, Rocket } from "lucide-react";

const steps = [
  {
    num: "01", Icon: Search,
    title: "Problema\nClaro",
    desc: "Identifique uma dor real e específica do negócio",
    accent: "hsl(270,80%,60%)",
    detail: "Quem sofre? Quanto custa? É mensurável?",
  },
  {
    num: "02", Icon: TrendingUp,
    title: "Alto Impacto\nBaixa Complexidade",
    desc: "Priorize o que gera resultado rápido com menor esforço",
    accent: "hsl(280,85%,65%)",
    detail: "Quick wins em semanas, não meses.",
  },
  {
    num: "03", Icon: BarChart3,
    title: "Medir\nResultado",
    desc: "Defina métricas claras antes de implementar",
    accent: "hsl(300,80%,60%)",
    detail: "KPIs antes, durante e depois.",
  },
  {
    num: "04", Icon: Rocket,
    title: "Escalar",
    desc: "Replique o que funciona para toda a operação",
    accent: "hsl(160,84%,45%)",
    detail: "Documente, treine, automatize.",
  },
];

export default function Slide06() {
  return (
    <SlideLayout>
      <div style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center", padding: "0 6%" }}>
        <div style={{ width: "100%" }}>

          <p className="anim-fade-down delay-100" style={{
            fontSize: "clamp(10px, 0.9vw, 16px)", fontWeight: 700,
            letterSpacing: "0.2em", color: "hsl(270,80%,65%)",
            textTransform: "uppercase", marginBottom: "0.8%", marginTop: 0,
          }}>Framework</p>

          <h2 className="anim-blur-in delay-200" style={{
            fontSize: "clamp(22px, 3vw, 56px)", fontWeight: 800,
            lineHeight: 1.1, color: "white", marginBottom: "3%", marginTop: 0,
          }}>4 etapas para gerar valor com IA</h2>

          {/* Progress connector line */}
          <div className="anim-scale-in delay-300" style={{
            height: 2, marginBottom: "2%",
            background: "linear-gradient(90deg, hsl(270,80%,60%), hsl(280,85%,65%), hsl(300,80%,60%), hsl(160,84%,45%))",
            borderRadius: 2, opacity: 0.3,
          }} />

          <div style={{ display: "flex", gap: "1.5%", alignItems: "stretch" }}>
            {steps.map((s, i) => (
              <div key={s.num} className="anim-fade-up" style={{
                flex: 1, display: "flex", flexDirection: "column",
                background: "rgba(255,255,255,0.04)",
                border: `1px solid ${s.accent}25`,
                borderRadius: 14, overflow: "hidden",
                animationDelay: `${0.3 + i * 0.12}s`,
              }}>
                {/* Top color bar */}
                <div style={{ height: 4, background: s.accent }} />

                <div style={{ padding: "2.2% 2.4%", flex: 1, display: "flex", flexDirection: "column", gap: "1.2%" }}>
                  {/* Number + Icon row */}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span className="anim-count-up" style={{
                      fontSize: "clamp(20px, 2.2vw, 40px)", fontWeight: 900,
                      color: s.accent, lineHeight: 1,
                      animationDelay: `${0.5 + i * 0.12}s`,
                    }}>{s.num}</span>
                    <div style={{
                      width: "4vh", height: "4vh", minWidth: 30, minHeight: 30,
                      borderRadius: 10, background: `${s.accent}18`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      <s.Icon style={{ width: "55%", height: "55%", color: s.accent }} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 style={{
                    fontSize: "clamp(12px, 1.15vw, 20px)", fontWeight: 700,
                    color: "white", lineHeight: 1.25, whiteSpace: "pre-line",
                    margin: 0,
                  }}>{s.title}</h3>

                  {/* Desc */}
                  <p style={{
                    fontSize: "clamp(10px, 0.9vw, 16px)", color: "rgba(255,255,255,0.5)",
                    lineHeight: 1.55, margin: 0, flex: 1,
                  }}>{s.desc}</p>

                  {/* Detail pill */}
                  <div style={{
                    background: `${s.accent}12`, border: `1px solid ${s.accent}25`,
                    borderRadius: 6, padding: "0.6% 1%", marginTop: "auto",
                  }}>
                    <p style={{ fontSize: "clamp(9px, 0.78vw, 13px)", color: s.accent, margin: 0, fontWeight: 600 }}>
                      → {s.detail}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </SlideLayout>
  );
}
