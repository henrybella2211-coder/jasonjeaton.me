import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background: "#FFF8EF",
          padding: 80,
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            marginBottom: 36,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 76,
              height: 76,
              borderRadius: 24,
              background: "#D9642C",
              color: "#FFF8EF",
              fontSize: 44,
              fontWeight: 700,
            }}
          >
            S
          </div>
          <div style={{ fontSize: 44, fontWeight: 700, color: "#3B1F2B" }}>
            witch Kit
          </div>
        </div>
        <div style={{ fontSize: 34, color: "#3B1F2B", maxWidth: 820, lineHeight: 1.3 }}>
          {siteConfig.tagline}
        </div>
        <div style={{ fontSize: 24, color: "#5A3345", marginTop: 20, maxWidth: 820 }}>
          Reusable vape guidance for former disposable users, UK-focused.
        </div>
      </div>
    ),
    { ...size }
  );
}
