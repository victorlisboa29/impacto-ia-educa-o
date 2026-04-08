import SlideLayout from "../SlideLayout";

const before = ["Resposta lenta ao lead (horas/dias)", "Atendimento genérico", "Perda de leads fora do horário", "Equipe sobrecarregada"];
const after = ["Resposta instantânea 24/7", "Atendimento personalizado com IA", "Qualificação automática do lead", "Equipe focada em fechar matrículas"];

export default function Slide09() {
  return (
    <SlideLayout>
      <div style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center", padding: "0 80px" }}>
        <div style={{ width: "100%", maxWidth: 1600 }}>

          <p style={{ fontSize: 15, fontWeight: 700, letterSpacing: "0.2em", color: "hsl(270,80%,65%)", textTransform: "uppercase", marginBottom: 10 }}>Exemplo Prático</p>
          <h2 style={{ fontSize: 54, fontWeight: 800, lineHeight: 1.1, color: "white", marginBottom: 28, marginTop: 0 }}>
            Captação com IA: atendimento<br />automatizado que converte
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12, padding: "26px 30px" }}>
              <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.15em", color: "hsl(0,84%,65%)", marginBottom: 16, marginTop: 0 }}>ANTES</p>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                {before.map((t) => (
                  <li key={t} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: "rgba(255,255,255,0.35)", flexShrink: 0, marginTop: 6 }} />
                    <span style={{ fontSize: 16, color: "rgba(255,255,255,0.6)", lineHeight: 1.5 }}>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ background: "rgba(22,80,50,0.25)", border: "1px solid rgba(100,220,130,0.2)", borderRadius: 12, padding: "26px 30px" }}>
              <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.15em", color: "hsl(160,84%,55%)", marginBottom: 16, marginTop: 0 }}>DEPOIS</p>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                {after.map((t) => (
                  <li key={t} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: "hsl(160,84%,45%)", flexShrink: 0, marginTop: 6 }} />
                    <span style={{ fontSize: 15, color: "hsl(142,70%,80%)", lineHeight: 1.5 }}>{t}</span>
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
