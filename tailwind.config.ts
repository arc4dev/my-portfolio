import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        linkShadow: '0px 0px 25px 6px rgb(108,41,217,0.3)',
        grayShadow: '0px 0px 40px 20px rgba(51,51,51,0.30)',
      },
      backgroundColor: {
        bgColor: '#272C33',
        bgColorDarker: '#16191d',
      },
      colors: {
        action: 'rgb(108, 41, 217, 0.3)',
        actionLight: 'rgb(108, 41, 217)',
        actionGradient:
          'radial-gradient(79.69% 102.24% at 100% 100.11%, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0)), radial-gradient(89.7% 115.09% at 3.43% 2.75%, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0)), rgb(108, 41, 217)',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
export default config;
