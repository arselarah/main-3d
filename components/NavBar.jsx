import Link from 'next/link'
import Image from 'next/image'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
})

export default function NavBar() {
  return (
    <>
      <section
        className={`fixed left-0 top-0 z-10 w-full px-4 lg:px-8 ${poppins.className}`}
      >
        <header className='header mx-auto flex h-16 flex-row items-center justify-between'>
          <div className='logo__header relative min-w-[200px]'>
            <Link href={'/'} className='block'>
              <Image
                src={'/assets/logo-blanco.png'}
                width={190}
                height={60}
                className='object-contain'
              />
            </Link>
          </div>
          <div className='menuIcon_header 2xl:hidden'>
            <button className='flex h-9 flex-col justify-between p-2'>
              <div className='h-[2px] w-10 bg-white'></div>
              <div className='h-[2px] w-10 bg-white'></div>
              <div className='h-[2px] w-10 bg-white'></div>
            </button>
          </div>
          <nav className='hidden w-auto grow flex-row justify-center gap-8 2xl:flex'>
            {[
              'Impresoras 3D',
              'Escáneres 3D',
              'AR-VR',
              'Servicios',
              'Accesorios',
              'Consumibles',
              'Nosotros',
              'Blog',
              'Soporte',
            ].map((vinculo, id) => (
              <div className='' key={id}>
                <Link
                  href={`/${vinculo.toLowerCase()}`}
                  className='text-clamp-menu font-light tracking-wider text-white'
                >
                  {vinculo}
                </Link>
              </div>
            ))}
          </nav>
          <div className='cta__header bg-rojo hidden w-[200px] rounded-full py-2 md:block'>
            <Link
              href={'/contacto'}
              className='block text-center text-sm font-medium uppercase tracking-wider text-white'
            >
              Contacto
            </Link>
          </div>
        </header>
      </section>
    </>
  )
}
