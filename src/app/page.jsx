import About from '@/components/About'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import ProjectSection from '@/components/ProjectSection'
import Image from 'next/image'


export default function Home() {
  return (
    <main className='container'>
      <Hero />
      <About/>
      <ProjectSection/>
      <h1>Hello world</h1>
    </main>
  )
}
