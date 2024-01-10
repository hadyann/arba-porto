import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import EndPage from '@/components/EndPage'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Hadyan | Web Developer  ',
  description: 'Hadyan Arba Portfolio Website. full-stack devloper with 2 years of experience.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative`}>
      <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
      <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] "></div>

     
      
        <Navbar/>  
      {children}
        <EndPage/>
      </body>
    </html>
  )
}
