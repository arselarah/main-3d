import { motion } from 'framer-motion'
import { Poppins } from 'next/font/google'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
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
  const [modal, setModal] = useState({ active: false, index: 0 })
  const { active, index } = modal
  const container = useRef(null)

  return (
    <>
      <section
        className={`relative w-full px-4 pt-20 lg:px-8 lg:pt-40 ${poppins.className}`}
      >
        <article className='relative w-full rounded-3xl bg-fondo_claro p-4 lg:p-16'>
          <div className='titleContainer border-b-[1px] border-gray-500 pb-20 text-black'>
            <motion.h3 className='pb-4 text-center text-clamp-sm font-medium'>
              Escáneres 3D
            </motion.h3>
            <motion.h2 className='mx-auto max-w-[840px] text-center text-clamp-lg font-semibold leading-none'>
              Da vida a la geometría de tus piezas mediante la tecnología de
              Scantech
            </motion.h2>
          </div>

          <div className='relative h-auto w-full p-4 lg:p-16'>
            <div className='relative flex h-full w-full flex-row flex-nowrap justify-stretch'>
              <div className='escaneres_contenedor h-full flex-1'>
                {escaneres.slice(0, 4).map((escaner, index) => (
                  <div
                    key={index}
                    className='escaneres_intem group relative cursor-pointer py-8 transition-all duration-1000 hover:translate-x-5'
                    onMouseEnter={() => {
                      setModal({ active: true, index })
                    }}
                    onMouseLeave={() => {
                      setModal({ active: false, index })
                    }}
                  >
                    <h4 className='text-clamp-sm font-medium text-black md:max-w-[240px]'>
                      {escaner.titulo}
                    </h4>
                    <p className='text-gris_oscuro md:max-w-[240px]'>
                      {escaner.texto}
                    </p>
                    <Link
                      className='mas-info absolute right-0 top-1/2 z-10 hidden rounded-full border-[1px] border-negro bg-negro px-8 py-2 text-white opacity-0 transition-all duration-300 hover:bg-transparent hover:text-negro group-hover:opacity-100 md:block'
                      href={'/'}
                    >
                      Más Información
                    </Link>
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

              <div className='pointer-events-none relative flex-1 items-center justify-center md:flex'>
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
                          className='object-contain'
                        />
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              <div className='escaneres_contenedor h-full flex-1'>
                {escaneres.slice(4, 8).map((escaner, index) => (
                  <div
                    key={index}
                    className='escaneres_intem group relative flex w-full cursor-pointer flex-col items-end py-8 transition-all duration-1000 hover:-translate-x-5'
                    onMouseEnter={() => {
                      setModal({ active: true, index })
                    }}
                    onMouseLeave={() => {
                      setModal({ active: false, index })
                    }}
                  >
                    <div>
                      <h4 className='text-clamp-sm font-medium text-black md:max-w-[240px]'>
                        {escaner.titulo}
                      </h4>
                      <p className='text-gris_oscuro md:max-w-[240px]'>
                        {escaner.texto}
                      </p>
                    </div>

                    <Link
                      className='mas-info absolute left-0 top-1/2 z-10 hidden rounded-full border-[1px] border-negro bg-negro px-8 py-2 text-white opacity-0 transition-all duration-300 hover:bg-transparent hover:text-negro group-hover:opacity-100 md:block'
                      href={'/'}
                    >
                      Más Información
                    </Link>
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
          <div className='titleContainer py-20 text-black'>
            <div className='group mx-auto mt-12 w-full max-w-[450px] rounded-full border-[1px] border-negro bg-negro py-2 transition-all duration-300 hover:bg-transparent'>
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
