import SlideLayout from "../SlideLayout";

export default function Slide05() {
  return (
    <SlideLayout variant="accent">
      <div className="absolute top-10 right-[-5%] w-[500px] h-[500px] rounded-full border border-white/5" />
      <div className="absolute top-20 right-0 w-[400px] h-[400px] rounded-full border border-white/5" />
      {/* Triangle motif */}
      <div className="absolute bottom-20 right-32 w-0 h-0 border-l-[80px] border-r-[80px] border-b-[140px] border-l-transparent border-r-transparent border-b-white/3" />

      <div className="px-20 flex flex-col justify-center h-full">
        <h2 className="text-[88px] font-black leading-[0.95] text-foreground tracking-tight">
          O que funciona<br />na prática
        </h2>

        <div className="w-32 h-1 bg-gradient-to-r from-slide-magenta to-slide-primary mt-10" />

        <p className="mt-8 text-[32px] text-slide-accent-light leading-relaxed">
          Um framework simples para gerar resultado<br />com IA generativa na educação
        </p>

        <p className="absolute bottom-14 right-20 text-[20px] text-slide-text-muted">5 / 12</p>
      </div>
    </SlideLayout>
  );
}
