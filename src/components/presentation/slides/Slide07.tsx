import SlideLayout from "../SlideLayout";
import { Search, TrendingUp, HelpCircle, Users, Ruler, Cpu, Zap, Clock, Link, ThumbsUp } from "lucide-react";

const cols = [
  {
    num: "01", accent: "hsl(270,80%,60%)", Icon: Search,
    label: "Problema Claro",
    subtitle: "Antes de qualquer ferramenta, defina o problema.",
    items: [
      { icon: HelpCircle, text: "Qual é a dor mais urgente?" },
      { icon: Users, text: "Quem é impactado diretamente?" },
      { icon: Ruler, text: "É possível medir antes e depois?" },
      { icon: Cpu, text: "O time consegue executar?" },
    ],
  },
  {
    num: "02", accent: "hsl(280,85%,65%)", Icon: TrendingUp,
    label: "Quick Wins",
    subtitle: "Escolha o que gera resultado rápido e visível.",
    items: [
      { icon: Zap, text: "Alto impacto + baixa complexidade" },
      { icon: Clock, text: "Resultado visível em semanas" },
      { icon: Link, text: "Não depende de grandes integrações" },
      { icon: ThumbsUp, text: "Gera confiança para escalar" },
    ],
  },
];

export default function Slide07() {
  return (
    <SlideLayout>
      {/* Glow */}
      <div className="absolute animate-glow-breathe" style={{
        top: "5%", right: "3%", width: "18%", height: "30%",
        background: "radial-gradient(circle, hsl(270,80%,40%) 0%, transparent 70%)",
        borderRadius: "50%", opacity: 0.1,
      }} />

      <div style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center", padding: "0 6%" }}>
        <div style={{ width: "100%" }}>

          {/* Progress indicator */}
          <div className="anim-fade-down delay-100" style={{ display: "flex", alignItems: "center", gap: "0.8%", marginBottom: "0.8%" }}>
            <div style={{ display: "flex", gap: "0.4%" }}>
              {["01","02","03","04"].map((n, i) => (
                <div key={n} style={{
                  width: i < 2 ? "clamp(20px, 2vw, 36px)" : "clamp(8px, 0.8vw, 14px)",
                  height: "clamp(4px, 0.4vw, 6px)",
                  borderRadius: 3,
                  background: i < 2
                    ? (i === 0 ? "hsl(270,80%,60%)" : "hsl(280,85%,65%)")
                    : "rgba(255,255,255,0.12)",
                  transition: "width 0.3s",
                }} />
              ))}
            </div>
            <p style={{ fontSize: "clamp(10px, 0.9vw, 16px)", fontWeight: 700, letterSpacing: "0.2em", color: "hsl(270,80%,65%)", textTransform: "uppercase", margin: 0 }}>
              Etapas 1 e 2
            </p>
          </div>

          <h2 className="anim-blur-in delay-200" style={{
            fontSize: "clamp(22px, 3vw, 56px)", fontWeight: 800,
            lineHeight: 1.1, color: "white", marginBottom: "3%", marginTop: 0,
          }}>
            Escolha o problema certo.<br />
            <span style={{ color: "hsl(280,100%,82%)" }}>Busque quick wins.</span>
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2%" }}>
            {cols.map(({ num, accent, Icon, label, subtitle, items }) => (
              <div key={label} className="anim-fade-up" style={{
                background: "rgba(255,255,255,0.04)",
                border: `1px solid ${accent}25`,
                borderRadius: 14, overflow: "hidden",
              }}>
                <div style={{ height: 4, background: accent }} />
                <div style={{ padding: "2.5% 2.8%" }}>
                  {/* Header */}
                  <div style={{ display: "flex", alignItems: "center", gap: "1.2%", marginBottom: "0.8%" }}>
                    <div style={{
                      width: "4vh", height: "4vh", minWidth: 32, minHeight: 32,
                      borderRadius: 10, background: `${accent}18`,
                      display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                    }}>
                      <Icon style={{ width: "55%", height: "55%", color: accent }} />
                    </div>
                    <div>
                      <span style={{ fontSize: "clamp(9px, 0.75vw, 12px)", color: accent, fontWeight: 700, display: "block" }}>{num}</span>
                      <h3 style={{ fontSize: "clamp(14px, 1.3vw, 22px)", fontWeight: 700, color: "white", margin: 0 }}>{label}</h3>
                    </div>
                  </div>
                  <p style={{ fontSize: "clamp(10px, 0.88vw, 15px)", color: "rgba(255,255,255,0.4)", margin: "0 0 1.8% 0", fontStyle: "italic" }}>{subtitle}</p>

                  {/* Items with icons */}
                  <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "1.1%" }}>
                    {items.map(({ icon: ItemIcon, text }, j) => (
                      <li key={text} className="anim-fade-left" style={{
                        display: "flex", gap: "1%", alignItems: "center",
                        animationDelay: `${0.5 + j * 0.08}s`,
                      }}>
                        <div style={{
                          width: "3.2vh", height: "3.2vh", minWidth: 24, minHeight: 24,
                          borderRadius: 6, background: `${accent}12`,
                          display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                        }}>
                          <ItemIcon style={{ width: "55%", height: "55%", color: accent }} />
                        </div>
                        <span style={{ fontSize: "clamp(11px, 1vw, 18px)", color: "rgba(255,255,255,0.75)", lineHeight: 1.4 }}>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </SlideLayout>
  );
}
