import SlideLayout from "../SlideLayout";
import { Headphones, TrendingUp, GraduationCap } from "lucide-react";

const areas = [
  { Icon: Headphones, title: "Atendimento", desc: "Chatbot inteligente para dúvidas, suporte e retenção. Resposta 24/7 com personalização.", color: "bg-slide-cyan/15 text-slide-cyan" },
  { Icon: TrendingUp, title: "Captação", desc: "IA para qualificar leads, personalizar abordagem e aumentar conversão de matrículas.", color: "bg-slide-primary/15 text-slide-primary" },
  { Icon: GraduationCap, title: "Suporte ao Aluno", desc: "Assistente acadêmico, recomendações personalizadas e acompanhamento proativo.", color: "bg-slide-accent/15 text-slide-accent" },
];

export default function Slide10() {
  return (
    <SlideLayout variant="light">
      <div className="px-20 pt-14 h-full">
        <p className="text-[26px] font-bold tracking-[0.2em] text-slide-primary uppercase">Onde Focar Agora</p>
        <h2 className="mt-3 text-[54px] font-extrabold leading-[1.05] text-slide-dark">
          3 áreas de alto impacto<br />para começar hoje
        </h2>

        <div className="flex gap-8 mt-10">
          {areas.map((a) => (
            <div key={a.title} className="flex-1 bg-white rounded-2xl overflow-hidden shadow-lg shadow-black/5 text-center p-8">
              <div className={`w-20 h-20 rounded-full ${a.color} flex items-center justify-center mx-auto mb-6`}>
                <a.Icon className="w-10 h-10" />
              </div>
              <h3 className="text-[30px] font-bold text-slide-dark mb-3">{a.title}</h3>
              <p className="text-[20px] text-slide-text-muted leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="absolute bottom-12 left-20 right-20 bg-slide-dark rounded-xl px-10 py-5">
          <p className="text-[28px] italic text-white">"Casos simples geram resultado rápido."</p>
        </div>
        <p className="absolute bottom-12 right-20 text-[20px] text-slide-text-muted">10 / 12</p>
      </div>
    </SlideLayout>
  );
}
