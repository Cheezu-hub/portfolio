import { motion } from "framer-motion";
import { CVButton } from "@/components/ui/cv-button";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export function About() {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto w-full overflow-hidden">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20"
      >
        {/* Left side: Text Content */}
        <div className="flex-1 max-w-3xl w-full">
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-200 to-neutral-500 mb-6"
          >
            About Me
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-neutral-400 text-lg leading-relaxed"
          >
            A results-driven Full Stack Developer and AI Engineer with a robust system design 
            mindset and a proven track record of building highly scalable applications. Specializing 
            in autonomous AI/LLM integrations, I engineer end-to-end pipelines that connect complex 
            backend infrastructure with intuitive frontend interfaces. Driven by hackathon-fueled 
            innovation and real-world problem-solving, I architect and optimize solutions that automate 
            workflows, enhance system performance, and deliver measurable impact across diverse technical domains.
          </motion.p>
          <motion.div 
            variants={itemVariants}
            className="mt-10"
          >
            <CVButton />
          </motion.div>
        </div>

        {/* Right side: Portrait Image */}
        <motion.div 
          variants={itemVariants}
          className="w-full md:w-1/2 lg:w-5/12 flex justify-center md:justify-end mt-10 md:mt-0"
        >
          <div className="relative group">
            {/* Background glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-neutral-700 to-neutral-500 rounded-[2rem] blur-2xl opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
            
            {/* Image container */}
            <div className="relative w-64 h-80 sm:w-72 sm:h-96 md:w-[300px] md:h-[400px] lg:w-[360px] lg:h-[460px] rounded-[2rem] overflow-hidden border border-neutral-800/50 bg-neutral-900/50 backdrop-blur-sm shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-neutral-950/40 via-transparent to-white/5 z-10 pointer-events-none"></div>
              <img 
                src="/images/profile-portrait.png" 
                alt="Portrait" 
                className="w-full h-full object-cover object-top grayscale-[15%] group-hover:grayscale-0 transition-all duration-700 ease-in-out group-hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
