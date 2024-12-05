/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#b277e4",
          "primary-content": "#0c0512",
          secondary: "#e4b277",
          "secondary-content": "#120c05",
          accent: "#77e4b2",
          "accent-content": "#05120c",
          neutral: "#1F2937",
          "neutral-content": "#cdd0d3",
          "base-100": "#171f24",
          "base-200": "#12191e",
          "base-300": "#0e1418",
          "base-content": "#cbcdce",
          info: "#2563EB",
          "info-content": "#d2e2ff",
          success: "#16A34A",
          "success-content": "#000a02",
          warning: "#D97706",
          "warning-content": "#110500",
          error: "#DC2626",
          "error-content": "#ffd9d4",
        },
      },
    ],
  },
};
