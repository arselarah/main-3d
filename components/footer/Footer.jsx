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
        className={`relative w-full px-4 pb-4 pt-20 lg:px-8 lg:pb-8 lg:pt-40 ${poppins.className} text-white`}
      >
        <article className='relative flex min-h-screen w-full flex-col items-stretch rounded-3xl bg-negro p-4 lg:p-16'>
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
            <div className='flex flex-1 flex-col justify-between pb-10 md:pr-10 lg:pr-20'>
              <div>
                <h1 className='max-w-[920px] text-clamp-xl font-light leading-none text-white'>
                  Advanced research and printing materials
                </h1>
              </div>
              <div className='flex flex-col'>
                <Link href={''} className='mb-4 inline-block'>
                  info@main-3d.com
                </Link>
                <Link href={''} className='inline-block'>
                  871 122 3344
                </Link>
              </div>
            </div>
            <div className='flex w-full max-w-[320px] flex-col justify-between lg:max-w-[400px]'>
              <div className='flex flex-col items-start'>
                <Link
                  href={''}
                  className='mb-4 inline-block text-clamp-lg font-semibold leading-none lg:mb-8'
                >
                  Soporte
                </Link>
                <Link
                  href={''}
                  className='mb-4 inline-block text-clamp-lg font-semibold leading-none lg:mb-8'
                >
                  Servicios
                </Link>
                <Link
                  href={''}
                  className='mb-4 inline-block text-clamp-lg font-semibold leading-none lg:mb-8'
                >
                  Nosotros
                </Link>
                <Link
                  href={''}
                  className='mb-4 inline-block text-clamp-lg font-semibold leading-none lg:mb-8'
                >
                  Contacto
                </Link>
              </div>
              <div className='flex flex-col items-start'>
                <Link href={''} className='mb-4 inline-block'>
                  Términos y Condiciones
                </Link>
                <Link href={''} className='mb-4 inline-block'>
                  Privacidad
                </Link>
                <Link href={''} className='mb-4 inline-block'>
                  Cookies
                </Link>
                <Link href={''} className='mb-4 inline-block'>
                  Lorem Impsum
                </Link>
              </div>
              <div className='flex flex-row'>
                <Link
                  href={''}
                  className='facebook mr-4 inline-block h-7 w-7 bg-contain bg-center bg-no-repeat'
                ></Link>
                <Link
                  href={''}
                  className='instagram mr-4 inline-block h-7 w-7 bg-contain bg-center bg-no-repeat'
                ></Link>
                <Link
                  href={''}
                  className='twitter mr-4 inline-block h-7 w-7 bg-contain bg-center bg-no-repeat'
                ></Link>
                <Link
                  href={''}
                  className='youtube mr-4 inline-block h-7 w-7 bg-contain bg-center bg-no-repeat'
                ></Link>
                <Link
                  href={''}
                  className='linkedin mr-4 inline-block h-7 w-7 bg-contain bg-center bg-no-repeat'
                ></Link>
              </div>
            </div>
          </div>
        </article>
      </section>
    </>
  )
}
