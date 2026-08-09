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
            width: 390,
            height: 165,
            borderRadius: 28,
            background: "#f2d8b9",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 24px 60px rgba(7,27,56,0.18)",
            overflow: "hidden",
          }}
        >
          {/* next/image is not available inside ImageResponse's generated markup. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://www.doghaven.co.za/brand/dog-haven-south-africa-logo.png"
            alt="Dog Haven South Africa"
            width="390"
            height="165"
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    ),
    size,
  );
}
