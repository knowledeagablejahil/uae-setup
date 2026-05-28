/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        secondary: '#1e40af',
      },
      fontFamily: {
        sans: ['system-ui', 'sans-serif'],
      },
      animation: {
        bounce: 'bounce 2s infinite',
      },
    },
  },
  plugins: [],
};
