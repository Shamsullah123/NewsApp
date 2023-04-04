// tailwind.config.js
module.exports = {
  mode: 'jit',
  purge: [],
  purge: [ "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",

  // Or if using `src` directory:
  "./src/**/*.{js,ts,jsx,tsx}",],
   darkMode: false, // or 'media' or 'class'
   theme: {
     extend: {
        screen: {
          "3xl": "2000px"
        }

     },
   },
   variants: {
     extend: {},
   },
   plugins: [require('tailwind-scrollbar-hide')],
 }