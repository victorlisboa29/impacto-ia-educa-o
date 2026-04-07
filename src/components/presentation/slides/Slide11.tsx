import SlideLayout from "../SlideLayout";

export default function Slide11() {
  return (
    <SlideLayout variant="accent">
      <div className="absolute -top-10 -left-20 w-[500px] h-[500px] rounded-full bg-slide-magenta/8 blur-3xl" />

      <div className="px-20 flex flex-col justify-center h-full">
        <p className="text-[26px] font-bold tracking-[0.2em] text-slide-accent-light uppercase mb-10">Mensagem Final</p>

        <h2 className="text-[80px] font-black leading-[0.95] text-foreground">
          IA não é sobre<br />tecnologia.
        </h2>

        <div className="w-32 h-1 bg-gradient-to-r from-slide-magenta to-slide-primary mt-8" />

        <p className="mt-8 text-[72px] font-black text-slide-magenta-light leading-[0.95]">
          É sobre execução.
        </p>

        <p className="mt-10 text-[28px] text-slide-text-light leading-relaxed max-w-[900px]">
          A tecnologia já existe. O que separa quem gera resultado<br />é a capacidade de começar, medir e escalar.
        </p>

        <p className="absolute bottom-14 right-20 text-[20px] text-slide-text-muted">11 / 12</p>
      </div>
    </SlideLayout>
  );
}
