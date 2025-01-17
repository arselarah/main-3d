import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
})

export default function HorizontalDrag() {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: targetRef })

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-200%'])
  return (
    <>
      <section
        className='draggableSlider h-[400vh] tracking-widest'
        ref={targetRef}
      >
        <div className='draggableSlider_container sticky top-0 h-screen overflow-hidden'>
          <motion.div
            className='dragableSlider_images grid auto-cols-[100%] grid-flow-col'
            style={{ x }}
          >
            <div className='draggableSlider_item h-screen w-screen'>
              <div className='draggableSlider_content impresora-uno relative h-full w-full bg-cover bg-no-repeat'>
                <div className='absolute inset-0 left-0 top-0 bg-black bg-opacity-45'>
                  <motion.div
                    initial={{ opacity: 0, y: '100px' }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5, ease: 'linear' }}
                    className={`absolute left-4 top-1/4 p-4 lg:left-16 lg:p-8 ${poppins.className}`}
                  >
                    <h2 className='border-b-[1px] border-white pb-4 text-clamp-xl font-light leading-none text-white'>
                      Advanced research
                      <br />
                      and printing materials
                    </h2>
                    <p className='max-w-[350px] pt-6 text-clamp-sm font-light text-white md:max-w-[520px] lg:max-w-[640px]'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      In non tincidunt eros.
                    </p>
                    <div className='group mt-12 w-full max-w-[450px] rounded-full bg-white bg-opacity-15 py-2 transition-all duration-300 ease-[cubic-bezier(.51,.92,.24,1.15)] hover:bg-opacity-100'>
                      <Link
                        href={'/'}
                        className='block text-center uppercase text-white transition-all duration-300 ease-[cubic-bezier(.51,.92,.24,1.15)] group-hover:text-negro'
                      >
                        Descubre más
                      </Link>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
            <div className='draggableSlider_item h-screen w-screen'>
              <div className='draggableSlider_content impresora-dos relative h-full w-full bg-cover bg-no-repeat'>
                <div className='absolute inset-0 left-0 top-0 bg-black bg-opacity-45'>
                  <motion.div
                    initial={{ opacity: 0, y: '100px' }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5, ease: 'linear' }}
                    className='absolute left-4 top-1/4 p-4 lg:left-16 lg:p-8'
                  >
                    <h2 className='border-b-[1px] border-white pb-4 text-clamp-xl font-light leading-none text-white'>
                      Advanced research
                      <br />
                      and printing materials
                    </h2>
                    <p className='max-w-[350px] pt-6 text-clamp-sm font-light text-white md:max-w-[520px] lg:max-w-[640px]'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      In non tincidunt eros.
                    </p>
                    <div className='group mt-12 w-full max-w-[450px] rounded-full bg-white bg-opacity-15 py-2 transition-all duration-300 ease-[cubic-bezier(.51,.92,.24,1.15)] hover:bg-opacity-100'>
                      <Link
                        href={'/'}
                        className='block text-center uppercase text-white transition-all duration-300 ease-[cubic-bezier(.51,.92,.24,1.15)] group-hover:text-negro'
                      >
                        Descubre más
                      </Link>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
            <div className='draggableSlider_item h-screen w-screen'>
              <div className='draggableSlider_content impresora-tres relative h-full w-full bg-cover bg-no-repeat'>
                <div className='absolute inset-0 left-0 top-0 bg-black bg-opacity-45'>
                  <motion.div
                    initial={{ opacity: 0, y: '100px' }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5, ease: 'linear' }}
                    className='absolute left-4 top-1/4 p-4 lg:left-16 lg:p-8'
                  >
                    <h2 className='border-b-[1px] border-white pb-4 text-clamp-xl font-light leading-none text-white'>
                      Advanced research
                      <br />
                      and printing materials
                    </h2>
                    <p className='max-w-[350px] pt-6 text-clamp-sm font-light text-white md:max-w-[520px] lg:max-w-[640px]'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      In non tincidunt eros.
                    </p>
                    <div className='group mt-12 w-full max-w-[450px] rounded-full bg-white bg-opacity-15 py-2 transition-all duration-300 ease-[cubic-bezier(.51,.92,.24,1.15)] hover:bg-opacity-100'>
                      <Link
                        href={'/'}
                        className='block text-center uppercase text-white transition-all duration-300 ease-[cubic-bezier(.51,.92,.24,1.15)] group-hover:text-negro'
                      >
                        Descubre más
                      </Link>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
