/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        fontFamily: {
          'Poppins': ['Poppins', 'sans-serif'],
          'Caveat': ['Caveat', 'cursive'],
        },
  
        colors: {
          'link-hover-color': '#858585',
  
          'card-bg-color': '#2a2c3c',
          'card-border-color': '#3d3d50',
          
          'pcard-primary': 'hsl(0, 91%, 62%)',
        },
      },
    },
    plugins: [],
  }