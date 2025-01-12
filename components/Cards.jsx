import { Poppins } from 'next/font/google'
import { impresoras } from '@/data/data'
import Impresoras from './Impresoras'
import { motion, useScroll } from 'framer-motion'
import { useRef } from 'react'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
})

export default function Cards() {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  })
  return (
    <section
      ref={container}
      className={`relative mb-40 h-[300vh] px-4 pt-20 lg:px-8 ${poppins.className}`}
    >
      {impresoras.map((impresora, i) => {
        const targetScale = 1 - (impresoras.length - i) * 0.05
        return (
          <Impresoras
            key={i}
            i={i}
            {...impresora}
            progress={scrollYProgress}
            range={[i * 0.333, 1]}
            targetScale={targetScale}
          />
        )
      })}
    </section>
  )
}

// const Impresoras = ({
//   tituloPequeño,
//   tituloGrande,
//   tituloCaracteristicas,
//   subtituloUno,
//   subtituloDos,
//   subtituloTres,
//   textoUno,
//   textoDos,
//   textoTres,
//   imagen,
// }) => {
//   const container = useRef(null)
//   const { scrollYProgress } = useScroll({
//     target: container,
//     offset: ['star end', 'start star'],
//   })

//   return (
//     <div
//       ref={container}
//       className='relative top-0 h-auto min-h-screen md:sticky'
//     >
//       <div className='flex h-auto min-h-screen w-full flex-col justify-center bg-[#EEF3ED] p-4 md:p-8'>
//         <div className='relative mx-auto flex h-full max-h-[1080px] w-full flex-col justify-center lg:w-[83vw]'>
//           <div className='titleContainer text-black'>
//             <h3 className='pb-4 text-center text-clamp-sm font-medium'>
//               {tituloPequeño}
//             </h3>
//             <h2 className='mx-auto max-w-[840px] text-center text-clamp-lg font-semibold leading-none'>
//               {tituloGrande}
//             </h2>
//           </div>
//           <div className='infoContainer mt-20 flex flex-col items-stretch gap-4 md:flex-row md:gap-8'>
//             <div className='textContainer flex-1'>
//               <div className='textContainer_title pb-4 md:pb-8'>
//                 <h4 className='pr-[20%] text-clamp-sm font-medium leading-snug text-black'>
//                   {tituloCaracteristicas}
//                 </h4>
//               </div>
//               <div className='textContainer_caracteristicas flex flex-row flex-wrap gap-4 md:gap-8'>
//                 <div className='mb:pb-8 w-full flex-initial pb-4 pr-[50%]'>
//                   <h4 className='text-clamp-sm font-medium text-black'>
//                     {subtituloUno}
//                   </h4>
//                   <p className='text-gris_oscuro'>{textoUno}</p>
//                 </div>
//                 <div className='flex-1'>
//                   <h4 className='text-clamp-sm font-medium text-black'>
//                     {subtituloDos}
//                   </h4>
//                   <p className='text-gris_oscuro'>{textoDos}</p>
//                 </div>
//                 <div className='flex-1'>
//                   <h4 className='text-clamp-sm font-medium text-black'>
//                     {subtituloTres}
//                   </h4>
//                   <p className='text-gris_oscuro'>{textoTres}</p>
//                 </div>
//               </div>
//             </div>
//             <div className='imageContainer min-h-[300px] flex-1'>
//               <motion.div
//                 style={{ opacity: scrollYProgress }}
//                 className='relative h-full min-h-[300px] w-full'
//               >
//                 <Image src={imagen} fill className='object-contain' />
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// const Article1 = () => {
//   return (
//     <div className='relative top-0 h-auto min-h-screen md:sticky'>
//       <div className='flex h-auto min-h-screen w-full flex-col justify-center bg-[#EEF3ED] p-4 md:p-8'>
//         <div className='relative mx-auto flex h-full max-h-[1080px] w-full flex-col justify-center lg:w-[83vw]'>
//           <div className='titleContainer text-black'>
//             <h3 className='pb-4 text-center text-clamp-sm font-medium'>
//               IT3D H56
//             </h3>
//             <h2 className='mx-auto max-w-[840px] text-center text-clamp-lg font-semibold leading-none'>
//               Alta Velocidad y Gran Volumen de Impresión
//             </h2>
//           </div>
//           <div className='infoContainer mt-20 flex flex-col gap-4 md:gap-8'>
//             <div className='textContainer flex flex-col flex-nowrap justify-between lg:flex-row'>
//               <div className='textContainer_title w-full max-w-[640px] pb-4 md:pb-8'>
//                 <h4 className='max-w-[480px] text-clamp-sm font-medium leading-snug text-black'>
//                   La impresora IT3D H56 es la solución ideal para profesionales
//                   y empresas que necesitan resultados precisos, veloces y de
//                   alta calidad a un precio accesible.
//                 </h4>
//               </div>
//               <div className='textContainer_caracteristicas flex flex-row flex-wrap gap-4 md:flex-nowrap md:gap-8'>
//                 <div className='mb:pb-8 w-full max-w-[280px] flex-initial pb-4'>
//                   <h4 className='text-clamp-sm font-medium text-black'>
//                     Más de 10x más rápida
//                   </h4>
//                   <p className='text-gris_oscuro'>
//                     Dramatic time and cost savings compared to wax room and
//                     legacy SLA
//                   </p>
//                 </div>
//                 <div className='w-full max-w-[280px]'>
//                   <h4 className='text-clamp-sm font-medium text-black'>
//                     Automatizada
//                   </h4>
//                   <p className='text-gris_oscuro'>
//                     Dramatic time and cost savings compared to wax room and
//                     legacy SLA
//                   </p>
//                 </div>
//                 <div className='w-full max-w-[280px]'>
//                   <h4 className='text-clamp-sm font-medium text-black'>
//                     Escalable
//                   </h4>
//                   <p className='text-gris_oscuro'>
//                     Dramatic time and cost savings compared to wax room and
//                     legacy SLA
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className='imageContainer relative h-[320px] overflow-hidden'>
//               <div className='relative h-full w-full'>
//                 <Image
//                   src={'/assets/banner-landing-H56.webp'}
//                   fill
//                   className='object-cover'
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// const Article2 = () => {
//   return (
//     <div className='relative top-0 h-auto min-h-screen border-t-[1px] border-negro md:sticky'>
//       <div className='flex h-auto min-h-screen w-full flex-col justify-center bg-[#EEF3ED] bg-opacity-95 p-4 backdrop-blur-sm md:p-8'>
//         <div className='relative mx-auto flex h-full max-h-[1080px] w-full flex-col justify-center lg:w-[83vw]'>
//           <div className='titleContainer text-black'>
//             <h3 className='pb-4 text-center text-clamp-sm font-medium'>
//               NX 300 Modular
//             </h3>
//             <h2 className='mx-auto max-w-[840px] text-center text-clamp-lg font-semibold leading-none'>
//               Configuración con uno o dos extrusores de pellets o filamento
//             </h2>
//           </div>
//           <div className='infoContainer mt-20 flex flex-col items-stretch gap-4 md:flex-row md:gap-8'>
//             <div className='textContainer flex-1'>
//               <div className='textContainer_title pb-4 md:pb-8'>
//                 <h4 className='pr-[20%] text-clamp-sm font-medium leading-snug text-black'>
//                   La impresora 3D Tumaker NX 300 ofrece configuración con uno o
//                   dos extrusores de pellets o filamento, adaptados al trabajo.
//                 </h4>
//               </div>
//               <div className='textContainer_caracteristicas flex flex-row flex-wrap gap-4 md:gap-8'>
//                 <div className='mb:pb-8 w-full flex-initial pb-4 pr-[50%]'>
//                   <h4 className='text-clamp-sm font-medium text-black'>
//                     Más de 10x más rápida
//                   </h4>
//                   <p className='text-gris_oscuro'>
//                     Dramatic time and cost savings compared to wax room and
//                     legacy SLA
//                   </p>
//                 </div>
//                 <div className='flex-1'>
//                   <h4 className='text-clamp-sm font-medium text-black'>
//                     Automatizada
//                   </h4>
//                   <p className='text-gris_oscuro'>
//                     Dramatic time and cost savings compared to wax room and
//                     legacy SLA
//                   </p>
//                 </div>
//                 <div className='flex-1'>
//                   <h4 className='text-clamp-sm font-medium text-black'>
//                     Escalable
//                   </h4>
//                   <p className='text-gris_oscuro'>
//                     Dramatic time and cost savings compared to wax room and
//                     legacy SLA
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className='imageContainer min-h-[300px] flex-1'>
//               <div className='relative h-full min-h-[300px] w-full'>
//                 <Image
//                   src={
//                     '/assets/Impresora-3D-tumakaer-nx-modular-Diagonal-SinFondo-1-1.png.webp'
//                   }
//                   fill
//                   className='object-contain'
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// const Article3 = () => {
//   return (
//     <div className='relative top-0 h-auto min-h-screen border-t-[1px] border-negro md:sticky'>
//       <div className='flex h-auto min-h-screen w-full flex-col justify-center bg-[#EEF3ED] bg-opacity-95 p-4 backdrop-blur-sm md:p-8'>
//         <div className='relative mx-auto flex h-full max-h-[1080px] w-full flex-col justify-center lg:w-[83vw]'>
//           <div className='titleContainer text-black'>
//             <h3 className='pb-4 text-center text-clamp-sm font-medium'>
//               BIGFoot​ 500 Modular
//             </h3>
//             <h2 className='mx-auto max-w-[840px] text-center text-clamp-lg font-semibold leading-none'>
//               Flexibilidad y precisión para grandes proyectos
//             </h2>
//           </div>
//           <div className='infoContainer mt-20 flex flex-col items-stretch gap-4 md:flex-row md:gap-8'>
//             <div className='textContainer flex-1'>
//               <div className='textContainer_title pb-4 md:pb-8'>
//                 <h4 className='pr-[20%] text-clamp-sm font-medium leading-snug text-black'>
//                   La impresora 3D Tumaker BigFoot 500 Modular es un equipo que
//                   redefine los estándares de la fabricación aditiva profesional.
//                 </h4>
//               </div>
//               <div className='textContainer_caracteristicas flex flex-row flex-wrap gap-4 md:gap-8'>
//                 <div className='mb:pb-8 w-full flex-initial pb-4 pr-[50%]'>
//                   <h4 className='text-clamp-sm font-medium text-black'>
//                     Más de 10x más rápida
//                   </h4>
//                   <p className='text-gris_oscuro'>
//                     Dramatic time and cost savings compared to wax room and
//                     legacy SLA
//                   </p>
//                 </div>
//                 <div className='flex-1'>
//                   <h4 className='text-clamp-sm font-medium text-black'>
//                     Automatizada
//                   </h4>
//                   <p className='text-gris_oscuro'>
//                     Dramatic time and cost savings compared to wax room and
//                     legacy SLA
//                   </p>
//                 </div>
//                 <div className='flex-1'>
//                   <h4 className='text-clamp-sm font-medium text-black'>
//                     Escalable
//                   </h4>
//                   <p className='text-gris_oscuro'>
//                     Dramatic time and cost savings compared to wax room and
//                     legacy SLA
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className='imageContainer min-h-[300px] flex-1'>
//               <div className='relative h-full min-h-[300px] w-full'>
//                 <Image
//                   src={
//                     '/assets/Impresora-3D-Tumaker-2.0-BF-Modular-Pegatinas-Ind-SinFondo.png.webp'
//                   }
//                   fill
//                   className='object-contain'
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
