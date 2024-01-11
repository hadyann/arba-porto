"use client"
import { useState } from 'react'

const Footer = () => {
    const [copiedEmail, setCopiedEmail] = useState("");
    const handleEmailClick = (email) => {
        navigator.clipboard.writeText(email)
        setCopiedEmail(email)

        setTimeout(() => setCopiedEmail(""), 1000)    
    }

  return (
    <div id='contact' className='px-8 mt-12 scroll-mt-24'>
        <h2 className='text-4xl font-bold mb-4 border-b border-blue-800 w-fit'>Get In Touch</h2>
        <div className='flex flex-col sm:flex-row gap-8'>
            <div className='rounded-xl transition-all duration-300 shadow-sm p-8 bg-gray-100 border border-black/5 sm:w-1/2'>
                <h3 className='text-xl font-medium'>Lets work together!</h3>
                <p className='leading-relaxed md:leading-loose text-neutral-800 pt-2 pb-2'>
                    I&apos;m open for freelance projects, feel free to email me to see how
                    can we collaborate.
                </p>
                <button 
                    className='flex gap-2 items-center bg-gradient-to-tl from-sky-400 to-blue-500 hover:bg-neutral-600 focus:scale-110 hover:scale-110 active:scale-105 text-neutral-50 py-2 px-4 rounded-full transition-all duration-300 text-[15px]'>
                Contact me!
                </button>
            </div>

            <div className='rounded-xl transition-all duration-300 shadow-sm p-8 bg-gray-100 border border-black/5 sm:w-1/2'>
                <h3 className='text-xl font-medium'>Drop me an Email</h3>
                <div 
                    onClick={() => handleEmailClick("hadyanar@gmail.com")} 
                    className='text-lg font-medium py-2 cursor-pointer hover:text-xl hover:font-semibold hover:underline transi'
                >
                    {copiedEmail ? "Copied!" : "hadyanar@gmail.com"}
                </div>
                <p className='leading-relaxed md:leading-loose text-neutral-800 pb-2'>
                Expect my rapid and eager reply - your message won&apos;t be kept waiting!
                </p>
            </div>
        </div>
    </div>
  )
}

export default Footer