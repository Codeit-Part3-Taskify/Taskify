module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  safelist: [
    'bg-green_7AC555',
    'bg-purple_760DDE',
    'bg-orange_FFA500',
    'bg-blue_76A6EA',
    'bg-pink_E876EA'
  ],
  theme: {
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
        violet_5534DA: '#5534DA',
        violet_F1EFFD: '#F1EFFD',
        red_D6173A: '#D6173A',
        green_7AC555: '#7AC555',
        purple_760DDE: '#760DDE',
        orange_FFA500: '#FFA500',
        blue_76A6EA: '#76A5EA',
        pink_E876EA: '#E876EA'
      }
    }
  },
  plugins: []
};
