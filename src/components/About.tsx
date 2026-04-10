import { motion } from "framer-motion";
import { CVButton } from "@/components/ui/cv-button";

export function About() {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto w-full">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-3xl"
      >
        <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-200 to-neutral-500 mb-6">
          About Me
        </h2>
        <p className="text-neutral-400 text-lg leading-relaxed">
          A results-driven Full Stack Developer and AI Engineer with a robust system design 
          mindset and a proven track record of building highly scalable applications. Specializing 
          in autonomous AI/LLM integrations, I engineer end-to-end pipelines that connect complex 
          backend infrastructure with intuitive frontend interfaces. Driven by hackathon-fueled 
          innovation and real-world problem-solving, I architect and optimize solutions that automate 
          workflows, enhance system performance, and deliver measurable impact across diverse technical domains.
        </p>
        <div className="mt-10">
          <CVButton />
        </div>
      </motion.div>
    </section>
  );
}
