/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-black': "#000000",
        'brand-bronze': "#C6A699",
        'brand-rosegold': "#D6B5A8",
        'brand-red': "#EE3124",
        obsidian: "#0D0D12",
        champagne: "#C9A84C",
        ivory: "#FAF8F5",
        slate: "#2A2A35",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Playfair Display", "serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      borderRadius: {
        '2rem': '2rem',
        '3rem': '3rem',
        '4rem': '4rem',
      },
    },
  },
  plugins: [],
}
