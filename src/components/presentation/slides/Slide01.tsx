import SlideLayout from "../SlideLayout";

// ─── Neural network visual ───────────────────────────────────────────────────
// All coordinates are in the SVG's own coordinate space (viewBox 0 0 860 560)
// The SVG itself is sized via % of the slide (1920×1080), so it scales perfectly.

function NeuralNode({
  cx, cy, r = 4, delay = 0, color = "hsl(270,80%,65%)",
}: { cx: number; cy: number; r?: number; delay?: number; color?: string }) {
  return (
    <circle
      cx={cx} cy={cy} r={r} fill={color} opacity={0.75}
      style={{ animation: "glow-breathe 3s ease-in-out infinite", animationDelay: `${delay}s` }}
    />
  );
}

const nodes = [
  { cx: 80,  cy: 80,  r: 6, color: "hsl(270,80%,70%)", delay: 0   },
  { cx: 220, cy: 40,  r: 4, color: "hsl(300,80%,65%)", delay: 0.4 },
  { cx: 360, cy: 120, r: 7, color: "hsl(280,90%,72%)", delay: 0.8 },
  { cx: 160, cy: 200, r: 5, color: "hsl(270,80%,65%)", delay: 1.2 },
  { cx: 300, cy: 260, r: 4, color: "hsl(300,80%,60%)", delay: 0.6 },
  { cx: 440, cy: 180, r: 6, color: "hsl(270,80%,70%)", delay: 1.0 },
  { cx: 120, cy: 320, r: 3, color: "hsl(280,90%,72%)", delay: 1.4 },
  { cx: 260, cy: 380, r: 5, color: "hsl(300,80%,65%)", delay: 0.2 },
  { cx: 400, cy: 340, r: 4, color: "hsl(270,80%,65%)", delay: 1.6 },
  { cx: 500, cy: 260, r: 3, color: "hsl(300,80%,60%)", delay: 0.9 },
  { cx: 180, cy: 460, r: 4, color: "hsl(270,80%,70%)", delay: 1.8 },
  { cx: 340, cy: 500, r: 6, color: "hsl(280,90%,72%)", delay: 0.3 },
  { cx: 480, cy: 440, r: 3, color: "hsl(300,80%,65%)", delay: 1.1 },
  { cx: 560, cy: 360, r: 5, color: "hsl(270,80%,70%)", delay: 0.7 },
  { cx: 600, cy: 180, r: 4, color: "hsl(300,80%,60%)", delay: 1.3 },
  { cx: 640, cy: 480, r: 3, color: "hsl(280,90%,72%)", delay: 0.5 },
  { cx: 700, cy: 300, r: 5, color: "hsl(270,80%,65%)", delay: 1.9 },
  { cx: 760, cy: 120, r: 4, color: "hsl(300,80%,65%)", delay: 0.2 },
  { cx: 800, cy: 420, r: 6, color: "hsl(280,90%,72%)", delay: 1.5 },
  { cx: 840, cy: 220, r: 3, color: "hsl(270,80%,70%)", delay: 0.9 },
];

const edges = [
  [0,1],[1,2],[0,3],[2,5],[3,4],[4,5],[3,6],[4,7],[5,9],
  [6,7],[7,8],[8,9],[6,10],[7,11],[8,12],[10,11],[11,12],
  [9,13],[12,13],[5,14],[14,16],[13,16],[16,17],[16,18],
  [18,19],[17,19],[11,15],[15,18],[14,17],
];

// ─── Slide ───────────────────────────────────────────────────────────────────
// All sizes in px, designed for 1920×1080.
// PresentationViewer applies CSS scale() → everything scales proportionally.

export default function Slide01() {
  return (
    <SlideLayout>

      {/* ── Decorative spinning rings ── */}
      <div className="absolute animate-spin-slow" style={{
        top: -60, right: -50,
        width: 520, height: 520,
        border: "1px solid rgba(200,100,255,0.08)",
        borderRadius: "50%",
      }} />
      <div className="absolute animate-spin-reverse" style={{
        top: -20, right: -10,
        width: 420, height: 420,
        border: "1px solid rgba(200,100,255,0.05)",
        borderRadius: "50%",
      }} />

      {/* ── Floating diamond particles ── */}
      {[
        { top: 120, left: 90,  w: 52, h: 52, delay: "0s"   },
        { top: 680, left: 60,  w: 36, h: 36, delay: "1.2s" },
        { top: 860, left: 920, w: 28, h: 28, delay: "2.1s" },
      ].map((p, i) => (
        <div key={i} className="absolute animate-float-slow" style={{
          top: p.top, left: p.left, width: p.w, height: p.h,
          border: "1px solid rgba(200,100,255,0.14)",
          borderRadius: 10, transform: "rotate(45deg)",
          animationDelay: p.delay,
        }} />
      ))}

      {/* ── Ambient glow orbs ── */}
      <div className="absolute animate-glow-breathe" style={{
        top: 80, right: 120,
        width: 380, height: 380,
        background: "radial-gradient(circle, hsl(270,80%,50%) 0%, transparent 70%)",
        borderRadius: "50%",
      }} />
      <div className="absolute animate-glow-breathe" style={{
        bottom: 60, left: 60,
        width: 280, height: 280,
        background: "radial-gradient(circle, hsl(300,80%,45%) 0%, transparent 70%)",
        borderRadius: "50%", animationDelay: "2s",
      }} />

      {/* ── Neural network — right half ── */}
      <div
        className="absolute anim-fade-right delay-600"
        style={{
          right: 0, top: "50%", transform: "translateY(-50%)",
          width: 900, height: 900,
          opacity: 0.16, pointerEvents: "none",
        }}
      >
        <svg viewBox="0 0 860 560" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          {edges.map(([a, b], i) => (
            <line key={i}
              x1={nodes[a].cx} y1={nodes[a].cy}
              x2={nodes[b].cx} y2={nodes[b].cy}
              stroke="hsl(280,80%,70%)" strokeWidth="1.2" opacity={0.45}
              style={{
                animation: `glow-breathe ${3 + (i % 3)}s ease-in-out infinite`,
                animationDelay: `${i * 0.12}s`,
              }}
            />
          ))}
          {nodes.map((n, i) => <NeuralNode key={i} {...n} />)}
          {[nodes[2], nodes[7], nodes[11], nodes[16]].map((n, i) => (
            <circle key={`ring-${i}`}
              cx={n.cx} cy={n.cy} r={n.r + 10}
              fill="none" stroke="hsl(300,80%,65%)" strokeWidth="1"
              opacity={0.35}
              style={{ animation: "pulse-ring 2.5s ease-in-out infinite", animationDelay: `${i * 0.7}s` }}
            />
          ))}
        </svg>
      </div>

      {/* ── Main content — left column ── */}
      <div
        className="relative z-10 h-full flex flex-col justify-center"
        style={{ padding: "0 120px", maxWidth: 1060 }}
      >

        {/* Badge */}
        <div
          className="anim-fade-down delay-200"
          style={{
            display: "inline-flex", alignSelf: "flex-start",
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: 100, padding: "10px 28px",
            fontSize: 16, color: "rgba(255,255,255,0.7)",
            letterSpacing: "0.1em",
            backdropFilter: "blur(10px)",
            background: "rgba(255,255,255,0.04)",
            marginBottom: 40,
          }}
        >
          ✦ &nbsp; Nuage · IA na Educação &nbsp; ✦
        </div>

        {/* Main title — 72px designed for 1920px canvas */}
        <h1 style={{
          fontSize: 72, fontWeight: 900, lineHeight: 1.06,
          letterSpacing: "-1.5px", margin: "0 0 36px 0",
        }}>
          <span className="anim-blur-in delay-300" style={{ display: "block", color: "white" }}>
            IA generativa
          </span>
          <span className="anim-blur-in delay-300" style={{ display: "block", color: "white" }}>
            na educação:
          </span>
          <span className="anim-blur-in delay-500" style={{
            display: "block",
            background: "linear-gradient(90deg, hsl(270,80%,65%), hsl(300,80%,60%), hsl(280,90%,70%))",
            backgroundClip: "text", WebkitBackgroundClip: "text",
            color: "transparent", WebkitTextFillColor: "transparent",
          }}>
            por onde começar
          </span>
          <span className="anim-blur-in delay-700" style={{
            display: "block",
            background: "linear-gradient(90deg, hsl(300,80%,55%), hsl(270,80%,65%))",
            backgroundClip: "text", WebkitBackgroundClip: "text",
            color: "transparent", WebkitTextFillColor: "transparent",
          }}>
            para gerar impacto real
          </span>
        </h1>

        {/* Accent divider */}
        <div className="anim-scale-in delay-900" style={{
          width: 100, height: 3,
          background: "linear-gradient(90deg, hsl(300,80%,55%), transparent)",
          borderRadius: 2, marginBottom: 32,
        }} />

        {/* Subtitle */}
        <p className="anim-fade-up delay-800" style={{
          fontSize: 20, color: "rgba(255,255,255,0.52)",
          lineHeight: 1.65, margin: "0 0 48px 0",
        }}>
          Como instituições de ensino estão usando IA generativa<br />
          para reduzir evasão, aumentar captação e escalar operações.
        </p>

        {/* Logo badges */}
        <div className="anim-fade-up delay-1000" style={{
          display: "flex", alignItems: "center", gap: 20,
        }}>
          <div style={{
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 10, padding: "10px 22px",
            background: "rgba(255,255,255,0.04)",
          }}>
            <span style={{ color: "white", fontSize: 18, fontWeight: 700, letterSpacing: "0.28em" }}>
              N U A G E
            </span>
          </div>
          <div style={{ width: 1, height: 32, background: "rgba(255,255,255,0.15)" }} />
          <div style={{
            border: "1px solid rgba(255,165,0,0.3)",
            borderRadius: 10, padding: "10px 22px",
            background: "rgba(255,153,0,0.06)",
          }}>
            <span style={{ color: "#FF9900", fontSize: 18, fontWeight: 900, letterSpacing: "0.12em" }}>
              aws
            </span>
          </div>
        </div>

      </div>
    </SlideLayout>
  );
}
