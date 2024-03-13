module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  safelist: ['bg-green', 'bg-purple', 'bg-orange', 'bg-blue', 'bg-pink'],
  theme: {
    screens: {
      mobile: '0px',
      tablet: '768px',
      desktop: '1200px'
    },
    extend: {
      colors: {
        black_000000: '#000000',
        black_171717: '#171717',
        black_333236: '#333236',
        black_4B4B4B: '#4B4B4B',
        gray_787486: '#787486',
        gray_9FA6B2: '#9FA6B2',
        gray_D9D9D9: '#D9D9D9',
        gray_EEEEEE: '#EEEEEE',
        gray_FAFAFA: '#FAFAFA',
        white_FFFFFF: '#FFFFFF',
        violet: '#5534DA',
        violet_8: '#F1EFFD',
        red: '#D6173A',
        green: '#7AC555',
        purple: '#760DDE',
        orange: '#FFA500',
        blue: '#76A5EA',
        pink: '#E876EA'
      }
    }
  },
  plugins: []
};
