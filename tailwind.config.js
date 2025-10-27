/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      fontSize: {
        // Hero titles
        'hero': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'hero-mobile': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        
        // Section titles
        'section': ['3.5rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'section-mobile': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        
        // Subsection titles
        'subsection': ['2rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'subsection-mobile': ['1.75rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        
        // Body text
        'body-lg': ['1.25rem', { lineHeight: '1.6', letterSpacing: '-0.01em' }],
        'body': ['1.125rem', { lineHeight: '1.6', letterSpacing: '-0.01em' }],
        'body-sm': ['1rem', { lineHeight: '1.6', letterSpacing: '-0.01em' }],
      },
      colors: {
        primary: {
          DEFAULT: '#0B9A9E',
          50: '#E6F7F7',
          100: '#CCF0F0',
          200: '#99E0E1',
          300: '#66D1D2',
          400: '#33C1C3',
          500: '#0B9A9E',
          600: '#097B7E',
          700: '#075C5F',
          800: '#053D3F',
          900: '#021E20',
        },
        secondary: {
          DEFAULT: '#F6911E',
          50: '#FEF3E6',
          100: '#FDE7CC',
          200: '#FBCF99',
          300: '#F9B866',
          400: '#F7A033',
          500: '#F6911E',
          600: '#C57418',
          700: '#945712',
          800: '#623A0C',
          900: '#311D06',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#334155',
            h1: {
              fontWeight: '700',
              letterSpacing: '-0.02em',
            },
            h2: {
              fontWeight: '700',
              letterSpacing: '-0.02em',
            },
            h3: {
              fontWeight: '600',
              letterSpacing: '-0.01em',
            },
            h4: {
              fontWeight: '600',
              letterSpacing: '-0.01em',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
