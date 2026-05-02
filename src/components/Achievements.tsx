import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Trophy, Award, Medal, Code, ExternalLink, X, ShieldCheck, Sparkles } from "lucide-react";

const achievements = [
  {
    title: "1st Prize \u2013 GDG Super SUS Hackathon",
    description: "Built a full-stack solution under time constraints and secured 1st place among competitive teams.",
    icon: <Trophy className="w-6 h-6 text-yellow-500" />,
    tags: ["React", "Node.js", "Full Stack", "Hackathon"],
    featured: true,
    date: "2024",
    images: [
      { src: "/images/achievements/gdg-1.jpg", caption: "Award Ceremony \u2013 GDG Super SUS Hackathon (1st Prize)" },
      { src: "/images/achievements/gdg-2.jpg", caption: "Award Ceremony \u2013 GDG Super SUS Hackathon (1st Prize)" }
    ]
  },
  {
    title: "3rd Place \u2013 AlgoZenith Hackathon",
    description: "Secured 3rd place among 100+ teams by building a scalable and efficient solution.",
    icon: <Medal className="w-6 h-6 text-neutral-300" />,
    tags: ["DSA", "Problem Solving", "Scalability"],
    date: "2023",
    images: [
      { src: "/images/achievements/algozenith-1.jpg", caption: "Award Ceremony \u2013 AlgoZenith Hackathon (3rd Place)" }
    ]
  },
  {
    title: "1st Place \u2013 Ideathon (VIGMAT)",
    description: "Won 1st place for proposing an innovative and technically feasible solution design.",
    icon: <Award className="w-6 h-6 text-yellow-600" />,
    tags: ["Product Design", "Architecture", "Ideation"],
    date: "2023"
  },
  {
    title: "CodeChef (2-Star | 1417 Rating)",
    description: "Achieved 2\u2605 rating (1417) on CodeChef with consistent problem-solving in data structures and algorithms.",
    icon: <Code className="w-6 h-6 text-blue-500" />,
    tags: ["Competitive Programming", "DSA"],
    date: "Ongoing"
  }
];

const certifications = [
  {
    title: "IBM AI Fundamentals",
    issuer: "IBM",
    link: "https://www.credly.com/badges/933201d9-056c-4e25-9806-3e6da6312dd4/public_url",
    icon: <ShieldCheck className="w-5 h-5 text-blue-400" />
  },
  {
    title: "Cisco JavaScript Essentials 1",
    issuer: "Cisco",
    link: "https://www.credly.com/badges/b75ed63c-85a2-43dd-bad5-a436d20720b2/public_url",
    icon: <ShieldCheck className="w-5 h-5 text-teal-400" />
  },
  {
    title: "Cisco JavaScript Essentials 2",
    issuer: "Cisco",
    link: "https://www.credly.com/badges/3841a486-81df-4b44-99ad-12eda951902d/public_url",
    icon: <ShieldCheck className="w-5 h-5 text-teal-400" />
  }
];

export function Achievements() {
  const [selectedImage, setSelectedImage] = useState<{src: string, caption: string} | null>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <>
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full flex flex-col items-center cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute -top-16 right-0 p-3 bg-neutral-900 rounded-full border border-neutral-800 text-neutral-400 hover:text-white transition-all"
              >
                <X className="w-6 h-6" />
              </button>
              <img 
                src={selectedImage.src} 
                alt={selectedImage.caption}
                className="w-full h-auto max-h-[75vh] object-contain rounded-[2rem] shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-neutral-800"
              />
              <div className="mt-8 px-8 py-4 bg-neutral-900/50 backdrop-blur-xl border border-neutral-800 rounded-2xl text-center">
                <p className="text-neutral-200 font-medium font-space">{selectedImage.caption}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="py-24 px-4 max-w-7xl mx-auto w-full relative">
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="inline-block px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-medium text-neutral-400 mb-6 uppercase tracking-widest">
            Recognition
          </div>
          <h2 className="text-4xl md:text-5xl font-bold pb-2 bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-500 font-space tracking-tight">
            Milestones & Honors
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Timeline Section */}
          <div className="lg:col-span-8 space-y-8 relative">
            <div className="absolute left-0 lg:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-neutral-800 via-neutral-700 to-transparent hidden md:block" />
            
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative md:pl-20"
              >
                <div className="absolute left-[-4px] md:left-[28px] top-8 w-2 h-2 rounded-full bg-neutral-600 border-4 border-black z-10 hidden md:block" />
                
                <Card className={`p-8 bg-neutral-900/40 backdrop-blur-xl border ${item.featured ? 'border-yellow-500/30 bg-yellow-500/[0.02]' : 'border-neutral-800/50'} rounded-[2rem] group hover:border-neutral-700 transition-all duration-500 relative overflow-hidden`}>
                  {item.featured && (
                    <div className="absolute top-0 right-0 p-4">
                      <Sparkles className="w-5 h-5 text-yellow-500/50" />
                    </div>
                  )}
                  
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-xs font-mono text-neutral-500 tracking-tighter uppercase">{item.date}</span>
                        <div className="h-px w-8 bg-neutral-800" />
                        <div className="flex gap-1">
                          {item.tags.map((tag, i) => (
                            <span key={i} className="text-[10px] text-neutral-600 uppercase tracking-widest">{tag}</span>
                          ))}
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-4 font-space">{item.title}</h3>
                      <p className="text-neutral-400 leading-relaxed mb-6">{item.description}</p>
                      
                      {item.images && (
                        <div className="flex gap-3">
                          {item.images.map((img, i) => (
                            <motion.div
                              key={i}
                              whileHover={{ scale: 1.05, y: -2 }}
                              onClick={() => setSelectedImage(img)}
                              className="w-20 h-14 rounded-xl overflow-hidden border border-neutral-800 cursor-pointer group/thumb"
                            >
                              <img src={img.src} alt="" className="w-full h-full object-cover grayscale group-hover/thumb:grayscale-0 transition-all duration-500" />
                            </motion.div>
                          ))}
                        </div>
                      )}
                    </div>
                    
                    <div className="hidden md:flex flex-col items-center justify-center p-6 bg-neutral-950/50 rounded-2xl border border-neutral-800/50 group-hover:border-neutral-700 transition-colors">
                      {item.icon}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Certifications Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-xl font-bold text-white mb-8 font-space flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-neutral-500" />
              Verified Skills
            </h3>
            
            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <a href={cert.link} target="_blank" rel="noreferrer" className="block">
                    <Card className="p-5 bg-neutral-900/30 border border-neutral-800/50 hover:bg-neutral-800/30 hover:border-neutral-700 transition-all duration-300 rounded-2xl group">
                      <div className="flex items-center gap-4">
                        <div className="p-2.5 rounded-xl bg-neutral-950 border border-neutral-800 group-hover:scale-110 transition-transform">
                          {cert.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-sm font-bold text-neutral-200 group-hover:text-white transition-colors">{cert.title}</h4>
                          <p className="text-[11px] text-neutral-500 uppercase tracking-widest">{cert.issuer}</p>
                        </div>
                        <ExternalLink className="w-3.5 h-3.5 text-neutral-600 group-hover:text-neutral-400" />
                      </div>
                    </Card>
                  </a>
                </motion.div>
              ))}
            </div>
            
            <div className="p-8 rounded-[2rem] bg-gradient-to-br from-neutral-900 to-black border border-neutral-800 mt-12 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Trophy className="w-24 h-24 rotate-12" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2 font-space">Always Learning</h4>
              <p className="text-sm text-neutral-500 leading-relaxed">
                Currently deep-diving into <span className="text-neutral-300">Advanced LLM Orchestration</span> and <span className="text-neutral-300">Distributed System Design</span>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
