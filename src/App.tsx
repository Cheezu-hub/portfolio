import { ReactLenis } from 'lenis/react'
import { SplineSceneBasic } from "@/components/ui/spline-demo"
import { About } from "@/components/About"
import { Projects } from "@/components/Projects"
import { Skills } from "@/components/Skills"
import { Achievements } from "@/components/Achievements"
import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer"
import { Navbar } from "@/components/Navbar"
import { Cursor } from "@/components/Cursor"

function App() {
  return (
    <ReactLenis root>
      <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-neutral-800 selection:text-white relative">
        <Cursor />
        <Navbar />
        
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
            backgroundPosition: 'center center',
            willChange: 'transform',
            transform: 'translateZ(0)'
          }} 
        />

        {/* Fractal Noise overlay for texture */}
        <div 
          className="fixed inset-0 z-0 pointer-events-none opacity-[0.02] mix-blend-screen"
          style={{ 
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%222%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E")',
            willChange: 'transform',
            transform: 'translateZ(0)'
          }} 
        />

        <main className="relative z-10 flex flex-col items-center justify-center pt-24 md:pt-32 pb-0">
          <section id="home" className="max-w-7xl w-full px-4 mb-20 scroll-mt-32">
            <SplineSceneBasic />
          </section>
          
          <div className="w-full space-y-32">
            <section id="about" className="scroll-mt-32">
              <About />
            </section>
            
            <section id="projects" className="scroll-mt-32">
              <Projects />
            </section>
            
            <section id="skills" className="scroll-mt-32">
              <Skills />
            </section>
            
            <section id="achievements" className="scroll-mt-32">
              <Achievements />
            </section>

            <Contact />
          </div>
        </main>
        
        <Footer />
      </div>
    </ReactLenis>
  )
}

export default App
