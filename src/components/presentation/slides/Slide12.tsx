import SlideLayout from "../SlideLayout";
import { Star } from "lucide-react";

export default function Slide12() {
  return (
    <SlideLayout variant="dark">
      {/* Decorative circles */}
      <div className="absolute -top-40 right-[-10%] w-[600px] h-[600px] rounded-full bg-slide-primary/5" />
      <div className="absolute top-[-5%] right-[-5%] w-[450px] h-[450px] rounded-full bg-slide-accent/5" />

      <div className="px-20 flex flex-col justify-center h-full">
        <Star className="w-16 h-16 text-slide-amber mb-8 fill-slide-amber" />

        <h2 className="text-[84px] font-black leading-[1] text-foreground tracking-tight">
          Quem começar<br />pequeno hoje,<br />vai liderar amanhã.
        </h2>

        <div className="w-40 h-1 bg-slide-cyan mt-10" />

        <p className="mt-6 text-[36px] text-slide-accent-light">Obrigado.</p>
      </div>
    </SlideLayout>
  );
}
