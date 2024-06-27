/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: colors.orange,
        secondary: colors.yellow,
      },
      keyframes: {
        "slide-left": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "slide-left-infinite": "slide-left 40s linear infinite",
      },
    },
  },
  plugins: [],
};

 



      
    
  
  
