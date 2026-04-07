import SlideLayout from "../SlideLayout";
import { Sparkles } from "lucide-react";

export default function Slide01() {
  return (
    <SlideLayout variant="dark">
      {/* Decorative glows */}
      <div className="absolute -top-32 right-[-8%] w-[600px] h-[600px] rounded-full bg-slide-accent/10 blur-3xl" />
      <div className="absolute bottom-[-15%] -left-16 w-[400px] h-[400px] rounded-full bg-slide-magenta/8 blur-2xl" />
      {/* Triangle/pyramid motif inspired by Nuage logo */}
      <div className="absolute top-20 right-24 w-0 h-0 border-l-[120px] border-r-[120px] border-b-[200px] border-l-transparent border-r-transparent border-b-slide-primary/5" />

      <div className="px-20 pt-28 h-full flex flex-col">
        <div className="w-16 h-1 bg-slide-magenta mb-8" />

        <h1 className="text-[88px] font-black leading-[0.95] tracking-tight text-foreground">
          IA na Educação
        </h1>

        <p className="mt-8 text-[40px] font-light text-slide-accent-light">
          Por onde começar para gerar impacto real
        </p>

        <div className="w-56 h-[3px] bg-gradient-to-r from-slide-primary to-slide-magenta mt-10" />

        <p className="mt-6 text-[28px] text-slide-text-muted">
          Foco em geração de valor com IA na educação
        </p>

        <div className="absolute bottom-16 right-20 flex items-center gap-3">
          <Sparkles className="w-10 h-10 text-slide-magenta-light" />
        </div>
      </div>
    </SlideLayout>
  );
}
