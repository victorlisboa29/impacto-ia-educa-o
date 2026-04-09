import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, Maximize, Minimize, Grid } from "lucide-react";

import Slide01 from "./slides/Slide01";
import SlideNuage from "./slides/SlideNuage";
import SlideOfertas from "./slides/SlideOfertas";
import SlideBeneficios from "./slides/SlideBeneficios";
import Slide02 from "./slides/Slide02";
import Slide03 from "./slides/Slide03";
import Slide04 from "./slides/Slide04";
import Slide05 from "./slides/Slide05";
import Slide06 from "./slides/Slide06";
import Slide07 from "./slides/Slide07";
import Slide08 from "./slides/Slide08";
import Slide09 from "./slides/Slide09";
import Slide10 from "./slides/Slide10";
import Slide11 from "./slides/Slide11";
import Slide12 from "./slides/Slide12";

const slides = [Slide01, SlideNuage, SlideOfertas, SlideBeneficios, Slide02, Slide03, Slide04, Slide05, Slide06, Slide07, Slide08, Slide09, Slide10, Slide11, Slide12];

const SLIDE_W = 1920;
const SLIDE_H = 1080;

export default function PresentationViewer() {
  const [current, setCurrent] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showGrid, setShowGrid] = useState(false);
  const [scale, setScale] = useState(1);
  const [direction, setDirection] = useState<"right" | "left">("right");
  const [animKey, setAnimKey] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const updateScale = useCallback(() => {
    if (!containerRef.current) return;
    const { clientWidth: cw, clientHeight: ch } = containerRef.current;
    setScale(Math.min(cw / SLIDE_W, ch / SLIDE_H));
  }, []);

  // Use ResizeObserver for more reliable scaling
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => updateScale());
    ro.observe(el);
    updateScale();
    return () => ro.disconnect();
  }, [updateScale, showGrid]);

  // Recalculate scale after fullscreen transitions
  useEffect(() => {
    const onChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
      // Delay to let browser finish layout
      setTimeout(updateScale, 100);
      setTimeout(updateScale, 300);
    };
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, [updateScale]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (showGrid) {
        if (e.key === "Escape" || e.key === "g") setShowGrid(false);
        return;
      }
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        goNext();
      }
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "Escape" && isFullscreen) {
        document.exitFullscreen?.();
      }
      if (e.key === "f" || e.key === "F5") {
        e.preventDefault();
        toggleFullscreen();
      }
      if (e.key === "g") setShowGrid(true);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isFullscreen, showGrid]);

  const goNext = () => {
    setDirection("right");
    setAnimKey((k) => k + 1);
    setCurrent((c) => Math.min(c + 1, slides.length - 1));
  };

  const goPrev = () => {
    setDirection("left");
    setAnimKey((k) => k + 1);
    setCurrent((c) => Math.max(c - 1, 0));
  };

  const goTo = (i: number) => {
    setDirection(i > current ? "right" : "left");
    setAnimKey((k) => k + 1);
    setCurrent(i);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      wrapperRef.current?.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  const SlideComponent = slides[current];

  if (showGrid) {
    return (
      <div ref={wrapperRef} className="min-h-screen bg-background p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-foreground text-lg font-semibold">Todos os slides</h2>
          <button onClick={() => setShowGrid(false)} className="text-muted-foreground hover:text-foreground text-sm">
            ← Voltar
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {slides.map((S, i) => (
            <button
              key={i}
              onClick={() => { goTo(i); setShowGrid(false); }}
              className={`relative aspect-video rounded-lg overflow-hidden border-2 transition-all hover:scale-[1.02] ${
                i === current ? "border-primary shadow-lg shadow-primary/20" : "border-border hover:border-muted-foreground"
              }`}
            >
              <div className="absolute inset-0">
                <div style={{ width: SLIDE_W, height: SLIDE_H, transform: `scale(${0.15})`, transformOrigin: "top left" }}>
                  <S />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm px-2 py-1">
                <span className="text-xs text-muted-foreground">{i + 1} / {slides.length}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div ref={wrapperRef} className="flex flex-col h-screen bg-black">
      {/* Toolbar — hidden in fullscreen for max slide area */}
      {!isFullscreen && (
        <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-card/50 backdrop-blur-sm shrink-0">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold tracking-widest text-primary uppercase">Apresentação</span>
            <span className="text-xs text-muted-foreground">
              {current + 1} / {slides.length}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <button onClick={() => setShowGrid(true)} className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors" title="Grade (G)">
              <Grid size={16} />
            </button>
            <button onClick={toggleFullscreen} className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors" title="Tela cheia (F)">
              <Maximize size={16} />
            </button>
          </div>
        </div>
      )}

      {/* Slide area — takes all available space */}
      <div ref={containerRef} className="flex-1 relative flex items-center justify-center overflow-hidden">
        <div
          key={animKey}
          className={`absolute overflow-hidden ${isFullscreen ? "" : "rounded-lg shadow-2xl shadow-black/50"} ${direction === "right" ? "slide-enter-right" : "slide-enter-left"}`}
          style={{
            width: SLIDE_W,
            height: SLIDE_H,
            left: "50%",
            top: "50%",
            marginLeft: -(SLIDE_W / 2),
            marginTop: -(SLIDE_H / 2),
            transform: `scale(${scale})`,
            transformOrigin: "center center",
          }}
        >
          <SlideComponent />
        </div>

        {/* Navigation arrows — scale with viewport, hidden after 3s in fullscreen */}
        <button
          onClick={goPrev}
          disabled={current === 0}
          className={`absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-white/10 backdrop-blur text-white hover:bg-white/20 disabled:opacity-0 transition-all ${isFullscreen ? "opacity-60 hover:opacity-100" : ""}`}
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        <button
          onClick={goNext}
          disabled={current === slides.length - 1}
          className={`absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-white/10 backdrop-blur text-white hover:bg-white/20 disabled:opacity-0 transition-all ${isFullscreen ? "opacity-60 hover:opacity-100" : ""}`}
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* Progress bar */}
      <div className="h-1 bg-white/5 shrink-0">
        <div
          className="h-full bg-primary transition-all duration-300"
          style={{ width: `${((current + 1) / slides.length) * 100}%` }}
        />
      </div>
    </div>
  );
}
