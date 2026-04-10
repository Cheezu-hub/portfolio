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
        {/* Interactive Mouse-following background gradient */}
        <div 
          className="fixed inset-0 z-0 pointer-events-none transition-opacity duration-300"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.06), transparent 80%)`
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
