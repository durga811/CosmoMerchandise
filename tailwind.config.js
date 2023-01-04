/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        textAnimation:{
          "0%":{top:"430px"},
          "50%":{top:"155px", fontSize:"380px", lineHeight:"341px"},
          "100%":{top:"74px", fontSize:"96px", lineHeight:"117px"}
        },
        logo:{
          "0%":{
            opacity:"0"
          },
          "50%":{opacity:"0.5"},
          "100%":{
            opacity:"1"
          }
        }
      }
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}