import SlideLayout from "../SlideLayout";
import { Download, Cloud, Database, Code2, Headphones } from "lucide-react";

const cols = [
  {
    Icon: Download,
    title: "MIGRAÇÃO",
    highlight: true,
    items: [
      "Análise de ambientes para migração (Assessment)",
      "Migração e modernização de ambientes para Nuvem",
      "Estratégia de adoção a nuvem (CAF)",
    ],
  },
  {
    Icon: Cloud,
    title: "INFRAESTRUTURA EM NUVEM",
    highlight: false,
    items: [
      "Implementação de ambientes em nuvem",
      "Reestruturação de infraestruturas em nuvem",
      "Melhores práticas (Well Architected)",
      "Otimização de custos (FinOps)",
    ],
  },
  {
    Icon: Database,
    title: "DADOS E INTELIGÊNCIA DE NEGÓCIO",
    highlight: false,
    items: [
      "Implementação de estruturas de dados",
      "Inteligência de negócios (BI e Analytics)",
      "Inteligência artificial",
      "Ambiente de análise de dados",
    ],
  },
  {
    Icon: Code2,
    title: "DESENVOLVIMENTO DE APLICAÇÕES",
    highlight: false,
    items: [
      "Desenvolvimento nativo para a nuvem (Cloud Native)",
      "Esteira de desenvolvimento (DevSecOps)",
      "Modernização de aplicações",
      "Desenvolvimento de aplicações móveis",
    ],
  },
  {
    Icon: Headphones,
    title: "SUPORTE E SERVIÇOS GERENCIADOS",
    highlight: false,
    items: [
      "Suportes",
      "AMS | MSP",
      "NOC | SOC",
    ],
  },
];

export default function SlideOfertas() {
  return (
    <SlideLayout>
      <div className="h-full flex flex-col items-center justify-center px-16 py-8 gap-5">

        {/* Logo */}
        <div className="w-full text-white text-[16px] font-light tracking-[0.3em]">N U A G E</div>

        {/* Title */}
        <h2 className="text-[48px] font-black tracking-tight leading-none text-center">
          <span className="text-white">OFERTAS E SERVIÇOS </span>
          <span className="text-slide-magenta">NUAGEIT</span>
        </h2>

        {/* Columns */}
        <div className="flex gap-2 w-full">
          {cols.map(({ Icon, title, highlight, items }) => (
            <div
              key={title}
              className={`flex-1 flex flex-col items-start rounded-lg px-4 py-4 gap-2 ${
                highlight ? "bg-[hsl(270,55%,20%)] border border-slide-primary/25" : ""
              }`}
            >
              <div className="w-[52px] h-[52px] rounded-full border-2 border-slide-magenta flex items-center justify-center mb-1">
                <Icon className="w-6 h-6 text-slide-magenta" />
              </div>
              <p className="text-white font-black text-[12px] leading-tight tracking-wide uppercase">{title}</p>
              <ul className="flex flex-col gap-1.5 mt-1">
                {items.map((item) => (
                  <li key={item} className="text-white/60 text-[12px] leading-snug">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom banners */}
        <div className="flex flex-col gap-2 w-full">
          <div className="border border-white/20 rounded-md px-6 py-2.5 text-center">
            <p className="text-white font-bold text-[13px] tracking-[0.2em]">SEGURANÇA E CONFORMIDADE</p>
          </div>
          <div className="bg-slide-magenta rounded-md px-6 py-3 text-center">
            <p className="text-white font-black text-[14px] tracking-[0.2em]">INTELIGÊNCIA ARTIFICIAL GENERATIVA</p>
          </div>
        </div>

      </div>
    </SlideLayout>
  );
}
