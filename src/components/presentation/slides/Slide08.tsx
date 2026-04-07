import SlideLayout from "../SlideLayout";

export default function Slide08() {
  const e3 = ["Defina KPIs antes de implementar", "Compare antes × depois", "Custo por resultado vs. custo anterior", "Satisfação do aluno / equipe"];
  const e4 = ["Documente o que funcionou", "Treine a equipe no processo", "Automatize os fluxos validados", "Expanda para outros setores"];

  return (
    <SlideLayout variant="light">
      <div className="px-20 pt-14 h-full">
        <p className="text-[26px] font-bold tracking-[0.2em] text-slide-primary uppercase">Etapas 3 e 4</p>
        <h2 className="mt-3 text-[54px] font-extrabold leading-[1.05] text-[hsl(270,100%,8%)]">
          Meça o impacto.<br />Escale o que funciona.
        </h2>

        <div className="flex gap-8 mt-10">
          <div className="flex-1 bg-white rounded-xl overflow-hidden shadow-lg shadow-[hsl(270,50%,50%)]/8 border border-[hsl(270,40%,90%)]">
            <div className="h-1 bg-slide-magenta" />
            <div className="p-8">
              <h3 className="text-[34px] font-bold text-[hsl(270,100%,8%)] mb-6">03 &nbsp;Métricas</h3>
              <ul className="space-y-4">
                {e3.map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-slide-magenta mt-3 shrink-0" />
                    <span className="text-[24px] text-slide-text-muted">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex-1 bg-white rounded-xl overflow-hidden shadow-lg shadow-[hsl(270,50%,50%)]/8 border border-[hsl(270,40%,90%)]">
            <div className="h-1 bg-slide-green" />
            <div className="p-8">
              <h3 className="text-[34px] font-bold text-[hsl(270,100%,8%)] mb-6">04 &nbsp;Escalar</h3>
              <ul className="space-y-4">
                {e4.map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-slide-green mt-3 shrink-0" />
                    <span className="text-[24px] text-slide-text-muted">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <p className="absolute bottom-14 right-20 text-[20px] text-slide-text-muted">8 / 12</p>
      </div>
    </SlideLayout>
  );
}
