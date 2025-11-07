/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: {
     boxShadow: {
      piano: "0 4px 10px rgba(0, 255, 255, 0.2)",
    },
  } },
  plugins: [],
};
