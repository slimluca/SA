import type { Metadata, Viewport } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { createMetadata } from "@/lib/seo";
import { JsonLd, organizationSchema, websiteSchema } from "@/lib/schema";

export const metadata: Metadata = {
  ...createMetadata({
    title: "Dog Haven | South Africa's Practical Dog Care Guide",
    description:
      "Dog Haven covers dog health, emergencies, breeds, adoption, training, grooming, food, insurance, costs, and dog-friendly places for South African owners.",
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
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1001166538143330"
          crossOrigin="anonymous"
        />
      </head>
      <body className="bg-cream font-sans text-bark">
        <JsonLd data={websiteSchema()} />
        <JsonLd data={organizationSchema()} />
        <Header />
        <main>{children}</main>
        <Footer />
        <GoogleAnalytics gaId="G-78DFVZYFJM" />
      </body>
    </html>
  );
}
