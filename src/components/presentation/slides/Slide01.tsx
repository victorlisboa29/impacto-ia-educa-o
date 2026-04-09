import SlideLayout from "../SlideLayout";

export default function Slide01() {
  return (
    <SlideLayout>
      {/* ── Animated decorative elements ── */}

      {/* Large rotating ring - top right */}
      <div
        className="absolute animate-spin-slow"
        style={{
          top: -80, right: -60, width: 500, height: 500,
          border: "1px solid rgba(200,100,255,0.08)",
          borderRadius: "50%",
        }}
      />
      <div
        className="absolute animate-spin-reverse"
        style={{
          top: -40, right: -20, width: 420, height: 420,
          border: "1px solid rgba(200,100,255,0.06)",
          borderRadius: "50%",
        }}
      />

      {/* Floating geometric shapes */}
      <div className="absolute animate-float-slow" style={{
        top: 120, left: 100, width: 60, height: 60,
        border: "1px solid rgba(200,100,255,0.12)",
        borderRadius: 12, transform: "rotate(45deg)",
      }} />
      <div className="absolute animate-float-medium" style={{
        bottom: 180, right: 180, width: 40, height: 40,
        background: "rgba(200,100,255,0.06)",
        borderRadius: 8, transform: "rotate(12deg)",
      }} />
      <div className="absolute animate-float-fast" style={{
        top: 200, right: 300, width: 8, height: 8,
        background: "hsl(300,80%,60%)",
        borderRadius: "50%", opacity: 0.4,
      }} />
      <div className="absolute animate-float-slow" style={{
        bottom: 250, left: 250, width: 6, height: 6,
        background: "hsl(270,80%,65%)",
        borderRadius: "50%", opacity: 0.5,
        animationDelay: "2s",
      }} />

      {/* Glowing orbs */}
      <div className="absolute animate-glow-breathe" style={{
        top: "15%", right: "10%", width: 300, height: 300,
        background: "radial-gradient(circle, hsl(270,80%,50%) 0%, transparent 70%)",
        borderRadius: "50%",
      }} />
      <div className="absolute animate-glow-breathe" style={{
        bottom: "10%", left: "5%", width: 250, height: 250,
        background: "radial-gradient(circle, hsl(300,80%,45%) 0%, transparent 70%)",
        borderRadius: "50%",
        animationDelay: "2s",
      }} />

      {/* ── Content ── */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-16 gap-8">

        {/* Badge — animated entry */}
        <div className="anim-fade-down delay-200" style={{
          border: "1px solid rgba(255,255,255,0.15)",
          borderRadius: 100, padding: "8px 28px",
          fontSize: 18, color: "rgba(255,255,255,0.7)",
          letterSpacing: "0.08em",
          backdropFilter: "blur(10px)",
          background: "rgba(255,255,255,0.03)",
        }}>
          Nuage · IA na Educação
        </div>

        {/* Main title — staggered entry */}
        <h1 style={{ fontSize: 80, fontWeight: 900, lineHeight: 1, letterSpacing: "-1px" }}>
          <span className="anim-blur-in delay-300" style={{ display: "block", color: "white" }}>
            IA generativa na educação:
          </span>
          <span className="anim-blur-in delay-500" style={{
            display: "block",
            background: "linear-gradient(90deg, hsl(270,80%,65%), hsl(300,80%,60%), hsl(280,90%,70%))",
            backgroundClip: "text", WebkitBackgroundClip: "text",
            color: "transparent", WebkitTextFillColor: "transparent",
          }}>
            por onde começar para
          </span>
          <span className="anim-blur-in delay-700" style={{
            display: "block",
            background: "linear-gradient(90deg, hsl(300,80%,55%), hsl(270,80%,65%), hsl(300,80%,60%))",
            backgroundClip: "text", WebkitBackgroundClip: "text",
            color: "transparent", WebkitTextFillColor: "transparent",
          }}>
            gerar impacto real
          </span>
        </h1>

        {/* Animated divider line */}
        <div className="anim-scale-in delay-900" style={{
          width: 120, height: 2,
          background: "linear-gradient(90deg, transparent, hsl(300,80%,55%), transparent)",
          borderRadius: 1,
        }} />

        {/* Logos — slide up */}
        <div className="anim-fade-up delay-1000" style={{
          display: "flex", alignItems: "center", gap: 40, opacity: 0.8,
        }}>
          <span style={{ color: "white", fontSize: 22, fontWeight: 300, letterSpacing: "0.3em" }}>N U A G E</span>
          <div style={{ width: 1, height: 32, background: "rgba(255,255,255,0.2)" }} />
          <span style={{ color: "white", fontSize: 22, fontWeight: 300, letterSpacing: "0.15em" }}>aws</span>
        </div>
      </div>
    </SlideLayout>
  );
}
