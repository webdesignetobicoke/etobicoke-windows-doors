import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'ew-black':    '#0A0A0A',
        'ew-white':    '#FFFFFF',
        'ew-off':      '#F8F7F4',
        'ew-red':      '#f26924',
        'ew-gray-100': '#F0EEE9',
        'ew-gray-300': '#C8C5BE',
        'ew-gray-500': '#7A786F',
        'ew-gray-700': '#3A3830',
      },
      fontFamily: {
        bebas:      ['var(--font-bebas)', 'sans-serif'],
        syne:       ['var(--font-syne)', 'sans-serif'],
        instrument: ['var(--font-instrument)', 'serif'],
      },
    },
  },
  plugins: [],
}
export default config
