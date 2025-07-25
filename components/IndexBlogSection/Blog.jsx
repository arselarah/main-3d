import { Poppins } from 'next/font/google'
import Link from 'next/link'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
})

const posts = [
  {
    fondo: 'postUno',
    titulo: 'CURSO MAIN 3D',
    texto:
      'Las competencias clave del futuro las están desarrollando niños, jóvenes y adolescentes, dejando huella en su creatividad y aprendizaje de robótica.',
  },
  {
    fondo: 'postDos',
    titulo: 'MAIN 3D, PARTNER OFICIAL DE IT3D GROUP',
    texto:
      'Colaboración importante para distribuir soluciones 3D a empresas y profesionales en México, de la mano con tecnologías avanzadas a nivel global.',
  },
  {
    fondo: 'postTres',
    titulo: 'INAUGURACIÓN MAIN 3D',
    texto:
      'Comprometidos en impulsar la Innovación en Industria y Educación con Tecnología 3D﻿. Diversidad de soluciones a sectores como la manufactura aditiva, escaneo 3D, diseño, realidad virtual y aumentada.',
  },
]

export default function IndexBlogSection() {
  return (
    <>
      <section
        className={`relative my-16 w-full px-4 lg:my-32 lg:px-8 ${poppins.className}`}
      >
        <div className='titleContainer pb-[2vw] text-black lg:pb-[3vw]'>
          <h2 className='mx-auto max-w-[840px] text-center text-clamp-lg font-semibold leading-none'>
            Descubre nuestro blog
          </h2>
        </div>
        <article className='flex w-full flex-col justify-stretch gap-10 md:flex-row lg:gap-20'>
          {posts.map((post, index) => (
            <div key={index} className='group relative flex flex-1 flex-col'>
              <div
                className={`h-[320px] w-full overflow-hidden rounded-3xl md:h-[480px]`}
              >
                <div
                  className={`h-full w-full bg-cover bg-center bg-no-repeat ${post.fondo} transition-all duration-500 group-hover:scale-105`}
                ></div>
              </div>
              <div>
                <h3 className='py-4 text-clamp-md font-medium text-black lg:py-8'>
                  {post.titulo}
                </h3>
                <p className='text-clamp-sm text-gris_oscuro'>{post.texto}</p>
              </div>
              <Link href={``} className='absolute inset-0 left-0 top-0' />
            </div>
          ))}
        </article>
        <div className='titleContainer pt-[2vw] text-black lg:pt-[3vw]'>
          <div className='group mx-auto w-full max-w-[450px] rounded-full border-[1px] border-negro bg-negro py-2 transition-all duration-300 hover:bg-transparent'>
            <Link
              href={'/'}
              className='block text-center uppercase text-white transition-all duration-300 group-hover:text-negro'
            >
              Leer el Blog
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
