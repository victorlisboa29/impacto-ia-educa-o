import SlideLayout from "../SlideLayout";

const cols = [
  { accent: "hsl(270,80%,60%)", label: "01  Problema Claro", items: ["Qual é a dor mais urgente?", "Quem é impactado diretamente?", "É possível medir antes e depois?", "O time consegue executar?"] },
  { accent: "hsl(280,85%,65%)", label: "02  Quick Wins", items: ["Alto impacto + baixa complexidade", "Resultado visível em semanas", "Não depende de grandes integrações", "Gera confiança para escalar"] },
];

export default function Slide07() {
  return (
    <SlideLayout>
      <div style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center", padding: "0 100px" }}>
        <div style={{ width: "100%", maxWidth: 1600 }}>

          <p style={{ fontSize: 18, fontWeight: 700, letterSpacing: "0.2em", color: "hsl(270,80%,65%)", textTransform: "uppercase", marginBottom: 12 }}>Etapas 1 e 2</p>
          <h2 style={{ fontSize: 60, fontWeight: 800, lineHeight: 1.1, color: "white", marginBottom: 36, marginTop: 0 }}>
            Escolha o problema certo.<br />Busque quick wins.
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28 }}>
            {cols.map(({ accent, label, items }) => (
              <div key={label} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 14, overflow: "hidden" }}>
                <div style={{ height: 4, background: accent }} />
                <div style={{ padding: "32px 36px" }}>
                  <h3 style={{ fontSize: 24, fontWeight: 700, color: "white", marginBottom: 20, marginTop: 0 }}>{label}</h3>
                  <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 14 }}>
                    {items.map((t) => (
                      <li key={t} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                        <span style={{ width: 8, height: 8, borderRadius: "50%", background: accent, flexShrink: 0, marginTop: 8 }} />
                        <span style={{ fontSize: 20, color: "rgba(255,255,255,0.75)", lineHeight: 1.5 }}>{t}</span>
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
