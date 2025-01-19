import Cards from '@/components/Cards'
import CarruselInicio from '@/components/CarruselInicio'
import Escaneres from '@/components/Escaneres'
import HeroHome from '@/components/HeroHome'
// import Horizontal from '@/components/horizontal/Horizontal'
import HorizontalDrag from '@/components/HorizontalDrag'
import Impresoras from '@/components/Impresoras'
import IndexBlogSection from '@/components/IndexBlogSection/Blog'
export default function Home() {
  return (
    <>
      <HeroHome />
      <main className='pt-10 lg:pt-20'>
        {/* <Cards /> */}
        <Impresoras />
        <HorizontalDrag />
        <Escaneres />
        <CarruselInicio />

        <IndexBlogSection />
        {/* <Horizontal /> */}
      </main>
      {/* <section className='relative h-[500vh] w-full bg-slate-400'>
        <div className='sticky top-0 h-[100vh] w-full bg-white'>
          <div className='relative flex h-full w-[30%] flex-col justify-center'>
            <div className='prueba-1 relative h-[80%] w-full'></div>
          </div>
        </div>
        <div className='sticky top-0 h-[100vh] w-full'>
          <div className='relative flex h-full w-[30%] flex-col justify-center'>
            <div className='prueba-2 relative h-[80%] w-full'></div>
          </div>
        </div>
        <div className='sticky top-0 h-[100vh] w-full bg-slate-600'>
          Sticky 3
        </div>
        <div className='sticky top-0 h-[100vh] w-full bg-white'>Sticky 4</div>
        <div className='sticky top-0 h-[100vh] w-full bg-white'>Sticky 5</div>
      </section> */}
    </>
  )
}
