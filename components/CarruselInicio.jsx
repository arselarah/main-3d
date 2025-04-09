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
    logo: '',
  },
  {
    imagen: '/assets/Otros_Servicios/servicio_validacion.webp',
    titulo: 'Servicio de Validación de Material',
    subtitulo:
      'Si lo que quieres es crear una pieza con tu propio material, nosotros podemos realizarlo a través de una validación. A lo largo de nuestra carrera hemos validado más de 50 materiales diferentes que no se encuentran en formato de filamento.',
    logo: '',
  },
  {
    imagen: '/assets/Otros_Servicios/servicio_escaneo.webp',
    titulo: 'Servicio de Escaneo, Control y Diseño',
    subtitulo:
      'Gracias a nuestros equipos de alta precisión te podremos brindar servicio de escaneo fiable para control dimensional, ingeniería inversa o modelado 3D. Nuestros equipos alcanzan una resolución de hasta 20 micras.',
    logo: '',
  },
  {
    imagen: '/assets/Otros_Servicios/servicio_vr.webp',
    titulo: 'Realidad virtual y aumentada',
    subtitulo:
      '¿Quieres que tus clientes vean tus productos en RV o RA? Podemos digitalizar objetos únicos incluso hasta un espacio completo. Solo imagina ver tu producto dimensionado a la realidad a través de un dispositivo inteligente.',
    logo: 'clonDigital',
  },
  {
    imagen: '/assets/Otros_Servicios/servicio_fabricacion.webp',
    titulo: 'Tecnologías de Fabricación Avanzadas',
    subtitulo:
      'La bio-fabricación a tu alcance. Aportamos soluciones en bioimpresión. Experimente el futuro de la impresión con nuestra impresora 3D multitecnología, donde la innovación se combina con la versatilidad.',
    logo: 'domoBio',
  },
  {
    imagen: '/assets/Otros_Servicios/servicio_construccion.webp',
    titulo: 'Sistema de Construcción Inteligente',
    subtitulo:
      'Sistema de impresión 3D diseñada y desarrollada para satisfacer los requisitos más exigentes de la industria de la construcción, particularmente en la impresión masiva de unidades de vivienda con un alto grado de calidad y confiabilidad.',
    logo: '',
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
        className={`relative w-full px-4 py-[2vw] lg:px-8 lg:py-[3vw] ${poppins.className}`}
      >
        <article className='relative w-full'>
          <div className='relative flex flex-col items-center'>
            <div className='h-auto w-full overflow-hidden'>
              <motion.div
                initial={{ x: 0 }}
                animate={{ x: -currentIndex * (largo + 40) }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className='relative grid auto-cols-[90vw] grid-flow-col gap-10 md:auto-cols-[40vw]'
              >
                {slides.map((slide, index) => (
                  <motion.div
                    key={index}
                    ref={diapositivaLargo}
                    className='diapositiva group relative aspect-video overflow-hidden rounded-3xl'
                  >
                    <Image
                      src={slide.imagen}
                      alt={slide.titulo}
                      width={100}
                      height={100}
                      className='h-full w-full object-cover transition-all duration-500 group-hover:scale-105'
                    />
                    <div className='absolute inset-0 left-0 top-0 flex flex-col items-center justify-end bg-negro bg-opacity-55 px-[2vw] lg:px-[3vw]'>
                      <h3 className='mx-auto max-w-[840px] text-center text-clamp-md font-medium capitalize leading-none text-white'>
                        {slide.titulo}
                      </h3>
                      <p className='pb-[1vw] pt-[1vw] text-center text-clamp-sm font-light text-white lg:max-w-[640px] lg:pb-[2]'>
                        {slide.subtitulo}
                      </p>
                      <div
                        className={`absolute left-[2vw] top-4 h-[15%] min-h-[60px] w-[20%] min-w-[120px] bg-contain bg-center bg-no-repeat lg:left-[3vw] lg:top-16 ${slide.logo}`}
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
