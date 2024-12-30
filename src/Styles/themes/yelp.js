export const yelpTheme = {
  colors: {
    primary: '#4B0082',
    secondary: '#FFD700',
    background: '#F8F9FA',
    text: '#1A1A1A',
    accent: '#E6B800',
    gradient: {
      primary: 'linear-gradient(135deg, #4B0082 0%, #800080 100%)',
      secondary: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)'
    },
    surface: {
      light: '#FFFFFF',
      dark: '#2D2D2D',
      muted: '#F0F0F0'
    }
  },
  typography: {
    fontFamily: "'Playfair Display', 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    h1: {
      fontSize: '4rem',
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: '-0.02em'
    },
    h2: {
      fontSize: '3rem',
      fontWeight: 600,
      lineHeight: 1.3,
      letterSpacing: '-0.01em'
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.4
    },
    body: {
      fontSize: '1.125rem',
      lineHeight: 1.6,
      fontFamily: "'Poppins', sans-serif"
    },
    caption: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
      fontFamily: "'Poppins', sans-serif"
    }
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '2rem',
    lg: '4rem',
    xl: '6rem',
    xxl: '8rem'
  },
  animations: {
    transition: {
      fast: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
      medium: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      slow: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
    },
    hover: {
      scale: 'transform: scale(1.05)',
      lift: 'transform: translateY(-8px)',
      glow: 'box-shadow: 0 0 20px rgba(255, 215, 0, 0.3)'
    },
    keyframes: {
      fadeIn: {
        from: { opacity: 0 },
        to: { opacity: 1 }
      },
      slideUp: {
        from: { transform: 'translateY(20px)', opacity: 0 },
        to: { transform: 'translateY(0)', opacity: 1 }
      }
    }
  },
  borderRadius: {
    small: '8px',
    medium: '12px',
    large: '24px',
    xl: '32px',
    round: '50%'
  },
  shadows: {
    small: '0 2px 8px rgba(0,0,0,0.08)',
    medium: '0 4px 16px rgba(0,0,0,0.12)',
    large: '0 8px 24px rgba(0,0,0,0.16)',
    glow: '0 0 20px rgba(255, 215, 0, 0.2)'
  },
  layout: {
    maxWidth: '1440px',
    containerPadding: '2rem',
    sectionSpacing: '6rem',
    gridGap: '2rem'
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    xxl: '1536px'
  }
} 