"use client"

import { motion } from "framer-motion"

export default function Navbar(){

return(

<nav className="fixed w-full flex justify-between items-center p-6 bg-black/40 backdrop-blur-md z-50">

<motion.h1 
initial={{opacity:0}}
animate={{opacity:1}}
className="text-xl font-bold text-violet-400"
>
Mi Portfolio
</motion.h1>

<ul className="flex gap-6">

<li className="hover:text-violet-400 cursor-pointer">
Sobre mí
</li>

<li className="hover:text-violet-400 cursor-pointer">
Proyectos
</li>

<li className="hover:text-violet-400 cursor-pointer">
Contacto
</li>

</ul>

</nav>

)

}