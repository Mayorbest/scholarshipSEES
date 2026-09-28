// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'sees-green': '#004B35', // The deep green from your announcement banner and buttons
        'sees-dark': '#111827',
      },
    },
  },
  plugins: [],
};
export default config;