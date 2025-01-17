import Link from 'next/link'
import Image from 'next/image'
import { Poppins } from 'next/font/google'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { useEffect, useState } from 'react'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
})

export default function NavBar() {
  const [headerBackground, setHeaderBackground] = useState('transparent')
  const [textColor, setTextColor] = useState('text-white')
  const [burgerBackground, setBurgerBackground] = useState('bg-white')
  const [hasScrolled, setHasScrolled] = useState(false) // Estado de scroll

  useEffect(() => {
    const heroSection = document.querySelector('.hero') // Identificamos la sección Hero

    const handleScroll = () => {
      if (!heroSection) return

      const heroBottom = heroSection.getBoundingClientRect().bottom // Distancia del borde inferior al viewport
      const scrollThreshold = 45 // Cambio 45px antes de que termine la sección Hero

      if (heroBottom <= scrollThreshold) {
        setHasScrolled(true) // Supera el umbral
        setBurgerBackground('bg-negro')
        setHeaderBackground('rgba(255, 255, 255, 1)')
        setTextColor('text-black')
      } else {
        setHasScrolled(false) // Aún estamos en la sección Hero
        setBurgerBackground('bg-white')
        setHeaderBackground('transparent')
        setTextColor('text-white')
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(false)

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previus = scrollY.getPrevious()
    if (latest > previus && latest > 150) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  })

  const logoSrc =
    headerBackground === 'transparent'
      ? '/assets/logo-blanco.png'
      : '/assets/logo-negro.png'

  return (
    <>
      <motion.section
        variants={{
          visible: { y: 0 },
          hidden: { y: '-100%' },
        }}
        animate={hidden ? 'hidden' : 'visible'}
        className={`fixed left-0 top-0 z-10 w-full px-4 lg:px-8 ${poppins.className} menu`}
        style={{ backgroundColor: headerBackground }}
      >
        <header className='header mx-auto flex h-16 flex-row items-center justify-between'>
          <div className='logo__header relative min-w-[200px]'>
            <Link href={'/'} className='block'>
              <Image
                src={logoSrc}
                width={190}
                height={60}
                className='object-contain'
              />
            </Link>
          </div>
          <div className='menuIcon_header 2xl:hidden'>
            <button className='flex h-9 flex-col justify-between p-2'>
              <div className={`h-[2px] w-10 ${burgerBackground}`}></div>
              <div className={`h-[2px] w-10 ${burgerBackground}`}></div>
              <div className={`h-[2px] w-10 ${burgerBackground}`}></div>
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
                  className={`text-clamp-menu font-light tracking-wider ${textColor}`}
                >
                  {vinculo}
                </Link>
              </div>
            ))}
          </nav>
          <div className='cta__header hidden w-[200px] rounded-full bg-rojo py-2 md:block'>
            <Link
              href={'/contacto'}
              className='block text-center text-sm font-medium uppercase tracking-wider text-white'
            >
              Contacto
            </Link>
          </div>
        </header>
      </motion.section>
    </>
  )
}
