import Cards from '@/components/Cards'
import Escaneres from '@/components/Escaneres'
import HeroHome from '@/components/HeroHome'
import HorizontalDrag from '@/components/HorizontalDrag'
export default function Home() {
  return (
    <>
      <HeroHome />
      <main className='text-white'>
        <Cards />
        <HorizontalDrag />
        <Escaneres />
      </main>
    </>
  )
}
