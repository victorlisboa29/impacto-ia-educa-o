import SlideLayout from "../SlideLayout";

export default function Slide11() {
  return (
    <SlideLayout>
      <div style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center", padding: "0 80px" }}>
        <div style={{ width: "100%", maxWidth: 1600 }}>

          <p style={{ fontSize: 15, fontWeight: 700, letterSpacing: "0.2em", color: "hsl(280,100%,82%)", textTransform: "uppercase", marginBottom: 20 }}>Mensagem Final</p>

          <h2 style={{ fontSize: 72, fontWeight: 900, lineHeight: 0.95, color: "white", margin: 0, letterSpacing: "-1px" }}>
            IA não é sobre<br />tecnologia.
          </h2>

          <div style={{ width: 80, height: 3, background: "linear-gradient(90deg, hsl(300,80%,55%), hsl(270,80%,55%))", borderRadius: 2, margin: "24px 0" }} />

          <p style={{ fontSize: 64, fontWeight: 900, color: "hsl(300,90%,75%)", lineHeight: 0.95, margin: "0 0 24px", letterSpacing: "-1px" }}>
            É sobre execução.
          </p>

          <p style={{ fontSize: 20, color: "rgba(255,255,255,0.7)", lineHeight: 1.6, margin: 0, maxWidth: 800 }}>
            A tecnologia já existe. O que separa quem gera resultado é a capacidade de começar, medir e escalar.
          </p>

        </div>
      </div>
    </SlideLayout>
  );
}
