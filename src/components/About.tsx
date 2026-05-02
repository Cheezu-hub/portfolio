import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { CVButton } from "@/components/ui/cv-button";


const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};


export function About() {
  return (
    <section className="py-24 px-4 max-w-7xl mx-auto w-full overflow-hidden relative">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24"
      >
        {/* Left side: Text Content */}
        <div className="flex-1 max-w-2xl w-full">
          <motion.div variants={itemVariants} className="inline-block px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-medium text-neutral-400 mb-6 uppercase tracking-widest">
            Discovery
          </motion.div>
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold pb-2 bg-clip-text text-transparent bg-gradient-to-r from-white via-neutral-200 to-neutral-500 mb-8 font-space"
          >
            About Me
          </motion.h2>
          <motion.div 
            variants={itemVariants}
            className="p-8 rounded-3xl bg-neutral-900/40 border border-neutral-800/50 backdrop-blur-md shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors duration-500"></div>
            <p className="text-neutral-400 text-lg leading-relaxed relative z-10">
              A results-driven <span className="text-white font-medium">Full Stack Developer</span> and <span className="text-white font-medium">AI Engineer</span> with a robust system design 
              mindset and a proven track record of building highly scalable applications. Specializing 
              in autonomous AI/LLM integrations, I engineer end-to-end pipelines that connect complex 
              backend infrastructure with intuitive frontend interfaces. Driven by hackathon-fueled 
              innovation and real-world problem-solving, I architect and optimize solutions that automate 
              workflows, enhance system performance, and deliver measurable impact across diverse technical domains.
            </p>
          </motion.div>



          <motion.div 
            variants={itemVariants}
            className="mt-12 flex items-center gap-6"
          >
            <CVButton />
            <div className="h-px flex-1 bg-neutral-800/50"></div>
          </motion.div>
        </div>

        {/* Right side: Portrait Image */}
        <motion.div 
          variants={itemVariants}
          className="w-full lg:w-5/12 flex justify-center lg:justify-end mt-10 lg:mt-0"
        >
          <div className="relative group">
            {/* Background glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-neutral-700/20 to-neutral-500/20 rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-100 transition duration-1000"></div>
            
            {/* Image container */}
            <div className="relative w-64 h-80 sm:w-72 sm:h-96 md:w-[320px] md:h-[420px] lg:w-[380px] lg:h-[480px] rounded-[2.5rem] overflow-hidden border border-neutral-800/50 bg-neutral-900 shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-tr from-neutral-950/60 via-transparent to-white/5 z-10 pointer-events-none"></div>
              <img 
                src="/images/profile-portrait.png" 
                alt="Portrait" 
                className="w-full h-full object-cover object-top grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000 ease-in-out group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-xs text-neutral-400 mb-1">Current Focus</p>
                <p className="text-sm font-medium text-white">Scaling AI Agent Infrastructures</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
