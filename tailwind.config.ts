import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    colors: {
      'color1': '#e3fdfd',
      'color2': '#cbf1f5',
      'color3': '#a6e3e9',
      'color4': '#71c9ce',
      'color-valid': '#0f0',
      'color-invalid': '#f00',
    },
  },
  plugins: [],
};

export default config;
