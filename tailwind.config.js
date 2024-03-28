/** @type {import('tailwindcss').Config} */
module.exports = {
  content:  [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        titleFont:"Roboto",
        bodyFont:"Poppins",
      },
      colors:{     
        // wall:'#FFE5E2',
        wall:'#ffffff',
        head:'#E93B81',
        paras:'#22092C',
        // semihead:"#F5ABC9",
        semihead:"#FF8E9E"

      },
    },
  },
  plugins: [],
}

