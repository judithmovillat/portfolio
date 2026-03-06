"use client"

import { FaReact,FaHtml5,FaCss3Alt,FaJs } from "react-icons/fa"

export default function Skills(){

return(

<section className="py-32 text-center">

<h2 className="text-4xl font-bold text-blue-400">
Skills
</h2>

<div className="flex justify-center gap-10 mt-10 text-5xl">

<FaHtml5/>
<FaCss3Alt/>
<FaJs/>
<FaReact/>

</div>

</section>

)

}