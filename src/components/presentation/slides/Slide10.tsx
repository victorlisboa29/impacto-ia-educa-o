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
      <div style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center", padding: "0 80px" }}>
        <div style={{ width: "100%", maxWidth: 1600 }}>

          <p style={{ fontSize: 15, fontWeight: 700, letterSpacing: "0.2em", color: "hsl(270,80%,65%)", textTransform: "uppercase", marginBottom: 10 }}>Onde Focar Agora</p>
          <h2 style={{ fontSize: 54, fontWeight: 800, lineHeight: 1.1, color: "white", marginBottom: 28, marginTop: 0 }}>
            3 áreas de alto impacto<br />para começar hoje
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24, marginBottom: 20 }}>
            {areas.map(({ Icon, title, desc, accent }) => (
              <div key={title} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12, padding: "28px 28px", textAlign: "center" }}>
                <div style={{ width: 56, height: 56, borderRadius: "50%", background: `${accent}22`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                  <Icon style={{ width: 26, height: 26, color: accent }} />
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: "white", marginBottom: 10, marginTop: 0 }}>{title}</h3>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.6, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>

          <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12, padding: "14px 28px" }}>
            <p style={{ fontSize: 17, fontStyle: "italic", color: "rgba(255,255,255,0.85)", margin: 0 }}>"Casos simples geram resultado rápido."</p>
          </div>

        </div>
      </div>
    </SlideLayout>
  );
}
