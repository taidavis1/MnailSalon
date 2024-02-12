/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  plugins: [require("tw-elements/dist/plugin.cjs")],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        'new-font': ['Open Sans', 'sans-serif'],
        'newFont': ['Catamaran', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        'Catamaran': ['Catamaran', 'sans-serif'],
        'Lora': ['Lora', 'serif'],
        'new-2-font': ['Satisfy' , 'cursive'],
        'lato': ['Lato', 'sans-serif'],
        'Roboto': ['Roboto Serif' , 'serif'],
        'Freehand': ['Freehand' , 'cursive'],
        'Poppins': ['Poppins' , 'sans-serif'],
        'Abril': ['Abril Fatface' , 'cursive'],
        'Rouge': ['Rouge Script','cursive'],
        'Han-Sans': ['Black Han Sans', 'sans-serif'],
        'Monterast' :['Montserrat',' sans-serif'],
        'Gruppo': ['Gruppo', 'sans-serif'],
        'PlayFair': ['Playfair Display', 'serif'],
        'Dancing': ['Dancing Script', 'cursive'],
        'Marcok': ['Marcellus', 'serif'],
      },
      colors:{
        'ser-color': '#ffe4b0',
        'gold': '#ffd700',
        'blue-test': '#373b4d',
        'main-color': '#da3b85',
        'second-color': '#e15668',
      },
      backgroundImage:{
        'pagel': "url('/src/img/bg1.jpg')",
        'pagesm': "url('/src/img/bgtest.png')",
        'bg2': "url('/src/img/bg2.png')",
        'gpage': "url('/src/img/galleryBanner.png')",
        'gpage1': "url('/src/img/serviceBanner.png')",
        'bgpop1' : "url('/src/img/popup1.png')",
        'gpage3': "url('/src/img/bg3.png')",
      }
    },
  },
}