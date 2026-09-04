import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SlideLayoutProps {
  children: ReactNode;
  /** Optional eyebrow shown above the title */
  eyebrow?: string;
  title?: ReactNode;
  /** Short single conclusion line placed under the title */
  lead?: string;
  index?: number;
  total?: number;
  variant?: "default" | "hero";
  className?: string;
}

export const SlideLayout = ({
  children,
  eyebrow,
  title,
  lead,
  index,
  total,
  variant = "default",
  className,
}: SlideLayoutProps) => {
  return (
    <section
      className={cn(
        "relative flex h-full w-full flex-col overflow-hidden stage-bg text-foreground",
        variant === "hero" ? "px-[140px] py-[110px]" : "px-[100px] py-[80px]",
        className,
      )}
    >
      {/* Ambient brand shapes */}
      <div className="pointer-events-none absolute inset-0 dot-grid opacity-[0.35]" />
      <div className="pointer-events-none absolute -right-[220px] -top-[220px] h-[620px] w-[620px] rounded-full bg-[hsl(var(--nuage-violet)/0.22)] blur-[140px]" />
      <div className="pointer-events-none absolute -bottom-[280px] -left-[180px] h-[560px] w-[560px] rounded-full bg-[hsl(var(--nuage-magenta)/0.16)] blur-[150px]" />
      <div className="pointer-events-none absolute left-0 top-0 h-[6px] w-full brand-rule opacity-80" />

      <div className="relative z-10 flex h-full w-full flex-col">
        {(eyebrow || title) && (
          <header className="mb-[44px] shrink-0">
            {eyebrow && (
              <p className="mb-[14px] font-display text-[20px] font-semibold uppercase tracking-[0.42em] text-[hsl(var(--nuage-magenta))]">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="max-w-[1500px] font-display text-[58px] font-extrabold leading-[1.06] tracking-tight text-foreground">
                {title}
              </h2>
            )}
            {lead && (
              <p className="mt-[18px] max-w-[1300px] text-[24px] leading-snug text-[hsl(var(--nuage-lilac))]">
                {lead}
              </p>
            )}
          </header>
        )}

        <div className="min-h-0 flex-1">{children}</div>

        {index !== undefined && (
          <footer className="mt-[36px] flex shrink-0 items-center justify-between text-[18px] tracking-[0.28em] text-muted-foreground">
            <span className="font-display font-semibold uppercase">Nuage · Educação</span>
            <span className="font-display font-semibold">
              {String(index).padStart(2, "0")}
              <span className="opacity-40"> / {String(total ?? 12).padStart(2, "0")}</span>
            </span>
          </footer>
        )}
      </div>
    </section>
  );
};

/* ---------- Shared slide primitives (the deck's visual language) ---------- */

export const Card = ({
  children,
  accent = false,
  className,
}: {
  children: ReactNode;
  accent?: boolean;
  className?: string;
}) => (
  <div
    className={cn(
      "rounded-[24px] p-[32px]",
      accent ? "glass-card-accent" : "glass-card",
      className,
    )}
  >
    {children}
  </div>
);

export const Kpi = ({
  value,
  label,
  sub,
  accent = false,
}: {
  value: string;
  label: string;
  sub?: string;
  accent?: boolean;
}) => (
  <Card accent={accent} className="flex flex-col justify-center">
    <p
      className={cn(
        "font-display text-[62px] font-extrabold leading-none",
        accent ? "brand-text" : "text-foreground",
      )}
    >
      {value}
    </p>
    <p className="mt-[14px] font-display text-[21px] font-semibold uppercase tracking-[0.14em] text-foreground">
      {label}
    </p>
    {sub && <p className="mt-[8px] text-[18px] leading-snug text-muted-foreground">{sub}</p>}
  </Card>
);

export const Pill = ({ children, accent = false }: { children: ReactNode; accent?: boolean }) => (
  <span
    className={cn(
      "inline-flex items-center rounded-full px-[18px] py-[8px] text-[17px] font-semibold",
      accent
        ? "bg-[hsl(var(--nuage-magenta)/0.22)] text-[hsl(var(--nuage-magenta))] ring-1 ring-[hsl(var(--nuage-magenta)/0.5)]"
        : "bg-[hsl(var(--nuage-violet)/0.18)] text-[hsl(var(--nuage-lilac))] ring-1 ring-[hsl(var(--nuage-violet)/0.4)]",
    )}
  >
    {children}
  </span>
);

export const Takeaway = ({ children }: { children: ReactNode }) => (
  <div className="flex items-center gap-[22px] rounded-[20px] border border-[hsl(var(--nuage-violet)/0.35)] bg-[hsl(var(--nuage-violet)/0.12)] px-[32px] py-[24px]">
    <span className="h-[46px] w-[6px] shrink-0 rounded-full brand-rule" />
    <p className="font-display text-[25px] font-semibold leading-snug text-foreground">{children}</p>
  </div>
);
