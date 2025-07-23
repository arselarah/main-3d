import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { Poppins } from 'next/font/google'
import { banners } from '@/data/data'
import useIsMobile from '@/hooks/useIsMobile' // 🆕 Importamos el hook

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
})

export default function HorizontalDrag() {
  const targetRef = useRef(null)
  const isMobile = useIsMobile() // 🆕 Usamos el hook

  // Si es mobile, desactivamos animaciones
  const { scrollYProgress } = useScroll({ target: targetRef })
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? ['0%', '0%'] : ['0%', '-200%'],
  )

  const parallaxSpeeds = [-40, -25, -10]
  const backgroundParallaxArray = parallaxSpeeds.map((speed) =>
    useTransform(
      scrollYProgress,
      [0, 1],
      isMobile ? ['50%', '50%'] : [`${50 + speed}%`, `${50 - speed}%`],
    ),
  )

  return (
    <section
      className='draggableSlider tracking-widest lg:h-[300vh]'
      ref={targetRef}
    >
      <div className='draggableSlider_container relative top-0 overflow-hidden lg:sticky lg:h-screen'>
        <motion.div
          className='dragableSlider_images h-auto auto-cols-[100%] grid-flow-col lg:grid'
          style={{ x }}
        >
          {banners.map((banner, index) => (
            <div
              key={index}
              className='draggableSlider_item relative h-screen w-screen'
            >
              <motion.div
                style={{ backgroundPositionX: backgroundParallaxArray[index] }}
                className={`draggableSlider_content ${banner.fondo} relative h-full w-full bg-cover bg-no-repeat`}
              >
                <div className='absolute inset-0 left-0 top-0 bg-black bg-opacity-45'>
                  <motion.div
                    initial={{ opacity: 0, y: '100px' }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} // Solo una vez
                    transition={{ duration: 0.5, ease: 'linear' }}
                    className='absolute left-4 top-1/4 p-4 lg:left-16 lg:p-8'
                  >
                    <h2 className='border-b-[1px] border-white pb-4 text-clamp-lg font-medium leading-none text-white'>
                      {banner.titulo}
                    </h2>
                    <p className='max-w-[350px] pt-6 text-clamp-sm font-light text-white md:max-w-[520px] lg:max-w-[640px]'>
                      {banner.textoPartes
                        ? banner.textoPartes.map((parte, i) =>
                            parte === 'Pellets' ? (
                              <strong key={i} className='font-semibold'>
                                {parte}
                              </strong>
                            ) : (
                              <span key={i}>{parte}</span>
                            ),
                          )
                        : banner.texto}
                    </p>
                    <div className='group mt-12 w-full max-w-[450px] rounded-full bg-white bg-opacity-15 py-2 transition-all duration-300 ease-[cubic-bezier(.51,.92,.24,1.15)] hover:bg-opacity-100'>
                      <Link
                        href='/'
                        className='block text-center uppercase text-white transition-all duration-300 ease-[cubic-bezier(.51,.92,.24,1.15)] group-hover:text-negro'
                      >
                        Descubre más
                      </Link>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
              {/* <div className='absolute bottom-10 right-[10%] h-10 w-10'>
                <div>
                  <p className='uppercase text-white'>{banner.material1}</p>
                  <p className='uppercase text-white'>{banner.material2}</p>
                </div>
              </div> */}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
