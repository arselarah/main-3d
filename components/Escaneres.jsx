import { motion, useScroll, useTransform } from 'framer-motion'
import { Poppins } from 'next/font/google'
import Image from 'next/image'
import { useState, useRef } from 'react'
import { escaneres } from '@/data/data'
import Link from 'next/link'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
})

const scaleAnimation = {
  initial: {
    scale: 0,
    opacity: 0,
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  open: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    opacity: 0,
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
}

export default function Escaneres() {
  const [modal, setModal] = useState({ active: true, index: 0 })
  const { active, index } = modal
  const container = useRef(null)
  const ref = useRef(null)

  // 2. Usar el hook useScroll para detectar el scroll
  const { scrollYProgress: scrollBorder } = useScroll({
    target: ref, // Elemento que se va a observar
    offset: ['start end', 'end 0.5'], // Rango de detección (cuando entra y sale del viewport)
  })

  // 3. Usar useTransform para mapear el progreso del scroll al ancho del borde
  const strokeDashoffset = useTransform(
    scrollBorder,
    [0, 1], // Rango de progreso del scroll (0 = inicio, 1 = final)
    [283, 0], // Ancho del borde (de 0% a 100%)
  )

  const rotate = useTransform(
    scrollBorder,
    [0, 1], // Rango de progreso del scroll (0 = inicio, 1 = final)
    [0, 360], // Rotación (0° a 360°)
  )

  return (
    <>
      <section
        className={`relative my-16 w-full px-4 lg:my-32 lg:px-8 ${poppins.className}`}
      >
        <article className='relative w-full rounded-3xl bg-fondo_claro p-4 lg:p-16'>
          <div className='titleContainer border-b-[1px] border-gray-500 pb-16 text-black lg:pb-32'>
            <motion.h3 className='pb-4 text-center text-clamp-sm font-medium'>
              Escáneres 3D
            </motion.h3>
            <motion.h2 className='mx-auto max-w-[840px] text-center text-clamp-lg font-semibold leading-tight'>
              Da vida a la geometría de tus piezas mediante la tecnología de
              Scantech
            </motion.h2>
          </div>

          <div className='relative h-auto w-full p-0 lg:p-16' ref={ref}>
            <div className='relative flex h-full w-full flex-col flex-nowrap items-center justify-center gap-10 md:flex-row md:gap-10'>
              <div className='escaneres_contenedor h-full flex-1'>
                {escaneres.slice(0, 3).map((escaner, index) => (
                  <div
                    key={index}
                    onMouseEnter={() => {
                      setModal({ active: true, index })
                    }}
                    onMouseLeave={() => {
                      setModal({ active: true, index })
                    }}
                    className='escaneres_intem group relative flex w-full cursor-pointer flex-col items-center justify-start gap-8 py-8 transition-all duration-1000 hover:translate-x-5 md:flex-row md:items-stretch md:gap-0'
                  >
                    <div className='md-justify-start relative flex w-full flex-col items-center justify-center md:w-1/2 md:items-start'>
                      <h4 className='text-clamp-sm font-medium text-black md:max-w-[240px]'>
                        {escaner.titulo}
                      </h4>
                      <p className='max-w-[240px] text-center text-gris_oscuro md:text-left'>
                        {escaner.texto}
                      </p>
                    </div>
                    <div className='relative flex h-auto max-h-[200px] w-1/2 items-center justify-center overflow-clip'>
                      <Image
                        alt={escaner.titulo}
                        src={escaner.imagen}
                        width={0}
                        height={0}
                        className='relative aspect-square w-full object-contain transition-transform duration-500 group-hover:scale-0 md:aspect-video md:w-[75%]'
                      />
                      <div className='-tranlate-y-1/2 absolute top-1/2 h-6 w-6 scale-0 rounded-full bg-rojo opacity-0 transition-transform duration-500 group-hover:scale-100 group-hover:opacity-100' />
                    </div>

                    <Link
                      href={`/${index}`}
                      className='absolute inset-0 left-0 top-0'
                    ></Link>
                  </div>
                ))}
              </div>
              <div className='borderAnimado relative z-[1] hidden flex-1 items-center justify-center overflow-clip rounded-full md:flex'>
                <motion.svg
                  width='100%'
                  height='100%'
                  viewBox='0 0 100 100'
                  className='absolute left-0 top-0'
                  preserveAspectRatio='xMidYMid meet' // Asegura que el SVG se escale correctamente
                  style={{ rotate }} // Aplicar la rotación al SVG
                >
                  {/* Círculo de fondo (estático) */}
                  <circle
                    cx='50'
                    cy='50'
                    r='50'
                    stroke='#020202'
                    strokeWidth='2'
                    fill='transparent'
                  />
                  {/* Círculo animado (barra de progreso) */}
                  <motion.circle
                    cx='50'
                    cy='50'
                    r='50'
                    stroke='#dadada'
                    strokeWidth='2'
                    fill='transparent'
                    strokeDasharray='283' // Circunferencia del círculo (2 * π * r)
                    style={{ strokeDashoffset }} // Aplicar la animación
                    transform='rotate(-90 50 50)' // Rotar para que comience desde arriba
                  />
                </motion.svg>
                <motion.div
                  ref={container}
                  variants={scaleAnimation}
                  initial={'initial'}
                  animate={active ? 'open' : 'closed'}
                  className='modal-container relative flex aspect-square h-full w-full flex-col items-center justify-center overflow-hidden'
                >
                  <div
                    className='modal-slider modalSlider absolute h-full w-full max-w-[640px]'
                    style={{ top: index * -100 + '%' }}
                  >
                    {escaneres.map((escaner, index) => (
                      <div key={index} className='relative h-full w-full'>
                        <Image
                          src={escaner.imagen}
                          fill
                          alt={escaner.titulo}
                          className='mx-auto max-w-[85%] object-contain'
                        />
                        {/* <div className='absolute inset-0 left-0 top-0 flex items-center justify-center'>
                          <p className=''>{escaner.titulo}</p>
                        </div> */}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
              <div className='escaneres_contenedor h-full flex-1'>
                {escaneres.slice(3, 6).map((escaner, index) => (
                  <div
                    key={index}
                    className='escaneres_intem group relative flex w-full cursor-pointer flex-col items-center justify-start gap-8 py-8 transition-all duration-1000 hover:translate-x-5 md:flex-row-reverse md:items-stretch md:gap-0'
                    onMouseEnter={() => {
                      setModal({ active: true, index: index + 3 })
                    }}
                    onMouseLeave={() => {
                      setModal({ active: true, index: index + 3 })
                    }}
                  >
                    <div className='md-justify-start relative flex w-full flex-col items-center justify-center md:w-1/2 md:items-start'>
                      <h4 className='text-clamp-sm font-medium text-black md:max-w-[240px]'>
                        {escaner.titulo}
                      </h4>
                      <p className='max-w-[240px] text-center text-gris_oscuro md:text-left'>
                        {escaner.texto}
                      </p>
                    </div>

                    <div className='relative flex h-auto max-h-[200px] w-1/2 items-center justify-center overflow-clip'>
                      <Image
                        alt={escaner.titulo}
                        src={escaner.imagen}
                        width={100}
                        height={1000}
                        className='relative aspect-square w-full object-contain transition-transform duration-500 group-hover:scale-0 md:aspect-video md:w-[75%]'
                      />
                      <div className='-tranlate-y-1/2 absolute top-1/2 h-6 w-6 scale-0 rounded-full bg-rojo opacity-0 transition-transform duration-500 group-hover:scale-100 group-hover:opacity-100' />
                    </div>
                    {/* <div className='absolute left-1/2 top-1/2 aspect-square w-3/4 max-w-2xl -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border-2 border-negro'>
                      <Image
                        src={escaner.imagen}
                        alt={escaner.titulo}
                        fill
                        className='object-contain transition-all duration-500'
                      /> 
                    </div>*/}
                    <Link
                      href={`/${index}`}
                      className='absolute inset-0 left-0 top-0'
                    ></Link>
                  </div>
                ))}
              </div>
            </div>
            {/* contenedor */}
          </div>
          <div className='titleContainer pt-16 text-black lg:pt-32'>
            <div className='group mx-auto w-full max-w-[450px] rounded-full border-[1px] border-negro bg-negro py-2 transition-all duration-300 hover:bg-transparent'>
              <Link
                href={'/'}
                className='block text-center uppercase text-white transition-all duration-300 group-hover:text-negro'
              >
                Descubre más
              </Link>
            </div>
          </div>
        </article>
      </section>
    </>
  )
}
