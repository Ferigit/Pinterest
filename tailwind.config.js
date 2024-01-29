/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./stories/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    colors: {

      base: {
        white: 'var(--base-white)',
      },
      background: {
        "gray-50": 'var(--bg-gray-50)',
        "gray-100": 'var(--bg-gray-100)',
        'gray-300': "var(--bg-gray-300)"
      },
      transparent: 'transparent',
      opacity: 'opacity',
      white: {
        DEFAULT: 'var(--g-white)',
      },
      black: {
        DEFAULT: '#111',
      },
      blue: {
        DEFAULT: 'var(--g-blue)',
      },
      orange: {
        DEFAULT: 'var(--g-orange)',
      },
      gray: {
        DEFAULT: 'var(--text-gray)',
        '100': 'var(--text-gray-100)',
        '200': 'var(--text-gray-200)',
      },

      dark: {
        DEFAULT: 'var(--text-dark)',
      },
      red: {
        DEFAULT: 'var(--text-dark)',
        '100': "var(--text-red-100)",
        '200': "var(--text-red-200)"
      },


    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Adamina', 'serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      boxShadow: {
        DEFAULT: '0px 0px 8px 4px rgba(62, 49, 108, 0.05)'
      }
    },
  },
  plugins: [],
}

