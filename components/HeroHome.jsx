import { Poppins } from 'next/font/google'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
})

export default function HeroHome() {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end start'],
  })
  const slideUp = useTransform(scrollYProgress, [0, 1], ['0%', '-25%'])
  const opacityDown = useTransform(scrollYProgress, [0, 1], [1, 0.1])
  return (
    <>
      <section
        ref={container}
        className={`hero relative h-dvh min-h-[640px] w-full ${poppins.className} hero overflow-hidden`}
      >
        <video
          autoPlay
          loop
          muted
          preload='auto'
          playsInline
          className='pointer-events-none absolute inset-0 left-0 top-0 h-full w-full object-cover'
        >
          <source src='/assets/hero_index.mp4' type='video/mp4' />
          {/* <track
            src='/path/to/captions.vtt'
            kind='subtitles'
            srcLang='en'
            label='English'
          /> */}
          Your browser does not support the video tag.
        </video>
        <div className='relative flex h-full w-full flex-col items-center justify-end bg-black bg-opacity-40'>
          <motion.div
            style={{ y: slideUp, opacity: opacityDown }}
            className='hero_text-container px-4 pb-20 tracking-widest md:pb-[10%] lg:px-8'
          >
            <h1 className='text-center text-clamp-xl font-light leading-none text-white'>
              Advanced research
              <br />
              and printing materials
            </h1>
            <p className='mx-auto max-w-[350px] pt-6 text-center text-clamp-sm font-light text-white md:max-w-[520px] lg:max-w-[640px]'>
              Soluciones en Tecnología 3D
            </p>
            <div className='group mx-auto mt-12 w-full max-w-[450px] rounded-full bg-white bg-opacity-15 py-2 transition-all duration-300 ease-[cubic-bezier(.51,.92,.24,1.15)] hover:bg-opacity-100'>
              <Link
                href={'/'}
                className='block text-center uppercase text-white transition-all duration-300 ease-[cubic-bezier(.51,.92,.24,1.15)] group-hover:text-negro'
              >
                Descubre más
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
