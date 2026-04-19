import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Trophy, Award, Medal, Code, CheckCircle, ExternalLink, X } from "lucide-react";

const achievements = [
  {
    title: "1st Prize \u2013 GDG Super SUS Hackathon",
    description: "Built a full-stack solution under time constraints and secured 1st place among competitive teams.",
    icon: <Trophy className="w-8 h-8 text-yellow-500" />,
    tags: ["React", "Node.js", "Full Stack", "Hackathon"],
    featured: true,
    images: [
      { src: "/images/achievements/gdg-1.jpg", caption: "Award Ceremony \u2013 GDG Super SUS Hackathon (1st Prize)" },
      { src: "/images/achievements/gdg-2.jpg", caption: "Award Ceremony \u2013 GDG Super SUS Hackathon (1st Prize)" }
    ]
  },
  {
    title: "3rd Place \u2013 AlgoZenith Hackathon",
    description: "Secured 3rd place among 100+ teams by building a scalable and efficient solution.",
    icon: <Medal className="w-8 h-8 text-neutral-300" />,
    tags: ["DSA", "Problem Solving", "Scalability"],
    images: [
      { src: "/images/achievements/algozenith-1.jpg", caption: "Award Ceremony \u2013 AlgoZenith Hackathon (3rd Place)" }
    ]
  },
  {
    title: "1st Place \u2013 Ideathon (VIGMAT)",
    description: "Won 1st place for proposing an innovative and technically feasible solution design.",
    icon: <Award className="w-8 h-8 text-yellow-600" />,
    tags: ["Product Design", "Architecture", "Ideation"]
  },
  {
    title: "CodeChef (2-Star | 1417 Rating)",
    description: "Achieved 2\u2605 rating (1417) on CodeChef with consistent problem-solving in data structures and algorithms.",
    icon: <Code className="w-8 h-8 text-blue-500" />,
    tags: ["Competitive Programming", "DSA"]
  }
];

const certifications = [
  {
    title: "IBM AI Fundamentals",
    issuer: "IBM",
    link: "https://www.credly.com/badges/933201d9-056c-4e25-9806-3e6da6312dd4/public_url"
  },
  {
    title: "Cisco JavaScript Essentials 1",
    issuer: "Cisco",
    link: "https://www.credly.com/badges/b75ed63c-85a2-43dd-bad5-a436d20720b2/public_url"
  },
  {
    title: "Cisco JavaScript Essentials 2",
    issuer: "Cisco",
    link: "https://www.credly.com/badges/3841a486-81df-4b44-99ad-12eda951902d/public_url"
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
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 p-2 text-neutral-400 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-8 h-8" />
              </button>
              <img 
                src={selectedImage.src} 
                alt={selectedImage.caption}
                className="w-full h-auto max-h-[80vh] object-contain rounded-xl shadow-2xl"
              />
              <p className="mt-6 text-neutral-200 font-medium text-center text-sm md:text-base px-6 py-2">
                {selectedImage.caption}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.02, y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.5)" }}
              transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Card className={`p-6 bg-neutral-900/50 border ${item.featured ? 'border-neutral-700 ring-1 ring-neutral-800' : 'border-neutral-800'} transition-all h-full flex flex-col items-start gap-4 group hover:border-neutral-600 relative overflow-hidden`} style={{ willChange: 'transform' }}>


                <div className="flex items-start gap-4 w-full">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                    className="p-3 bg-neutral-950 rounded-lg border border-neutral-800 shrink-0 shadow-[0_0_15px_rgba(255,255,255,0.05)] group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-shadow"
                  >
                    {item.icon}
                  </motion.div>
                  <div className="flex flex-col flex-1 h-full w-full">
                    <h3 className="text-xl font-bold text-neutral-200 mb-2 group-hover:text-white transition-colors pr-16">{item.title}</h3>
                    <p className="text-neutral-400 text-sm leading-relaxed group-hover:text-neutral-300 transition-colors mb-4">{item.description}</p>

                    <div className="mt-auto flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 w-full">
                      {item.tags && (
                        <div className="flex flex-wrap gap-x-3 gap-y-1">
                          {item.tags.map((tag, tagIdx) => (
                            <span key={tagIdx} className="text-[10px] font-mono text-neutral-500 uppercase tracking-tighter group-hover:text-neutral-400 underline decoration-neutral-800 underline-offset-4">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                      
                      {item.images && (
                        <div className="flex gap-2 shrink-0">
                          {item.images.map((img, imgIdx) => (
                            <motion.div 
                              key={imgIdx}
                              whileHover={{ scale: 1.05 }}
                              className="w-16 h-12 rounded-lg overflow-hidden border border-neutral-800 cursor-pointer relative group/img z-10 hover:border-neutral-600 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedImage(img);
                              }}
                            >
                              <img src={img.src} alt="Achievement Thumbnail" loading="lazy" className="w-full h-full object-cover grayscale opacity-70 group-hover/img:grayscale-0 group-hover/img:opacity-100 transition-all duration-300 group-hover/img:scale-105" />
                            </motion.div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}

          <div className="md:col-span-2 mt-8">
            <h3 className="text-2xl font-bold text-neutral-200 mb-6 border-b border-neutral-800 pb-4">
              Professional Certifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.03, y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.5)" }}
                  transition={{ duration: 0.5, delay: index * 0.15, type: "spring", stiffness: 100 }}
                  viewport={{ once: true }}
                  className="h-full"
                >
                  <Card className="p-6 bg-neutral-900/50 border border-neutral-800 transition-all h-full flex flex-col justify-between group hover:border-neutral-700 relative overflow-hidden" style={{ willChange: 'transform' }}>
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neutral-800 via-neutral-600 to-neutral-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <span className="flex items-center text-xs font-medium text-neutral-400 bg-neutral-950 border border-neutral-800 px-2 py-1 rounded-full group-hover:border-neutral-600 transition-colors">
                          <CheckCircle className="w-3 h-3 mr-1 text-neutral-300" />
                          Verified Credential
                        </span>
                      </div>
                      <h4 className="text-lg font-bold text-neutral-200 mb-1 group-hover:text-white transition-colors">
                        {cert.title}
                      </h4>
                      <p className="text-sm text-neutral-500 mb-6">
                        Issued by <span className="text-neutral-300 font-medium">{cert.issuer}</span> via Credly
                      </p>
                    </div>

                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-neutral-400 group-hover:text-neutral-200 transition-colors mt-auto w-fit border-b border-transparent group-hover:border-neutral-400 pb-0.5"
                    >
                      View Certificate
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
    </>
  );
}
