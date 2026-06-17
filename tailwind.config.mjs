/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Warna khas Kampung Lotaq - Oranye Sunset Kalimantan & Hijau Sawah
        sunset: {
          50: '#FEF5EC',
          100: '#FCE7CF',
          200: '#F9CC9A',
          300: '#F5AD65',
          400: '#F39C12',
          500: '#E67E22',  // Primary - Oranye Sunset Mahakam
          600: '#CA6510',
          700: '#A14F0D',
          800: '#7A3D0A',
          900: '#5C2D08',
        },
        sawah: {
          50: '#E8F8EE',
          100: '#C8EFD5',
          200: '#92DFAB',
          300: '#5BCF81',
          400: '#2ECC71',
          500: '#27AE60',  // Secondary - Hijau Sawah Tropis
          600: '#1F8B4D',
          700: '#1E8449',
          800: '#176235',
          900: '#0F4123',
        },
        tanah: {
          50: '#F9F3EB',
          100: '#F0E1CC',
          200: '#DCB789',
          300: '#B7884E',
          400: '#8B5E2A',
          500: '#704214',  // Coklat tanah/kayu untuk aksen
          600: '#5B3510',
          700: '#46280C',
          800: '#311C08',
          900: '#1D1005',
        },
        krem: {
          50: '#FFFDF7',
          100: '#FFF8E7',  // Background krem hangat
          200: '#FFF1CF',
          300: '#FFE9B7',
          400: '#FFE19F',
        },
        emas: {
          400: '#F4A800',  // Aksen emas panen
          500: '#D89600',
        }
      },
      fontFamily: {
        // Display: Plus Jakarta Sans - khas Indonesia modern
        display: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        // Body: Inter - readable & profesional
        body: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        // Headline: Fraunces - karakteristik & hangat seperti budaya Kaltim
        headline: ['Fraunces', 'Georgia', 'serif'],
      },
      fontSize: {
        'display': ['clamp(2.5rem, 5vw + 1rem, 4.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'hero': ['clamp(2rem, 4vw + 0.5rem, 3.5rem)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
      },
      maxWidth: {
        'prose-wide': '72ch',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'gradient-sunset': 'linear-gradient(135deg, #E67E22 0%, #F39C12 50%, #F4A800 100%)',
        'gradient-sawah': 'linear-gradient(135deg, #27AE60 0%, #2ECC71 100%)',
        'gradient-hero': 'linear-gradient(180deg, rgba(230,126,34,0.92) 0%, rgba(39,174,96,0.88) 100%)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
