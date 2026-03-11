/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        alabaster: "#f5f3f0",
        forest: {
          900: "#0b1f16",
          700: "#123324",
        },
        slateLuxury: {
          900: "#111827",
          700: "#4b5563",
          300: "#d1d5db",
        },
        accent: {
          500: "#d4a15b",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "serif"],
      },
      borderRadius: {
        xl: "1.25rem",
        "2xl": "1.75rem",
      },
      boxShadow: {
        "soft-elevated": "0 18px 45px rgba(15, 23, 42, 0.18)",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
