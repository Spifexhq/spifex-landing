import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{md,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        nav: "850px",
        "hero-start": "0px",
        "hero-sharp": "1150px",
      },
      colors: {
        brand: {
          50: "#fff5f0",
          100: "#ffe7db",
          200: "#ffcbb3",
          300: "#ffa680",
          400: "#fb7b4b",
          500: "#f46a35",
          600: "#e45420",
          700: "#bd3f13",
        },
        ink: "#202020",
        canvas: "#f7f6f3",
        line: "#e8e5df",
        teal: "#9be7e2",
      },
      boxShadow: {
        lift: "0 24px 60px -28px rgba(32, 32, 32, 0.28)",
        card: "0 1px 2px rgba(32, 32, 32, 0.04), 0 12px 32px -24px rgba(32, 32, 32, 0.22)",
      },
    },
  },
  plugins: [],
};

export default config;
