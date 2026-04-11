import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "JavaScript", "C", "SQL (PostgreSQL, SQLite)", "HTML/CSS"]
  },
  {
    title: "Frameworks & Libraries",
    skills: ["React", "Node.js", "Express.js", "FastAPI", "Flask", "Vite", "Tailwind CSS"]
  },
  {
    title: "Tools & Core",
    skills: ["Git/GitHub", "REST APIs", "Chrome Extension API", "AST Validation", "Regex Data Redaction", "Data Structures & Algorithms", "System Design"]
  },
  {
    title: "AI/ML",
    skills: ["LLM Prompt Engineering", "Similarity Scoring", "AI/LLM Integration", "IBM AI Fundamentals", "Gemini GenAI SDK", "Claude"]
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
      className="h-full"
    >
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.4 }}
        className="h-full"
      >
        <motion.div whileHover="hover" className="h-full">
          <Card className="p-6 bg-neutral-900/50 border border-neutral-800 transition-colors h-full cursor-default hover:border-neutral-700">
            <h3 className="text-xl font-semibold text-neutral-200 mb-4">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIdx) => (
                <motion.span 
                  key={skillIdx} 
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
                    hover: { 
                      backgroundColor: "rgba(255,255,255,0.1)",
                      color: "rgba(255,255,255,1)",
                      borderColor: "rgba(255,255,255,0.5)",
                      boxShadow: "0 0 12px rgba(255,255,255,0.15)",
                      transition: { duration: 0.3 }
                    }
                  }}
                  className="px-3 py-1 bg-neutral-800 text-neutral-300 rounded-full text-sm font-medium border border-neutral-700"
                >
                  {skill}
                </motion.span>
              ))}
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
        <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-200 to-neutral-500 mb-10">
          Technical Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} category={category} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
