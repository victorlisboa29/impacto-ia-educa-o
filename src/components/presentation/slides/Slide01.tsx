import SlideLayout from "../SlideLayout";
import { Sparkles } from "lucide-react";

export default function Slide01() {
  return (
    <SlideLayout variant="dark">
      {/* Decorative circles */}
      <div className="absolute -top-40 right-[-5%] w-[500px] h-[500px] rounded-full bg-slide-primary/5" />
      <div className="absolute bottom-[-10%] -left-20 w-[350px] h-[350px] rounded-full bg-slide-accent/4" />

      <div className="px-20 pt-28 h-full flex flex-col">
        {/* Cyan accent line */}
        <div className="w-16 h-1 bg-slide-cyan mb-8" />

        <h1 className="text-[88px] font-black leading-[0.95] tracking-tight text-foreground">
          IA Generativa<br />na Educação
        </h1>

        <p className="mt-8 text-[40px] font-light text-slide-accent-light">
          Por onde começar para gerar impacto real
        </p>

        <div className="w-56 h-[3px] bg-slide-primary mt-10" />

        <p className="mt-6 text-[28px] text-slide-text-muted">
          Foco em geração de valor com IA na educação
        </p>

        <div className="absolute bottom-16 right-20">
          <Sparkles className="w-12 h-12 text-foreground" />
        </div>
      </div>
    </SlideLayout>
  );
}
