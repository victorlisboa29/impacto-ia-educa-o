import SlideLayout from "../SlideLayout";

const cols = [
  { accent: "hsl(300,80%,60%)", label: "03  Métricas", items: ["Defina KPIs antes de implementar", "Compare antes × depois", "Custo por resultado vs. custo anterior", "Satisfação do aluno / equipe"] },
  { accent: "hsl(160,84%,45%)", label: "04  Escalar", items: ["Documente o que funcionou", "Treine a equipe no processo", "Automatize os fluxos validados", "Expanda para outros setores"] },
];

export default function Slide08() {
  return (
    <SlideLayout>
      <div style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center", padding: "0 100px" }}>
        <div style={{ width: "100%", maxWidth: 1600 }}>

          <p style={{ fontSize: 18, fontWeight: 700, letterSpacing: "0.2em", color: "hsl(270,80%,65%)", textTransform: "uppercase", marginBottom: 12 }}>Etapas 3 e 4</p>
          <h2 style={{ fontSize: 60, fontWeight: 800, lineHeight: 1.1, color: "white", marginBottom: 36, marginTop: 0 }}>
            Meça o impacto.<br />Escale o que funciona.
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
