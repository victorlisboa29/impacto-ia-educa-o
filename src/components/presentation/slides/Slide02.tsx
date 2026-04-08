import SlideLayout from "../SlideLayout";
import { Brain, Target } from "lucide-react";

export default function Slide02() {
  return (
    <SlideLayout>
      <div style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center", padding: "0 80px" }}>
        <div style={{ width: "100%", maxWidth: 1600 }}>

          <p style={{ fontSize: 15, fontWeight: 700, letterSpacing: "0.2em", color: "hsl(270,80%,65%)", textTransform: "uppercase", marginBottom: 10 }}>Contexto</p>
          <h2 style={{ fontSize: 54, fontWeight: 800, lineHeight: 1.1, color: "white", marginBottom: 32, marginTop: 0 }}>
            Muitas possibilidades.<br />Pouca clareza de onde começar.
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 20 }}>
            {[
              { icon: <Brain style={{ width: 28, height: 28, color: "hsl(270,80%,65%)", flexShrink: 0 }} />, title: "IA generativa está em toda parte", desc: "Ferramentas, modelos e promessas surgem todos os dias. Mas o excesso de opções paralisa." },
              { icon: <Target style={{ width: 28, height: 28, color: "hsl(280,85%,65%)", flexShrink: 0 }} />, title: "Falta foco estratégico", desc: "Sem priorização clara, iniciativas de IA viram projetos-piloto sem escala e sem resultado." },
            ].map(({ icon, title, desc }) => (
              <div key={title} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12, padding: "28px 32px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 12 }}>
                  {icon}
                  <span style={{ fontSize: 18, fontWeight: 700, color: "white", lineHeight: 1.3 }}>{title}</span>
                </div>
                <p style={{ fontSize: 16, color: "rgba(255,255,255,0.6)", lineHeight: 1.6, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>

          <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12, padding: "16px 28px" }}>
            <p style={{ fontSize: 18, fontStyle: "italic", color: "rgba(255,255,255,0.85)", margin: 0 }}>"O desafio não é acesso à tecnologia, é foco."</p>
          </div>

        </div>
      </div>
    </SlideLayout>
  );
}
