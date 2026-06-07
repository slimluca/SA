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
        oat: "#e6ece8",
        cocoa: "#ffb612",
        bark: "#000000",
        sage: "#007a4d",
        moss: "#ffb612",
        honey: "#ffb612",
        sky: "#d8e9f7",
        rose: "#fde2df",
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
