/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/**/*.{js,jsx,ts,tsx,html,png,svg}"
  ],
  safelist: [
    "bg-background",
    "text-foreground",
    "bg-background/80",
    "bg-background/95",
    "text-foreground/80"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};