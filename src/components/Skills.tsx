import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Brain, Code, Cpu, Layers } from "lucide-react";

const skillCategories = [
  {
    title: "AI & Machine Learning",
    icon: Brain,
    skills: ["LLM Prompt Engineering", "Similarity Scoring", "AI/LLM Integration", "IBM AI Fundamentals", "Gemini GenAI SDK", "Claude", "NLP", "AST Validation"],
    className: "md:col-span-2 lg:col-span-2 lg:row-span-2",
    glowColor: "from-blue-500/20"
  },
  {
    title: "Core Languages",
    icon: Code,
    skills: ["Python", "JavaScript", "C", "SQL (PostgreSQL, SQLite)", "HTML/CSS"],
    className: "md:col-span-2 lg:col-span-2 lg:row-span-1",
    glowColor: "from-purple-500/20"
  },
  {
    title: "Frameworks",
    icon: Layers,
    skills: ["React", "Node.js", "Express.js", "FastAPI", "Flask", "Vite", "Tailwind CSS"],
    className: "md:col-span-2 lg:col-span-2 lg:row-span-1",
    glowColor: "from-emerald-500/20"
  },
  {
    title: "Tools & Architecture",
    icon: Cpu,
    skills: ["Git/GitHub", "REST APIs", "Chrome Extension API", "Regex Data Redaction", "System Design", "Agile Methodologies"],
    className: "md:col-span-full lg:col-span-4 lg:row-span-1",
    glowColor: "from-orange-500/20"
  }
];

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.5, ease: "easeOut" } 
  }
};

function SkillCard({ category }: { category: typeof skillCategories[0] }) {
  const Icon = category.icon;
  
  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={`group relative ${category.className}`}
    >
      {/* Animated Border Beam */}
      <div className="absolute -inset-[1px] bg-gradient-to-r from-transparent via-neutral-700 to-transparent rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_60%,white_100%)] group-hover:animate-[spin_4s_linear_infinite]" />
      </div>

      <Card className="p-8 md:p-10 bg-neutral-950/80 backdrop-blur-xl border border-neutral-800/50 transition-all duration-500 h-full relative overflow-hidden flex flex-col group-hover:border-neutral-700/50 group-hover:bg-neutral-900/40 rounded-[2rem] shadow-2xl cursor-default">
        
        {/* Corner Glow */}
        <div className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br ${category.glowColor} to-transparent blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
        
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 rounded-2xl bg-neutral-900 border border-neutral-800 text-neutral-400 group-hover:text-white group-hover:border-neutral-700 transition-all duration-300">
              <Icon className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-neutral-200 text-xl md:text-2xl font-space group-hover:text-white transition-colors">
              {category.title}
            </h3>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {category.skills.map((skill, skillIdx) => (
              <motion.span 
                key={skillIdx}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-4 py-2 bg-neutral-900/50 text-neutral-400 rounded-xl text-sm font-archivo tracking-tight border border-neutral-800/50 hover:bg-neutral-800 hover:text-white hover:border-neutral-600 transition-all cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section className="py-24 px-4 max-w-7xl mx-auto w-full relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-blue-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="inline-block px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-medium text-neutral-400 mb-6 uppercase tracking-widest">
            Expertise
          </div>
          <h2 className="text-4xl md:text-5xl font-bold pb-2 bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-500 font-space tracking-tight">
            Technical Arsenal
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6 auto-rows-[minmax(200px,auto)]">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} category={category} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
