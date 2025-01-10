import { Poppins } from 'next/font/google'
import Link from 'next/link'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
})

export default function HeroHome() {
  return (
    <>
      <section
        className={`hero relative m-0 h-dvh min-h-[640px] w-full ${poppins.className}`}
      >
        <div className='relative flex h-full w-full flex-col items-center justify-end bg-black bg-opacity-50'>
          <div className='hero_text-container px-4 py-20 tracking-widest lg:px-8'>
            <h1 className='text-clamp-xl text-center font-light leading-none text-white'>
              Advanced research
              <br />
              and printing materials
            </h1>
            <p className='text-clamp-sm mx-auto max-w-[350px] pt-6 text-center font-light text-white md:max-w-[520px] lg:max-w-[640px]'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non
              tincidunt eros.
            </p>
            <div className='mx-auto mt-12 w-full max-w-[350px] rounded-full bg-white bg-opacity-15 py-3'>
              <Link
                href={'/'}
                className='block text-center uppercase text-white'
              >
                Descubre más
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
