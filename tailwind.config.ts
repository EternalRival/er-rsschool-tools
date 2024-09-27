import type { Config } from 'tailwindcss';

const config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      keyframes: {
        cube: {
          '0%': { transform: 'rotate(45deg) rotateX(-25deg) rotateY(25deg)' },
          '50%': { transform: 'rotate(45deg) rotateX(-385deg) rotateY(25deg)' },
          '100%': { transform: 'rotate(45deg) rotateX(-385deg) rotateY(385deg)' },
        },
      },
      colors: {
        'blue-chill': {
          '50': '#eefffc',
          '100': '#c5fffa',
          '200': '#8bfff5',
          '300': '#4afef0',
          '400': '#15ece2',
          '500': '#00d0c9',
          '600': '#00a8a5',
          '700': '#008c8c',
          '800': '#066769',
          '900': '#0a5757',
          '950': '#003235',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
