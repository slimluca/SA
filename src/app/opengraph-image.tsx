import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "DogHaven - South Africa's practical dog care guide";
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
          alignItems: "center",
          justifyContent: "space-between",
          background: "#fff9ee",
          color: "#3f2b1f",
          padding: "72px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ maxWidth: "720px", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
          <div
            style={{
              display: "flex",
              borderRadius: "999px",
              background: "#d9a441",
              color: "#3f2b1f",
              padding: "12px 22px",
              fontSize: 28,
              fontWeight: 800,
              marginBottom: 32,
            }}
          >
            DogHaven.co.za
          </div>
          <div style={{ fontSize: 72, lineHeight: 1.02, fontWeight: 900 }}>
            South Africa&apos;s practical dog care guide
          </div>
          <div style={{ marginTop: 28, fontSize: 30, lineHeight: 1.35, color: "#6f4a32" }}>
            Health, adoption, food, costs, training, grooming, and safer dog-friendly planning.
          </div>
        </div>
        <div
          style={{
            width: 260,
            height: 260,
            borderRadius: 130,
            border: "10px solid #6f8f72",
            background: "#fff9ee",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            boxShadow: "0 24px 60px rgba(63,43,31,0.18)",
          }}
        >
          <img
            src="https://www.doghaven.co.za/brand/doghaven-logo.png"
            alt=""
            width="230"
            height="230"
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    ),
    size,
  );
}
