import { Poppins } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
})

export default function Footer() {
  return (
    <>
      <section
        className={`relative w-full px-4 py-[2vw] lg:px-8 lg:py-[3vw] ${poppins.className} text-white`}
      >
        <article className='relative flex min-h-screen w-full flex-col items-stretch overflow-hidden rounded-3xl bg-[url("/assets/contacto.webp")] bg-cover bg-center bg-no-repeat p-4 before:absolute before:inset-0 before:left-0 before:top-0 before:bg-negro before:bg-opacity-85 before:content-[""] lg:p-16'>
          <div className='relative pb-8 md:pb-16'>
            <Link href={'/'} className=''>
              <Image
                src={'/assets/logo-blanco.png'}
                width={190}
                height={60}
                className='object-contain'
              />
            </Link>
          </div>
          <div className='relative flex w-full flex-1 flex-col items-stretch md:flex-row'>
            <div className='flex w-full flex-grow flex-col justify-between pb-10 md:pr-10 lg:pr-20'>
              <div>
                <h1 className='max-w-[920px] text-clamp-xl font-light leading-none text-white'>
                  Advanced research and printing materials
                </h1>
              </div>
              <div className='flex flex-col'>
                <Link
                  href={'mailto:contacto3d@recato.mx'}
                  className='mb-4 inline-block hover:underline'
                >
                  contacto3d@recato.mx
                </Link>
                <Link
                  href={
                    'https://wa.me/5218717878715?text=Hola%2C%20quiero%20más%20información'
                  }
                  className='inline-block hover:underline'
                >
                  +52 871 787 8715
                </Link>
              </div>
            </div>
            <div className='flex w-auto flex-col justify-between'>
              <div className='flex flex-col items-start'>
                <Link
                  href={''}
                  className='mb-4 inline-block text-clamp-lg font-semibold leading-none transition-all duration-300 hover:translate-x-4 lg:mb-8'
                >
                  Contacto
                </Link>
                <Link
                  href={''}
                  className='mb-4 inline-block text-clamp-lg font-semibold leading-none transition-all duration-300 hover:translate-x-4 lg:mb-8'
                >
                  Servicios
                </Link>
                <Link
                  href={''}
                  className='mb-4 inline-block text-clamp-lg font-semibold leading-none transition-all duration-300 hover:translate-x-4 lg:mb-8'
                >
                  Nosotros
                </Link>
                <Link
                  href={''}
                  className='mb-4 inline-block text-clamp-lg font-semibold leading-none transition-all duration-300 hover:translate-x-4 lg:mb-8'
                >
                  Soporte
                </Link>
              </div>
              <div className='flex flex-col items-start'>
                <Link href={''} className='mb-4 inline-block hover:underline'>
                  Términos y Condiciones
                </Link>
                <Link href={''} className='mb-4 inline-block hover:underline'>
                  Privacidad
                </Link>
                <Link href={''} className='mb-4 inline-block hover:underline'>
                  Cookies
                </Link>
                <Link href={''} className='mb-4 inline-block hover:underline'>
                  Ubicación
                </Link>
              </div>
              <div className='flex flex-row'>
                <Link
                  href={'https://www.linkedin.com/company/main-3d'}
                  className='linkedin mr-4 inline-block h-7 w-7 bg-contain bg-center bg-no-repeat'
                  target='_blank'
                  rel='noopener noreferrer'
                ></Link>
                <Link
                  href={
                    'https://www.facebook.com/profile.php?id=61564956297439'
                  }
                  className='facebook mr-4 inline-block h-7 w-7 bg-contain bg-center bg-no-repeat'
                  target='_blank'
                  rel='noopener noreferrer'
                ></Link>
                <Link
                  href={'https://www.instagram.com/main3d_/'}
                  className='instagram mr-4 inline-block h-7 w-7 bg-contain bg-center bg-no-repeat'
                  target='_blank'
                  rel='noopener noreferrer'
                ></Link>

                <Link
                  href={'https://www.youtube.com/@MAIN.3D'}
                  className='youtube mr-4 inline-block h-7 w-7 bg-contain bg-center bg-no-repeat'
                  target='_blank'
                  rel='noopener noreferrer'
                ></Link>
                <Link
                  href={'https://x.com/main3d_'}
                  className='twitter mr-4 inline-block h-7 w-7 bg-contain bg-center bg-no-repeat'
                  target='_blank'
                  rel='noopener noreferrer'
                ></Link>
              </div>
            </div>
          </div>
        </article>
      </section>
    </>
  )
}
