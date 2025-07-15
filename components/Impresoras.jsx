import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { Poppins } from 'next/font/google'
import { impresoras } from '@/data/data'
import { useRef } from 'react'
//import FondoSvg from './FondoSvg'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
})

export default function Impresoras() {
  const refSVG = useRef(null)

  const { scrollYProgress } = useScroll({
    target: refSVG,
    offset: ['start end', 'end start'],
  })

  const { scrollYProgress: scrollLogo } = useScroll({
    target: refSVG,
    offset: ['start .6', 'end start'],
  })

  //const { scrollYProgress } = useScroll()

  const draw = useTransform(scrollLogo, [0, 0.1, 1], [900, 900, 0])
  //const linea = useTransform(scrollLogo, [0, 0.1, 1], ['0%', '0%', '100%'])
  const mover = useTransform(scrollYProgress, [0, 0.5, 1], ['0%', '0%', '50%'])
  const escalar = useTransform(scrollYProgress, [0, 1], [4, 2])
  //const rotar = useTransform(scrollYProgress, [0, 1], ['0deg', '15deg'])
  //const escalarShape = useTransform(scrollYProgress, [0, 1], [0.5, 2])

  return (
    <section
      className={`relative mx-4 my-16 lg:mx-8 lg:my-32 ${poppins.className} h-[300hv] overflow-clip rounded-3xl bg-fondo_claro`}
    >
      <div className='absolute left-0 top-0 flex w-full max-w-[80rem] items-center justify-center'></div>
      <div className='absolute bottom-0 right-0 flex w-full max-w-[80rem] items-center justify-center'></div>
      <div
        ref={refSVG}
        className='absolute flex h-full w-full flex-col items-center justify-start'
      >
        {/* <motion.div
          className='absolute w-[1px] origin-top bg-black bg-opacity-20'
          style={{ height: linea }}
        /> */}
        <motion.div
          className='sticky top-1/3 z-[1] flex w-full justify-center lg:w-[25%]'
          style={{ translateY: mover, scale: escalar }}
        >
          <motion.svg viewBox='0 0 734 149' fill='none' className='w-[90%]'>
            <motion.path
              d='M231.08 44.09C231.38 44.87 231.69 45.65 231.99 46.44C235.05 54.4 238.17 62.5 241.34 70.75C245.02 80.4 248.93 90.63 253.09 101.43C257.28 112.3 261.7 123.75 266.37 135.77H243.5C242.11 135.77 240.87 134.92 240.38 133.63C236.34 123.02 232.22 112.28 228.02 101.43C227.9 101.13 223.69 90.1 221.48 84.49C220.48 81.94 219.48 79.37 218.47 76.79M231.08 44.09C230.63 45.26 230.19 46.43 229.74 47.62C227.82 52.61 225.86 57.69 223.85 62.87C222.03 67.53 220.24 72.17 218.47 76.79M231.08 44.09C232.36 40.73 233.64 37.45 234.92 34.24C236.94 39.52 239.05 45.03 241.25 50.78C243.46 56.54 245.66 62.29 247.87 68.05C250.08 73.8 252.28 79.48 254.49 85.09C256.69 90.7 258.75 96.05 260.67 101.13C265.02 112.36 273.18 132.64 278.26 145.84C278.77 147.14 280.02 148 281.41 148H304.27C294.96 124.03 281.72 90.73 274.34 71.35C271.17 63.11 268.06 55 264.99 47.04C261.92 39.08 259.11 31.87 256.57 25.39C254.03 18.92 251.94 13.55 250.32 9.28C248.68 5.01 247.73 2.5 247.44 1.73H222.26C222.07 2.21 221.18 4.49 219.6 8.56C219.23 9.51 218.84 10.52 218.43 11.59M218.47 76.79C218.27 77.31 218.08 77.82 217.88 78.33C215.91 83.46 213.99 88.45 212.12 93.29C210.25 98.14 208.5 102.71 206.87 107.03C203.04 117.2 199.25 127.03 195.51 136.52H170.33C179.83 111.87 188.31 89.82 195.79 70.35C198.96 62 202.1 53.83 205.22 45.82C205.45 45.23 205.68 44.64 205.91 44.05M205.91 44.05C204.53 40.48 203.21 37.01 201.92 33.64C200.19 37.95 198.47 42.41 196.74 47.01C194.82 52 192.86 57.08 190.84 62.26C188.83 67.44 186.84 72.6 184.87 77.73C182.91 82.86 180.99 87.85 179.12 92.69C177.25 97.53 175.5 102.11 173.87 106.43C170.03 116.59 166.25 126.42 162.51 135.92H137.33C146.82 111.27 155.31 89.21 162.79 69.74C165.96 61.4 169.1 53.22 172.21 45.22C175.33 37.21 178.11 30.02 180.56 23.64C183 17.26 185.02 12.03 186.6 7.96C188.18 3.88 189.07 1.61 189.26 1.12H214.44C214.72 1.89 215.68 4.41 217.31 8.68C217.66 9.6 218.03 10.57 218.43 11.59M205.91 44.05C208.74 36.75 211.29 30.15 213.56 24.24C215.44 19.35 217.06 15.13 218.43 11.59M350.72 0.84H374.17L422.94 90.16V0.84H446.39V136.01H424.42C423.33 136.01 422.32 135.42 421.79 134.47L374.17 48.89V135.78H354.15C352.26 135.78 350.72 134.25 350.72 132.35V0.84ZM580.9 73.7C571.91 59.62 555.78 56.45 550.28 55.76L580.9 20.43V0.5H485.36V25.91H543.34L516.05 56.91H515.85V78.03H535.66C536.84 78.17 538.34 78.42 540.24 78.82C548.26 80.51 555.71 86.5 555.26 93.84C554.81 101.18 552.78 111.68 530.08 112.25C507.38 112.81 491.23 99.83 491.23 99.83L478.58 124C478.58 124 496.42 138.34 530.64 138.34C560.57 138.34 579.76 127.16 585.19 106.38C590.61 85.6 580.9 73.7 580.9 73.7ZM715.14 21.34C702.92 9.39 682.43 0.5 663.98 0.5H596.67V136.07H663.98C684.1 136.07 704.97 127.15 716.83 113.37C727.77 100.65 733.32 85.6 733.32 68.28C733.32 49.29 727.72 33.64 715.14 21.33V21.34ZM691.01 96.47C683.6 105.08 670.55 110.66 657.97 110.66H628.06V25.91H657.97C669.5 25.91 682.31 31.46 689.95 38.94C697.82 46.63 701.32 56.42 701.32 68.29C701.32 79.11 697.85 88.53 691.01 96.48V96.47ZM310.48 134.55V0.84H333.93V136.01H312.04C311.18 136.01 310.48 135.36 310.48 134.55ZM0.5 0.84H20.09L63.73 105.28L107.36 0.84H126.8V136.01H106.61C104.81 136.01 103.35 134.55 103.35 132.75V71.05L77.09 133.79C76.58 135 75.4 135.79 74.09 135.79H52.98C51.63 135.79 50.41 134.98 49.89 133.73L23.94 71.2V132.85C23.94 134.6 22.52 136.02 20.77 136.02H0.5V0.84Z'
              stroke='black'
              strokeMiterlimit='1'
              strokeDasharray='900'
              //strokeDashoffset={{ draw }}
              strokeWidth='1'
              style={{ strokeDashoffset: draw, opacity: 0.3 }}
              // style={{ opacity: 1 }}
              // strokeDasharray={{ draw }}
              // strokeDashoffset={{ draw }}
              //style={{ pathLength: draw }}

              // variants={pathVariants}
            />
          </motion.svg>
        </motion.div>
      </div>

      {impresoras.map((impresora, index) => (
        <div
          key={index}
          className='relative z-[2] flex h-auto items-center pb-[6vw] pt-[4vw]'
        >
          <motion.div className='relative flex h-auto w-full flex-col items-center justify-center overflow-hidden p-4 md:p-8'>
            <motion.div className='relative mx-auto flex h-full max-h-[1080px] w-full flex-col justify-center lg:w-[83vw]'>
              <motion.div className='infoContainer mt-[2vw] flex flex-col items-stretch justify-between gap-4 md:flex-row md:gap-8 lg:mt-[3vw]'>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.5, ease: 'linear' }}
                  className='textContainer max-w-[800px] flex-1 2xl:flex-initial'
                >
                  <div className='titleContainer overflow-hidden pb-[2vw] text-black lg:pb-[3vw]'>
                    <motion.h3
                      initial={{ opacity: 0, y: '15px' }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3, duration: 0.5, ease: 'linear' }}
                      className='pb-4 text-start text-clamp-sm font-medium'
                    >
                      {impresora.tituloPequeño}
                    </motion.h3>
                    <motion.h2
                      initial={{ opacity: 0, y: '15px' }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3, duration: 0.5, ease: 'linear' }}
                      className='text-start text-clamp-lg font-semibold leading-none'
                    >
                      {impresora.tituloGrande}
                    </motion.h2>
                  </div>
                  <div className='textContainer_title pb-4 md:pb-8'>
                    <h4 className='text-clamp-sm font-medium leading-snug text-black md:pr-[20%]'>
                      {impresora.tituloCaracteristicas}
                    </h4>
                  </div>
                  <div className='textContainer_caracteristicas flex flex-row flex-wrap gap-4 md:gap-8'>
                    <div className='mb:pb-8 w-full flex-initial pb-4 lg:pr-[50%]'>
                      <h4 className='text-clamp-sm font-medium text-black'>
                        {impresora.subtituloUno}
                      </h4>
                      <p className='text-gris_oscuro'>{impresora.textoUno}</p>
                    </div>
                    <div className='mb:pb-8 w-full flex-initial pb-4 md:pr-[50%]'>
                      <h4 className='text-clamp-sm font-medium text-black'>
                        {impresora.subtituloDos}
                      </h4>
                      <p className='text-gris_oscuro'>{impresora.textoDos}</p>
                    </div>
                    <div className='w-full'>
                      <div className='group relative mx-auto w-full max-w-[250px] rounded-full border-[1px] border-negro bg-negro py-2 transition-all duration-300 hover:bg-transparent md:mx-0'>
                        <Link
                          href={`/${impresora.tituloPequeño.toLowerCase().replace(/\s+/g, '')}`}
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
                  className='imageContainer w-full max-w-[800px] flex-1 2xl:flex-initial'
                >
                  <motion.div className='relative flex h-full w-full justify-center md:justify-end'>
                    <Image
                      src={impresora.imagen}
                      width={0}
                      height={0}
                      className='w-[80%] object-contain'
                    />
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      ))}
    </section>
  )
}
