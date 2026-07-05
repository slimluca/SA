import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Dog Haven - South Africa's practical dog care guide";
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
          background: "#fbf5e9",
          color: "#071b38",
          padding: "72px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ maxWidth: "720px", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
          <div
            style={{
              display: "flex",
              borderRadius: "999px",
              background: "#d4af5f",
              color: "#071b38",
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
          <div style={{ marginTop: 28, fontSize: 30, lineHeight: 1.35, color: "#253044" }}>
            Health, adoption, food, costs, training, grooming, and safer dog-friendly planning.
          </div>
        </div>
        <div
          style={{
            width: 430,
            height: 170,
            borderRadius: 22,
            border: "6px solid #bf8424",
            background: "#fffaf0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            boxShadow: "0 24px 60px rgba(7,27,56,0.18)",
          }}
        >
          <img
            src="https://www.doghaven.co.za/brand/dog-haven-south-africa-logo.png"
            alt="Dog Haven South Africa logo"
            width="380"
            height="127"
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    ),
    size,
  );
}
