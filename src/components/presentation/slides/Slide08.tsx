import SlideLayout from "../SlideLayout";

const cols = [
  { accent: "hsl(300,80%,60%)", label: "03  Métricas", items: ["Defina KPIs antes de implementar", "Compare antes × depois", "Custo por resultado vs. custo anterior", "Satisfação do aluno / equipe"] },
  { accent: "hsl(160,84%,45%)", label: "04  Escalar", items: ["Documente o que funcionou", "Treine a equipe no processo", "Automatize os fluxos validados", "Expanda para outros setores"] },
];

export default function Slide08() {
  return (
    <SlideLayout>
      <div style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center", padding: "0 80px" }}>
        <div style={{ width: "100%", maxWidth: 1600 }}>

          <p style={{ fontSize: 15, fontWeight: 700, letterSpacing: "0.2em", color: "hsl(270,80%,65%)", textTransform: "uppercase", marginBottom: 10 }}>Etapas 3 e 4</p>
          <h2 style={{ fontSize: 54, fontWeight: 800, lineHeight: 1.1, color: "white", marginBottom: 28, marginTop: 0 }}>
            Meça o impacto.<br />Escale o que funciona.
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            {cols.map(({ accent, label, items }) => (
              <div key={label} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12, overflow: "hidden" }}>
                <div style={{ height: 3, background: accent }} />
                <div style={{ padding: "26px 30px" }}>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: "white", marginBottom: 16, marginTop: 0 }}>{label}</h3>
                  <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                    {items.map((t) => (
                      <li key={t} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                        <span style={{ width: 6, height: 6, borderRadius: "50%", background: accent, flexShrink: 0, marginTop: 6 }} />
                        <span style={{ fontSize: 16, color: "rgba(255,255,255,0.75)", lineHeight: 1.5 }}>{t}</span>
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
