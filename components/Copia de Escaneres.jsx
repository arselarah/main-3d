import { motion } from 'framer-motion'
import { Poppins } from 'next/font/google'
import Image from 'next/image'

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
              <div className='escaneres_contenedor grid h-full grid-cols-2 grid-rows-2 p-4 lg:p-16'>
                {escaneres.map((escaner, titulo, texto, imagen, index) => (
                  <div
                    key={escaner.index}
                    className='escaneres_intem group flex max-w-[240px] cursor-pointer flex-col justify-center'
                  >
                    <h4 className='text-clamp-sm font-medium text-black'>
                      {escaner.titulo}
                    </h4>
                    <p className='text-gris_oscuro'>{escaner.texto}</p>
                    <div className='absolute left-1/2 top-1/2 aspect-square w-3/4 max-w-2xl -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border-2 border-negro'>
                      <Image
                        src={escaner.imagen}
                        alt={escaner.titulo}
                        fill
                        className='pointer-events-none invisible -z-10 translate-x-full object-contain opacity-0 transition-all duration-500 group-hover:visible group-hover:translate-x-0 group-hover:opacity-100 group-hover:delay-300'
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </article>
      </section>
    </>
  )
}

const escaneres = [
  {
    titulo: 'Escáner 3D ONE',
    texto: 'Dramatic time and cost savings compared to wax room and legacy SLA',
    imagen: '/assets/Escaner-3d-KSCAN-Magic.png',
  },
  {
    titulo: 'AutoScan-K',
    texto: 'Dramatic time and cost savings compared to wax room and legacy SLA',
    imagen: '/assets/escaner-3D-scantech-TrackScan-p42-27.png',
  },
  {
    titulo: 'Escáneres 3D de Metrología',
    texto: 'Dramatic time and cost savings compared to wax room and legacy SLA',
    imagen: '/assets/Trackscan-p.png.webp',
  },
  {
    titulo: 'AutoScan Customizado',
    texto: 'Dramatic time and cost savings compared to wax room and legacy SLA',
    imagen: '/assets/landing-Sistema-AutoScan-T42-3D-10.png.webp',
  },
]

// export default function Escaneres() {
//   return (
//     <>
//       <section className='relative min-h-screen w-full p-4 lg:p-8'>
//         <article className='relative min-h-screen w-full bg-fondo_claro p-4 lg:p-16'>
//           <div className='titleContainer border-b-[1px] border-gray-500 pb-20 text-black'>
//             <motion.h3
//               initial={{ opacity: 0, x: '-50px' }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: false }}
//               transition={{ delay: 0.3, duration: 1, ease: 'linear' }}
//               style={{ x: slide1, opacity: scrollYProgress }}
//               className='pb-4 text-center text-clamp-sm font-medium'
//             >
//               Escáneres 3D
//             </motion.h3>
//             <motion.h2
//               initial={{ opacity: 0, x: '50px' }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: false }}
//               transition={{ delay: 0.3, duration: 1, ease: 'linear' }}
//               style={{ x: slide1, opacity: scrollYProgress }}
//               className='mx-auto max-w-[840px] text-center text-clamp-lg font-semibold leading-none'
//             >
//               Da vida a la geometría de tus piezas mediante la tecnología de
//               Scantech
//             </motion.h2>
//           </div>
//           <div className='relative flex h-full w-full flex-row flex-nowrap bg-slate-400'>
//             <div className='h-[90vh] w-1/2 bg-slate-600'>
//               <div className='escaneres_contenedor p-4 lg:p-16'>
//                 <div className='escaneres_intem max-w-[30%]'>
//                   <h4 className='text-clamp-sm font-medium text-black'>
//                     Escáner 3D ONE
//                   </h4>
//                   <p className='text-gris_oscuro'>
//                     Dramatic time and cost savings compared to wax room and
//                     legacy SLA
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className='h-[90vh]: w-1/2 bg-slate-900'></div>
//           </div>
//         </article>
//       </section>
//     </>
//   )
// }
