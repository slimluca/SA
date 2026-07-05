import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { createMetadata } from "@/lib/seo";
import { JsonLd, organizationSchema, websiteSchema } from "@/lib/schema";

export const metadata: Metadata = {
  ...createMetadata({
    title: "Dog Haven | South Africa's Practical Dog Care Guide",
    description:
      "Dog Haven helps South African dog owners with practical guidance on health, emergencies, breeds, adoption, training, grooming, food, insurance, costs, and dog-friendly places.",
  }),
  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fbf5e9",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-ZA">
      <body className="bg-cream font-sans text-bark">
        <JsonLd data={websiteSchema()} />
        <JsonLd data={organizationSchema()} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
