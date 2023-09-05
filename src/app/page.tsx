import AboutMe from '@/components/AboutMe'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24" style={{ zIndex: '1' }}>
      <h2 className='lg:text-[6em] text-[2em] text-j text-gray-200 welcome'>Bienvenidos a mi portafolio<span className='text-#22a4f5'>.</span></h2>
      <AboutMe></AboutMe>
    </main>
  )
}
