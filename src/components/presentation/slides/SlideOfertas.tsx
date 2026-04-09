import SlideLayout from "../SlideLayout";
import { Download, Cloud, Database, Code2, Headphones } from "lucide-react";

const cols = [
  {
    Icon: Download,
    title: "MIGRAÇÃO",
    highlight: true,
    items: [
      "Análise de ambientes para migração (Assessment)",
      "Migração e modernização de ambientes para Nuvem",
      "Estratégia de adoção a nuvem (CAF)",
    ],
  },
  {
    Icon: Cloud,
    title: "INFRAESTRUTURA EM NUVEM",
    highlight: false,
    items: [
      "Implementação de ambientes em nuvem",
      "Reestruturação de infraestruturas em nuvem",
      "Melhores práticas (Well Architected)",
      "Otimização de custos (FinOps)",
    ],
  },
  {
    Icon: Database,
    title: "DADOS E INTELIGÊNCIA DE NEGÓCIO",
    highlight: false,
    items: [
      "Implementação de estruturas de dados",
      "Inteligência de negócios (BI e Analytics)",
      "Inteligência artificial",
      "Ambiente de análise de dados",
    ],
  },
  {
    Icon: Code2,
    title: "DESENVOLVIMENTO DE APLICAÇÕES",
    highlight: false,
    items: [
      "Desenvolvimento nativo para a nuvem (Cloud Native)",
      "Esteira de desenvolvimento (DevSecOps)",
      "Modernização de aplicações",
      "Desenvolvimento de aplicações móveis",
    ],
  },
  {
    Icon: Headphones,
    title: "SUPORTE E SERVIÇOS GERENCIADOS",
    highlight: false,
    items: [
      "Suportes",
      "AMS | MSP",
      "NOC | SOC",
    ],
  },
];

export default function SlideOfertas() {
  return (
    <SlideLayout>
      <div style={{
        height: "100%", display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        padding: "48px 80px", gap: 28,
      }}>

        {/* Logo */}
        <div style={{ width: "100%", fontSize: 20, fontWeight: 300, letterSpacing: "0.3em", color: "white" }}>
          N U A G E
        </div>

        {/* Title */}
        <h2 style={{ fontSize: 52, fontWeight: 900, letterSpacing: "-0.5px", lineHeight: 1, textAlign: "center", margin: 0 }}>
          <span style={{ color: "white" }}>OFERTAS E SERVIÇOS </span>
          <span style={{ color: "hsl(300,80%,55%)" }}>NUAGEIT</span>
        </h2>

        {/* Columns */}
        <div style={{ display: "flex", gap: 12, width: "100%" }}>
          {cols.map(({ Icon, title, highlight, items }) => (
            <div
              key={title}
              style={{
                flex: 1, display: "flex", flexDirection: "column", alignItems: "flex-start",
                borderRadius: 12, padding: "20px 18px", gap: 12,
                ...(highlight ? {
                  background: "hsl(270,55%,20%)",
                  border: "1px solid hsla(270,80%,50%,0.25)",
                } : {}),
              }}
            >
              <div style={{
                width: 56, height: 56, borderRadius: "50%",
                border: "2px solid hsl(300,80%,55%)",
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: 4,
              }}>
                <Icon style={{ width: 26, height: 26, color: "hsl(300,80%,55%)" }} />
              </div>
              <p style={{ color: "white", fontWeight: 900, fontSize: 16, lineHeight: 1.2, letterSpacing: "0.04em", textTransform: "uppercase", margin: 0 }}>
                {title}
              </p>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 6 }}>
                {items.map((item) => (
                  <li key={item} style={{ color: "rgba(255,255,255,0.65)", fontSize: 16, lineHeight: 1.4 }}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom banners */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10, width: "100%" }}>
          <div style={{
            border: "1px solid rgba(255,255,255,0.2)", borderRadius: 10,
            padding: "12px 24px", textAlign: "center",
          }}>
            <p style={{ color: "white", fontWeight: 700, fontSize: 18, letterSpacing: "0.2em", margin: 0 }}>SEGURANÇA E CONFORMIDADE</p>
          </div>
          <div style={{
            background: "hsl(300,80%,50%)", borderRadius: 10,
            padding: "14px 24px", textAlign: "center",
          }}>
            <p style={{ color: "white", fontWeight: 900, fontSize: 20, letterSpacing: "0.2em", margin: 0 }}>INTELIGÊNCIA ARTIFICIAL GENERATIVA</p>
          </div>
        </div>

      </div>
    </SlideLayout>
  );
}
