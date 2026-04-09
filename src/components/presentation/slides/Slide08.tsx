import SlideLayout from "../SlideLayout";
import { BarChart3, Rocket, Target, ArrowLeftRight, DollarSign, Smile, FileText, GraduationCap, Repeat, Globe } from "lucide-react";

const cols = [
  {
    num: "03", accent: "hsl(300,80%,60%)", Icon: BarChart3,
    label: "Métricas",
    subtitle: "O que não é medido, não é gerenciado.",
    items: [
      { icon: Target, text: "Defina KPIs antes de implementar" },
      { icon: ArrowLeftRight, text: "Compare antes × depois" },
      { icon: DollarSign, text: "Custo por resultado vs. custo anterior" },
      { icon: Smile, text: "Satisfação do aluno / equipe" },
    ],
  },
  {
    num: "04", accent: "hsl(160,84%,45%)", Icon: Rocket,
    label: "Escalar",
    subtitle: "Replique o que funciona. Abandone o que não funciona.",
    items: [
      { icon: FileText, text: "Documente o que funcionou" },
      { icon: GraduationCap, text: "Treine a equipe no processo" },
      { icon: Repeat, text: "Automatize os fluxos validados" },
      { icon: Globe, text: "Expanda para outros setores" },
    ],
  },
];

export default function Slide08() {
  return (
    <SlideLayout>
      {/* Glow */}
      <div className="absolute animate-glow-breathe" style={{
        bottom: "5%", left: "3%", width: "18%", height: "30%",
        background: "radial-gradient(circle, hsl(160,84%,30%) 0%, transparent 70%)",
        borderRadius: "50%", opacity: 0.1,
      }} />

      <div style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center", padding: "0 6%" }}>
        <div style={{ width: "100%" }}>

          {/* Progress indicator */}
          <div className="anim-fade-down delay-100" style={{ display: "flex", alignItems: "center", gap: "0.8%", marginBottom: "0.8%" }}>
            <div style={{ display: "flex", gap: "0.4%" }}>
              {["01","02","03","04"].map((n, i) => (
                <div key={n} style={{
                  width: i >= 2 ? "clamp(20px, 2vw, 36px)" : "clamp(8px, 0.8vw, 14px)",
                  height: "clamp(4px, 0.4vw, 6px)",
                  borderRadius: 3,
                  background: i >= 2
                    ? (i === 2 ? "hsl(300,80%,60%)" : "hsl(160,84%,45%)")
                    : "rgba(255,255,255,0.12)",
                }} />
              ))}
            </div>
            <p style={{ fontSize: "clamp(10px, 0.9vw, 16px)", fontWeight: 700, letterSpacing: "0.2em", color: "hsl(270,80%,65%)", textTransform: "uppercase", margin: 0 }}>
              Etapas 3 e 4
            </p>
          </div>

          <h2 className="anim-blur-in delay-200" style={{
            fontSize: "clamp(22px, 3vw, 56px)", fontWeight: 800,
            lineHeight: 1.1, color: "white", marginBottom: "3%", marginTop: 0,
          }}>
            Meça o impacto.<br />
            <span style={{ color: "hsl(160,84%,60%)" }}>Escale o que funciona.</span>
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
