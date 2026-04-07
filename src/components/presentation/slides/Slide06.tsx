import SlideLayout from "../SlideLayout";
import { Search, TrendingUp, BarChart3, Rocket, ArrowRight } from "lucide-react";

const steps = [
  { num: "01", title: "Problema\nClaro", desc: "Identifique uma dor real e específica do negócio", color: "text-slide-primary", borderColor: "bg-slide-primary", Icon: Search },
  { num: "02", title: "Alto Impacto\nBaixa Complexidade", desc: "Priorize o que gera resultado rápido com menor esforço", color: "text-slide-accent", borderColor: "bg-slide-accent", Icon: TrendingUp },
  { num: "03", title: "Medir\nResultado", desc: "Defina métricas claras antes de implementar", color: "text-slide-magenta", borderColor: "bg-slide-magenta", Icon: BarChart3 },
  { num: "04", title: "Escalar", desc: "Replique o que funciona para toda a operação", color: "text-slide-green", borderColor: "bg-slide-green", Icon: Rocket },
];

export default function Slide06() {
  return (
    <SlideLayout variant="light">
      <div className="px-16 pt-14 h-full">
        <p className="text-[26px] font-bold tracking-[0.2em] text-slide-primary uppercase">Framework</p>
        <h2 className="mt-3 text-[54px] font-extrabold text-[hsl(270,100%,8%)]">4 etapas para gerar valor com IA</h2>

        <div className="flex items-start gap-4 mt-10">
          {steps.map((s, i) => (
            <div key={s.num} className="flex items-start gap-3 flex-1">
              <div className="bg-white rounded-2xl shadow-lg shadow-[hsl(270,50%,50%)]/8 overflow-hidden flex-1 border border-[hsl(270,40%,90%)]">
                <div className={`h-1 ${s.borderColor}`} />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[48px] font-black ${s.color}`}>{s.num}</span>
                    <s.Icon className={`w-8 h-8 ${s.color}`} />
                  </div>
                  <h3 className="text-[28px] font-bold text-[hsl(270,100%,8%)] leading-tight whitespace-pre-line mb-4">
                    {s.title}
                  </h3>
                  <p className="text-[18px] text-slide-text-muted leading-relaxed">{s.desc}</p>
                </div>
              </div>
              {i < 3 && (
                <ArrowRight className="w-6 h-6 text-slide-primary-light mt-20 shrink-0" />
              )}
            </div>
          ))}
        </div>

        <p className="absolute bottom-14 right-20 text-[20px] text-slide-text-muted">6 / 12</p>
      </div>
    </SlideLayout>
  );
}
