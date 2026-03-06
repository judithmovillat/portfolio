"use client"

import { motion } from "framer-motion"

export default function Projects(){

return(

<section className="py-32">

<h2 className="text-4xl text-center font-bold text-violet-400">
Proyectos
</h2>

<div className="grid md:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">

<motion.div
whileHover={{scale:1.05}}
className="p-6 bg-gray-900 rounded-xl"
>

<h3 className="text-xl">Proyecto 1</h3>
<p className="text-gray-400 mt-2">
Descripción del proyecto
</p>

</motion.div>

<motion.div
whileHover={{scale:1.05}}
className="p-6 bg-gray-900 rounded-xl"
>

<h3 className="text-xl">Proyecto 2</h3>
<p className="text-gray-400 mt-2">
Descripción del proyecto
</p>

</motion.div>

</div>

</section>

)

}