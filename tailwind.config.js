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
    "text-foreground/80",
    "glassmorphism",
    "glassmorphism-dark",
    "card-modern",
    "text-gradient",
    "cosmic-button",
    "floating-card",
    "stagger-animation"
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'space-grotesk': ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulse-subtle 4s ease-in-out infinite',
        'fade-in': 'fade-in 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'fade-in-delay-1': 'fade-in 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.15s forwards',
        'fade-in-delay-2': 'fade-in 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.3s forwards',
        'fade-in-delay-3': 'fade-in 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.45s forwards',
        'fade-in-delay-4': 'fade-in 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.6s forwards',
        'slide-up': 'slide-up 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'slide-left': 'slide-left 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'slide-right': 'slide-right 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'scale-in': 'scale-in 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'meteor': 'meteor 8s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'bounce-gentle': 'bounce-gentle 2s ease-in-out infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backdropBlur: {
        'xs': '2px',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
          },
        },
      },
    },
  },
  plugins: [],
};