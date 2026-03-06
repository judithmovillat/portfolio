"use client"

import { motion } from "framer-motion"

export default function Hero(){

return(

<section className="h-screen flex flex-col justify-center items-center text-center">

<motion.h1
initial={{opacity:0,y:50}}
animate={{opacity:1,y:0}}
transition={{duration:1}}
className="text-6xl font-bold"
>

Hola 👋  
Soy <span className="text-violet-400">Judith Movilla</span>

</motion.h1>

<motion.p
initial={{opacity:0}}
animate={{opacity:1}}
transition={{delay:0.5}}
className="mt-6 text-xl text-gray-400"
>

Analista-Desarrolladora de Software

</motion.p>

</section>

)

}