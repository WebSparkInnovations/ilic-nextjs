import type { Config } from 'tailwindcss';
const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        'ice-cream': {
          100: '#ED1C24',
          300: '#E21F26',
          400: '#D72229',
          500: '#CC242B',
          600: '#C1272D',
        },
        custom: {
          yellow: {
            100: '#FFBA08',
            200: '#FAA307',
          },
          orange: {
            100: '#F48C06',
            200: '#E85D04',
          },
          red: {
            100: '#DC2F02',
            200: '#D00000',
            300: '#9D0208',
            400: '#6A040F',
            500: '#370617',
            600: '#03071E',
          },
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      dropShadow: {
        border: '0px 0px 2px rgba(0, 0, 0, 1)',
        'black-sm': '1px 1px 2px rgba(0, 0, 0, 0.4)',
        'black-md': '1px 1px 4px rgba(0, 0, 0, 0.6)',
        'black-lg': '2px 2px 6px rgba(0, 0, 0, 0.8)',
        'white-border': '0px 0px 2px rgba(255, 255, 255, 1)',
        'white-sm': '1px 1px 2px rgba(255, 255, 255, 0.4)',
        'white-md': '1px 1px 4px rgba(255, 255, 255, 0.6)',
        'white-lg': '2px 2px 6px rgba(255, 255, 255, 0.8)',

        'yellow-border': '0px 0px 2px rgba(245, 158, 11, 1)',
        'yellow-sm': '1px 1px 2px rgba(245, 158, 11, 0.4)',
        'yellow-md': '2px 2px 4px rgba(245, 158, 11, 0.6)',
        'yellow-lg': '2px 2px 6px rgba(245, 158, 11, 0.8)',
        'red-border': '0px 0px 2px rgba(193, 39, 45, 1)',
      },
      backgroundImage: {
        ellipse: 'radial-gradient(ellipse at top, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require('tailwindcss-animate'), addVariablesForColors],
} satisfies Config;

export default config;

const {
  default: flattenColorPalette,
} = require('tailwindcss/lib/util/flattenColorPalette');

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme('colors'));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ':root': newVars,
  });
}
