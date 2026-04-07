import SlideLayout from "../SlideLayout";
import { Brain, Target } from "lucide-react";

export default function Slide02() {
  return (
    <SlideLayout variant="light">
      <div className="px-20 pt-16 h-full">
        <p className="text-[26px] font-bold tracking-[0.2em] text-slide-primary uppercase">Contexto</p>

        <h2 className="mt-4 text-[64px] font-extrabold leading-[1.05] text-[hsl(270,100%,8%)]">
          Muitas possibilidades.<br />Pouca clareza de onde começar.
        </h2>

        <div className="flex gap-8 mt-12">
          <div className="flex-1 bg-white rounded-2xl p-8 shadow-lg shadow-[hsl(270,50%,50%)]/10 border border-[hsl(270,40%,90%)]">
            <div className="flex items-center gap-4 mb-4">
              <Brain className="w-10 h-10 text-slide-primary" />
              <h3 className="text-[28px] font-bold text-[hsl(270,100%,8%)]">IA generativa está em toda parte</h3>
            </div>
            <p className="text-[22px] text-slide-text-muted leading-relaxed">
              Ferramentas, modelos e promessas surgem todos os dias. Mas o excesso de opções paralisa.
            </p>
          </div>
          <div className="flex-1 bg-white rounded-2xl p-8 shadow-lg shadow-[hsl(270,50%,50%)]/10 border border-[hsl(270,40%,90%)]">
            <div className="flex items-center gap-4 mb-4">
              <Target className="w-10 h-10 text-slide-accent" />
              <h3 className="text-[28px] font-bold text-[hsl(270,100%,8%)]">Falta foco estratégico</h3>
            </div>
            <p className="text-[22px] text-slide-text-muted leading-relaxed">
              Sem priorização clara, iniciativas de IA viram projetos-piloto sem escala e sem resultado.
            </p>
          </div>
        </div>

        <div className="absolute bottom-12 left-20 right-20 bg-gradient-to-r from-[hsl(270,80%,15%)] to-[hsl(280,70%,22%)] rounded-xl px-10 py-5">
          <p className="text-[30px] italic text-white">
            "O desafio não é acesso à tecnologia, é foco."
          </p>
        </div>
        <p className="absolute bottom-12 right-20 text-[20px] text-slide-text-muted">2 / 12</p>
      </div>
    </SlideLayout>
  );
}
