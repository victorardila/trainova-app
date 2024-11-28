/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        awakenning: ["AWAKENNING", "sans-serif"], // Nombre de la fuente que usarás
      },
    },
  },
  plugins: [],
};
