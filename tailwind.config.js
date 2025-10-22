/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
         colors: {
           'primary-green': '#27AE60',
           'accent-yellow': '#F2C94C',
           'warm-brown': '#325d1db3',
           'light-beige': '#F7F3E8',
           'dark-text': '#2C3E50',
           'white': '#FFFFFF',
           'sun-glow': '#F2C94C',
           'field-green': '#27AE60',
         
         // نظام الألوان المحدث - مطابق للصورة
         'reef-green': {
           50: '#f0f9f0',
           100: '#dcf2dc',
           200: '#bce5bc',
           300: '#8dd18d',
           400: '#56b856',
           500: '#27AE60',
           600: '#1f7a1f',
           700: '#1a611a',
           800: '#174d17',
           900: '#154015',
         },
         'reef-yellow': {
           50: '#fffde7',
           100: '#fff9c4',
           200: '#fff59d',
           300: '#fff176',
           400: '#F2C94C',
           500: '#F2C94C',
           600: '#fbc02d',
           700: '#f57f17',
           800: '#ef6c00',
           900: '#e65100',
         },
         'reef-brown': {
           50: '#F7F3E8',
           100: '#f2e8e5',
           200: '#eaddd7',
           300: '#e0cdc2',
           400: '#d2bab0',
           500: '#bfa094',
           600: '#a18072',
           700: '#977669',
           800: '#325d1db3',
           900: '#6d4c41',
         }
       },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'arabic': ['Cairo', 'Inter', 'system-ui', 'sans-serif']
      }
    },
  },
  plugins: [],
}
