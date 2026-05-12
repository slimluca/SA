import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#fff9ee",
        oat: "#f3ead8",
        cocoa: "#3f2b1f",
        bark: "#6f4a32",
        sage: "#6f8f72",
        moss: "#486349",
        honey: "#d9a441",
        sky: "#dceef0",
        rose: "#f5d6cd",
      },
      boxShadow: {
        soft: "0 18px 50px rgba(63, 43, 31, 0.10)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
