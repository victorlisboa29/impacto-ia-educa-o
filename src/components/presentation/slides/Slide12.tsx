import SlideLayout from "../SlideLayout";
import { Mail, Phone, Linkedin, ArrowRight } from "lucide-react";

const contacts = [
  { Icon: Mail, label: "E-mail", value: "vslisboa@nuageit.com.br", color: "hsl(270,80%,65%)" },
  { Icon: Phone, label: "Telefone", value: "(21) 99828-7349", color: "hsl(300,80%,65%)" },
  { Icon: Linkedin, label: "LinkedIn", value: "nuageit", color: "hsl(195,90%,55%)" },
];

// Simple SVG QR-code-like visual (decorative)
function QRDecor() {
  return (
    <svg viewBox="0 0 80 80" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" opacity={0.6}>
      {/* Corner squares */}
      <rect x="4" y="4" width="22" height="22" rx="3" fill="none" stroke="hsl(270,80%,65%)" strokeWidth="2.5"/>
      <rect x="8" y="8" width="14" height="14" rx="1.5" fill="hsl(270,80%,65%)" opacity="0.7"/>
      <rect x="54" y="4" width="22" height="22" rx="3" fill="none" stroke="hsl(300,80%,65%)" strokeWidth="2.5"/>
      <rect x="58" y="8" width="14" height="14" rx="1.5" fill="hsl(300,80%,65%)" opacity="0.7"/>
      <rect x="4" y="54" width="22" height="22" rx="3" fill="none" stroke="hsl(280,85%,65%)" strokeWidth="2.5"/>
      <rect x="8" y="58" width="14" height="14" rx="1.5" fill="hsl(280,85%,65%)" opacity="0.7"/>
      {/* Data dots */}
      {[
        [32,4],[36,4],[40,4],[44,4],
        [32,8],[40,8],[44,8],
        [32,12],[36,12],[44,12],
        [32,16],[40,16],
        [32,20],[36,20],[40,20],[44,20],
        [4,32],[8,32],[16,32],[20,32],
        [4,36],[12,36],[20,36],
        [4,40],[8,40],[12,40],[20,40],
        [4,44],[16,44],[20,44],
        [4,48],[8,48],[12,48],[16,48],[20,48],
        [32,32],[36,32],[44,32],[48,32],[52,32],
        [32,36],[40,36],[52,36],
        [36,40],[44,40],[48,40],
        [32,44],[36,44],[44,44],[52,44],
        [32,48],[40,48],[44,48],[48,48],
        [32,52],[36,52],[44,52],
        [54,32],[58,32],[66,32],[70,32],[74,32],
        [54,36],[62,36],[70,36],
        [58,40],[62,40],[66,40],[74,40],
        [54,44],[58,44],[66,44],[70,44],
        [54,48],[62,48],[66,48],[74,48],
        [54,52],[58,52],[62,52],[70,52],[74,52],
        [32,58],[40,58],[44,58],[52,58],
        [32,62],[36,62],[44,62],[48,62],[52,62],
        [32,66],[40,66],[52,66],
        [32,70],[36,70],[44,70],[48,70],
        [32,74],[36,74],[40,74],[44,74],[52,74],
      ].map(([x, y], i) => (
        <rect key={i} x={x} y={y} width="3" height="3" rx="0.5"
          fill={i % 3 === 0 ? "hsl(270,80%,65%)" : i % 3 === 1 ? "hsl(300,80%,65%)" : "hsl(280,85%,65%)"}
          opacity={0.5 + (i % 4) * 0.12}
        />
      ))}
    </svg>
  );
}

export default function Slide12() {
  return (
    <SlideLayout>
      {/* Glow */}
      <div className="absolute animate-glow-breathe" style={{
        bottom: "0%", right: "0%", width: "35%", height: "55%",
        background: "radial-gradient(circle, hsl(270,80%,30%) 0%, transparent 70%)",
        borderRadius: "50%", opacity: 0.15,
      }} />
      <div className="absolute animate-glow-breathe" style={{
        top: "0%", left: "0%", width: "25%", height: "40%",
        background: "radial-gradient(circle, hsl(300,80%,25%) 0%, transparent 70%)",
        borderRadius: "50%", opacity: 0.1, animationDelay: "2s",
      }} />

      <div style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center", padding: "0 6%" }}>
        <div style={{ width: "100%", display: "flex", gap: "5%", alignItems: "center" }}>

          {/* LEFT */}
          <div style={{ flex: 1 }} className="anim-fade-left delay-200">
            <p style={{
              fontSize: "clamp(10px, 0.9vw, 16px)", fontWeight: 700,
              letterSpacing: "0.25em", color: "hsl(270,80%,65%)",
              textTransform: "uppercase", marginBottom: "1.5%", marginTop: 0,
            }}>Obrigado</p>

            <h2 style={{
              fontSize: "clamp(28px, 3.6vw, 68px)", fontWeight: 900,
              lineHeight: 1.05, color: "white", margin: "0 0 1.5%", letterSpacing: "-1px",
            }}>
              Vamos construir<br />
              <span style={{
                background: "linear-gradient(90deg, hsl(270,80%,65%), hsl(300,80%,65%))",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>juntos?</span>
            </h2>

            <div style={{
              width: "8%", height: 3,
              background: "linear-gradient(90deg, hsl(300,80%,55%), transparent)",
              borderRadius: 2, marginBottom: "2%",
            }} />

            <p style={{
              fontSize: "clamp(12px, 1.1vw, 20px)", color: "rgba(255,255,255,0.55)",
              lineHeight: 1.65, margin: "0 0 3%",
            }}>
              Estou à disposição para conversar sobre como<br />
              a IA pode gerar impacto real na sua instituição.
            </p>

            {/* CTA button */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "0.8%",
              background: "linear-gradient(90deg, hsl(270,80%,40%), hsl(300,80%,40%))",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: 100, padding: "0.8% 2%",
              cursor: "pointer",
            }}>
              <span style={{ fontSize: "clamp(11px, 1vw, 18px)", color: "white", fontWeight: 600 }}>Agendar conversa</span>
              <ArrowRight style={{ width: "clamp(12px, 1vw, 18px)", height: "clamp(12px, 1vw, 18px)", color: "white" }} />
            </div>
          </div>

          {/* RIGHT — contact card */}
          <div style={{ width: "38%", flexShrink: 0 }} className="anim-fade-right delay-300">
            <div style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 18, overflow: "hidden",
            }}>
              <div style={{ height: 3, background: "linear-gradient(90deg, hsl(270,80%,55%), hsl(300,80%,55%))" }} />
              <div style={{ padding: "3% 3.5%", display: "flex", flexDirection: "column", gap: "2.5%" }}>

                <p style={{
                  fontSize: "clamp(9px, 0.8vw, 14px)", fontWeight: 700,
                  letterSpacing: "0.2em", color: "rgba(255,255,255,0.3)",
                  textTransform: "uppercase", margin: 0,
                }}>Contato</p>

                {contacts.map(({ Icon, label, value, color }) => (
                  <div key={label} style={{ display: "flex", alignItems: "center", gap: "4%" }}>
                    <div style={{
                      width: "4.5vh", height: "4.5vh", minWidth: 36, minHeight: 36,
                      borderRadius: 10, background: `${color}18`,
                      border: `1px solid ${color}30`,
                      display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                    }}>
                      <Icon style={{ width: "50%", height: "50%", color }} />
                    </div>
                    <div>
                      <p style={{ fontSize: "clamp(8px, 0.72vw, 12px)", color: "rgba(255,255,255,0.35)", margin: "0 0 0.2vh", letterSpacing: "0.05em" }}>{label}</p>
                      <p style={{ fontSize: "clamp(11px, 1.05vw, 18px)", color: "white", fontWeight: 500, margin: 0 }}>{value}</p>
                    </div>
                  </div>
                ))}

                {/* Divider */}
                <div style={{ height: 1, background: "rgba(255,255,255,0.06)" }} />

                {/* QR code decorative */}
                <div style={{ display: "flex", alignItems: "center", gap: "4%" }}>
                  <div style={{ width: "22%", aspectRatio: "1", flexShrink: 0 }}>
                    <QRDecor />
                  </div>
                  <div>
                    <p style={{ fontSize: "clamp(8px, 0.72vw, 12px)", color: "rgba(255,255,255,0.3)", margin: "0 0 0.3vh" }}>Escaneie para conectar</p>
                    <p style={{ fontSize: "clamp(9px, 0.8vw, 14px)", color: "rgba(255,255,255,0.5)", margin: 0, fontWeight: 600 }}>nuageit.com.br</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </SlideLayout>
  );
}
