//import { useRouter } from "next/router";
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import '@/pages/globals.css'
import NavBar from '@/components/NavBar'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import { useEffect } from 'react'
import Footer from '@/components/footer/Footer'
import Chat from '@/components/chat/Chat'

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const lenis = new Lenis()
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])

  useEffect(() => {
    // Añadir estilos globales para el scrollbar
    const style = document.createElement('style');
    style.textContent = `
      ::-webkit-scrollbar {
        width: 8px;
      }
      ::-webkit-scrollbar-track {
        background: transparent;
      }
      ::-webkit-scrollbar-thumb {
        background: #C72020;
        border-radius: 4px;
      }
      * {
        scrollbar-width: thin;
        scrollbar-color: #C72020 transparent;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const router = useRouter()
  return (
    // <AnimatePresence exitBeforeEnter>
    <AnimatePresence mode='wait'>
      <motion.div
        key={router.route}
        initial='initialState'
        animate='animateState'
        exit='exitstate'
        transition={{
          duration: 0.75,
        }}
        variants={{
          initialState: {
            opacity: 0,
          },
          animateState: {
            opacity: 1,
          },
          exitState: {},
        }}
      >
        <NavBar />
        <Chat />
        <Component {...pageProps} />
        <Footer />
      </motion.div>
    </AnimatePresence>
  )
}
