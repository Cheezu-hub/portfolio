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
      className="w-full h-[600px] bg-black/[0.96] relative overflow-hidden border-neutral-800"
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
      
      <div className="w-full absolute inset-0 h-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
          speed={1}
        />
      </div>
      
      <div className="flex h-full flex-col items-center justify-center text-center z-10 relative">
        {/* Main content */}
        <motion.div 
          className="flex-1 p-8 flex flex-col justify-center items-center"
          style={{ x: shiftX, y: shiftY }}
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-neutral-400 mb-2 font-medium tracking-wide"
          >
            Rajana Chaitanya
          </motion.h2>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 leading-[1.2] py-4 px-2">
            <span className="block mb-2">
              {"Full Stack Developer &".split(" ").map((word, i) => (
                <motion.span
                  key={`line1-${i}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="inline-block mr-2 md:mr-3"
                >
                  {word}
                </motion.span>
              ))}
            </span>
            <span className="block">
              {"AI Engineer".split(" ").map((word, i) => (
                <motion.span
                  key={`line2-${i}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + (i + 4) * 0.1 }}
                  className="inline-block mr-2 md:mr-3"
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-6 text-neutral-300 max-w-lg leading-relaxed"
          >
            Architecting scalable full-stack systems and integrating advanced AI/LLM pipelines to solve complex, real-world problems.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="mt-8 flex flex-wrap gap-4 items-center"
          >
            <CVButton />
            <div className="flex gap-3 items-center">
              <Magnetic>
                <a 
                  href="https://github.com/Cheezu-hub" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="p-2 md:p-3 bg-neutral-900 rounded-full border border-neutral-800 hover:bg-neutral-800 transition-colors text-white flex items-center justify-center w-10 h-10 md:w-12 md:h-12"
                >
                  <i className="fa-brands fa-github text-xl md:text-2xl"></i>
                </a>
              </Magnetic>
              <Magnetic>
                <a 
                  href="https://www.linkedin.com/in/rajana-chaitanya/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="p-2 md:p-3 bg-neutral-900 rounded-full border border-neutral-800 hover:bg-neutral-800 transition-colors text-white flex items-center justify-center w-10 h-10 md:w-12 md:h-12"
                >
                  <i className="fa-brands fa-linkedin-in text-xl md:text-2xl"></i>
                </a>
              </Magnetic>
              <Magnetic>
                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=rajanachaitanya29@gmail.com&su=Contact%20from%20Portfolio" 
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 md:p-3 bg-neutral-900 rounded-full border border-neutral-800 hover:bg-neutral-800 transition-colors text-white flex items-center justify-center w-10 h-10 md:w-12 md:h-12"
                >
                  <Mail className="w-5 h-5 md:w-6 md:h-6" />
                </a>
              </Magnetic>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Card>
  )
}
