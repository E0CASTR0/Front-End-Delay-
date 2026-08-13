import { ImageResponse } from "next/og";
import { SITE } from "@/config/site";

export const alt = "Métodos Delay Pro — Guia Completo de Delay no Futebol";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#050604",
          backgroundImage:
            "radial-gradient(circle at 18% 0%, rgba(43,255,119,0.28), transparent 60%), radial-gradient(circle at 85% 100%, rgba(43,255,119,0.14), transparent 55%)",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 24,
            letterSpacing: 6,
            color: "#2bff77",
            fontWeight: 700,
            textTransform: "uppercase",
            marginBottom: 26,
          }}
        >
          Método Exclusivo
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", lineHeight: 1 }}>
          <div style={{ display: "flex", fontSize: 90, fontWeight: 800, color: "#f6f8f6", textTransform: "uppercase" }}>
            Métodos
          </div>
          <div style={{ display: "flex", fontSize: 106, fontWeight: 800, color: "#2bff77", textTransform: "uppercase" }}>
            Delay Pro
          </div>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 30,
            fontSize: 26,
            color: "#a9b4a9",
            maxWidth: 840,
            textAlign: "center",
          }}
        >
          {SITE.subtitle}
        </div>
      </div>
    ),
    { ...size }
  );
}
