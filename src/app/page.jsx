import About from '@/components/About'
import Footer from '@/components/Footer'
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
      <Footer/>
    </main>
  )
}
