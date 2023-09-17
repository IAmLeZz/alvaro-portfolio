import AboutMe from '@/components/AboutMe'
import { Projects } from '@/components/Projects'
import { Technologies } from '@/components/Technologies'
import "animate.css";
import 'hover.css'

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-between z-20 antialiased'>
      <h2 className='lg:text-[6em] text-[1.7em] text-gray-200 text-center welcome'>Bienvenidos a mi portafolio<span className='text-#22a4f5'>.</span></h2>
      <AboutMe></AboutMe>
      <h3 className='lg:text-[4em] text-[2em] text-center flex m-auto text-gray-200 technologies hvr hvr-grow'>Tecnologías que domino</h3>
      <Technologies></Technologies>
      <h3 className='lg:text-[4em] text-[2em] text-center flex m-auto text-gray-200 technologies hvr hvr-grow'>Proyectos</h3>
      <Projects></Projects>
    </main>
  )
}
