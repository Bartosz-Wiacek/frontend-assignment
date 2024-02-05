/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
        "md": "768px",
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
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        violet: {
          default: "#bc1e73",
          50: "#fdf2f9",
          100: "#fbe8f5",
          200: "#fad0ed",
          300: "#f6abdd",
          400: "#f076c5",
          500: "#e74dac",
          600: "#d52d8d",
          700: "#bc1e73", // <- this is the default
          800: "#991b5d",
          900: "#7f1c50",
          950: "#4e092c",
        },
        eminence: {
          default: "#5a2871",
          50: "#faf5fe",
          100: "#f4ebfc",
          200: "#e8d6f8",
          300: "#d9b5f2",
          400: "#c389e9",
          500: "#a85bda",
          600: "#8d3cbd",
          700: "#762e9d",
          800: "#622880",
          900: "#5a2871", // <- this is the default
          950: "#330d45",
        },
        "violet-eggplant": {
          default: "#a02c94",
          50: "#fef5fe",
          100: "#fdeafd",
          200: "#f9d5f9",
          300: "#f3b4f0",
          400: "#eb87e5",
          500: "#dd58d4",
          600: "#c039b4",
          700: "#a02c94", // <- this is the default
          800: "#822677",
          900: "#6b2461",
          950: "#460c3e",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
