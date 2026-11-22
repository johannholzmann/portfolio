/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#101918",
        surface: "#1B2927",
        ivory: "#F4F0E6",
        muted: "#C3CBC3",
        mint: "#94DDC0",
        availability: "#447035",
        slate: {
          50: "#F4F0E6",
          100: "#F4F0E6",
          200: "#DCE1D9",
          300: "#C3CBC3",
          400: "#C3CBC3",
          500: "#89968E",
          600: "#66766F",
          700: "#465650",
          800: "#2B3B36",
          900: "#1B2927",
          950: "#101918",
        },
        sky: { 200: "#94DDC0", 300: "#94DDC0", 400: "#94DDC0" },
        cyan: { 100: "#C3CBC3", 200: "#94DDC0", 300: "#94DDC0", 400: "#94DDC0" },
        emerald: { 200: "#94DDC0", 300: "#94DDC0", 900: "#101918" },
        amber: { 100: "#F4F0E6", 200: "#F4F0E6", 300: "#F4F0E6" },
      },
      fontFamily: {
        heading: ["var(--font-spectral)", "serif"],
        sans: ["var(--font-manrope)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      borderRadius: {
        DEFAULT: "0px",
        sm: "4px",
        md: "8px",
      },
    },
  },
  plugins: [],
  darkMode: "class"
}
