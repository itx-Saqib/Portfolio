/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          primary: '#121212',
          secondary: '#1a1a1a',
        },
        card: {
          DEFAULT: '#1f1f1f',
          hover: '#252525',
        },
        border: {
          DEFAULT: '#2a2a2a',
          hover: '#3a3a3a',
        },
        text: {
          primary: '#f0f0f0',
          secondary: '#a8a8a8',
          muted: '#606060',
        },
        accent: {
          DEFAULT: '#e0e0e0',
          dim: '#888888',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
