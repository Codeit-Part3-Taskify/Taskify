module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  safelist: ['bg-green', 'bg-purple', 'bg-orange', 'bg-blue', 'bg-pink'],
  theme: {
    screens: {
      mobile: { min: '0px', max: '767px' },
      tablet: { min: '768px', max: '1199px' }, // { min: '768px', max: '1023px'
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
        red_D6173A: '#D6173A',
        green_7AC555: '#7AC555',
        purple_760DDE: '#760DDE',
        orange_FFA500: '#FFA500',
        blue_76A5EA: '#76A5EA',
        pink_E876EA: '#E876EA',
        brown_C4B1A2: '#C4B1A2',
        skyblue_9DD7ED: '#9DD7ED',
        yellow_FDD446: '#FDD446',
        yellow_FFC85A: '#FFC85A',
        khaki_A3C4A2: '#A3C4A2',
        pink_F4D7DA: '#F4D7DA',
        red_D25B68: '#D25B68'
      }
    }
  },
  plugins: []
};
