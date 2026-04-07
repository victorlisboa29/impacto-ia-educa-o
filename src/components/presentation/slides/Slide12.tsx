import SlideLayout from "../SlideLayout";
import { Star } from "lucide-react";

export default function Slide12() {
  return (
    <SlideLayout variant="dark">
      <div className="absolute -top-32 right-[-10%] w-[600px] h-[600px] rounded-full bg-slide-accent/8 blur-3xl" />
      <div className="absolute top-[-5%] right-[-5%] w-[450px] h-[450px] rounded-full bg-slide-magenta/5 blur-2xl" />
      {/* Triangle motif */}
      <div className="absolute top-32 right-40 w-0 h-0 border-l-[100px] border-r-[100px] border-b-[170px] border-l-transparent border-r-transparent border-b-slide-primary/4" />

      <div className="px-20 flex flex-col justify-center h-full">
        <Star className="w-16 h-16 text-slide-amber mb-8 fill-slide-amber" />

        <h2 className="text-[84px] font-black leading-[1] text-foreground tracking-tight">
          Quem começar<br />pequeno hoje,<br />vai liderar amanhã.
        </h2>

        <div className="w-40 h-1 bg-gradient-to-r from-slide-magenta to-slide-primary mt-10" />

        <p className="mt-6 text-[36px] text-slide-accent-light">Obrigado.</p>
      </div>
    </SlideLayout>
  );
}
