"use client"

import Image from 'next/image'
import { projectsData } from '@/lib/data'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Project({title, description, tags}) {
    const ref = useRef(null)
  
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["0 1", "1.33 1"]
    })

    const scaleProgres = useTransform(scrollYProgress, [0, 1], [0.8, 1])
    const opacityProgres = useTransform(scrollYProgress, [0, 1], [0.6, 1])
  
    return (
        <motion.div ref={ref} 
        style={{ 
            scale: scaleProgres,
            opacity: opacityProgres }}
        className='mb-3 sm:mb-8 last:mb-0'
        >
            <section 
            
            className='bg-gray-100 max-w-2xl border border-black/5 overflow-hidden relative sm:pr-8 sm:h-[20rem]  hover:bg-gray-200 transition group'>
            <div className='p-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%]'>
                <h3 className='text-2xl font-semibold'>{title}</h3>
                <p className='mt-2 leading-relaxed text-gray-700'>{description}</p>
                <ul className='flex flex-wrap gap-2 mt-2'>
                {tags.map((tag, index) => (
                    <li className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full' key={index}>{tag}</li>
                ))}
                </ul>
            
            </div>
        
            <Image
                className='absolute top-8 -right-40 w-[28rem] rounded-t-lg shadow-2xl group-hover:scale-105 group-hover:-translate-x-3 group-hover:translate-y-2 group-hover:-rotate-2 transition'
                src="/anime.png" alt="anime" quality={90} width={200} height={200}>
            
            </Image>
            </section>
        </motion.div>
    )
  }