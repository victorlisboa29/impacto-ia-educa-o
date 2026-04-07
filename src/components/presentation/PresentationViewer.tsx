import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, Maximize, Minimize, Grid } from "lucide-react";

import Slide01 from "./slides/Slide01";
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

const slides = [Slide01, Slide02, Slide03, Slide04, Slide05, Slide06, Slide07, Slide08, Slide09, Slide10, Slide11, Slide12];

export default function PresentationViewer() {
  const [current, setCurrent] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showGrid, setShowGrid] = useState(false);
  const [scale, setScale] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const SLIDE_W = 1920;
  const SLIDE_H = 1080;

  const updateScale = useCallback(() => {
    if (!containerRef.current) return;
    const { clientWidth: cw, clientHeight: ch } = containerRef.current;
    setScale(Math.min(cw / SLIDE_W, ch / SLIDE_H));
  }, []);

  useEffect(() => {
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, [updateScale, isFullscreen, showGrid]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (showGrid) {
        if (e.key === "Escape" || e.key === "g") setShowGrid(false);
        return;
      }
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        setCurrent((c) => Math.min(c + 1, slides.length - 1));
      }
      if (e.key === "ArrowLeft") setCurrent((c) => Math.max(c - 1, 0));
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

  useEffect(() => {
    const onChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

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
              onClick={() => { setCurrent(i); setShowGrid(false); }}
              className={`relative aspect-video rounded-lg overflow-hidden border-2 transition-all hover:scale-[1.02] ${
                i === current ? "border-primary shadow-lg shadow-primary/20" : "border-border hover:border-muted-foreground"
              }`}
            >
              <div className="absolute inset-0" style={{ transform: `scale(${1})`, transformOrigin: "top left" }}>
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
    <div ref={wrapperRef} className="flex flex-col h-screen bg-background">
      {/* Toolbar */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-card/50 backdrop-blur-sm">
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
            {isFullscreen ? <Minimize size={16} /> : <Maximize size={16} />}
          </button>
        </div>
      </div>

      {/* Slide area */}
      <div ref={containerRef} className="flex-1 relative flex items-center justify-center overflow-hidden">
        <div
          className="absolute rounded-lg overflow-hidden shadow-2xl shadow-black/50"
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

        {/* Nav buttons */}
        <button
          onClick={() => setCurrent((c) => Math.max(c - 1, 0))}
          disabled={current === 0}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-card/60 backdrop-blur text-foreground hover:bg-card disabled:opacity-20 transition-all"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => setCurrent((c) => Math.min(c + 1, slides.length - 1))}
          disabled={current === slides.length - 1}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-card/60 backdrop-blur text-foreground hover:bg-card disabled:opacity-20 transition-all"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Progress bar */}
      <div className="h-1 bg-secondary">
        <div
          className="h-full bg-primary transition-all duration-300"
          style={{ width: `${((current + 1) / slides.length) * 100}%` }}
        />
      </div>
    </div>
  );
}
