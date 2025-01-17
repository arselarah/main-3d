import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
// import { Poppins } from 'next/font/google'

// const poppins = Poppins({
//   subsets: ['latin'],
//   weight: ['100', '200', '300', '400', '500', '600', '700'],
// })

export default function Impresoras({
  i,
  tituloPequeño,
  tituloGrande,
  tituloCaracteristicas,
  subtituloUno,
  subtituloDos,
  subtituloTres,
  textoUno,
  textoDos,
  textoTres,
  imagen,
  progress,
  range,
  targetScale,
}) {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  })
  const scale = useTransform(progress, range, [1, targetScale])

  const slide1 = useTransform(scrollYProgress, [0, 1], ['50px', '0px'])
  const slide2 = useTransform(scrollYProgress, [0, 1], ['-50px', '0px'])
  const scale2 = useTransform(scrollYProgress, [0, 1], [0.8, 1])

  return (
    <motion.div
      style={{ scale }}
      ref={container}
      className='relative top-0 h-auto min-h-screen md:sticky'
    >
      <div className='flex h-auto min-h-screen w-full flex-col justify-center rounded-3xl bg-fondo_claro p-4 md:p-8'>
        <div className='relative mx-auto flex h-full max-h-[1080px] w-full flex-col justify-center lg:w-[83vw]'>
          <div className='titleContainer overflow-hidden border-b-[1px] border-gray-500 pb-20 text-black'>
            <motion.h3
              //   initial={{ opacity: 0, x: '-50px' }}
              //   whileInView={{ opacity: 1, x: 0 }}
              //   viewport={{ once: false }}
              //   transition={{ delay: 0.3, duration: 1, ease: 'linear' }}
              style={{ x: slide1, opacity: scrollYProgress }}
              className='pb-4 text-center text-clamp-sm font-medium'
            >
              {tituloPequeño}
            </motion.h3>
            <motion.h2
              //   initial={{ opacity: 0, x: '50px' }}
              //   whileInView={{ opacity: 1, x: 0 }}
              //   viewport={{ once: false }}
              //   transition={{ delay: 0.3, duration: 1, ease: 'linear' }}
              style={{ x: slide1, opacity: scrollYProgress }}
              className='mx-auto max-w-[840px] text-center text-clamp-lg font-semibold leading-none'
            >
              {tituloGrande}
            </motion.h2>
          </div>
          <motion.div
            // style={{ scale: scale2, opacity: scrollYProgress }}
            className='infoContainer mt-20 flex flex-col items-stretch justify-between gap-4 md:flex-row md:gap-8'
          >
            <motion.div
              //   initial={{ opacity: 0, y: '50px' }}
              //   whileInView={{ opacity: 1, y: 0 }}
              //   viewport={{ once: false }}
              //   transition={{ delay: 0.9, duration: 1, ease: 'linear' }}
              style={{ x: slide2 }}
              className='textContainer max-w-[800px] flex-1 2xl:flex-initial'
            >
              <div className='textContainer_title pb-4 md:pb-8'>
                <h4 className='pr-[20%] text-clamp-sm font-medium leading-snug text-black'>
                  {tituloCaracteristicas}
                </h4>
              </div>
              <div className='textContainer_caracteristicas flex flex-row flex-wrap gap-4 md:gap-8'>
                <div className='mb:pb-8 w-full flex-initial pb-4 pr-[50%]'>
                  <h4 className='text-clamp-sm font-medium text-black'>
                    {subtituloUno}
                  </h4>
                  <p className='text-gris_oscuro'>{textoUno}</p>
                </div>
                <div className='flex-1'>
                  <h4 className='text-clamp-sm font-medium text-black'>
                    {subtituloDos}
                  </h4>
                  <p className='text-gris_oscuro'>{textoDos}</p>
                </div>
                <div className='flex-1'>
                  <h4 className='text-clamp-sm font-medium text-black'>
                    {subtituloTres}
                  </h4>
                  <p className='text-gris_oscuro'>{textoTres}</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              //   initial={{ opacity: 0, y: '50px' }}
              //   whileInView={{ opacity: 1, y: 0 }}
              //   viewport={{ once: false }}
              //   transition={{ delay: 0.6, duration: 1, ease: 'linear' }}
              className='imageContainer min-h-[300px] w-full max-w-[800px] flex-1 2xl:min-h-[420px] 2xl:flex-initial'
            >
              <motion.div
                style={{ opacity: scrollYProgress }}
                className='relative h-full min-h-[300px] w-full'
              >
                <Image src={imagen} fill className='object-contain' />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
