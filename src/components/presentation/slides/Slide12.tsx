import SlideLayout from "../SlideLayout";
import { Mail, Phone } from "lucide-react";

const contacts = [
  { Icon: Mail,  label: "E-mail",   value: "vslisboa@nuageit.com.br", color: "hsl(270,80%,65%)" },
  { Icon: Phone, label: "WhatsApp", value: "(21) 99828-7349",         color: "hsl(160,84%,50%)" },
];

export default function Slide12() {
  return (
    <SlideLayout>
      <div className="absolute animate-glow-breathe" style={{
        bottom: 0, right: 0, width: 600, height: 560,
        background: "radial-gradient(circle, hsl(270,80%,30%) 0%, transparent 70%)",
        borderRadius: "50%", opacity: 0.12,
      }} />
      <div className="absolute animate-glow-breathe" style={{
        top: 0, left: 0, width: 440, height: 400,
        background: "radial-gradient(circle, hsl(300,80%,25%) 0%, transparent 70%)",
        borderRadius: "50%", opacity: 0.08, animationDelay: "2s",
      }} />

      <div style={{
        height: "100%", display: "flex", alignItems: "center",
        justifyContent: "center", padding: "0 96px",
      }}>
        <div style={{ width: "100%", display: "flex", gap: 80, alignItems: "center" }}>

          {/* LEFT */}
          <div style={{ flex: 1 }} className="anim-fade-left delay-200">
            <h2 style={{
              fontSize: 72, fontWeight: 900, lineHeight: 1.05,
              color: "white", margin: "0 0 24px", letterSpacing: "-1px",
            }}>
              <span style={{
                background: "linear-gradient(90deg, hsl(270,80%,65%), hsl(300,80%,65%))",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>Obrigado.</span>
            </h2>

            <div style={{
              width: 72, height: 3,
              background: "linear-gradient(90deg, hsl(300,80%,55%), transparent)",
              borderRadius: 2, marginBottom: 28,
            }} />

            <p style={{
              fontSize: 20, color: "rgba(255,255,255,0.5)",
              lineHeight: 1.7, margin: 0,
            }}>
              Estou à disposição para conversar sobre como<br />
              a IA pode gerar impacto real na sua instituição.
            </p>
          </div>

          {/* RIGHT — contact card */}
          <div style={{ width: 440, flexShrink: 0 }} className="anim-fade-right delay-300">
            <div style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 20, overflow: "hidden",
            }}>
              <div style={{ height: 2, background: "linear-gradient(90deg, hsl(270,80%,55%), hsl(300,80%,55%))" }} />
              <div style={{ padding: "36px 40px", display: "flex", flexDirection: "column", gap: 24 }}>

                <p style={{
                  fontSize: 11, fontWeight: 700, letterSpacing: "0.22em",
                  color: "rgba(255,255,255,0.25)", textTransform: "uppercase", margin: 0,
                }}>Contato</p>

                {contacts.map(({ Icon, label, value, color }) => (
                  <div key={label} style={{
                    display: "flex", alignItems: "center", gap: 20,
                    background: `${color}0a`,
                    border: `1px solid ${color}22`,
                    borderLeft: `3px solid ${color}`,
                    borderRadius: 12, padding: "18px 22px",
                  }}>
                    <div style={{
                      width: 54, height: 54, borderRadius: 14,
                      background: `${color}18`, border: `1px solid ${color}35`,
                      display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                    }}>
                      <Icon style={{ width: 26, height: 26, color }} />
                    </div>
                    <div>
                      <p style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", margin: "0 0 4px", letterSpacing: "0.08em", textTransform: "uppercase" }}>{label}</p>
                      <p style={{ fontSize: 22, color: "white", fontWeight: 600, margin: 0 }}>{value}</p>
                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>

        </div>
      </div>
    </SlideLayout>
  );
}
