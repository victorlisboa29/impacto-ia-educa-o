import SlideLayout from "../SlideLayout";

const errors = [
  { num: "01", title: "Começar grande demais", desc: "Projetos ambiciosos demais travam na execução e nunca geram resultado." },
  { num: "02", title: "Focar na tecnologia", desc: "Escolher a ferramenta antes de entender o problema a resolver." },
  { num: "03", title: "Não medir resultado", desc: "Sem métricas claras, é impossível saber se a IA está gerando valor." },
];

export default function Slide04() {
  return (
    <SlideLayout>
      <div className="relative z-10" style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center", padding: "0 100px" }}>
        <div style={{ width: "100%", maxWidth: 1600 }}>
          <p className="anim-fade-down delay-200" style={{ fontSize: 18, fontWeight: 700, letterSpacing: "0.2em", color: "hsl(270,80%,65%)", textTransform: "uppercase", marginBottom: 12 }}>O Erro Mais Comum</p>
          <h2 className="anim-blur-in delay-300" style={{ fontSize: 60, fontWeight: 800, lineHeight: 1.1, color: "white", marginBottom: 40, marginTop: 0 }}>
            Três armadilhas que travam<br />o valor da IA
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 28 }}>
            {errors.map((e, i) => (
              <div key={e.num} className="anim-fade-left" style={{ display: "flex", alignItems: "center", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 14, overflow: "hidden", animationDelay: `${0.4 + i * 0.15}s` }}>
                <div style={{ width: 5, alignSelf: "stretch", background: "hsl(38,92%,50%)", flexShrink: 0 }} />
                <div style={{ display: "flex", alignItems: "center", gap: 28, padding: "24px 32px", flex: 1 }}>
                  <span className="anim-count-up" style={{ fontSize: 44, fontWeight: 900, color: "hsl(270,80%,65%)", minWidth: 64, lineHeight: 1, animationDelay: `${0.6 + i * 0.15}s` }}>{e.num}</span>
                  <div>
                    <h3 style={{ fontSize: 24, fontWeight: 700, color: "white", margin: 0 }}>{e.title}</h3>
                    <p style={{ fontSize: 20, color: "rgba(255,255,255,0.6)", margin: "8px 0 0", lineHeight: 1.5 }}>{e.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="anim-fade-up delay-900" style={{ background: "linear-gradient(90deg, hsl(270,80%,18%), hsl(280,70%,24%))", borderRadius: 14, padding: "20px 32px" }}>
            <p style={{ fontSize: 22, fontStyle: "italic", color: "white", margin: 0 }}>"Complexidade cedo demais trava o valor."</p>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
