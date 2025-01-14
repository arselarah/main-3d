import Cards from '@/components/Cards'
import HeroHome from '@/components/HeroHome'
import HorizontalDrag from '@/components/HorizontalDrag'
export default function Home() {
  return (
    <>
      <HeroHome />
      <main className='text-white'>
        <Cards />
        <HorizontalDrag />
        <section className='h-screen'></section>
      </main>
    </>
  )
}
