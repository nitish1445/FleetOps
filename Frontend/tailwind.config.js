/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f59e0b",
        secondary: "#2563eb",
        success: "#22c55e",
        danger: "#ef4444",
        background: "#f8fafc",
        surface: "#ffffff",
        dark: {
          DEFAULT: "#0f172a",
          surface: "#1e293b",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Sora", "sans-serif"],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
      boxShadow: {
        card: "0 8px 30px rgb(0 0 0 / 0.08)",
        orange: "0 10px 30px rgba(245,158,11,.25)",
        blue: "0 10px 30px rgba(37,99,235,.20)",
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        fade: "fade .4s ease",
        slide: "slide .4s ease",
      },
      keyframes: {
        float: {
          "0%,100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-8px)",
          },
        },
        fade: {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
        slide: {
          from: {
            opacity: 0,
            transform: "translateY(15px)",
          },
          to: {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
