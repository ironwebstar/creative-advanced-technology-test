module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
    colors: {
      white: 'white',
      black: '#48525F',
      grey: {
        100: '#9FA6B1',
        200: '#E9EEF5',
        300: '#F9FAFB'
      },
      primary: '#24599C',
      secondary: '#665E74',
      green: '#3BC38E',
      orange: '#E19F27'
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
