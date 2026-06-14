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
        cream: "#fffdf7",
        oat: "#e4e8e2",
        cocoa: "#d6a72f",
        bark: "#000000",
        sage: "#0b6b45",
        moss: "#d6a72f",
        honey: "#d6a72f",
        sky: "#d9e6f4",
        rose: "#f3ddd8",
      },
      boxShadow: {
        soft: "0 18px 50px rgba(0, 0, 0, 0.10)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans, Arial)", "Helvetica", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
