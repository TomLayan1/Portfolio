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
      grayText: '#424242',
    },
    boxShadow: {
      customShadow: '0 10px 10px rgba(0, 0, 0, 0.8)',
    },
    gradient: {
      'custom-gragient': 'linear-gradient(to right #111111, #855f19, #111111)'
    },
    backgroundImage: {
      'custom-image': "url('/src/Assets/black-map.jpg')",
    },
    textShadow: {
      'sm': '0 1px 2px rgba(0, 0, 0, 0.5)',
      'md': '0 4px 3px rgba(0, 0, 0, 0.1)',
      'lg': '0 10px 8px rgba(0, 0, 0, 0.1)',
      'xl': '0 20px 15px rgba(0, 0, 0, 0.1)',
    }
  }
},
  plugins: [],
}