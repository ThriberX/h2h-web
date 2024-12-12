module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#F4F5F7',
        accent: '#898989',
        button: '#1A1A1A',
        buttonHover: '#333333',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
