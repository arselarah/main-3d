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
        gris_oscuro: '#b2b2b2',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        'clamp-xl': 'clamp(1.8rem, 5vw, 5rem)',
        'clamp-lg': 'clamp(1.5rem, 2.5vw, 3rem)',
        'clamp-md': 'clamp(1rem, 2vw, 2rem)',
        'clamp-sm': 'clamp(0.875rem, 1.5vw, 1.5rem)',
        'clamp-menu': 'clamp(0.875rem, 1vw, 1.1rem)',
      },
    },
    screens: {
      xsm: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      lgx: '1080px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
}
