"use client"
import React from 'react'
import { motion } from 'framer-motion'

const Skills = () => {
    const skillsData = [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Node.js",
        "Git",
        "Tailwind",
        "Prisma",
        "MongoDB",
        "Redux",
        "Express",
        "PostgreSQL",
        "Framer Motion",
        "Figma",
        "Illustrator",
        "Photoshop",
        
      ]

  return (
    <section className=''>
        <h2 className='text-4xl font-bold mb-4 border-b border-blue-800 w-fit'>Skills</h2>

        <ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-800'>
            {skillsData.map((skill, index) => (
                <motion.li
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} 
                className='bg-white border border-black/10 rounded-xl px-3 py-1' key={index}>{skill}</motion.li>
            ))}
        </ul>
    </section>
  )
}

export default Skills
