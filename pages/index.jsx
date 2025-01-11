import Cards from '@/components/Cards'
import HeroHome from '@/components/HeroHome'
export default function Home() {
  return (
    <>
      <HeroHome />
      <main className='text-white'>
        <Cards />
        <section className='bg-negro relative h-screen w-full'></section>
      </main>
    </>
  )
}
