import Cards from '@/components/Cards'
import CarruselInicio from '@/components/CarruselInicio'
import Escaneres from '@/components/Escaneres'
import HeroHome from '@/components/HeroHome'
// import Horizontal from '@/components/horizontal/Horizontal'
import HorizontalDrag from '@/components/HorizontalDrag'
import IndexBlogSection from '@/components/IndexBlogSection/Blog'
export default function Home() {
  return (
    <>
      <HeroHome />
      <main className='pt-10 lg:pt-20'>
        <Cards />
        <HorizontalDrag />
        <Escaneres />
        <CarruselInicio />

        <IndexBlogSection />
        {/* <Horizontal /> */}
      </main>
    </>
  )
}
