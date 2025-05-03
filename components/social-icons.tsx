import Link from "next/link"
import { Github, Linkedin, Twitter, Instagram } from "lucide-react"

export default function SocialIcons() {
  return (
    <div className="flex space-x-4">
      <Link
        href="https://github.com/Gabygori"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-full bg-muted flex items-center justify-center transition-colors hover:bg-primary hover:text-primary-foreground"
      >
        <span className="sr-only">GitHub</span>
        <Github className="h-5 w-5" />
      </Link>


      <Link
        href="https://www.instagram.com/gaby_osbn/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-full bg-muted flex items-center justify-center transition-colors hover:bg-primary hover:text-primary-foreground"
      >
        <span className="sr-only">Instagram</span>
        <Instagram className="h-5 w-5" />
      </Link>
    </div>
  )
}
