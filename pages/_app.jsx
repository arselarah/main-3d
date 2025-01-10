//import { useRouter } from "next/router";
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import '@/pages/globals.css'
import NavBar from '@/components/NavBar'

export default function App({ Component, pageProps }) {
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
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  )
}
