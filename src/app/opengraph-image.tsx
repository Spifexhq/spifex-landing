import { ImageResponse } from "next/og";

export const alt = "Spifex — financial operations, unified";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f7f6f3",
          padding: "64px",
          fontFamily: "Inter, Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 14,
              background: "#f46a35",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            S
          </div>
          <div style={{ fontSize: 30, fontWeight: 700, color: "#202020" }}>Spifex</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div
            style={{
              fontSize: 66,
              lineHeight: 1.05,
              letterSpacing: "-0.045em",
              fontWeight: 700,
              color: "#202020",
              maxWidth: 940,
            }}
          >
            Run cash flow, banking and reporting from one operating layer.
          </div>
          <div style={{ fontSize: 26, color: "#687385", maxWidth: 860 }}>
            Financial operations for multi-stream teams. Read-only AI connections for ChatGPT and Claude.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: 10 }}>
            {["Cash flow", "Banking", "Settlements", "Reporting", "AI connections"].map((label) => (
              <div
                key={label}
                style={{
                  border: "1px solid #e0dcd5",
                  borderRadius: 999,
                  padding: "10px 18px",
                  fontSize: 18,
                  color: "#3d3d40",
                  background: "white",
                }}
              >
                {label}
              </div>
            ))}
          </div>
          <div style={{ fontSize: 20, color: "#687385" }}>www.spifex.com</div>
        </div>
      </div>
    ),
    size,
  );
}
