"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import NavLink from "./NavLink"
import { useState } from "react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import MenuOverlay from "./MenuOverlay"

const navLinks = [
    {
        title: "About",
        path: "#about"
    },
    {
        title: "Projects",
        path: "#projects"
    },
    {
        title: "Contact",
        path: "#contact"
    },
]

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(true)

    return(
        <header className="fixed top-0 left-0 w-full z-[999]">
            <motion.div className="flex flex-wrap items-center justify-between bg-blue-900 bg-opacity-80 shadow-lg py-4 px-10"
            initial={{y: -100, opacity: 0}} animate={{y: 0, opacity: 1}}>
                <div>
                    <Link href={"/"} className="text-white text-xl font-bold">Hadyan<span className="text-orange-300">Porto</span></Link>
                </div>

                <div className="mobile-menu block md:hidden">
                    {navbarOpen ? (
                        <button className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
                            <Bars3Icon className="w-5 h-5 text-white" onClick={() => setNavbarOpen(false)}/>
                        </button>
                    ) : (
                        <button className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
                            <XMarkIcon className="w-5 h-5 text-white" onClick={() => setNavbarOpen(true)}/>
                        </button>
                    )}
                </div>

                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.path} title={link.title}/>
                            </li>
                        ))}
                    </ul>
                </div>
                {!navbarOpen && <MenuOverlay link={navLinks}/>}
            </motion.div>
               
        </header>
    )
}

export default Navbar