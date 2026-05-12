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
        background: "var(--background)",
        foreground: "var(--foreground)",
        maroon: "#8B0015",
        wine: "#5E000E",
        gold: "#D4AF37",
        beige: "#E8DCCB",
        cream: "#F5EBDD",
        "secondary-dark": "#12080A",
        "text-primary": "rgba(255,245,235,0.92)",
        "text-secondary": "rgba(255,245,235,0.65)"
      },
      fontFamily: {
        playfair: ['var(--font-playfair)'],
        garamond: ['var(--font-garamond)'],
        inter: ['var(--font-inter)'],
      }
    },
  },
  plugins: [],
};
export default config;
