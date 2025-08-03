/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0F1419",
        secondary: "#13ADC7",
        accent: "#FFFFFF",
        background: "#0F1419",
      },
      fontFamily: {
        sans: ["Space Grotesk", "sans-serif"],
      },
      animation: {
        float: "float 20s ease-in-out infinite",
        "spin-slow": "spin 40s linear infinite",
        "bounce-slow": "bounce 35s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) translateX(0px)" },
          "25%": { transform: "translateY(-20px) translateX(10px)" },
          "50%": { transform: "translateY(0px) translateX(20px)" },
          "75%": { transform: "translateY(20px) translateX(10px)" },
        },
      },
    },
  },
  plugins: [],
};
