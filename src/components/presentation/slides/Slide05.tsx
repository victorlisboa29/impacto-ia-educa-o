import SlideLayout from "../SlideLayout";

export default function Slide05() {
  return (
    <SlideLayout>
      {/* Decorative animated elements */}
      <div className="absolute animate-spin-slow" style={{ top: "20%", right: "8%", width: 300, height: 300, border: "1px solid rgba(200,100,255,0.07)", borderRadius: "50%" }} />
      <div className="absolute animate-spin-reverse" style={{ top: "25%", right: "11%", width: 220, height: 220, border: "1px solid rgba(200,100,255,0.05)", borderRadius: "50%" }} />
      <div className="absolute animate-glow-breathe" style={{ bottom: "15%", right: "15%", width: 200, height: 200, background: "radial-gradient(circle, hsl(300,80%,40%) 0%, transparent 70%)", borderRadius: "50%" }} />

      <div className="relative z-10" style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center", padding: "0 100px" }}>
        <div style={{ width: "100%", maxWidth: 1600 }}>
          <p className="anim-fade-down delay-200" style={{ fontSize: 20, fontWeight: 700, letterSpacing: "0.2em", color: "hsl(280,100%,82%)", textTransform: "uppercase", marginBottom: 20 }}>Framework</p>
          <h2 className="anim-blur-in delay-400" style={{ fontSize: 84, fontWeight: 900, lineHeight: 0.95, color: "white", margin: 0, letterSpacing: "-1px" }}>
            O que funciona<br />na prática
          </h2>
          <div className="anim-scale-in delay-600" style={{ width: 100, height: 4, background: "linear-gradient(90deg, hsl(300,80%,55%), hsl(270,80%,55%))", borderRadius: 2, margin: "36px 0" }} />
          <p className="anim-fade-up delay-700" style={{ fontSize: 28, color: "hsl(280,100%,82%)", lineHeight: 1.5, margin: 0 }}>
            Um framework simples para gerar resultado<br />com IA generativa na educação
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}
