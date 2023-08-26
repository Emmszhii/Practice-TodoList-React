/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3891a6",
        secondary: "#fde74c",
        light: "#e9ebf8",
        dark: "#141204",
      },
    },
  },
  plugins: [],
};
