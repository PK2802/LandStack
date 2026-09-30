/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#FFFFFF',
        slateBg: '#F8FAFC',
        borderMuted: '#E2E8F0',
        navy: {
          900: '#0A1B30',
          800: '#0F294A',
          700: '#163B66',
          600: '#1E3A8A',
          500: '#2563EB',
          100: '#EFF6FF',
          50: '#F0F7FF',
        },
        saffron: {
          700: '#9A3412',
          600: '#C2410C',
          500: '#D97706',
          100: '#FFEDD5',
          50: '#FFF7ED',
        },
        forest: {
          700: '#14532D',
          600: '#15803D',
          500: '#16A34A',
          100: '#DCFCE7',
          50: '#F0FDF4',
        },
        crimson: {
          700: '#991B1B',
          600: '#B91C1C',
          500: '#DC2626',
          100: '#FEE2E2',
          50: '#FEF2F2',
        },
        amberGold: {
          600: '#D97706',
          500: '#F59E0B',
          100: '#FEF3C7',
          50: '#FFFBEB',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'Monaco', 'Consolas', 'Courier New', 'monospace'],
      },
      borderRadius: {
        sm: '2px',
        DEFAULT: '4px',
        md: '6px',
        lg: '8px',
      }
    },
  },
  plugins: [],
}
