import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{md,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: { extend: {} },
  plugins: [typography],
};

export default config;

module.exports = {
  theme: {
    extend: {
      screens: {
        'nav': '850px',
        'hero-start': '0px',
        'hero-sharp': '1150px',
      },
    },
  },
}