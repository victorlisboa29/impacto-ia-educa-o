import SlideLayout from "../SlideLayout";
import { DollarSign, DoorOpen, CreditCard, Settings } from "lucide-react";

const pains = [
  { icon: DollarSign, title: "Captação cara", desc: "Custo por aluno subindo, ROI caindo. Canais tradicionais perdem eficiência.", color: "bg-slide-red" },
  { icon: DoorOpen, title: "Evasão", desc: "Alunos abandonam o curso antes de concluir. Falta acompanhamento proativo.", color: "bg-slide-amber" },
  { icon: CreditCard, title: "Inadimplência", desc: "Fluxo de caixa comprometido. Cobranças reativas e pouco personalizadas.", color: "bg-slide-orange" },
  { icon: Settings, title: "Operação sobrecarregada", desc: "Equipes fazendo tarefas repetitivas que poderiam ser automatizadas.", color: "bg-slide-purple" },
];

export default function Slide03() {
  return (
    <SlideLayout variant="dark">
      <div className="px-20 pt-14 h-full">
        <p className="text-[26px] font-bold tracking-[0.2em] text-slide-primary-light uppercase">Dores do Setor</p>

        <h2 className="mt-3 text-[58px] font-extrabold leading-[1.05] text-foreground">
          Os problemas que precisam<br />de solução agora
        </h2>

        <div className="flex gap-6 mt-10">
          {pains.map((p, i) => (
            <div key={i} className="flex-1 bg-slide-mid rounded-xl overflow-hidden shadow-lg shadow-black/20">
              <div className={`h-1 ${p.color}`} />
              <div className="p-6">
                <p.icon className="w-9 h-9 text-slide-primary-light mb-4" />
                <h3 className="text-[26px] font-bold text-foreground mb-2">{p.title}</h3>
                <p className="text-[20px] text-slide-text-muted leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="absolute bottom-14 left-20 text-[28px] italic text-slide-accent-light">
          "IA só importa quando resolve problemas reais."
        </p>
        <p className="absolute bottom-14 right-20 text-[20px] text-slide-text-muted">3 / 12</p>
      </div>
    </SlideLayout>
  );
}
