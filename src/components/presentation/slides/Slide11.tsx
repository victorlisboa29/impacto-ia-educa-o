import SlideLayout from "../SlideLayout";

export default function Slide11() {
  return (
    <SlideLayout>
      {/* Dramatic center glow */}
      <div className="absolute animate-glow-breathe" style={{
        top: "50%", left: "50%", transform: "translate(-50%, -50%)",
        width: 1100, height: 900,
        background: "radial-gradient(ellipse, hsl(270,80%,25%) 0%, transparent 65%)",
        borderRadius: "50%", opacity: 0.4,
      }} />
      <div className="absolute animate-glow-breathe" style={{
        top: "50%", left: "50%", transform: "translate(-50%, -50%)",
        width: 760, height: 640,
        background: "radial-gradient(ellipse, hsl(300,80%,20%) 0%, transparent 65%)",
        borderRadius: "50%", opacity: 0.3, animationDelay: "1.5s",
      }} />

      {/* Rings */}
      <div className="absolute animate-spin-slow" style={{
        top: "50%", left: "50%", transform: "translate(-50%, -50%)",
        width: 1340, height: 980,
        border: "1px solid rgba(200,100,255,0.06)", borderRadius: "50%",
      }} />
      <div className="absolute animate-spin-reverse" style={{
        top: "50%", left: "50%", transform: "translate(-50%, -50%)",
        width: 1060, height: 800,
        border: "1px solid rgba(200,100,255,0.04)", borderRadius: "50%",
      }} />

      {/* Particles */}
      {[
        { top: 160, left: 190 }, { top: 810, left: 1630 },
        { top: 210, left: 1540 }, { top: 860, left: 290 },
      ].map((p, i) => (
        <div key={i} className="absolute animate-float-slow" style={{
          top: p.top, left: p.left, width: 8, height: 8,
          background: "hsl(300,80%,65%)", borderRadius: "50%", opacity: 0.4,
          animationDelay: `${i * 0.5}s`,
        }} />
      ))}

      <div className="relative z-10" style={{
        height: "100%", display: "flex", alignItems: "center",
        justifyContent: "center", padding: "0 140px",
      }}>
        <div style={{ width: "100%", textAlign: "center" }}>

          <p className="anim-fade-down delay-100" style={{
            fontSize: 16, fontWeight: 700, letterSpacing: "0.3em",
            color: "hsl(280,100%,82%)", textTransform: "uppercase",
            marginBottom: 40, marginTop: 0,
          }}>Mensagem Final</p>

          <h2 className="anim-blur-in delay-300" style={{
            fontSize: 86, fontWeight: 900, lineHeight: 1,
            color: "white", margin: 0, letterSpacing: "-1.5px",
          }}>
            IA não é sobre
          </h2>
          <h2 className="anim-blur-in delay-400" style={{
            fontSize: 86, fontWeight: 900, lineHeight: 1,
            color: "rgba(255,255,255,0.35)", margin: "0 0 32px 0", letterSpacing: "-1.5px",
          }}>
            tecnologia.
          </h2>

          <div className="anim-scale-in delay-600" style={{
            width: 100, height: 3, margin: "0 auto 36px",
            background: "linear-gradient(90deg, transparent, hsl(300,80%,55%), transparent)",
            borderRadius: 2,
          }} />

          <p className="anim-blur-in delay-700" style={{
            fontSize: 76, fontWeight: 900, lineHeight: 1,
            background: "linear-gradient(90deg, hsl(270,80%,65%), hsl(300,90%,75%), hsl(280,90%,70%))",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            margin: "0 0 40px", letterSpacing: "-1px",
          }}>
            É sobre execução.
          </p>

          <p className="anim-fade-up delay-900" style={{
            fontSize: 22, color: "rgba(255,255,255,0.52)",
            lineHeight: 1.7, margin: "0 auto", maxWidth: 860,
          }}>
            A tecnologia já existe e está acessível.<br />
            O que separa quem gera resultado é a capacidade de{" "}
            <span style={{ color: "rgba(255,255,255,0.85)", fontWeight: 600 }}>
              começar pequeno, medir rápido e escalar com confiança.
            </span>
          </p>

        </div>
      </div>
    </SlideLayout>
  );
}
