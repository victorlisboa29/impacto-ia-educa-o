import { SlideLayout, Card, Takeaway } from "@/components/presentation/SlideLayout";
import { GraduationCap, Building2, School, Rocket } from "lucide-react";

const segments = [
  {
    icon: GraduationCap,
    title: "Universidades & IES",
    clients: ["Mackenzie", "UVA", "Link School of Business"],
  },
  {
    icon: Building2,
    title: "Grupos Educacionais",
    clients: ["Grupo SEB", "Grupo Santillana"],
  },
  {
    icon: School,
    title: "Educação Básica",
    clients: ["Grupo Salta Educação", "Graded", "The British School"],
  },
  {
    icon: Rocket,
    title: "EdTechs",
    clients: ["Letrus", "PROESC", "Elefante Letrado"],
  },
];

export const Slide04Presence = () => (
  <SlideLayout
    eyebrow="Market Presence"
    title="UMA BASE DIVERSIFICADA NO ECOSSISTEMA EDUCACIONAL."
    lead="65 clientes ativos distribuídos em quatro perfis de mercado — exemplos representativos."
    index={4}
  >
    <div className="flex h-full flex-col gap-[26px]">
      <div className="grid flex-1 grid-cols-4 gap-[22px]">
        {segments.map(({ icon: Icon, title, clients }) => (
          <Card key={title} className="flex flex-col">
            <span className="mb-[20px] flex h-[62px] w-[62px] items-center justify-center rounded-[18px] bg-[hsl(var(--nuage-violet)/0.22)]">
              <Icon className="h-[32px] w-[32px] text-[hsl(var(--nuage-violet))]" />
            </span>
            <p className="font-display text-[24px] font-bold uppercase leading-tight tracking-[0.08em] text-foreground">
              {title}
            </p>
            <div className="mt-[18px] h-[3px] w-[64px] brand-rule" />
            <ul className="mt-[22px] space-y-[14px]">
              {clients.map((c) => (
                <li
                  key={c}
                  className="rounded-[14px] border border-[hsl(var(--nuage-violet)/0.28)] bg-[hsl(var(--nuage-violet)/0.1)] px-[18px] py-[14px] text-[21px] font-semibold text-foreground"
                >
                  {c}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>

      <Takeaway>Construímos presença em diferentes perfis do ecossistema educacional.</Takeaway>
    </div>
  </SlideLayout>
);
