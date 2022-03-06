module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    colors: {
      blueberry: '#5C2D90',
      blueberryLight: '#50BFA8',
      blueberryLight2: '#E8723D',
      white: '#fff',
      black: '#000',
      slate: '#94a3b8',
      slateDark: '#64748b',
      green: '#411E76',
      orange: '#f97316',
      cyan: '#06b6d4',
      lightGrey: '#F2F3F9'
    },
    extends: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      }
    }
  },
  plugins: [],
}
