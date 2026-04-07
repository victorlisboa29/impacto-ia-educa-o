import SlideLayout from "../SlideLayout";

export default function Slide09() {
  const before = ["Resposta lenta ao lead (horas/dias)", "Atendimento genérico", "Perda de leads fora do horário", "Equipe sobrecarregada"];
  const after = ["Resposta instantânea 24/7", "Atendimento personalizado com IA", "Qualificação automática do lead", "Equipe focada em fechar matrículas"];

  return (
    <SlideLayout variant="dark">
      <div className="px-20 pt-14 h-full">
        <p className="text-[26px] font-bold tracking-[0.2em] text-slide-primary-light uppercase">Exemplo Prático</p>
        <h2 className="mt-3 text-[50px] font-extrabold leading-[1.05] text-foreground">
          Captação com IA: atendimento<br />automatizado que converte
        </h2>

        <div className="flex gap-8 mt-10">
          {/* Before */}
          <div className="flex-1 bg-slide-mid rounded-xl p-8 shadow-lg shadow-black/20">
            <p className="text-[22px] font-bold tracking-[0.15em] text-slide-red mb-6">ANTES</p>
            <ul className="space-y-4">
              {before.map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-slide-text-muted mt-3 shrink-0" />
                  <span className="text-[24px] text-slide-text-muted">{t}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* After */}
          <div className="flex-1 bg-[hsl(150,40%,12%)] rounded-xl p-8 shadow-lg shadow-black/20">
            <p className="text-[22px] font-bold tracking-[0.15em] text-slide-green mb-6">DEPOIS</p>
            <ul className="space-y-4">
              {after.map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-slide-green mt-3 shrink-0" />
                  <span className="text-[24px] text-[hsl(142,70%,75%)]">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="absolute bottom-14 right-20 text-[20px] text-slide-text-muted">9 / 12</p>
      </div>
    </SlideLayout>
  );
}
