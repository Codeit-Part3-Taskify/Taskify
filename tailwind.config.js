/** @type {import('tailwindcss').Config} */
export const content = [
  './src/**/*.{js,ts,jsx,tsx}',
  './pages/**/*.{js,ts,jsx,tsx}',
  './components/**/*.{js,ts,jsx,tsx}'
];
export const theme = {
  screens: {
    mobile: '0px',
    tablet: '768px',
    desktop: '1200px'
  },
  colors: {
    gray_D9D9D9: '#D9D9D9',
    gray_787486: '#787486',
    green: '#7AC555',
    purple: '#760DDE',
    orange: '#FFA500',
    blue: '#76A5EA',
    pink: '#E876EA'
  }
};
export const plugins = [];
