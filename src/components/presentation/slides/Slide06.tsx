import SlideLayout from "../SlideLayout";
import { Search, TrendingUp, BarChart3, Rocket, ArrowRight } from "lucide-react";

const steps = [
  { num: "01", title: "Problema\nClaro", desc: "Identifique uma dor real e específica do negócio", accent: "hsl(270,80%,60%)", Icon: Search },
  { num: "02", title: "Alto Impacto\nBaixa Complexidade", desc: "Priorize o que gera resultado rápido com menor esforço", accent: "hsl(280,85%,65%)", Icon: TrendingUp },
  { num: "03", title: "Medir\nResultado", desc: "Defina métricas claras antes de implementar", accent: "hsl(300,80%,60%)", Icon: BarChart3 },
  { num: "04", title: "Escalar", desc: "Replique o que funciona para toda a operação", accent: "hsl(160,84%,45%)", Icon: Rocket },
];

export default function Slide06() {
  return (
    <SlideLayout>
      <div style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center", padding: "0 100px" }}>
        <div style={{ width: "100%", maxWidth: 1600 }}>

          <p style={{ fontSize: 18, fontWeight: 700, letterSpacing: "0.2em", color: "hsl(270,80%,65%)", textTransform: "uppercase", marginBottom: 12 }}>Framework</p>
          <h2 style={{ fontSize: 60, fontWeight: 800, lineHeight: 1.1, color: "white", marginBottom: 36, marginTop: 0 }}>4 etapas para gerar valor com IA</h2>

          <div style={{ display: "flex", gap: 20, alignItems: "stretch" }}>
            {steps.map((s, i) => (
              <div key={s.num} style={{ display: "flex", alignItems: "stretch", flex: 1, gap: 16 }}>
                <div style={{ flex: 1, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 14, overflow: "hidden" }}>
                  <div style={{ height: 4, background: s.accent }} />
                  <div style={{ padding: "28px 28px" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
                      <span style={{ fontSize: 44, fontWeight: 900, color: s.accent, lineHeight: 1 }}>{s.num}</span>
                      <s.Icon style={{ width: 28, height: 28, color: s.accent }} />
                    </div>
                    <h3 style={{ fontSize: 22, fontWeight: 700, color: "white", lineHeight: 1.3, whiteSpace: "pre-line", marginBottom: 12, marginTop: 0 }}>{s.title}</h3>
                    <p style={{ fontSize: 18, color: "rgba(255,255,255,0.55)", lineHeight: 1.55, margin: 0 }}>{s.desc}</p>
                  </div>
                </div>
                {i < 3 && <ArrowRight style={{ width: 22, height: 22, color: "rgba(255,255,255,0.25)", flexShrink: 0, alignSelf: "center" }} />}
              </div>
            ))}
          </div>

        </div>
      </div>
    </SlideLayout>
  );
}
