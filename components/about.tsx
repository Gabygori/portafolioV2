"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">Sobre mi</h2>
          <div className="w-16 h-1 bg-primary rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-background shadow-xl">
              <Image src="/placeholder.svg?height=320&width=320" alt="Profile Photo" fill className="object-cover" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold">Hola, soy Gabriel Osbando</h3>
            <p className="text-muted-foreground">
            Un estudiante de programacion y desarrollador web, apasionado por la tecnologia y el aprendizaje continuo. Me encanta crear soluciones innovadoras y eficientes.

            </p>
            <p className="text-muted-foreground">
            Mi camino en la programación comenzó hace tres años, gracias a la tecnicatura en programación que estoy cursando. Desde entonces, he adquirido y perfeccionado habilidades en diversos lenguajes de programación y tecnologías. Continúo expandiendo mis conocimientos de manera constante, tanto en el ámbito académico como en el profesional. Además, trabajo en el desarrollo de mis competencias de comunicación, especialmente en la documentación técnica, para optimizar la colaboración en equipos y garantizar que los proyectos sean comprensibles, bien estructurados y escalables.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">React</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Next.js</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">JavaScript</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">CSS</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Node.js</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">HTML</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Java</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Python</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">WordPress</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">BootsTrap</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Joomla</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
