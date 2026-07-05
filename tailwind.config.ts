import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#fbf5e9",
        ivory: "#fffaf0",
        oat: "#e5dcc8",
        blackbrand: "#111111",
        navy: "#071b38",
        cocoa: "#123f8f",
        bark: "#253044",
        sage: "#007a3d",
        moss: "#005f32",
        honey: "#f1b82d",
        gold: "#bf8424",
        sky: "#e4edf9",
        royal: "#1246a6",
        rose: "#f4dfdc",
        ruby: "#c92d2d",
      },
      boxShadow: {
        soft: "0 18px 50px rgba(7, 27, 56, 0.12)",
        panel: "0 10px 30px rgba(7, 27, 56, 0.055)",
        logo: "0 14px 32px rgba(7, 27, 56, 0.14), 0 0 0 1px rgba(185, 139, 47, 0.14)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans, Arial)", "Helvetica", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
