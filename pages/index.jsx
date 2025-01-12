import Cards from '@/components/Cards'
import HeroHome from '@/components/HeroHome'
export default function Home() {
  return (
    <>
      <HeroHome />
      <main className='text-white'>
        <Cards />
        <section className='relative h-screen w-full bg-negro'></section>
      </main>
    </>
  )
}
