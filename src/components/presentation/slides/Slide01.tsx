import SlideLayout from "../SlideLayout";

// Animated neural network nodes for the right side visual
function NeuralNode({ cx, cy, r = 4, delay = 0, color = "hsl(270,80%,65%)" }: { cx: number; cy: number; r?: number; delay?: number; color?: string }) {
  return (
    <circle cx={cx} cy={cy} r={r} fill={color} opacity={0.7}
      style={{ animation: `glow-breathe 3s ease-in-out infinite`, animationDelay: `${delay}s` }} />
  );
}

const nodes = [
  { cx: 420, cy: 120, r: 6, color: "hsl(270,80%,70%)", delay: 0 },
  { cx: 560, cy: 80, r: 4, color: "hsl(300,80%,65%)", delay: 0.4 },
  { cx: 680, cy: 160, r: 7, color: "hsl(280,90%,72%)", delay: 0.8 },
  { cx: 500, cy: 240, r: 5, color: "hsl(270,80%,65%)", delay: 1.2 },
  { cx: 640, cy: 300, r: 4, color: "hsl(300,80%,60%)", delay: 0.6 },
  { cx: 760, cy: 220, r: 6, color: "hsl(270,80%,70%)", delay: 1.0 },
  { cx: 460, cy: 360, r: 3, color: "hsl(280,90%,72%)", delay: 1.4 },
  { cx: 600, cy: 420, r: 5, color: "hsl(300,80%,65%)", delay: 0.2 },
  { cx: 720, cy: 380, r: 4, color: "hsl(270,80%,65%)", delay: 1.6 },
  { cx: 800, cy: 320, r: 3, color: "hsl(300,80%,60%)", delay: 0.9 },
  { cx: 540, cy: 480, r: 4, color: "hsl(270,80%,70%)", delay: 1.8 },
  { cx: 680, cy: 500, r: 6, color: "hsl(280,90%,72%)", delay: 0.3 },
  { cx: 820, cy: 460, r: 3, color: "hsl(300,80%,65%)", delay: 1.1 },
];

const edges = [
  [0, 1], [1, 2], [0, 3], [2, 5], [3, 4], [4, 5],
  [3, 6], [4, 7], [5, 9], [6, 7], [7, 8], [8, 9],
  [6, 10], [7, 11], [8, 12], [10, 11], [11, 12],
];

export default function Slide01() {
  return (
    <SlideLayout>
      {/* ── Background decorative rings ── */}
      <div className="absolute animate-spin-slow" style={{
        top: "-4%", right: "-3%", width: "26%", height: "46%",
        border: "1px solid rgba(200,100,255,0.08)", borderRadius: "50%",
      }} />
      <div className="absolute animate-spin-reverse" style={{
        top: "-2%", right: "-1%", width: "22%", height: "39%",
        border: "1px solid rgba(200,100,255,0.06)", borderRadius: "50%",
      }} />

      {/* Floating particles */}
      {[
        { top: "11%", left: "5%", w: "3%", h: "5.5%", delay: "0s" },
        { top: "65%", left: "3%", w: "2%", h: "3.5%", delay: "1s" },
        { top: "80%", left: "48%", w: "1.5%", h: "2.8%", delay: "2s" },
      ].map((p, i) => (
        <div key={i} className="absolute animate-float-slow" style={{
          top: p.top, left: p.left, width: p.w, height: p.h,
          border: "1px solid rgba(200,100,255,0.12)",
          borderRadius: "12px", transform: "rotate(45deg)", animationDelay: p.delay,
        }} />
      ))}

      {/* Glowing orbs */}
      <div className="absolute animate-glow-breathe" style={{
        top: "10%", right: "8%", width: "18%", height: "32%",
        background: "radial-gradient(circle, hsl(270,80%,50%) 0%, transparent 70%)",
        borderRadius: "50%",
      }} />
      <div className="absolute animate-glow-breathe" style={{
        bottom: "8%", left: "4%", width: "14%", height: "25%",
        background: "radial-gradient(circle, hsl(300,80%,45%) 0%, transparent 70%)",
        borderRadius: "50%", animationDelay: "2s",
      }} />

      {/* ── Neural network SVG — right side visual ── */}
      <div className="absolute anim-fade-right delay-600" style={{
        right: "2%", top: "50%", transform: "translateY(-50%)",
        width: "42%", height: "80%", opacity: 0.18,
        pointerEvents: "none",
      }}>
        <svg viewBox="380 60 480 480" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          {/* Edges */}
          {edges.map(([a, b], i) => (
            <line key={i}
              x1={nodes[a].cx} y1={nodes[a].cy}
              x2={nodes[b].cx} y2={nodes[b].cy}
              stroke="hsl(280,80%,70%)" strokeWidth="1"
              opacity={0.5}
              style={{ animation: `glow-breathe ${3 + (i % 3)}s ease-in-out infinite`, animationDelay: `${i * 0.15}s` }}
            />
          ))}
          {/* Nodes */}
          {nodes.map((n, i) => (
            <NeuralNode key={i} {...n} />
          ))}
          {/* Pulse rings on key nodes */}
          {[nodes[2], nodes[7], nodes[11]].map((n, i) => (
            <circle key={`ring-${i}`} cx={n.cx} cy={n.cy} r={n.r + 8}
              fill="none" stroke="hsl(300,80%,65%)" strokeWidth="1"
              opacity={0.4}
              style={{ animation: `pulse-ring 2.5s ease-in-out infinite`, animationDelay: `${i * 0.8}s` }}
            />
          ))}
        </svg>
      </div>

      {/* ── Content — left aligned for visual balance ── */}
      <div className="relative z-10 h-full flex flex-col justify-center" style={{ padding: "0 8%", maxWidth: "62%" }}>

        {/* Badge */}
        <div className="anim-fade-down delay-200" style={{
          display: "inline-flex", alignSelf: "flex-start",
          border: "1px solid rgba(255,255,255,0.15)",
          borderRadius: 100, padding: "0.5% 1.8%",
          fontSize: "clamp(11px, 1vw, 18px)",
          color: "rgba(255,255,255,0.7)",
          letterSpacing: "0.1em",
          backdropFilter: "blur(10px)",
          background: "rgba(255,255,255,0.04)",
          marginBottom: "3%",
        }}>
          ✦ &nbsp; Nuage · IA na Educação &nbsp; ✦
        </div>

        {/* Main title */}
        <h1 style={{ fontSize: "clamp(28px, 4vw, 76px)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-1px", margin: "0 0 3% 0", textAlign: "left" }}>
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

        {/* Divider */}
        <div className="anim-scale-in delay-900" style={{
          width: "12%", height: 3,
          background: "linear-gradient(90deg, hsl(300,80%,55%), transparent)",
          borderRadius: 2, marginBottom: "3%",
        }} />

        {/* Subtitle */}
        <p className="anim-fade-up delay-800" style={{
          fontSize: "clamp(12px, 1.1vw, 20px)",
          color: "rgba(255,255,255,0.55)",
          lineHeight: 1.6, margin: "0 0 4% 0",
        }}>
          Como instituições de ensino estão usando IA generativa<br />
          para reduzir evasão, aumentar captação e escalar operações.
        </p>

        {/* Logos */}
        <div className="anim-fade-up delay-1000" style={{
          display: "flex", alignItems: "center", gap: "3%",
        }}>
          <div style={{
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 8, padding: "0.6% 1.4%",
            background: "rgba(255,255,255,0.04)",
          }}>
            <span style={{ color: "white", fontSize: "clamp(11px, 1.1vw, 20px)", fontWeight: 700, letterSpacing: "0.25em" }}>N U A G E</span>
          </div>
          <div style={{ width: 1, height: "2.5vh", background: "rgba(255,255,255,0.15)" }} />
          <div style={{
            border: "1px solid rgba(255,165,0,0.3)",
            borderRadius: 8, padding: "0.6% 1.4%",
            background: "rgba(255,153,0,0.06)",
          }}>
            <span style={{ color: "#FF9900", fontSize: "clamp(11px, 1.1vw, 20px)", fontWeight: 900, letterSpacing: "0.1em" }}>aws</span>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
