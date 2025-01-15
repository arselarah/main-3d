import { motion } from 'framer-motion'
import { Poppins } from 'next/font/google'
import Image from 'next/image'
import { useState } from 'react'
import { escaneres } from '@/data/data'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
})
export default function Escaneres() {
  return (
    <>
      <section
        className={`relative min-h-screen w-full p-4 lg:p-8 ${poppins.className}`}
      >
        <article className='relative min-h-screen w-full bg-fondo_claro p-4 lg:p-16'>
          <div className='titleContainer border-b-[1px] border-gray-500 pb-20 text-black'>
            <motion.h3 className='pb-4 text-center text-clamp-sm font-medium'>
              Escáneres 3D
            </motion.h3>
            <motion.h2 className='mx-auto max-w-[840px] text-center text-clamp-lg font-semibold leading-none'>
              Da vida a la geometría de tus piezas mediante la tecnología de
              Scantech
            </motion.h2>
          </div>

          <div className='relative flex h-[80vh] w-full flex-row flex-nowrap'>
            <div className='relative h-full w-full'>
              <div className='escaneres_contenedor h-full p-4 lg:p-16'>
                {escaneres.map((escaner, titulo, texto, imagen, index) => (
                  <div
                    key={escaner.index}
                    className='escaneres_intem cursor-pointer py-8'
                  >
                    <h4 className='max-w-[240px] text-clamp-sm font-medium text-black'>
                      {escaner.titulo}
                    </h4>
                    <p className='max-w-[240px] text-gris_oscuro'>
                      {escaner.texto}
                    </p>
                    {/* <div className='absolute left-1/2 top-1/2 aspect-square w-3/4 max-w-2xl -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border-2 border-negro'>
                      <Image
                        src={escaner.imagen}
                        alt={escaner.titulo}
                        fill
                        className='object-contain transition-all duration-500'
                      /> 
                    </div>*/}
                  </div>
                ))}
              </div>
              <div className='modal-container absolute right-0 top-0 h-96 w-96 bg-white'>
                <div className='modal-slider h-full w-full'>
                  {escaneres.map((modalT, index) => {
                    const { imagen, titulo } = modalT
                    return (
                      <div key={index} className='relative h-full w-full'>
                        <Image
                          src={imagen}
                          fill
                          alt={titulo}
                          className='object-contain'
                        />
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
    </>
  )
}
