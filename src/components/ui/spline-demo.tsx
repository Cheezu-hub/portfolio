import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { SparklesCore } from "@/components/ui/sparkles";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
import { Mail } from "lucide-react"
import { Magnetic } from "@/components/ui/magnetic"
import { CVButton } from "@/components/ui/cv-button"

export function SplineSceneBasic() {
  const containerRef = useRef<HTMLDivElement>(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 20 })
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 20 })

  const shiftX = useTransform(mouseXSpring, [-0.5, 0.5], [15, -15])
  const shiftY = useTransform(mouseYSpring, [-0.5, 0.5], [15, -15])

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const xPos = (e.clientX - rect.left) / rect.width - 0.5
    const yPos = (e.clientY - rect.top) / rect.height - 0.5
    x.set(xPos)
    y.set(yPos)
  }

  return (
    <Card 
      ref={containerRef}
      className="w-full min-h-[90vh] md:min-h-screen py-24 bg-black/[0.96] relative overflow-hidden border-neutral-800 shadow-2xl flex items-center justify-center"
      style={{ willChange: 'transform' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        x.set(0)
        y.set(0)
      }}
    >
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
      {/* Dynamic Glow Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/10 blur-[120px] rounded-full opacity-50" />
        <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-blue-500/10 blur-[120px] rounded-full opacity-50" />
      </div>

      <div className="w-full absolute inset-0 h-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={70}
          className="w-full h-full"
          particleColor="#FFFFFF"
          speed={0.5}
        />
      </div>
      
      <div className="flex h-full flex-col items-center justify-center text-center z-10 relative">
        <motion.div 
          className="flex-1 p-8 flex flex-col justify-center items-center"
          style={{ x: shiftX, y: shiftY }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6 px-4 py-1.5 rounded-full bg-neutral-900/50 border border-neutral-800 backdrop-blur-sm"
          >
            <span className="text-sm font-medium text-neutral-400 tracking-wider font-archivo">
              OPEN TO NEW OPPORTUNITIES
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl lg:text-3xl text-neutral-400 mb-6 font-medium tracking-[0.2em] font-space uppercase"
          >
            Full Stack Developer & AI Engineer
          </motion.h2>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-6xl md:text-8xl lg:text-[10rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-white via-neutral-200 to-neutral-500 leading-[1] py-2 px-2 font-space tracking-tighter mb-6"
          >
            Rajana Chaitanya
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-8 text-neutral-400 max-w-3xl mx-auto text-xl md:text-2xl leading-relaxed font-archivo"
          >
            Architecting scalable full-stack systems and integrating advanced <span className="text-white">AI/LLM pipelines</span> to solve complex, real-world problems.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="mt-14 flex flex-wrap justify-center gap-8 items-center"
          >
            <CVButton />
            <div className="flex gap-4 items-center">
              {[
                { icon: "fa-github", href: "https://github.com/Cheezu-hub" },
                { icon: "fa-linkedin-in", href: "https://www.linkedin.com/in/rajana-chaitanya/" },
                { icon: "mail", href: "mailto:rajanachaitanya29@gmail.com", isLucide: true }
              ].map((link, idx) => (
                <Magnetic key={idx}>
                  <a 
                    href={link.href} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="p-3 bg-neutral-900/50 rounded-2xl border border-neutral-800/50 hover:bg-neutral-800 hover:border-neutral-700 transition-all text-white flex items-center justify-center w-12 h-12 group shadow-xl backdrop-blur-md"
                  >
                    {link.isLucide ? (
                      <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    ) : (
                      <i className={`fa-brands ${link.icon} text-xl group-hover:scale-110 transition-transform`}></i>
                    )}
                  </a>
                </Magnetic>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Bottom decorative bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />
    </Card>
  )
}
