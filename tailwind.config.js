/** @type {import('tailwindcss').Config} */
// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "on-surface": {
          primary: "#E7E4F5",
          muted: "#938CA8",
          accent: "#A97CFF",
        },
        accent: {
          strong: "#8F5BFF",
          soft: "#C6AAFF",
        },
        surface: {
          primary: "#05050A",
          secondary: "#0D0C13",
        },
        line: {
          primary: "#1A1822",
          accent: "rgba(168, 124, 255, 0.35)",
        },
      },
      boxShadow: {
        soft: "0 0 26px rgba(168,124,255,0.25)",
        strong: "0 10px 40px rgba(0,0,0,0.55)",
      },
    },
  },
  plugins: [],
};
