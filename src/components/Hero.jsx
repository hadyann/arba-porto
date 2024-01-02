"use client"

import Image from "next/image"
import { TypeAnimation } from 'react-type-animation';
import {motion} from 'framer-motion'
import { ArrowRightIcon, ArrowDownTrayIcon } from "@heroicons/react/24/solid";

const Hero = () => {
  return (
    <section >
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 lg:grid-cols-12 mt-12 ">
            <div className="lg:col-span-7 place-self-center p-10 space-y-2 ">
                <div className="flex text-3xl">
                    <h1>Hi, I&apos;m Hadyan</h1>
                    <div className='ml-1 animate-waving-hand'>👋</div>
                </div>
                <div className="space-y-1">
                        <ul className="flex flex-col gap-2 pl-4 list-disc">
                            <li>Based in Banda Aceh, Indonesia</li>
                            <li>Working Remotely around the world</li>
                        </ul>
                </div>
                
                <div className="flex flex-col pt-5">
                    <div className="text-5xl lg:text-8xl font-bold">
                        <h1>
                            <span className="text-transparent bg-clip-text bg-gradient-to-tl from-sky-400 to-blue-500">
                            DESIGN
                            </span> + <br/>{" "}
                            <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'INOVATION',
                                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                                    'UI/UX',
                                    1000,
                                    'DEVELOPER',
                                    1000,
                                    'FULLSTACK',
                                    1000
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                                />
                        </h1>
                    </div>
                </div>
                
                <div className="pt-5 space-y-5">
                    <p className="text-base sm:text-xl">brief descriotion of your skil so write lah jual jual diri biar laku then you make more money at the end you become a wealthy man</p>
                    <div className= "flex flex-col lg:flex-row gap-5">
                        <button className="group flex items-center justify-center gap-2 border border-blue-800/75 focus:scale-110 hover:scale-110 hover:text-gray-950 hover:bg-slate-200 active:scale-105 transition py-2 px-8 rounded-full">Hire Me <ArrowRightIcon className="w-4 h-4 opacity-70 group-hover:translate-x-1 transition"/> </button>
                        <button className="group flex items-center justify-center gap-2 bg-gradient-to-tl from-sky-400 to-blue-500 focus:scale-110 hover:scale-110 active:scale-105 transition py-2 px-8 text-gray-200 hover:text-gray-50 rounded-full">Download CV <ArrowDownTrayIcon className="w-4 h-4 group-hover:translate-x-1 transition"/></button>
                    </div>
                </div>
            </div>

            <div className="lg:col-span-5 place-self-center mt-4 lg:mt-0">
                <div className="rounded-full bg-gradient-to-tl from-blue-700 via-blue-800 to-gray-900 w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                    <Image
                        src="/hero-image.png"
                        alt="hero-image"
                        className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        width={300}
                        height={300}
                    ></Image>
                </div>
            </div>
        </motion.div>
    </section>
  )
}

export default Hero
