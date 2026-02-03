/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx,mdx}",
    "./public/**/*.{html,svg,png}",
    "./app/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  safelist: [
    "bg-background",
    "text-foreground",
    "bg-background/80",
    "bg-background/95",
    "text-foreground/80",
    "glassmorphism",
    "glassmorphism-dark",
    "card-modern",
    "text-gradient",
    "cosmic-button",
    "floating-card",
    "stagger-animation",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        "space-grotesk": ["Space Grotesk", "system-ui", "sans-serif"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-subtle": "pulse-subtle 4s ease-in-out infinite",
        "fade-in": "fade-in 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "fade-in-delay-1":
          "fade-in 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.15s forwards",
        "fade-in-delay-2":
          "fade-in 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.3s forwards",
        "fade-in-delay-3":
          "fade-in 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.45s forwards",
        "fade-in-delay-4":
          "fade-in 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.6s forwards",
        "slide-up": "slide-up 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "slide-left": "slide-left 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "slide-right": "slide-right 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "scale-in": "scale-in 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        meteor: "meteor 8s linear infinite",
        glow: "glow 2s ease-in-out infinite alternate",
        "bounce-gentle": "bounce-gentle 2s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-subtle": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(100px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-left": {
          "0%": { opacity: "0", transform: "translateX(100px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "slide-right": {
          "0%": { opacity: "0", transform: "translateX(-100px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px rgba(147, 51, 234, 0.5)" },
          "100%": { boxShadow: "0 0 20px rgba(147, 51, 234, 0.8)" },
        },
        "bounce-gentle": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backdropBlur: {
        xs: "2px",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "none",
          },
        },
      },
    },
  },
  plugins: [],
};
