import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.productName}: ${site.pages}-page PDF ebook for Indian homeowners, ${site.priceDisplay}`;
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
          background: "#ede4d9",
          padding: 64,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", flex: 1, paddingRight: 48 }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: 26, color: "#7d5239", letterSpacing: 4, textTransform: "uppercase" }}>
              PDF ebook · Written for Indian homes
            </div>
            <div style={{ display: "flex", fontSize: 72, fontWeight: 800, color: "#211b0c", lineHeight: 1.1, marginTop: 24 }}>
              {site.productName}
            </div>
            <div style={{ display: "flex", fontSize: 30, color: "#4a4232", lineHeight: 1.4, marginTop: 24 }}>
              {site.tagline}
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
            <div style={{ display: "flex", background: "#7d5239", color: "#fff", fontSize: 40, fontWeight: 800, padding: "12px 32px", borderRadius: 999 }}>
              {site.priceDisplay}
            </div>
            <div style={{ display: "flex", fontSize: 28, color: "#4a4232" }}>
              {site.pages} pages · {site.parts} parts · {site.topics} topics
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: 330,
            height: "100%",
            borderRadius: "6px 20px 20px 6px",
            background: "linear-gradient(135deg, #9c6b4f, #5e3d2a)",
            color: "#fff",
            padding: 36,
            boxShadow: "0 30px 60px rgba(94,61,42,0.35)",
          }}
        >
          <div style={{ display: "flex", fontSize: 18, color: "#efe2d3", letterSpacing: 4 }}>PDF GUIDE · INDIA</div>
          <div style={{ display: "flex", fontSize: 40, fontWeight: 800, lineHeight: 1.15 }}>
            Furniture Buying Made Easy
          </div>
          <div style={{ display: "flex", fontSize: 20, color: "#efe2d3" }}>What to ask, what to pay, what to avoid</div>
        </div>
      </div>
    ),
    size
  );
}
