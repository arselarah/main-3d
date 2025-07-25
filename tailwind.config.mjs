/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        rojo: '#C72020',
        gris_oscuro: '#6C6C6C',

        negro: '#020202',
        fondo_claro: '#E8EFFA',
        //fondo_claro: '#EEF3ED',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        'clamp-xl': 'clamp(1.8rem, 5vw, 5rem)',
        'clamp-lg': 'clamp(1.5rem, 2.5vw, 3rem)',
        'clamp-md': 'clamp(1.2rem, 1.8vw, 1.8rem)',
        'clamp-sm': 'clamp(0.85rem, 1.5vw, 1.3rem)',
        'clamp-menu': 'clamp(0.65rem, .75vw, 1rem)',
      },
    },
    screens: {
      xsm: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      lgx: '1080px',
      xl: '1440px',
      '2xl': '1660px',
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
