module.exports = {
  content: ['./components/**/*.js', './pages/**/*.js', './pages/**/*.jsx'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        lighter: '#9EB7C7',
        dark: '#242D3E',
        light: '#EFF2F1',
        blue: '#0EC9EB',
        purple: '#b95ac4',
        yellow: '#F4B942',
        'accent-1': '#FAFAFA',
        'accent-2': '#EAEAEA',
        'accent-7': '#333',
        success: '#0070f3',
        cyan: '#79FFE1',
      },
      spacing: {
        28: '7rem',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      boxShadow: {
        small: '0 5px 10px rgba(0, 0, 0, 0.12)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
