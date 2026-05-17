import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { createMetadata } from "@/lib/seo";
import { JsonLd, organizationSchema, websiteSchema } from "@/lib/schema";

export const metadata: Metadata = {
  ...createMetadata({
    title: "DogHaven | South Africa's Practical Dog Care Guide",
    description:
      "DogHaven helps South African dog owners with practical guidance on health, emergencies, breeds, adoption, training, grooming, food, insurance, costs, and dog-friendly places.",
  }),
  icons: {
    icon: "/icon.png",
    apple: "/brand/doghaven-dog-logo.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fff9ee",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-ZA">
      <body className="bg-cream font-sans text-cocoa">
        <JsonLd data={websiteSchema()} />
        <JsonLd data={organizationSchema()} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
