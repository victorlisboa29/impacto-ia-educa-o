import SlideLayout from "../SlideLayout";

export default function Slide01() {
  return (
    <SlideLayout>
      {/* Triangle/pyramid motif inspired by Nuage logo */}
      <div className="absolute top-20 right-24 w-0 h-0 border-l-[120px] border-r-[120px] border-b-[200px] border-l-transparent border-r-transparent border-b-slide-primary/5" />

      <div className="h-full flex flex-col items-center justify-center text-center px-16 gap-8">

        {/* Badge */}
        <div className="border border-white/20 rounded-full px-5 py-1.5 text-[18px] text-white/70 tracking-wide">
          Nuage · IA na Educação
        </div>

        {/* Main title */}
        <h1 className="text-[80px] font-black leading-[1] tracking-tight">
          <span className="text-white">IA generativa na educação:</span>
          <br />
          <span className="bg-gradient-to-r from-slide-primary via-slide-magenta to-purple-400 bg-clip-text text-transparent">
            por onde começar para
          </span>
          <br />
          <span className="bg-gradient-to-r from-slide-primary via-slide-magenta to-purple-400 bg-clip-text text-transparent">
            gerar impacto real
          </span>
        </h1>

        {/* Logos */}
        <div className="flex items-center gap-10 mt-4 opacity-80">
          <span className="text-white text-[22px] font-light tracking-[0.3em]">N U A G E</span>
          <div className="w-px h-8 bg-white/20" />
          <span className="text-white text-[22px] font-light tracking-widest">aws</span>
        </div>

      </div>
    </SlideLayout>
  );
}
