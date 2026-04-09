import SlideLayout from "../SlideLayout";
import { Brain, Target } from "lucide-react";

export default function Slide02() {
  return (
    <SlideLayout>
      <div style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center", padding: "0 100px" }}>
        <div style={{ width: "100%", maxWidth: 1600 }}>

          <p style={{ fontSize: 18, fontWeight: 700, letterSpacing: "0.2em", color: "hsl(270,80%,65%)", textTransform: "uppercase", marginBottom: 12 }}>Contexto</p>
          <h2 style={{ fontSize: 60, fontWeight: 800, lineHeight: 1.1, color: "white", marginBottom: 40, marginTop: 0 }}>
            Muitas possibilidades.<br />Pouca clareza de onde começar.
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28, marginBottom: 28 }}>
            {[
              { icon: <Brain style={{ width: 36, height: 36, color: "hsl(270,80%,65%)", flexShrink: 0 }} />, title: "IA generativa está em toda parte", desc: "Ferramentas, modelos e promessas surgem todos os dias. Mas o excesso de opções paralisa." },
              { icon: <Target style={{ width: 36, height: 36, color: "hsl(280,85%,65%)", flexShrink: 0 }} />, title: "Falta foco estratégico", desc: "Sem priorização clara, iniciativas de IA viram projetos-piloto sem escala e sem resultado." },
            ].map(({ icon, title, desc }) => (
              <div key={title} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 14, padding: "32px 36px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
                  {icon}
                  <span style={{ fontSize: 22, fontWeight: 700, color: "white", lineHeight: 1.3 }}>{title}</span>
                </div>
                <p style={{ fontSize: 20, color: "rgba(255,255,255,0.6)", lineHeight: 1.6, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>

          <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 14, padding: "20px 32px" }}>
            <p style={{ fontSize: 22, fontStyle: "italic", color: "rgba(255,255,255,0.85)", margin: 0 }}>"O desafio não é acesso à tecnologia, é foco."</p>
          </div>

        </div>
      </div>
    </SlideLayout>
  );
}
