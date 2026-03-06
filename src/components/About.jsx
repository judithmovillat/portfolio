"use client"

import { motion } from "framer-motion"

export default function About(){

return(

<section className="py-32 max-w-4xl mx-auto text-center">

<motion.h2
initial={{opacity:0}}
whileInView={{opacity:1}}
className="text-4xl font-bold text-violet-400"
>

Sobre mí

</motion.h2>

<p className="mt-6 text-gray-400">

Soy analista-desarrollador de software enfocada en desarrollos
evolutivos y correctivos con tecnologías Oracle y de bases de datos
así como el análisis del impacto de las aplicaciones sobre los
datos y viceversa.

</p>

</section>

)

}