import SlideLayout from "../SlideLayout";

const beneficios = [
  {
    num: "1",
    title: "INVESTIMENTO\nPROJETOS",
    items: [
      "Isenção total ou parcial dos investimentos de projetos produtivos e POC/POV;",
      "Análise gratuita de ambientes para migração e modernização.",
    ],
  },
  {
    num: "2",
    title: "CRÉDITOS\nCONTA AWS",
    items: [
      "Teste serviços aws sem custos;",
      "Até 3 meses de incentivos (créditos) aws;",
      "Desbloqueie incentivos para o setor de educação e projetos de GenIA.",
    ],
  },
  {
    num: "3",
    title: "DESCONTO\nFATURA AWS",
    items: [
      "Desconto recorrente na fatura AWS;",
      "Nacionalização da fatura AWS;",
      "Postergação da data de vencimento faturas AWS;",
      "3 horas consultivas mês;",
      "Plataforma de gestão de cloud sem custo.",
    ],
  },
];

export default function SlideBeneficios() {
  return (
    <SlideLayout>
      {/* Centered container — max 1200px, vertically centered */}
      <div style={{
        height: "100%", display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        padding: "0 160px",
      }}>
        <div style={{ width: "100%", maxWidth: 1200 }}>

          {/* Title */}
          <div style={{ marginBottom: 32 }}>
            <h2 style={{ fontSize: 38, fontWeight: 900, color: "white", lineHeight: 1.15, margin: 0, letterSpacing: "-0.3px" }}>
              <span>BENEFÍCIOS</span>
              <span style={{ fontWeight: 300 }}> AWS </span>
              <span>DESBLOQUEADOS</span>
              <span style={{ fontWeight: 300 }}> PELA </span>
              <span>NUAGEIT</span>
            </h2>
            <div style={{ width: 48, height: 3, background: "white", marginTop: 12, borderRadius: 2, opacity: 0.7 }} />
          </div>

          {/* Cards grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24 }}>
            {beneficios.map(({ num, title, items }) => (
              <div key={num} style={{ display: "flex", flexDirection: "column" }}>

                {/* Number + title header */}
                <div style={{
                  background: "hsl(240,55%,24%)",
                  border: "1px solid hsl(240,45%,38%)",
                  borderBottom: "none",
                  borderRadius: "12px 12px 0 0",
                  padding: "16px 20px 14px",
                  display: "flex", alignItems: "flex-start", gap: 14,
                }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: "50%", flexShrink: 0,
                    background: "hsl(330,85%,50%)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 18, fontWeight: 900, color: "white",
                    boxShadow: "0 2px 10px rgba(220,30,100,0.45)",
                  }}>
                    {num}
                  </div>
                  <p style={{
                    color: "white", fontWeight: 800, fontSize: 15,
                    lineHeight: 1.35, whiteSpace: "pre-line", margin: 0,
                    letterSpacing: "0.02em",
                  }}>
                    {title}
                  </p>
                </div>

                {/* Items body */}
                <div style={{
                  background: "hsl(240,50%,20%)",
                  border: "1px solid hsl(240,45%,38%)",
                  borderTop: "1px solid hsl(240,45%,30%)",
                  borderRadius: "0 0 12px 12px",
                  padding: "16px 20px 18px",
                  flex: 1,
                }}>
                  <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                    {items.map((item) => (
                      <li key={item} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                        <span style={{ color: "hsl(330,85%,65%)", fontSize: 14, lineHeight: 1, marginTop: 4, flexShrink: 0 }}>•</span>
                        <span style={{ color: "rgba(255,255,255,0.80)", fontSize: 14, lineHeight: 1.55 }}>{item}</span>
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
