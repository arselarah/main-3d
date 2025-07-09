import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { Poppins } from 'next/font/google'
import Link from 'next/link'
import { SlArrowLeft } from 'react-icons/sl'
import { SlArrowRight } from 'react-icons/sl'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
})

const slides = [
  {
    imagen: '/assets/Otros_Servicios/servicio_impresion.webp',
    titulo: 'Servicio de Impresión 3D',
    subtitulo:
      'Cotiza con nosotros tu pieza, ya sea para enfoque industrial o creativo. Nosotros nos encargamos de asesorarte para que tu proyecto resulte de la mejor manera.',
    logo: 'clonDigital',
  },
  {
    imagen: '/assets/Otros_Servicios/servicio_validacion.webp',
    titulo: 'Servicio de Validación de Material',
    subtitulo:
      'Crea una pieza con tu propio material, lo realizamos a través de una validación. Hemos validado más de 50 materiales diferentes ya disponibles en pellets que no se encuentran en formato de filamento.',
    logo: 'clonDigital',
  },
  {
    imagen: '/assets/Otros_Servicios/servicio_escaneo.webp',
    titulo: 'Servicio de Escaneo, Control y Diseño',
    subtitulo:
      'Con nuestros equipos de alta precisión te brindamos un escaneo fiable para control dimensional, ingeniería inversa o modelado 3D, alcanzando una resolución de hasta 20 micras.',
    logo: 'scantech',
  },
  {
    imagen: '/assets/Otros_Servicios/servicio_vr.webp',
    titulo: 'Realidad Virtual y Aumentada',
    subtitulo:
      'Potencializa tus productos en RV o RA. Dese un objeto hasta un espacio completo. Imagina presentar tus productos dimensionados a la realidad en cualquier momento a tus clientes.',
    logo: 'clonDigital',
  },
  {
    imagen: '/assets/Otros_Servicios/servicio_fabricacion.webp',
    titulo: 'Tecnologías de Fabricación Avanzadas',
    subtitulo:
      'La bio-fabricación a tu alcance. Aportamos soluciones en bioimpresión. Experimenta el futuro de la impresión con nuestra impresora 3D multitecnología, donde la innovación se combina con la versatilidad.',
    logo: 'domoBio',
  },
  {
    imagen: '/assets/Otros_Servicios/servicio_construccion.webp',
    titulo: 'Sistema de construcción inteligente',
    subtitulo:
      'Sistema de impresión 3D desarrollada para satisfacer los requisitos más exigentes de la industria de vivienda, particularmente en la impresión masiva de unidades con alto grado de calidad y confiabilidad.',
    logo: 'cosmos3d',
  },
]
export default function CarruselInicio() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [viewportWidth, setViewportWidth] = useState(0)
  const diapositivaLargo = useRef(null)
  const [largo, setLargo] = useState(0)

  useEffect(() => {
    if (diapositivaLargo.current) {
      // Obtén el ancho inicial del contenedor
      setLargo(diapositivaLargo.current.offsetWidth)
    }

    // Opcional: Actualizar el ancho si cambia el tamaño de la ventana
    const handleResize = () => {
      if (diapositivaLargo.current) {
        setLargo(diapositivaLargo.current.offsetWidth)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    // Obtiene el ancho inicial del viewport
    setViewportWidth(window.innerWidth)

    // Actualiza el ancho al cambiar el tamaño del viewport
    const handleResize = () => {
      setViewportWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
    console.log(slides.length)
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    console.log(slides.length)
    console.log(currentIndex)
  }

  return (
    <>
      <section
        className={`relative w-full overflow-hidden px-4 lg:px-8 ${poppins.className}`}
      >
        <article className='relative w-full'>
          <div className='relative flex flex-col items-center'>
            <div className='h-auto w-full'>
              <motion.div
                initial={{ x: 0 }}
                animate={{ x: -currentIndex * (largo + 40) }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className='relative grid auto-cols-[90vw] grid-flow-col gap-10 md:auto-cols-[70vw] lg:auto-cols-[50vw] xl:auto-cols-[45vw]'
              >
                {slides.map((slide, index) => (
                  <motion.div
                    key={index}
                    ref={diapositivaLargo}
                    className='diapositiva group relative aspect-square overflow-hidden rounded-3xl lg:aspect-video'
                  >
                    <Image
                      src={slide.imagen}
                      alt={slide.titulo}
                      width={100}
                      height={100}
                      className='h-full w-full object-cover transition-all duration-500 group-hover:scale-105'
                    />
                    <div className='absolute inset-0 left-0 top-0 flex flex-col items-center justify-end bg-negro bg-opacity-55 p-6 lg:p-8'>
                      <h3 className='mx-auto max-w-[840px] text-center text-clamp-md font-medium capitalize leading-none text-white'>
                        {slide.titulo}
                      </h3>
                      <p className='pb-[1vw] pt-[1vw] text-center text-clamp-sm font-light text-white lg:max-w-[640px] lg:pb-[2]'>
                        {slide.subtitulo}
                      </p>
                      <div
                        className={`absolute left-4 top-4 h-24 w-32 bg-contain bg-center bg-no-repeat lg:left-[3vw] lg:top-8 ${slide.logo}`}
                      ></div>
                    </div>
                    <Link
                      href={`${slide.titulo}`}
                      className='absolute inset-0 left-0 top-0'
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>
            <div className='mt-6 flex w-full flex-row justify-start'>
              <button
                onClick={prevSlide}
                className='mr-8 flex h-12 w-12 items-center justify-center rounded-full border-[1px] border-negro bg-transparent text-negro transition-all hover:bg-negro hover:text-white'
              >
                <SlArrowLeft />
              </button>
              {/* <div className='flex flex-row gap-2'>
                {slides.map((_, index) => (
                  <div
                    key={index}
                    className={`h-4 w-4 cursor-pointer rounded-full ${index === currentIndex ? 'bg-red-700' : 'bg-white'}`}
                  ></div>
                ))}
              </div> */}

              <button
                onClick={nextSlide}
                className='flex h-12 w-12 items-center justify-center rounded-full border-[1px] border-negro bg-transparent text-negro transition-all hover:bg-negro hover:text-white'
              >
                <SlArrowRight />
              </button>
            </div>
          </div>
        </article>
      </section>
    </>
  )
}
