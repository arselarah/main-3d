import { Poppins } from 'next/font/google'
import Link from 'next/link'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
})

const posts = [
  {
    fondo: 'postUno',
    titulo: 'Artículo #1',
    texto:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget leo pellentesque, venenatis nisi ut, pharetra leo. Nunc justo metus, sollicitudin in blandit id, porttitor a libero.',
  },
  {
    fondo: 'postDos',
    titulo: 'Artículo #2',
    texto:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget leo pellentesque, venenatis nisi ut, pharetra leo. Nunc justo metus, sollicitudin in blandit id, porttitor a libero.',
  },
  {
    fondo: 'postTres',
    titulo: 'Artículo #3',
    texto:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget leo pellentesque, venenatis nisi ut, pharetra leo. Nunc justo metus, sollicitudin in blandit id, porttitor a libero.',
  },
]

export default function IndexBlogSection() {
  return (
    <>
      <section
        className={`relative w-full px-4 py-[2vw] lg:px-8 lg:py-[3vw] ${poppins.className}`}
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
                className={`aspect-video h-full w-full overflow-hidden rounded-3xl`}
              >
                <div
                  className={`h-full w-full bg-cover bg-center bg-no-repeat ${post.fondo} transition-all duration-500 group-hover:scale-105`}
                ></div>
              </div>
              <div>
                <h3 className='py-4 text-clamp-sm font-medium text-black lg:py-8'>
                  {post.titulo}
                </h3>
                <p className='text-gris_oscuro'>{post.texto}</p>
              </div>
              <Link href={``} className='absolute inset-0 left-0 top-0' />
            </div>
          ))}
          {/* <div className='flex flex-1 flex-col'>
            <div
              className={`h-full min-h-80 w-full overflow-hidden rounded-3xl bg-gray-400 bg-cover bg-center bg-no-repeat lg:min-h-96`}
            ></div>
            <div>
              <h3 className='max-w-[240px] py-4 text-clamp-sm font-medium text-black lg:py-8'>
                Título
              </h3>
              <p className='max-w-[240px] text-gris_oscuro'>Texto</p>
            </div>
          </div> */}
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
