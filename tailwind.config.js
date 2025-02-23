const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#00A67E",
          50: "#E6F6F2",
          100: "#CCF0E6",
          200: "#99E1CD",
          300: "#66D2B4",
          400: "#33C39B",
          500: "#00A67E",
          600: "#008568",
          700: "#006450",
          800: "#004338",
          900: "#002120",
        },
        secondary: {
          DEFAULT: "#F4B41A",
          50: "#FEF7E6",
          100: "#FDF0CC",
          200: "#FAE199",
          300: "#F8D166",
          400: "#F6C233",
          500: "#F4B41A",
          600: "#C38E0E",
          700: "#926B0B",
          800: "#624707",
          900: "#312404",
        },
      },
      borderRadius: {
        lg: "1rem",
        md: "0.75rem",
        sm: "0.5rem",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

