import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const skillCategories = [
  {
    title: "AI/ML (Specialization)",
    skills: ["LLM Prompt Engineering", "Similarity Scoring", "AI/LLM Integration", "IBM AI Fundamentals", "Gemini GenAI SDK", "Claude", "NLP", "AST Validation"],
    className: "md:col-span-2 lg:col-span-2 lg:row-span-2",
    glowType: "pattern"
  },
  {
    title: "Languages",
    skills: ["Python", "JavaScript", "C", "SQL (PostgreSQL, SQLite)", "HTML/CSS"],
    className: "md:col-span-2 lg:col-span-2 lg:row-span-1",
    glowType: "subtle"
  },
  {
    title: "Frameworks & Libraries",
    skills: ["React", "Node.js", "Express.js", "FastAPI", "Flask", "Vite", "Tailwind CSS"],
    className: "md:col-span-2 lg:col-span-2 lg:row-span-1",
    glowType: "subtle"
  },
  {
    title: "Tools & Core Architecture",
    skills: ["Git/GitHub", "REST APIs", "Chrome Extension API", "Regex Data Redaction", "Data Structures & Algorithms", "System Design", "Agile Methodologies"],
    className: "md:col-span-full lg:col-span-4 lg:row-span-1",
    glowType: "wide"
  }
];

const cardContainerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.5,
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

function SkillCard({ category, index }: { category: typeof skillCategories[0], index: number }) {
  return (
    <motion.div
      variants={cardContainerVariants}
      initial="hidden"
      whileInView="visible"
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className={`h-full ${category.className}`}
    >
      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.4 }}
        className="h-full"
      >
        <motion.div whileHover="hover" className="h-full group">
          <Card className="p-6 md:p-8 bg-neutral-900/40 border border-neutral-800 transition-all duration-500 h-full relative overflow-hidden flex flex-col justify-between group-hover:border-neutral-600 group-hover:bg-neutral-900/60 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.03)] cursor-default">
            
            {/* Subtle Gradient Highlights */}
            {category.glowType === 'pattern' && (
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-neutral-100 opacity-[0.02] rounded-full blur-3xl group-hover:opacity-[0.05] transition-opacity duration-700 pointer-events-none"></div>
            )}
            
            <div className="relative z-10">
              <h3 className={`font-bold text-neutral-200 mb-6 group-hover:text-white transition-colors duration-300 ${category.glowType === 'pattern' ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'}`}>
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-2 md:gap-3 lg:gap-4">
                {category.skills.map((skill, skillIdx) => (
                  <motion.span 
                    key={skillIdx} 
                    variants={{
                      hidden: { opacity: 0, scale: 0.8 },
                      visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
                      hover: { 
                        backgroundColor: "rgba(255,255,255,0.08)",
                        color: "rgba(255,255,255,1)",
                        borderColor: "rgba(255,255,255,0.3)",
                        boxShadow: "0 0 15px rgba(255,255,255,0.05)",
                        transition: { duration: 0.3 }
                      }
                    }}
                    className={`px-3 md:px-4 py-1.5 md:py-2 bg-neutral-950 text-neutral-400 rounded-md text-sm font-code tracking-tight border border-neutral-800/80 shadow-sm ${category.glowType === 'pattern' ? 'text-sm md:text-base' : 'text-xs md:text-sm'}`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto w-full">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-200 to-neutral-500 mb-10 text-center md:text-left">
          Technical Arsenal
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 auto-rows-[minmax(180px,auto)]">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} category={category} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
