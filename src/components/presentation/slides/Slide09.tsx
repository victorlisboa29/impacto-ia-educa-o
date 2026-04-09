import SlideLayout from "../SlideLayout";

const before = ["Resposta lenta ao lead (horas/dias)", "Atendimento genérico", "Perda de leads fora do horário", "Equipe sobrecarregada"];
const after = ["Resposta instantânea 24/7", "Atendimento personalizado com IA", "Qualificação automática do lead", "Equipe focada em fechar matrículas"];

export default function Slide09() {
  return (
    <SlideLayout>
      <div style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center", padding: "0 100px" }}>
        <div style={{ width: "100%", maxWidth: 1600 }}>

          <p style={{ fontSize: 18, fontWeight: 700, letterSpacing: "0.2em", color: "hsl(270,80%,65%)", textTransform: "uppercase", marginBottom: 12 }}>Exemplo Prático</p>
          <h2 style={{ fontSize: 60, fontWeight: 800, lineHeight: 1.1, color: "white", marginBottom: 36, marginTop: 0 }}>
            Captação com IA: atendimento<br />automatizado que converte
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28 }}>
            <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 14, padding: "32px 36px" }}>
              <p style={{ fontSize: 16, fontWeight: 700, letterSpacing: "0.15em", color: "hsl(0,84%,65%)", marginBottom: 20, marginTop: 0 }}>ANTES</p>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 14 }}>
                {before.map((t) => (
                  <li key={t} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <span style={{ width: 8, height: 8, borderRadius: "50%", background: "rgba(255,255,255,0.35)", flexShrink: 0, marginTop: 8 }} />
                    <span style={{ fontSize: 20, color: "rgba(255,255,255,0.6)", lineHeight: 1.5 }}>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ background: "rgba(22,80,50,0.25)", border: "1px solid rgba(100,220,130,0.2)", borderRadius: 14, padding: "32px 36px" }}>
              <p style={{ fontSize: 16, fontWeight: 700, letterSpacing: "0.15em", color: "hsl(160,84%,55%)", marginBottom: 20, marginTop: 0 }}>DEPOIS</p>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 14 }}>
                {after.map((t) => (
                  <li key={t} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <span style={{ width: 8, height: 8, borderRadius: "50%", background: "hsl(160,84%,45%)", flexShrink: 0, marginTop: 8 }} />
                    <span style={{ fontSize: 20, color: "hsl(142,70%,80%)", lineHeight: 1.5 }}>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </SlideLayout>
  );
}
