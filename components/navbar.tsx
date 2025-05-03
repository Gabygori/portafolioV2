"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"}`}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="font-bold text-xl">
          <Link href="/">Gabriel Osbando |
          Desarrollador y Estudiante</Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <button
            onClick={() => scrollToSection("home")}
            className="text-foreground/70 hover:text-foreground transition-colors"
          >
            Inicio
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-foreground/70 hover:text-foreground transition-colors"
          >
            Sobre mi
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-foreground/70 hover:text-foreground transition-colors"
          >
            Proyectos
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-foreground/70 hover:text-foreground transition-colors"
          >
            Contacto
          </button>
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-4 mt-8">
            <button
  onClick={() => {
    scrollToSection("home");
    (document.querySelector("[data-radix-collection-item]") as HTMLElement)?.click();
  }}
  className="py-2 text-left hover:text-primary transition-colors"
>
  Home
</button>
<button
  onClick={() => {
    scrollToSection("about");
    (document.querySelector("[data-radix-collection-item]") as HTMLElement)?.click();
  }}
  className="py-2 text-left hover:text-primary transition-colors"
>
  About
</button>
<button
  onClick={() => {
    scrollToSection("projects");
    (document.querySelector("[data-radix-collection-item]") as HTMLElement)?.click();
  }}
  className="py-2 text-left hover:text-primary transition-colors"
>
  Projects
</button>
<button
  onClick={() => {
    scrollToSection("contact");
    (document.querySelector("[data-radix-collection-item]") as HTMLElement)?.click();
  }}
  className="py-2 text-left hover:text-primary transition-colors"
>
  Contact
</button>

            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
