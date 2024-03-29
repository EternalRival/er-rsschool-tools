import type { Config } from 'tailwindcss';

const config: Config = {
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
        color1: '#e3fdfd',
        color2: '#cbf1f5',
        color3: '#a6e3e9',
        color4: '#71c9ce',
      },
    },
  },
  plugins: [],
};

export default config;
