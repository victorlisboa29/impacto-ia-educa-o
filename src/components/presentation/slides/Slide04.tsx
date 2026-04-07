import SlideLayout from "../SlideLayout";

const errors = [
  { num: "01", title: "Começar grande demais", desc: "Projetos ambiciosos demais travam na execução e nunca geram resultado." },
  { num: "02", title: "Focar na tecnologia", desc: "Escolher a ferramenta antes de entender o problema a resolver." },
  { num: "03", title: "Não medir resultado", desc: "Sem métricas claras, é impossível saber se a IA está gerando valor." },
];

export default function Slide04() {
  return (
    <SlideLayout variant="light">
      <div className="px-20 pt-14 h-full">
        <p className="text-[26px] font-bold tracking-[0.2em] text-slide-primary uppercase">O Erro Mais Comum</p>

        <h2 className="mt-3 text-[58px] font-extrabold leading-[1.05] text-slide-dark">
          Três armadilhas que travam<br />o valor da IA
        </h2>

        <div className="flex flex-col gap-4 mt-10">
          {errors.map((e) => (
            <div key={e.num} className="flex items-center bg-white rounded-xl shadow-md shadow-black/5 overflow-hidden">
              <div className="w-1.5 h-20 bg-slide-amber self-stretch" />
              <div className="flex items-center gap-6 px-8 py-5 flex-1">
                <span className="text-[44px] font-black text-slide-amber min-w-[60px]">{e.num}</span>
                <div>
                  <h3 className="text-[28px] font-bold text-slide-dark">{e.title}</h3>
                  <p className="text-[22px] text-slide-text-muted mt-1">{e.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quote bar */}
        <div className="absolute bottom-12 left-20 right-20 bg-slide-dark rounded-xl px-10 py-5">
          <p className="text-[30px] italic text-white">
            "Complexidade cedo demais trava o valor."
          </p>
        </div>
        <p className="absolute bottom-12 right-20 text-[20px] text-slide-text-muted">4 / 12</p>
      </div>
    </SlideLayout>
  );
}
