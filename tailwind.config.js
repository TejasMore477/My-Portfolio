/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {  
      fontFamily: {
        Orbitron: ["Orbitron", "sans-serif"], 
        Poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        redO: '#EE4E4E',
      },
    },
  },
  plugins: [],
}

