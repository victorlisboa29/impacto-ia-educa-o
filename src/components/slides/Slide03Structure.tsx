import { SlideLayout, Card, Takeaway } from "@/components/presentation/SlideLayout";
import { Megaphone, Briefcase, Cpu, Crown } from "lucide-react";

const pillars = [
  {
    icon: Megaphone,
    tag: "Go-to-Market",
    people: [
      { name: "Giovana Pinho", role: "Marketing" },
      { name: "Ana Silva", role: "Demand Generation" },
    ],
  },
  {
    icon: Briefcase,
    tag: "Business",
    people: [{ name: "Victor Lisboa", role: "Education Executive / Vertical Lead" }],
  },
  {
    icon: Cpu,
    tag: "Technical",
    people: [{ name: "João Gabriel", role: "Solutions Architect — Education" }],
  },
];

export const Slide03Structure = () => (
  <SlideLayout
    eyebrow="Especialização"
    title="UMA ESTRUTURA DEDICADA AO SETOR DE EDUCAÇÃO."
    index={3}
  >
    <div className="flex h-full flex-col gap-[26px]">
      <Card accent className="flex items-center gap-[26px] py-[26px]">
        <Crown className="h-[44px] w-[44px] shrink-0 text-[hsl(var(--nuage-magenta))]" />
        <div>
          <p className="font-display text-[16px] font-bold uppercase tracking-[0.32em] text-[hsl(var(--nuage-lilac))]">
            Executive Sponsorship · transversal
          </p>
          <p className="mt-[6px] font-display text-[30px] font-bold text-foreground">
            Evandro Souza <span className="text-[22px] font-medium text-muted-foreground">— CSO / Executive Sponsor</span>
          </p>
        </div>
      </Card>

      <div className="grid flex-1 grid-cols-3 gap-[24px]">
        {pillars.map(({ icon: Icon, tag, people }) => (
          <Card key={tag} className="flex flex-col">
            <div className="mb-[24px] flex items-center gap-[16px]">
              <span className="flex h-[62px] w-[62px] items-center justify-center rounded-[18px] bg-[hsl(var(--nuage-violet)/0.22)]">
                <Icon className="h-[32px] w-[32px] text-[hsl(var(--nuage-violet))]" />
              </span>
              <p className="font-display text-[24px] font-bold uppercase tracking-[0.16em] brand-text">
                {tag}
              </p>
            </div>
            <div className="space-y-[18px]">
              {people.map((p) => (
                <div
                  key={p.name}
                  className="rounded-[18px] border border-[hsl(var(--nuage-violet)/0.3)] bg-[hsl(var(--nuage-violet)/0.1)] px-[22px] py-[20px]"
                >
                  <p className="font-display text-[26px] font-bold text-foreground">{p.name}</p>
                  <p className="mt-[6px] text-[19px] leading-snug text-muted-foreground">{p.role}</p>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>

      <Takeaway>Uma motion multidisciplinar conectando negócio, demanda e arquitetura.</Takeaway>
    </div>
  </SlideLayout>
);
