import SlideLayout from "../SlideLayout";
import { DollarSign, DoorOpen, CreditCard, Settings } from "lucide-react";

const pains = [
  { Icon: DollarSign, title: "Captação cara", desc: "Custo por aluno subindo, ROI caindo. Canais tradicionais perdem eficiência.", accent: "hsl(0,84%,60%)" },
  { Icon: DoorOpen, title: "Evasão", desc: "Alunos abandonam o curso antes de concluir. Falta acompanhamento proativo.", accent: "hsl(38,92%,50%)" },
  { Icon: CreditCard, title: "Inadimplência", desc: "Fluxo de caixa comprometido. Cobranças reativas e pouco personalizadas.", accent: "hsl(25,95%,53%)" },
  { Icon: Settings, title: "Operação sobrecarregada", desc: "Equipes fazendo tarefas repetitivas que poderiam ser automatizadas.", accent: "hsl(300,80%,55%)" },
];

export default function Slide03() {
  return (
    <SlideLayout>
      <div style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center", padding: "0 80px" }}>
        <div style={{ width: "100%", maxWidth: 1600 }}>

          <p style={{ fontSize: 15, fontWeight: 700, letterSpacing: "0.2em", color: "hsl(270,80%,65%)", textTransform: "uppercase", marginBottom: 10 }}>Dores do Setor</p>
          <h2 style={{ fontSize: 54, fontWeight: 800, lineHeight: 1.1, color: "white", marginBottom: 32, marginTop: 0 }}>
            Os problemas que precisam<br />de solução agora
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 24, marginBottom: 24 }}>
            {pains.map(({ Icon, title, desc, accent }) => (
              <div key={title} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12, overflow: "hidden" }}>
                <div style={{ height: 3, background: accent }} />
                <div style={{ padding: "24px 26px" }}>
                  <Icon style={{ width: 28, height: 28, color: accent, marginBottom: 12 }} />
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: "white", marginBottom: 8, marginTop: 0 }}>{title}</h3>
                  <p style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.6, margin: 0 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p style={{ fontSize: 18, fontStyle: "italic", color: "hsl(280,100%,82%)", margin: 0 }}>
            "IA só importa quando resolve problemas reais."
          </p>

        </div>
      </div>
    </SlideLayout>
  );
}
