import SlideLayout from "../SlideLayout";

export default function Slide11() {
  return (
    <SlideLayout>
      {/* Large dramatic glow — center */}
      <div className="absolute animate-glow-breathe" style={{
        top: "50%", left: "50%", transform: "translate(-50%, -50%)",
        width: "60%", height: "80%",
        background: "radial-gradient(ellipse, hsl(270,80%,25%) 0%, transparent 65%)",
        borderRadius: "50%", opacity: 0.4,
      }} />
      <div className="absolute animate-glow-breathe" style={{
        top: "50%", left: "50%", transform: "translate(-50%, -50%)",
        width: "40%", height: "60%",
        background: "radial-gradient(ellipse, hsl(300,80%,20%) 0%, transparent 65%)",
        borderRadius: "50%", opacity: 0.3, animationDelay: "1.5s",
      }} />

      {/* Decorative rings */}
      <div className="absolute animate-spin-slow" style={{
        top: "50%", left: "50%", transform: "translate(-50%, -50%)",
        width: "70%", height: "90%",
        border: "1px solid rgba(200,100,255,0.06)", borderRadius: "50%",
      }} />
      <div className="absolute animate-spin-reverse" style={{
        top: "50%", left: "50%", transform: "translate(-50%, -50%)",
        width: "55%", height: "75%",
        border: "1px solid rgba(200,100,255,0.04)", borderRadius: "50%",
      }} />

      {/* Floating particles */}
      {[
        { top: "15%", left: "10%", delay: "0s" },
        { top: "75%", left: "85%", delay: "1s" },
        { top: "20%", left: "80%", delay: "2s" },
        { top: "80%", left: "15%", delay: "0.5s" },
      ].map((p, i) => (
        <div key={i} className="absolute animate-float-slow" style={{
          top: p.top, left: p.left,
          width: "0.5%", height: "0.9%",
          background: "hsl(300,80%,65%)",
          borderRadius: "50%", opacity: 0.4,
          animationDelay: p.delay,
        }} />
      ))}

      <div className="relative z-10" style={{
        height: "100%", display: "flex", alignItems: "center",
        justifyContent: "center", padding: "0 8%",
      }}>
        <div style={{ width: "100%", textAlign: "center" }}>

          <p className="anim-fade-down delay-100" style={{
            fontSize: "clamp(11px, 1vw, 18px)", fontWeight: 700,
            letterSpacing: "0.3em", color: "hsl(280,100%,82%)",
            textTransform: "uppercase", marginBottom: "3%", marginTop: 0,
          }}>Mensagem Final</p>

          {/* Main statement */}
          <h2 className="anim-blur-in delay-300" style={{
            fontSize: "clamp(32px, 4.5vw, 86px)", fontWeight: 900,
            lineHeight: 1, color: "white", margin: 0, letterSpacing: "-1px",
          }}>
            IA não é sobre
          </h2>
          <h2 className="anim-blur-in delay-400" style={{
            fontSize: "clamp(32px, 4.5vw, 86px)", fontWeight: 900,
            lineHeight: 1, color: "rgba(255,255,255,0.4)", margin: "0 0 1.5% 0", letterSpacing: "-1px",
          }}>
            tecnologia.
          </h2>

          {/* Divider */}
          <div className="anim-scale-in delay-600" style={{
            width: "8%", height: 3, margin: "0 auto 2.5%",
            background: "linear-gradient(90deg, transparent, hsl(300,80%,55%), transparent)",
            borderRadius: 2,
          }} />

          {/* Punch line */}
          <p className="anim-blur-in delay-700" style={{
            fontSize: "clamp(28px, 4vw, 76px)", fontWeight: 900,
            lineHeight: 1,
            background: "linear-gradient(90deg, hsl(270,80%,65%), hsl(300,90%,75%), hsl(280,90%,70%))",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            margin: "0 0 3%", letterSpacing: "-1px",
          }}>
            É sobre execução.
          </p>

          {/* Supporting text */}
          <p className="anim-fade-up delay-900" style={{
            fontSize: "clamp(13px, 1.2vw, 22px)", color: "rgba(255,255,255,0.55)",
            lineHeight: 1.7, margin: "0 auto",
            maxWidth: "55%",
          }}>
            A tecnologia já existe e está acessível.<br />
            O que separa quem gera resultado é a capacidade de<br />
            <span style={{ color: "rgba(255,255,255,0.85)", fontWeight: 600 }}>começar pequeno, medir rápido e escalar com confiança.</span>
          </p>

        </div>
      </div>
    </SlideLayout>
  );
}
