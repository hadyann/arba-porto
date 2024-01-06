"use client"
import Image from 'next/image'
import React from 'react'
import Skills from './skills'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <motion.section 
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay:0.175 }}
    >
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
            <Image src={'/about-image.jpeg'} alt='about' width={500} height={500}/>
            <div>
                <h2 className='text-4xl font-bold mb-4 border-b border-blue-800 w-fit'>About Me</h2>
                <p className='text-base mb-4 lg:text-xl'> I am a full stack web developer with a passion for creating
                interactive and responsive web applications. I have experience
                working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
                Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
                looking to expand my knowledge and skill set. I am a team player and
                I am excited to work with others to create amazing applications.</p>
                
                <Skills />
                
            </div>
        </div>
    </motion.section>
  )
}

export default About
