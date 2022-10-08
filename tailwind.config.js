/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    fontSize: {
      '12px': '0.75rem',
      '14px': '0.875rem',
      '16px': '1rem',
      '20px': '1.25rem',
      '24px': '1.5rem',
      '32px': '2rem',
      '40px': '2.5rem',
    },
    colors: {
      primary: '#FFD167',
      secondary: '#FFAF34',
      black: '#000000',
      white: '#ffffff',
      gray: {
        100: '#B9BBBE',
        200: '#393C43',
        300: '#2F3136',
        400: '#202225'
      },
    },
    extend: {
      spacing: {
        '7.5': '1.875rem'
      },
      zIndex: {
        '999': '999',
      },
      boxShadow: {
        '3xl': '0px 1px 3px rgba(0,0,0,0.3)',
      },
      backgroundImage: {
        'gradient-135deg': 'linear-gradient(135deg, var(--tw-gradient-stops))'
      },
    },
  },
  plugins: [],
}
