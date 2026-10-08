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
    {
      name: 'Impresoras 3D',
      href: '/impresoras3d',
      megaMenu: true,
      submenu: [
        {
          name: 'Impresoras FDM',
          href: '/impresoras3d/fdm',
          image: '/assets/menu/impresoras-fdm.jpg',
        },
        {
          name: 'Impresoras de resina',
          href: '/impresoras3d/resina',
          image: '/assets/menu/impresoras-resina.jpg',
        },
        {
          name: 'Impresoras industriales',
          href: '/impresoras3d/industriales',
          image: '/assets/menu/impresoras-industriales.jpg',
        },
        {
          name: 'Impresoras industriales',
          href: '/impresoras3d/industriales',
          image: '/assets/menu/impresoras-industriales.jpg',
        },
      ],
    },
    {
      name: 'Escáneres 3D',
      href: '/escaneres3d',
      megaMenu: true,
      submenu: [
        {
          name: 'Escáneres portátiles',
          href: '/escaneres3d/portatiles',
          image: '/assets/menu/escaneres-portatiles.jpg',
        },
        {
          name: 'Escáneres profesionales',
          href: '/escaneres3d/profesionales',
          image: '/assets/menu/escaneres-profesionales.jpg',
        },
      ],
    },
    {
      name: 'AR/VR',
      href: '/ar-vr',
    },
    {
      name: 'Servicios',
      href: '/servicios',
      submenu: [
        {
          name: 'Impresión 3D',
          href: '/servicios/impresion-3d',
        },
        {
          name: 'Escaneo 3D',
          href: '/servicios/escaneo-3d',
        },
        {
          name: 'Ingeniería',
          href: '/servicios/ingenieria',
        },
      ],
    },
    {
      name: 'Accesorios',
      href: '/accesorios',
      submenu: [
        {
          name: 'Filamentos',
          href: '/accesorios/filamentos',
        },
        {
          name: 'Resinas',
          href: '/accesorios/resinas',
        },
        {
          name: 'Refacciones',
          href: '/accesorios/refacciones',
        },
      ],
    },
    {
      name: 'Consumibles',
      href: '/consumibles',
    },
    {
      name: 'Nosotros',
      href: '/nosotros',
    },
    {
      name: 'Blog',
      href: '/blog',
    },
    {
      name: 'Soporte',
      href: '/soporte',
    },
  ]

  const [headerBackground, setHeaderBackground] = useState('bg-white')
  const [textColor, setTextColor] = useState('text-negro')
  const [burgerBackground, setBurgerBackground] = useState('bg-negro')
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
        setHeaderBackground('bg-white')
        setTextColor('text-negro')
      } else {
        setHasScrolled(false) // Aún estamos en la sección Hero
        setBurgerBackground('bg-negro')
        setHeaderBackground('bg-white')
        setTextColor('text-negro')
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
      <div className='relative h-16 w-full'>
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
          className={`fixed left-0 top-0 z-10 w-full px-4 lg:px-8 ${poppins.className} menu h-16 bg-white`}
          // style={{ backgroundColor: headerBackground }}
        >
          <header className='header relative mx-auto flex h-16 flex-row items-center justify-between'>
            <div className='logo__header relative w-[200px] min-w-[200px]'>
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
            {links.map((item, id) => {
              const hasSubmenu = item.submenu && item.submenu.length > 0

              return (
                <div
                  key={id}
                  className='group relative flex h-10 flex-col justify-center'
                >
                  {/* ITEM PRINCIPAL */}
                  <div className='relative h-10'>
                    <Link
                      href={item.href}
                      className={`text-clamp-menu font-light ${textColor} relative flex h-10 w-full items-center justify-center whitespace-nowrap px-1 tracking-wider`}
                    >
                      {item.name}

                      {hasSubmenu && (
                        <span className='ml-2 text-[10px] transition-transform duration-300 group-hover:rotate-180'>
                          ▼
                        </span>
                      )}
                    </Link>
                  </div>

                  {/* MEGA MENU */}
                  {item.megaMenu && hasSubmenu && (
                    <div className='invisible fixed left-0 top-16 z-50 w-full translate-y-2 bg-white opacity-0 shadow-xl transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100'>
                      <div className='mx-auto max-w-[1600px] px-8 py-8'>
                        <div className='mb-6'>
                          <Link
                            href={item.href}
                            className='text-sm font-medium uppercase tracking-widest text-negro'
                          >
                            {item.name}
                          </Link>
                        </div>

                        <div className='grid grid-cols-3 gap-6'>
                          {item.submenu.map((submenuItem, submenuId) => (
                            <Link
                              key={submenuId}
                              href={submenuItem.href}
                              className='group/card overflow-hidden rounded-xl bg-gray-50'
                            >
                              <div className='relative aspect-[16/9] overflow-hidden'>
                                <Image
                                  src={submenuItem.image}
                                  alt={submenuItem.name}
                                  fill
                                  className='object-cover transition-transform duration-500 group-hover/card:scale-105'
                                />
                              </div>

                              <div className='p-4'>
                                <h3 className='text-sm font-medium text-negro'>
                                  {submenuItem.name}
                                </h3>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* DROPDOWN NORMAL */}
                  {!item.megaMenu && hasSubmenu && (
                    <div className='invisible absolute left-1/2 top-full z-50 min-w-[220px] -translate-x-1/2 translate-y-2 rounded-xl bg-white py-3 opacity-0 shadow-xl transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100'>
                      {item.submenu.map((submenuItem, submenuId) => (
                        <Link
                          key={submenuId}
                          href={submenuItem.href}
                          className='block px-5 py-2.5 text-sm font-light text-negro transition-colors duration-200 hover:bg-gray-100'
                        >
                          {submenuItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
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
      </div>
    </>
  )
}
