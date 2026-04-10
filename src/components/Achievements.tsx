import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Trophy, Award, Medal, Code } from "lucide-react";

const achievements = [
  {
    title: "1st Prize \u2013 Google Developer Groups (GDG) Super SUS Hackathon",
    description: "Architected a premier winning solution demonstrating sophisticated problem-solving resilience and rapid full-stack engineering delivery.",
    icon: <Trophy className="w-8 h-8 text-yellow-500" />
  },
  {
    title: "3rd Place \u2013 AlgoZenith Hackathon",
    description: "Outperformed 100+ competitive developer teams engineering agile, scalable, and robust software product solutions.",
    icon: <Medal className="w-8 h-8 text-neutral-300" />
  },
  {
    title: "1st Place \u2013 Ideathon (VIGMAT)",
    description: "Acknowledged fundamentally for out-of-the-box technical feasibility mappings and innovative architectural design methodology.",
    icon: <Award className="w-8 h-8 text-yellow-600" />
  },
  {
    title: "CodeChef (2-Star | 1417 Rating)",
    description: "Continually mastered over 150+ robust algorithmic implementations, proving profound competence in core computational data structures and math.",
    icon: <Code className="w-8 h-8 text-blue-500" />
  }
];

export function Achievements() {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto w-full">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-200 to-neutral-500 mb-10">
          Achievements & Certifications
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700 transition-all hover:-translate-y-1 h-full flex items-start gap-4">
                <motion.div 
                  animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                  className="p-3 bg-neutral-950 rounded-lg border border-neutral-800 shrink-0 shadow-[0_0_15px_rgba(255,255,255,0.05)]"
                >
                  {item.icon}
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-200 mb-2">{item.title}</h3>
                  <p className="text-neutral-400 leading-relaxed">{item.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <Card className="p-6 bg-neutral-900/50 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 group hover:border-neutral-700 transition-colors">
              <div>
                <h3 className="text-xl font-bold text-neutral-200 mb-1">Certifications</h3>
                <p className="text-neutral-400">IBM AI Fundamentals, Cisco JavaScript Essentials 1 & 2</p>
              </div>
              <motion.div
                animate={{ scale: [1, 1.1, 1], rotate: [0, -5, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="hidden sm:block"
              >
                <Award className="w-10 h-10 text-neutral-600 group-hover:text-yellow-600 transition-colors duration-300 drop-shadow-[0_0_10px_rgba(202,138,4,0)] group-hover:drop-shadow-[0_0_15px_rgba(202,138,4,0.3)]" />
              </motion.div>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
