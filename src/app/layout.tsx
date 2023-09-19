import { Navbar } from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import ParticlesBackground from '@/components/ParticlesBackground'
import { Footer } from '@/components/Footer'


export const metadata: Metadata = {
  title: "Álvaro Villaló Portfolio",
  description: "Welcome to Alvaro's portfolio",
  authors: {
    url: "https://github.com/IAmLeZz",
    name: "Alvaro Villaló"
  },
  keywords: ["Portfolio", "Portafolio", "Web Developer", "Software Engineer", "Full Stack Developer"],
  applicationName: "Alvaro Villaló Portfolio",
  alternates: {
    canonical: ''
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <ParticlesBackground />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
