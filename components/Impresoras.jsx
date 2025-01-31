import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
})

export default function Impresoras() {
  // const container = useRef(null)
  // const containerDos = useRef(null)
  // const { scrollYProgress: scrollSecondCard } = useScroll({
  //   target: container,
  //   offset: ['start end', 'start start'],
  // })
  //const hide1 = useTransform(scrollSecondCard, [0, 1], [1, 0])
  // const backgroundColor1 = useTransform(
  //   scrollSecondCard,
  //   [0, 1],
  //   ['#EEF3ED', '#b2b2b2'],
  // )

  // const { scrollYProgress: scrollThirdCard } = useScroll({
  //   target: containerDos,
  //   offset: ['start end', 'start start'],
  // })
  //const hide2 = useTransform(scrollThirdCard, [0, 1], [1, 0])
  // const backgroundColor2 = useTransform(
  //   scrollThirdCard,
  //   [0, 1],
  //   ['#EEF3ED', '#b2b2b2'],
  // )
  return (
    <section
      className={`relative mx-4 mb-[3vw] lg:mx-8 lg:mb-[6vw] ${poppins.className} rounded-3xl bg-fondo_claro`}
    >
      <div
        // initial={{ opacity: 0, y: '50px' }}
        // whileInView={{ opacity: 1, y: 0 }}
        // viewport={{ once: true }}
        // transition={{ delay: 0.3, duration: 0.5, ease: 'linear' }}
        className='relative flex h-auto items-center pb-[6vw] pt-[4vw]'
      >
        <motion.div
          //style={{ backgroundColor: backgroundColor1 }}
          className='relative flex h-auto w-full flex-col items-center justify-center overflow-hidden p-4 md:p-8'
        >
          <motion.div
            //style={{ opacity: hide1 }}
            className='relative mx-auto flex h-full max-h-[1080px] w-full flex-col justify-center lg:w-[83vw]'
          >
            <div className='titleContainer overflow-hidden pb-[2vw] text-black lg:pb-[3vw]'>
              <motion.h3
                initial={{ opacity: 0, y: '3rem' }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5, ease: 'linear' }}
                className='pb-4 text-center text-clamp-sm font-medium'
              >
                IT3D H56
              </motion.h3>
              <motion.h2
                initial={{ opacity: 0, y: '3rem' }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5, ease: 'linear' }}
                className='mx-auto max-w-[840px] text-center text-clamp-lg font-semibold leading-none'
              >
                Alta Velocidad y Gran Volumen de Impresión
              </motion.h2>
            </div>
            <motion.div className='infoContainer mt-[2vw] flex flex-col items-stretch justify-between gap-4 md:flex-row md:gap-8 lg:mt-[3vw]'>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5, ease: 'linear' }}
                className='textContainer max-w-[800px] flex-1 2xl:flex-initial'
              >
                <div className='textContainer_title pb-4 md:pb-8'>
                  <h4 className='pr-[20%] text-clamp-sm font-medium leading-snug text-black'>
                    La impresora IT3D H56 es la solución ideal para
                    profesionales y empresas que necesitan resultados precisos,
                    veloces y de alta calidad a un precio accesible.
                  </h4>
                </div>
                <div className='textContainer_caracteristicas flex flex-row flex-wrap gap-4 md:gap-8'>
                  <div className='mb:pb-8 w-full flex-initial pb-4 pr-[50%]'>
                    <h4 className='text-clamp-sm font-medium text-black'>
                      Más de 10x más rápida
                    </h4>
                    <p className='text-gris_oscuro'>
                      Dramatic time and cost savings compared to wax room and
                      legacy SLA
                    </p>
                  </div>
                  <div className='flex-1'>
                    <h4 className='text-clamp-sm font-medium text-black'>
                      Automatizada
                    </h4>
                    <p className='text-gris_oscuro'>
                      Dramatic time and cost savings compared to wax room and
                      legacy SLA
                    </p>
                  </div>
                  <div className='flex-1'>
                    <h4 className='text-clamp-sm font-medium text-black'>
                      Escalable
                    </h4>
                    <p className='text-gris_oscuro'>
                      Dramatic time and cost savings compared to wax room and
                      legacy SLA
                    </p>
                  </div>
                  <div className='w-full'>
                    <div className='group relative w-full max-w-[250px] rounded-full border-[1px] border-negro bg-negro py-2 transition-all duration-300 hover:bg-transparent'>
                      <Link
                        href={'/'}
                        className='block text-center uppercase text-white transition-all duration-300 group-hover:text-negro'
                      >
                        Mas información
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5, ease: 'linear' }}
                className='imageContainer min-h-[300px] w-full max-w-[800px] flex-1 2xl:min-h-[420px] 2xl:flex-initial'
              >
                <motion.div className='relative h-full min-h-[300px] w-full'>
                  <Image
                    src={'/assets/banner-landing-H56.webp'}
                    fill
                    className='object-contain'
                  />
                </motion.div>
              </motion.div>
            </motion.div>
            {/* <motion.div
              initial={{ opacity: 0, y: '50px' }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.3, duration: 0.5, ease: 'linear' }}
              className='titleContainer relative text-black'
            >
              <div className='group relative mx-auto mt-12 w-full max-w-[450px] rounded-full border-[1px] border-negro bg-negro py-2 transition-all duration-300 hover:bg-transparent'>
                <Link
                  href={'/'}
                  className='block text-center uppercase text-white transition-all duration-300 group-hover:text-negro'
                >
                  Mas información
                </Link>
              </div>
            </motion.div> */}
          </motion.div>
        </motion.div>
      </div>
      <article className='relative h-[1px] w-full'>
        <div className='relative mx-auto h-[1px] w-[90%] bg-black'></div>
      </article>
      <div
        // initial={{ opacity: 0, y: '50px' }}
        // whileInView={{ opacity: 1, y: 0 }}
        // viewport={{ once: true }}
        // transition={{ delay: 0.3, duration: 0.5, ease: 'linear' }}
        //ref={container}
        className='relative flex h-auto items-center py-[6vw]'
      >
        <motion.div
          //style={{ backgroundColor: backgroundColor2 }}
          className='relative flex h-auto w-full flex-col items-center justify-center overflow-hidden p-4 md:p-8'
        >
          <motion.div
            //style={{ opacity: hide2 }}
            className='relative mx-auto flex h-full max-h-[1080px] w-full flex-col justify-center lg:w-[83vw]'
          >
            <div className='titleContainer overflow-hidden pb-[2vw] text-black lg:pb-[3vw]'>
              <motion.h3
                initial={{ opacity: 0, y: '3rem' }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5, ease: 'linear' }}
                className='pb-4 text-center text-clamp-sm font-medium'
              >
                NX 300 Modular
              </motion.h3>
              <motion.h2
                initial={{ opacity: 0, y: '3rem' }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5, ease: 'linear' }}
                className='mx-auto max-w-[840px] text-center text-clamp-lg font-semibold leading-none'
              >
                Configuración con uno o dos extrusores de pellets o filamento
              </motion.h2>
            </div>
            <motion.div className='infoContainer mt-[2vw] flex flex-col items-stretch justify-between gap-4 md:flex-row md:gap-8 lg:mt-[3vw]'>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5, ease: 'linear' }}
                className='textContainer max-w-[800px] flex-1 2xl:flex-initial'
              >
                <div className='textContainer_title pb-4 md:pb-8'>
                  <h4 className='pr-[20%] text-clamp-sm font-medium leading-snug text-black'>
                    La impresora 3D Tumaker NX 300 ofrece configuración con uno
                    o dos extrusores de pellets o filamento, adaptados al
                    trabajo.
                  </h4>
                </div>
                <div className='textContainer_caracteristicas flex flex-row flex-wrap gap-4 md:gap-8'>
                  <div className='mb:pb-8 w-full flex-initial pb-4 pr-[50%]'>
                    <h4 className='text-clamp-sm font-medium text-black'>
                      Más de 10x más rápida
                    </h4>
                    <p className='text-gris_oscuro'>
                      Dramatic time and cost savings compared to wax room and
                      legacy SLA
                    </p>
                  </div>
                  <div className='flex-1'>
                    <h4 className='text-clamp-sm font-medium text-black'>
                      Automatizada
                    </h4>
                    <p className='text-gris_oscuro'>
                      Dramatic time and cost savings compared to wax room and
                      legacy SLA
                    </p>
                  </div>
                  <div className='flex-1'>
                    <h4 className='text-clamp-sm font-medium text-black'>
                      Escalable
                    </h4>
                    <p className='text-gris_oscuro'>
                      Dramatic time and cost savings compared to wax room and
                      legacy SLA
                    </p>
                  </div>
                  <div className='w-full'>
                    <div className='group relative w-full max-w-[250px] rounded-full border-[1px] border-negro bg-negro py-2 transition-all duration-300 hover:bg-transparent'>
                      <Link
                        href={'/'}
                        className='block text-center uppercase text-white transition-all duration-300 group-hover:text-negro'
                      >
                        Mas información
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5, ease: 'linear' }}
                className='imageContainer min-h-[300px] w-full max-w-[800px] flex-1 2xl:min-h-[420px] 2xl:flex-initial'
              >
                <motion.div className='relative h-full min-h-[300px] w-full'>
                  <Image
                    src={
                      '/assets/Impresora-3D-tumakaer-nx-modular-Diagonal-SinFondo-1-1.png.webp'
                    }
                    fill
                    className='object-contain'
                  />
                </motion.div>
              </motion.div>
            </motion.div>
            {/* <motion.div
              initial={{ opacity: 0, y: '50px' }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.3, duration: 0.5, ease: 'linear' }}
              className='titleContainer relative text-black'
            >
              <div className='group relative mx-auto mt-12 w-full max-w-[450px] rounded-full border-[1px] border-negro bg-negro py-2 transition-all duration-300 hover:bg-transparent'>
                <Link
                  href={'/'}
                  className='block text-center uppercase text-white transition-all duration-300 group-hover:text-negro'
                >
                  Mas información
                </Link>
              </div>
            </motion.div> */}
          </motion.div>
        </motion.div>
      </div>
      <article className='relative h-[1px] w-full'>
        <div className='relative mx-auto h-[1px] w-[90%] bg-black'></div>
      </article>
      <div
        // initial={{ opacity: 0, y: '50px' }}
        // whileInView={{ opacity: 1, y: 0 }}
        // viewport={{ once: true }}
        // transition={{ delay: 0.3, duration: 0.5, ease: 'linear' }}
        // ref={containerDos}
        className='relative flex h-auto items-center py-[6vw]'
      >
        <div className='relative flex h-auto w-full flex-col items-center justify-center overflow-hidden p-4 md:p-8'>
          <div className='relative mx-auto flex h-full max-h-[1080px] w-full flex-col justify-center lg:w-[83vw]'>
            <div className='titleContainer overflow-hidden pb-[2vw] text-black lg:pb-[3vw]'>
              <motion.h3
                initial={{ opacity: 0, y: '3rem' }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5, ease: 'linear' }}
                className='pb-4 text-center text-clamp-sm font-medium'
              >
                BIGFoot​ 500 Modular
              </motion.h3>
              <motion.h2
                initial={{ opacity: 0, y: '3rem' }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5, ease: 'linear' }}
                className='mx-auto max-w-[840px] text-center text-clamp-lg font-semibold leading-none'
              >
                Flexibilidad y precisión para grandes proyectos
              </motion.h2>
            </div>
            <motion.div className='infoContainer mt-[2vw] flex flex-col items-stretch justify-between gap-4 md:flex-row md:gap-8 lg:mt-[3vw]'>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5, ease: 'linear' }}
                className='textContainer max-w-[800px] flex-1 2xl:flex-initial'
              >
                <div className='textContainer_title pb-4 md:pb-8'>
                  <h4 className='pr-[20%] text-clamp-sm font-medium leading-snug text-black'>
                    La impresora 3D Tumaker BigFoot 500 Modular es un equipo que
                    redefine los estándares de la fabricación aditiva
                    profesional.
                  </h4>
                </div>
                <div className='textContainer_caracteristicas flex flex-row flex-wrap gap-4 md:gap-8'>
                  <div className='mb:pb-8 w-full flex-initial pb-4 pr-[50%]'>
                    <h4 className='text-clamp-sm font-medium text-black'>
                      Más de 10x más rápida
                    </h4>
                    <p className='text-gris_oscuro'>
                      Dramatic time and cost savings compared to wax room and
                      legacy SLA
                    </p>
                  </div>
                  <div className='flex-1'>
                    <h4 className='text-clamp-sm font-medium text-black'>
                      Automatizada
                    </h4>
                    <p className='text-gris_oscuro'>
                      Dramatic time and cost savings compared to wax room and
                      legacy SLA
                    </p>
                  </div>
                  <div className='flex-1'>
                    <h4 className='text-clamp-sm font-medium text-black'>
                      Escalable
                    </h4>
                    <p className='text-gris_oscuro'>
                      Dramatic time and cost savings compared to wax room and
                      legacy SLA
                    </p>
                  </div>
                  <div className='w-full'>
                    <div className='group relative w-full max-w-[250px] rounded-full border-[1px] border-negro bg-negro py-2 transition-all duration-300 hover:bg-transparent'>
                      <Link
                        href={'/'}
                        className='block text-center uppercase text-white transition-all duration-300 group-hover:text-negro'
                      >
                        Mas información
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5, ease: 'linear' }}
                className='imageContainer min-h-[300px] w-full max-w-[800px] flex-1 2xl:min-h-[420px] 2xl:flex-initial'
              >
                <motion.div className='relative h-full min-h-[300px] w-full'>
                  <Image
                    src={
                      '/assets/Impresora-3D-Tumaker-2.0-BF-Modular-Pegatinas-Ind-SinFondo.png.webp'
                    }
                    fill
                    className='object-contain'
                  />
                </motion.div>
              </motion.div>
            </motion.div>
            {/* <motion.div
              initial={{ opacity: 0, y: '50px' }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.3, duration: 0.5, ease: 'linear' }}
              className='titleContainer relative text-black'
            >
              <div className='group relative mx-auto mt-12 w-full max-w-[450px] rounded-full border-[1px] border-negro bg-negro py-2 transition-all duration-300 hover:bg-transparent'>
                <Link
                  href={'/'}
                  className='block text-center uppercase text-white transition-all duration-300 group-hover:text-negro'
                >
                  Mas información
                </Link>
              </div>
            </motion.div> */}
          </div>
        </div>
      </div>
    </section>
  )
}
