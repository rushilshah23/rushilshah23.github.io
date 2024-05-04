import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)'],
       },
      colors: {
        bgColor1: 'var(--color-bg1)',
        bgColor2: 'var(--color-bg2)',
        bgColor3: 'var(--color-bg3)',
        bgColor4: 'var(--color-bg4)',
        bgColor5: 'var(--color-bg5)',
        bgColor6: 'var(--color-bg6)',
        bgColor7: 'var(--color-bg7)',
        bgColor8: 'var(--color-bg8)',




        fontColor1:'var(--color-font1)',
        fontColor2:'var(--color-font2)',
        fontColor3:'var(--color-font3)',
        fontColor4:'var(--color-font4)',
        fontColor5:'var(--color-font5)',
        fontColor6:'var(--color-font6)',
        fontColor7:'var(--color-font7)',
        fontColor8:'var(--color-font8)',






    
      },
      screens:{
        'md':'500px'
      }
    },
  },

  plugins: [],
};
export default config;
