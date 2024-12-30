export const hudumaTheme = {
  colors: {
    primary: '#87181A',
    secondary: '#2C3E50',
    background: '#FDF8F3',
    text: '#2A2A2A',
    accent: '#D4AF37',
    tertiary: '#4A5568'
  },
  typography: {
    fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    h1: {
      fontSize: '4rem',
      fontWeight: 800,
      lineHeight: 1.1,
    },
    h2: {
      fontSize: '3rem',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.3,
    },
    body: {
      fontSize: '1.125rem',
      lineHeight: 1.6,
    }
  },
  spacing: {
    xs: '0.75rem',
    sm: '1.25rem',
    md: '2.5rem',
    lg: '3.5rem',
    xl: '5rem',
    xxl: '8rem'
  },
  animations: {
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    hover: {
      scale: 'transform: scale(1.03)',
      lift: 'transform: translateY(-6px)'
    }
  },
  borderRadius: {
    small: '6px',
    medium: '12px',
    large: '24px',
    round: '50%'
  },
  shadows: {
    small: '0 2px 8px rgba(0,0,0,0.06)',
    medium: '0 4px 12px rgba(0,0,0,0.08)',
    large: '0 8px 20px rgba(0,0,0,0.1)',
    highlight: '0 0 0 3px rgba(135, 24, 26, 0.15)'
  },
  patterns: {
    backgroundImage: "url('/images/hudumabg.png')",
    backgroundSize: '400px',
    backgroundRepeat: 'repeat',
    backgroundOpacity: '0.05'
  }
} 