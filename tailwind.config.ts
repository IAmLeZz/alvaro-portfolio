import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        '#161617': '#161617',
        '#1c1c1c': '#1c1c1c',
        '#5c5c5c': '#5c5c5c',
        '#d4d4d4': '#d4d4d4',
        '#dbdbdb': '#dbdbdb',
        '#262729': '#262729',
        '#4c4e54': '#4c4e54',
        '#1f1f1f': '#1f1f1f',
        '#00609c': '#00609c',
        '#22a4f5' : '#22a4f5'
      },
    },
  },
  plugins: [],
}
export default config
