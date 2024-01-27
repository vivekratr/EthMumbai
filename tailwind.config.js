/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  "theme": { 
    "extend": {
    "colors": {
    "white": "#fff",
    "darkgray": "#a7a7a7",
    "black": "#000",
    "gray": "#2a2a2a",
    "darkslategray": "#3b3b3b",
    "darkslategray1": "#343434",
    "dimgray": "#575757",
    },
    "spacing": {},
    "fontFamily": {
      inter: ['Inter', 'sans-serif'],
    }
    }, fontWeight: {
      '300':300,
      '500': 500,
      '700': 700,
    },
    "fontSize": {
    "inherit": "inherit"
    }
    },
  plugins: [],
}

