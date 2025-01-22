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
  const links = [
    'Impresoras 3D',
    'Escáneres 3D',
    'AR-VR',
    'Servicios',
    'Accesorios',
    'Consumibles',
    'Nosotros',
    'Blog',
    'Soporte',
  ]

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
      ? '/assets/logo-negro.png'
      : '/assets/logo-negro.png'

  return (
    <>
      <motion.section
        variants={{
          visible: {
            y: 0,
            transition: {
              type: 'spring', // Puedes usar 'tween' o 'spring'
              stiffness: 100, // Solo para 'spring'
              damping: 15, // Solo para 'spring'
              duration: 0.5, // Duración de la animación
              delay: 0.2, // Retardo antes de iniciar
            },
          },
          hidden: {
            y: '-100%',
            transition: {
              type: 'tween', // Puedes cambiar esto según tus necesidades
              ease: 'easeInOut',
              duration: 0.5,
              delay: 0.5,
            },
          },
        }}
        animate={hidden ? 'hidden' : 'visible'}
        className={`fixed left-0 top-0 z-10 w-full px-4 lg:px-8 ${poppins.className} menu`}
        style={{ backgroundColor: headerBackground }}
      >
        <header className='header mx-auto flex h-16 flex-row items-center justify-between'>
          <div className='logo__header before: relative w-[200px] min-w-[200px] before:absolute before:-top-3 before:left-1/2 before:z-[-1] before:h-[60px] before:w-[230px] before:-translate-x-1/2 before:rounded-b-lg before:bg-white before:content-[""]'>
            <Link href={'/'} className='block'>
              <Image
                src={logoSrc}
                width={190}
                height={60}
                className='w-full object-contain'
              />
            </Link>
          </div>
          <div className='menuIcon_header xl:hidden'>
            <button className='flex h-9 flex-col justify-between p-2'>
              <div className={`h-[2px] w-10 ${burgerBackground}`}></div>
              <div className={`h-[2px] w-10 ${burgerBackground}`}></div>
              <div className={`h-[2px] w-10 ${burgerBackground}`}></div>
            </button>
          </div>
          <nav className='hidden w-auto flex-row justify-center gap-8 px-[2vw] xl:flex'>
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
            ].map((vinculo, id) => {
              //const width = vinculo.length * 11
              const href = `/${vinculo.toLowerCase().replace(/\s+/g, '')}`
              return (
                <div
                  className='group relative flex h-10 w-full flex-col justify-center overflow-clip px-1'
                  key={id}
                  // style={{
                  //   width: `${width}px`,
                  // }}
                >
                  <div className='relative h-10 w-full'>
                    <Link
                      href={href}
                      className={`text-clamp-menu font-light ${textColor} relative inset-0 left-0 top-0 flex h-10 w-full flex-wrap items-center justify-center overflow-hidden`}
                    >
                      <div className='relative flex h-10 w-full items-center justify-center text-center tracking-wider transition-all duration-500 ease-[cubic-bezier(.57,.21,.69,1.25)] group-hover:-translate-y-full group-hover:scale-90'>
                        {vinculo}
                      </div>
                      <div className='relative flex h-10 w-full scale-90 items-center justify-center text-center font-semibold transition-all duration-500 ease-[cubic-bezier(.57,.21,.69,1.25)] group-hover:-translate-y-full group-hover:scale-100'>
                        {vinculo}
                      </div>
                    </Link>
                  </div>
                </div>
              )
            })}
          </nav>
          <div className='cta__header group relative hidden h-10 min-w-[200px] flex-col justify-center overflow-hidden rounded-full bg-rojo md:flex'>
            <Link
              href={'/contacto'}
              className='absolute inset-0 left-0 top-0 flex h-10 flex-wrap items-center justify-center text-sm font-medium uppercase tracking-wider text-white'
            >
              <div className='relative flex h-10 w-full items-center justify-center text-center transition-all duration-500 ease-[cubic-bezier(.57,.21,.69,1.25)] group-hover:-translate-y-full group-hover:scale-90'>
                Contacto
              </div>
              <div className='relative flex h-10 w-full scale-90 items-center justify-center text-center font-semibold transition-all duration-500 ease-[cubic-bezier(.57,.21,.69,1.25)] group-hover:-translate-y-full group-hover:scale-100'>
                Contacto
              </div>
            </Link>
          </div>
        </header>
      </motion.section>
    </>
  )
}
