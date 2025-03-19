import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      container: {
        center: true
      },
      fontFamily: {
        raleway: 'var(--font-raleway)'
      },
      colors: {
        menu: '#25272A',
        blackCustom: '#33404A',
        primary: '#1AD598',
        tertiary: '#EDEEEE',
        whiteCustom: '#F9FBFC',
        greenLight: '#a3eed6',
        heading: '#050505'
      },
      height: {
        header: '80px'
      }
    }
  },
  plugins: []
}
export default config
