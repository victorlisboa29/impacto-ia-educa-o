import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Grid2X2, Maximize2, Minimize2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { slides } from "@/components/slides";

const W = 1920;
const H = 1080;

export const PresentationViewer = () => {
  const [current, setCurrent] = useState(0);
  const [scale, setScale] = useState(1);
  const [overview, setOverview] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [chromeVisible, setChromeVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const hideTimer = useRef<number>();

  const total = slides.length;

  const go = useCallback(
    (dir: number) => setCurrent((c) => Math.min(total - 1, Math.max(0, c + dir))),
    [total],
  );

  useLayoutEffect(() => {
    const resize = () => {
      const el = containerRef.current;
      if (!el) return;
      const { width, height } = el.getBoundingClientRect();
      setScale(Math.min(width / W, height / H));
    };
    resize();
    window.addEventListener("resize", resize);
    const ro = new ResizeObserver(resize);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => {
      window.removeEventListener("resize", resize);
      ro.disconnect();
    };
  }, [overview]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (["ArrowRight", "PageDown", " "].includes(e.key)) {
        e.preventDefault();
        overview ? setOverview(false) : go(1);
      } else if (["ArrowLeft", "PageUp"].includes(e.key)) {
        e.preventDefault();
        go(-1);
      } else if (e.key === "Home") setCurrent(0);
      else if (e.key === "End") setCurrent(total - 1);
      else if (e.key.toLowerCase() === "g") setOverview((o) => !o);
      else if (e.key.toLowerCase() === "f") toggleFullscreen();
      else if (e.key === "Escape") setOverview(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, overview, total]);

  useEffect(() => {
    const onFs = () => setIsFullscreen(Boolean(document.fullscreenElement));
    document.addEventListener("fullscreenchange", onFs);
    return () => document.removeEventListener("fullscreenchange", onFs);
  }, []);

  const toggleFullscreen = () => {
    if (document.fullscreenElement) document.exitFullscreen();
    else document.documentElement.requestFullscreen?.();
  };

  const onMouseMove = () => {
    setChromeVisible(true);
    window.clearTimeout(hideTimer.current);
    hideTimer.current = window.setTimeout(() => setChromeVisible(false), 2600);
  };

  const Active = slides[current].component;

  if (overview) {
    return (
      <div className="min-h-screen w-full overflow-y-auto bg-[hsl(var(--nuage-abyss))] p-8">
        <h1 className="mb-6 font-display text-2xl font-bold text-foreground">
          Nuage | Educação · 2026 — {total} slides
        </h1>
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-3 2xl:grid-cols-4">
          {slides.map((s, i) => {
            const Comp = s.component;
            return (
              <button
                key={s.id}
                onClick={() => {
                  setCurrent(i);
                  setOverview(false);
                }}
                className={cn(
                  "group relative aspect-video overflow-hidden rounded-xl border transition",
                  i === current
                    ? "border-[hsl(var(--nuage-magenta))] ring-2 ring-[hsl(var(--nuage-magenta)/0.4)]"
                    : "border-border hover:border-[hsl(var(--nuage-violet))]",
                )}
              >
                <div
                  className="absolute left-0 top-0 origin-top-left"
                  style={{ width: W, height: H, transform: "scale(0.16)" }}
                >
                  <Comp />
                </div>
                <span className="absolute bottom-2 left-2 rounded bg-background/80 px-2 py-1 text-xs font-semibold text-foreground">
                  {String(i + 1).padStart(2, "0")} · {s.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div
      onMouseMove={onMouseMove}
      className="relative flex h-screen w-full flex-col items-center justify-center bg-[hsl(var(--nuage-abyss))]"
    >
      <div ref={containerRef} className="relative h-full w-full">
        <div
          className="absolute left-1/2 top-1/2"
          style={{
            width: W,
            height: H,
            transform: `translate(-50%, -50%) scale(${scale})`,
          }}
        >
          <Active />
        </div>
      </div>

      {/* Navigation chrome */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 transition-opacity duration-300",
          chromeVisible ? "opacity-100" : "opacity-0",
        )}
      >
        <button
          aria-label="Slide anterior"
          onClick={() => go(-1)}
          disabled={current === 0}
          className="pointer-events-auto absolute left-5 top-1/2 -translate-y-1/2 rounded-full border border-border bg-background/60 p-3 text-foreground backdrop-blur transition hover:bg-[hsl(var(--nuage-violet)/0.35)] disabled:opacity-20"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          aria-label="Próximo slide"
          onClick={() => go(1)}
          disabled={current === total - 1}
          className="pointer-events-auto absolute right-5 top-1/2 -translate-y-1/2 rounded-full border border-border bg-background/60 p-3 text-foreground backdrop-blur transition hover:bg-[hsl(var(--nuage-violet)/0.35)] disabled:opacity-20"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        <div className="pointer-events-auto absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-full border border-border bg-background/70 px-4 py-2 backdrop-blur">
          <button
            aria-label="Visão geral"
            onClick={() => setOverview(true)}
            className="rounded-full p-2 text-foreground/80 transition hover:text-foreground"
          >
            <Grid2X2 className="h-5 w-5" />
          </button>
          <span className="font-display text-sm font-semibold tracking-widest text-foreground">
            {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
          <button
            aria-label="Tela cheia"
            onClick={toggleFullscreen}
            className="rounded-full p-2 text-foreground/80 transition hover:text-foreground"
          >
            {isFullscreen ? <Minimize2 className="h-5 w-5" /> : <Maximize2 className="h-5 w-5" />}
          </button>
        </div>

        <div className="absolute bottom-0 left-0 h-[4px] w-full bg-[hsl(var(--nuage-violet)/0.15)]">
          <div
            className="h-full brand-rule transition-all duration-300"
            style={{ width: `${((current + 1) / total) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default PresentationViewer;
