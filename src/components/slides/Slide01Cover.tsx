import { SlideLayout, Pill } from "@/components/presentation/SlideLayout";

export const Slide01Cover = () => (
  <SlideLayout variant="hero">
    <div className="flex h-full flex-col justify-center">
      <div className="mb-[42px] flex items-center gap-[24px]">
        <span className="h-[56px] w-[8px] rounded-full brand-rule" />
        <span className="font-display text-[26px] font-bold uppercase tracking-[0.5em] text-[hsl(var(--nuage-lilac))]">
          NuageIT · AWS
        </span>
      </div>

      <h1 className="font-display text-[112px] font-extrabold leading-[1.02] tracking-tight text-foreground">
        NUAGE <span className="text-[hsl(var(--nuage-violet))]">|</span> EDUCAÇÃO{" "}
        <span className="brand-text">· 2026</span>
      </h1>

      <p className="mt-[40px] max-w-[1240px] text-[30px] leading-snug text-[hsl(var(--nuage-lilac))]">
        Como estruturamos uma vertical dedicada de Educação, desenvolvemos presença no mercado e
        criamos novas oportunidades de transformação junto à AWS.
      </p>

      <div className="mt-[56px] h-[3px] w-[520px] brand-rule opacity-80" />

      <p className="mt-[40px] font-display text-[36px] font-bold leading-tight text-foreground">
        Construindo uma motion especializada de Educação junto à AWS.
      </p>

      <div className="mt-[52px] flex gap-[16px]">
        <Pill>Vertical Especializada</Pill>
        <Pill>Market Development</Pill>
        <Pill accent>GenAI</Pill>
      </div>
    </div>
  </SlideLayout>
);
