import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

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

  return (
    <motion.div
      style={{ scale }}
      ref={container}
      className='relative top-0 h-auto min-h-screen md:sticky'
    >
      <div className='flex h-auto min-h-screen w-full flex-col justify-center bg-[#EEF3ED] p-4 md:p-8'>
        <div className='relative mx-auto flex h-full max-h-[1080px] w-full flex-col justify-center lg:w-[83vw]'>
          <div className='titleContainer text-black'>
            <h3 className='pb-4 text-center text-clamp-sm font-medium'>
              {tituloPequeño}
            </h3>
            <h2 className='mx-auto max-w-[840px] text-center text-clamp-lg font-semibold leading-none'>
              {tituloGrande}
            </h2>
          </div>
          <div className='infoContainer mt-20 flex flex-col items-stretch gap-4 md:flex-row md:gap-8'>
            <div className='textContainer flex-1'>
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
            </div>
            <div className='imageContainer min-h-[300px] flex-1'>
              <motion.div
                style={{ opacity: scrollYProgress }}
                className='relative h-full min-h-[300px] w-full'
              >
                <Image src={imagen} fill className='object-contain' />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
