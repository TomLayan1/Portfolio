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
      bgColor: '#111111',
      goldColor: '#855f19',
      goldColorTwo: '#1c1508',
      grayText: '#424242',
      greenColor: '#A08C5B'
    },
    boxShadow: {
      customShadow: '0 10px 10px rgba(0, 0, 0, 0.8)',
    },
    gradient: {
      'custom-gragient': 'linear-gradient(to right #111111, #855f19, #111111)'
    }
  }
},
  plugins: [],
}