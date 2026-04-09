import SlideLayout from "../SlideLayout";
import { Mail, Phone } from "lucide-react";

const contacts = [
  { Icon: Mail, label: "E-mail", value: "vslisboa@nuageit.com.br" },
  { Icon: Phone, label: "Telefone", value: "(21) 99828-7349" },
];

export default function Slide12() {
  return (
    <SlideLayout>
      <div style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center", padding: "0 100px" }}>
        <div style={{ width: "100%", maxWidth: 1600, display: "flex", gap: 100, alignItems: "center" }}>

          {/* LEFT */}
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: 18, fontWeight: 700, letterSpacing: "0.2em", color: "hsl(270,80%,65%)", textTransform: "uppercase", marginBottom: 24, marginTop: 0 }}>
              Obrigado
            </p>

            <h2 style={{ fontSize: 72, fontWeight: 900, lineHeight: 1, color: "white", margin: "0 0 28px", letterSpacing: "-1px" }}>
              Vamos construir<br />
              <span style={{ background: "linear-gradient(90deg, hsl(270,80%,65%), hsl(300,80%,65%))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                juntos?
              </span>
            </h2>

            <div style={{ width: 80, height: 4, background: "linear-gradient(90deg, hsl(300,80%,55%), hsl(270,80%,55%))", borderRadius: 2, marginBottom: 28 }} />

            <p style={{ fontSize: 22, color: "rgba(255,255,255,0.6)", lineHeight: 1.6, margin: 0, maxWidth: 540 }}>
              Estou à disposição para conversar sobre como a IA pode gerar impacto real na sua instituição.
            </p>
          </div>

          {/* RIGHT — contact card */}
          <div style={{ width: 500, flexShrink: 0 }}>
            <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 18, overflow: "hidden" }}>
              <div style={{ height: 4, background: "linear-gradient(90deg, hsl(270,80%,55%), hsl(300,80%,55%))" }} />
              <div style={{ padding: "40px 44px", display: "flex", flexDirection: "column", gap: 28 }}>
                <p style={{ fontSize: 16, fontWeight: 700, letterSpacing: "0.2em", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", margin: 0 }}>
                  Contato
                </p>
                {contacts.map(({ Icon, label, value }) => (
                  <div key={label} style={{ display: "flex", alignItems: "center", gap: 20 }}>
                    <div style={{ width: 52, height: 52, borderRadius: 12, background: "rgba(200,50,200,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon style={{ width: 24, height: 24, color: "hsl(300,80%,65%)" }} />
                    </div>
                    <div>
                      <p style={{ fontSize: 14, color: "rgba(255,255,255,0.4)", margin: "0 0 4px", letterSpacing: "0.05em" }}>{label}</p>
                      <p style={{ fontSize: 22, color: "white", fontWeight: 500, margin: 0 }}>{value}</p>
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
