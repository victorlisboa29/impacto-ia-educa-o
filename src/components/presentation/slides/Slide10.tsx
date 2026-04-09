import SlideLayout from "../SlideLayout";
import { Headphones, TrendingUp, GraduationCap } from "lucide-react";

const areas = [
  { Icon: Headphones, title: "Atendimento", desc: "Chatbot inteligente para dúvidas, suporte e retenção. Resposta 24/7 com personalização.", accent: "hsl(300,80%,60%)" },
  { Icon: TrendingUp, title: "Captação", desc: "IA para qualificar leads, personalizar abordagem e aumentar conversão de matrículas.", accent: "hsl(270,80%,65%)" },
  { Icon: GraduationCap, title: "Suporte ao Aluno", desc: "Assistente acadêmico, recomendações personalizadas e acompanhamento proativo.", accent: "hsl(280,85%,65%)" },
];

export default function Slide10() {
  return (
    <SlideLayout>
      <div style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center", padding: "0 100px" }}>
        <div style={{ width: "100%", maxWidth: 1600 }}>

          <p style={{ fontSize: 18, fontWeight: 700, letterSpacing: "0.2em", color: "hsl(270,80%,65%)", textTransform: "uppercase", marginBottom: 12 }}>Onde Focar Agora</p>
          <h2 style={{ fontSize: 60, fontWeight: 800, lineHeight: 1.1, color: "white", marginBottom: 36, marginTop: 0 }}>
            3 áreas de alto impacto<br />para começar hoje
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 28, marginBottom: 28 }}>
            {areas.map(({ Icon, title, desc, accent }) => (
              <div key={title} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 14, padding: "36px 32px", textAlign: "center" }}>
                <div style={{ width: 64, height: 64, borderRadius: "50%", background: `${accent}22`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                  <Icon style={{ width: 32, height: 32, color: accent }} />
                </div>
                <h3 style={{ fontSize: 24, fontWeight: 700, color: "white", marginBottom: 12, marginTop: 0 }}>{title}</h3>
                <p style={{ fontSize: 20, color: "rgba(255,255,255,0.6)", lineHeight: 1.6, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>

          <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 14, padding: "18px 32px" }}>
            <p style={{ fontSize: 22, fontStyle: "italic", color: "rgba(255,255,255,0.85)", margin: 0 }}>"Casos simples geram resultado rápido."</p>
          </div>

        </div>
      </div>
    </SlideLayout>
  );
}
