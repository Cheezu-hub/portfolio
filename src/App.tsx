import { ReactLenis } from 'lenis/react'
import { useState, useEffect } from "react"
import { Cursor } from "@/components/Cursor"
import { SplineSceneBasic } from "@/components/ui/spline-demo"
import { About } from "@/components/About"
import { Projects } from "@/components/Projects"
import { Skills } from "@/components/Skills"
import { Achievements } from "@/components/Achievements"
import { Footer } from "@/components/Footer"

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <ReactLenis root>
      <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-neutral-800 selection:text-white relative cursor-none md:cursor-auto">
        <Cursor />
        
        {/* Subtle Background Grid overlay */}
        <div 
          className="fixed inset-0 z-0 pointer-events-none"
          style={{ 
            backgroundImage: `
              radial-gradient(circle at center, transparent 0%, black 100%),
              linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '100% 100%, 40px 40px, 40px 40px',
            backgroundPosition: 'center center'
          }} 
        />

        {/* Fractal Noise overlay for texture */}
        <div 
          className="fixed inset-0 z-0 pointer-events-none opacity-[0.02] mix-blend-screen"
          style={{ 
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E")'
          }} 
        />

        {/* Interactive Mouse-following background gradient */}
        <div 
          className="fixed inset-0 z-0 pointer-events-none transition-opacity duration-300"
          style={{
            background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.05), transparent 60%)`
          }}
        />
        
        <main className="relative z-10 flex flex-col items-center justify-center pt-8 md:pt-16 pb-0">
          <div className="max-w-7xl w-full px-4 mb-20">
            <SplineSceneBasic />
          </div>
          
          <About />
          <Projects />
          <Skills />
          <Achievements />
        </main>
        
        <Footer />
      </div>
    </ReactLenis>
  )
}

export default App
