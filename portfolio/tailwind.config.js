/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
  screens: {
    sm: '480px',
    md: '768px',
    lg: '1024px'
  },
  extend: {
    colors: {
      goldColor: '#855f19',
      grayText: '#424242',
    },
    boxShadow: {
      customShadow: '0 10px 10px rgba(0, 0, 0, 0.8)',
    }
  }
},
  plugins: [],
}