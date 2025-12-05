/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "brand-red": "#E53935",
        "brand-blue": "#1E88E5",
        "custom-light-blue": "#E3F2FD",
        "custom-dark-blue": "#0D47A1", 
        "custom-red": "#D32F2F",
        "brand-yellow": "#FFD600",
        "brand-light-blue": "#81D4FA",
        "brand-dark-blue": "#01579B",
        "brand-dark-gray": "#37474F",
      },
    },
  },
  plugins: [],
}
