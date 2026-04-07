import SlideLayout from "../SlideLayout";

export default function Slide07() {
  const e1 = ["Qual é a dor mais urgente?", "Quem é impactado diretamente?", "É possível medir antes e depois?", "O time consegue executar?"];
  const e2 = ["Alto impacto + baixa complexidade", "Resultado visível em semanas", "Não depende de grandes integrações", "Gera confiança para escalar"];

  return (
    <SlideLayout variant="dark">
      <div className="px-20 pt-14 h-full">
        <p className="text-[26px] font-bold tracking-[0.2em] text-slide-primary-light uppercase">Etapas 1 e 2</p>
        <h2 className="mt-3 text-[54px] font-extrabold leading-[1.05] text-foreground">
          Escolha o problema certo.<br />Busque quick wins.
        </h2>

        <div className="flex gap-8 mt-10">
          {/* Etapa 1 */}
          <div className="flex-1 bg-slide-mid rounded-xl overflow-hidden shadow-lg shadow-black/20">
            <div className="h-1 bg-slide-primary" />
            <div className="p-8">
              <h3 className="text-[34px] font-bold text-foreground mb-6">01 &nbsp;Problema Claro</h3>
              <ul className="space-y-4">
                {e1.map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-slide-primary-light mt-3 shrink-0" />
                    <span className="text-[24px] text-slide-text-light">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Etapa 2 */}
          <div className="flex-1 bg-slide-mid rounded-xl overflow-hidden shadow-lg shadow-black/20">
            <div className="h-1 bg-slide-accent" />
            <div className="p-8">
              <h3 className="text-[34px] font-bold text-foreground mb-6">02 &nbsp;Quick Wins</h3>
              <ul className="space-y-4">
                {e2.map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-slide-accent-light mt-3 shrink-0" />
                    <span className="text-[24px] text-slide-text-light">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <p className="absolute bottom-14 right-20 text-[20px] text-slide-text-muted">7 / 12</p>
      </div>
    </SlideLayout>
  );
}
