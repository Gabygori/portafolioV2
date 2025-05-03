import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Gabriel Osbando | Desarrollador y Estudiante',
  icons: '/public/favicon.ico',
  description: 'Portfolio de Gabriel Osbando, un desarrollador y estudiante apasionado por la tecnología y el aprendizaje continuo.',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
