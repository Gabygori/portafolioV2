"use client"

import { motion } from "framer-motion"
import ProjectCard from "./project-card"

// Sample project data
const projects = [
  {
    id: 1,
    title: "Mypomodoro",
    description:
      "My pomodoro es una aplicación móvil que ayuda a los usuarios a gestionar su tiempo de trabajo y descanso utilizando la técnica Pomodoro. La aplicación permite a los usuarios establecer temporizadores para sesiones de trabajo y descansos.",
    image: "/FreeSample-Vectorizer-io-mypomodoro.svg?height=400&width=600",
    tags: ["React Native", "Expo"],
    link: "https://expo.dev/accounts/gabote08/projects/MyPomodoro",
  },
  {
    id: 2,
    title: "Mi portafolio web",
    description: "Sitio personal donde muestro mis proyectos, habilidades y experiencia en desarrollo web.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "node.js"],
    link: "#",
  },
  {
    id: 3,
    title: "GISP",
    description: "Sistema para administrar saldos positivos de clientes en un corralón, optimizando tiempos y reduciendo errores manuales.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["En proceso"],
    link: "#",
  },
  {
    id: 4,
    title: "Ecommerce: Ohlala",
    description: "es una tienda en línea desarrollada con WordPress y PHP. Incluye funcionalidades como catálogo de productos, carrito de compras, pasarela de pago y gestión de pedidos, todo con un diseño atractivo y responsive.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Wordpress", "PHP"],
    link: "http://kioscohlala.com.ar/",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">Mis proyectos</h2>
          <div className="w-16 h-1 bg-primary rounded-full"></div>
          <p className="mt-4 text-muted-foreground text-center max-w-[600px]">
          Aquí tienes algunos de mis proyectos recientes. En cada uno de estos proyectos, he aplicado mis habilidades técnicas y creativas para desarrollar soluciones innovadoras y funcionales. Aquí te presento algunos ejemplos destacados de mi trabajo.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
