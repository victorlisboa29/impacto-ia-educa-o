import SlideLayout from "../SlideLayout";

export default function Slide05() {
  return (
    <SlideLayout>
      <div style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center", padding: "0 80px" }}>
        <div style={{ width: "100%", maxWidth: 1600 }}>

          <p style={{ fontSize: 15, fontWeight: 700, letterSpacing: "0.2em", color: "hsl(280,100%,82%)", textTransform: "uppercase", marginBottom: 16 }}>Framework</p>

          <h2 style={{ fontSize: 72, fontWeight: 900, lineHeight: 0.95, color: "white", margin: 0, letterSpacing: "-1px" }}>
            O que funciona<br />na prática
          </h2>

          <div style={{ width: 80, height: 3, background: "linear-gradient(90deg, hsl(300,80%,55%), hsl(270,80%,55%))", borderRadius: 2, margin: "28px 0" }} />

          <p style={{ fontSize: 24, color: "hsl(280,100%,82%)", lineHeight: 1.5, margin: 0 }}>
            Um framework simples para gerar resultado<br />com IA generativa na educação
          </p>

        </div>
      </div>
    </SlideLayout>
  );
}
