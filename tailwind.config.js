/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "custom-all": "0 0 10px rgba(0, 0, 0, 0.2)",
      },
      fontFamily: {
        "dm-serif": ['"DM Serif Display"', "serif"],
        "inter": ['"inter"', "serif"],
      },
    },
  },
  plugins: [],
};
