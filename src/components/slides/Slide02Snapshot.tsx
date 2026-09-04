import { SlideLayout, Card, Kpi, Takeaway } from "@/components/presentation/SlideLayout";
import { Building2, GraduationCap, School, Rocket } from "lucide-react";

const segments = [
  { icon: GraduationCap, label: "Universidades & IES" },
  { icon: Building2, label: "Grupos Educacionais" },
  { icon: School, label: "Educação Básica" },
  { icon: Rocket, label: "EdTechs" },
];

export const Slide02Snapshot = () => (
  <SlideLayout
    eyebrow="Executive Snapshot"
    title="A VERTICAL DE EDUCAÇÃO EM NÚMEROS."
    index={2}
  >
    <div className="flex h-full flex-col gap-[28px]">
      <div className="grid grid-cols-4 gap-[24px]">
        <Kpi value="65" label="Clientes ativos" sub="Base ativa da vertical" />
        <Kpi value="81" label="Contas na base" sub="65 Active + 16 Activated" />
        <Kpi value="4" label="Segmentos atendidos" sub="Cobertura do ecossistema" />
        <Kpi value="≈ US$ 140k" label="Consumo AWS / mês" sub="Média Mar–Mai/2026" accent />
      </div>

      <div className="grid flex-1 grid-cols-[1.25fr_1fr] gap-[24px]">
        <Card>
          <p className="mb-[22px] font-display text-[22px] font-semibold uppercase tracking-[0.18em] text-[hsl(var(--nuage-magenta))]">
            Segmentos atendidos
          </p>
          <div className="grid grid-cols-2 gap-[18px]">
            {segments.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-[18px] rounded-[18px] border border-[hsl(var(--nuage-violet)/0.3)] bg-[hsl(var(--nuage-violet)/0.1)] px-[22px] py-[20px]"
              >
                <Icon className="h-[36px] w-[36px] shrink-0 text-[hsl(var(--nuage-violet))]" />
                <span className="font-display text-[22px] font-semibold text-foreground">{label}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card accent>
          <p className="mb-[20px] font-display text-[22px] font-semibold uppercase tracking-[0.18em] text-[hsl(var(--nuage-lilac))]">
            Estrutura dedicada
          </p>
          <ul className="space-y-[16px] text-[22px] leading-snug text-foreground">
            <li className="flex gap-[14px]">
              <span className="mt-[12px] h-[8px] w-[8px] shrink-0 rounded-full bg-[hsl(var(--nuage-magenta))]" />
              Time exclusivo para o setor de Educação
            </li>
            <li className="flex gap-[14px]">
              <span className="mt-[12px] h-[8px] w-[8px] shrink-0 rounded-full bg-[hsl(var(--nuage-magenta))]" />
              Go-to-market, negócio e arquitetura integrados
            </li>
            <li className="flex gap-[14px]">
              <span className="mt-[12px] h-[8px] w-[8px] shrink-0 rounded-full bg-[hsl(var(--nuage-magenta))]" />
              Motion recorrente de desenvolvimento de mercado
            </li>
          </ul>
        </Card>
      </div>

      <Takeaway>
        Uma vertical especializada, com presença relevante e uma base que já gera footprint AWS.
      </Takeaway>
    </div>
  </SlideLayout>
);
