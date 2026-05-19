import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { SpotlightHover } from "@/components/ui/spotlight-hover";
import { Building2, Calendar, Code2, ChevronRight, CheckCircle2 } from "lucide-react";

const experience = {
  company: "Tech Mahindra",
  role: "Technology Intern",
  duration: "May 2026 – Present",
  techStack: ["Selenium WebDriver", "Python", "Veeva CRM", "Test Automation", "QA Workflows"],
  description: "Working on enterprise automation testing workflows using Selenium WebDriver and Python within the Veeva CRM ecosystem. Gaining hands-on exposure to browser automation, QA processes, debugging, dynamic element handling, waits, frames, workflow validations, and real-world enterprise testing practices in the healthcare and life sciences domain.",
  responsibilities: [
    "Automating browser interactions and workflow validations using Selenium WebDriver and Python.",
    "Working with dynamic web elements, XPath locators, waits, frames, and iFrames in enterprise applications.",
    "Learning software testing lifecycle concepts including debugging, test execution, validation, and automation reliability.",
    "Exploring healthcare and life sciences CRM workflows through practical exposure to the Veeva CRM platform.",
    "Improving automation understanding through hands-on work with enterprise QA practices and browser testing workflows."
  ],
  exploring: [
    "Advanced Selenium Automation",
    "Playwright Automation",
    "API Testing",
    "Automation Framework Design",
    "Enterprise QA Workflows"
  ]
};

export function WorkExperience() {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto w-full group/experience">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold pb-2 bg-clip-text text-transparent bg-gradient-to-r from-neutral-200 to-neutral-500 mb-10">
          Work Experience
        </h2>
        
        <Card className="p-8 bg-neutral-900/40 backdrop-blur-xl border border-primary/20 shadow-[0_0_30px_rgba(var(--primary),0.05)] transition-all duration-500 relative overflow-hidden rounded-[2rem] group/card">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
          <SpotlightHover className="from-primary/20 via-primary/5 to-transparent mix-blend-screen" size={600} />
          
          <div className="relative z-10 grid lg:grid-cols-12 gap-10">
            {/* Left Column: Role Info */}
            <div className="lg:col-span-4 flex flex-col border-b lg:border-b-0 lg:border-r border-neutral-800/50 pb-8 lg:pb-0 lg:pr-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-neutral-800/80 border border-neutral-700/50 flex items-center justify-center backdrop-blur-sm shadow-xl group-hover/card:scale-110 transition-transform duration-500">
                  <Building2 className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white font-space tracking-tight">{experience.role}</h3>
                  <p className="text-lg text-primary font-medium">{experience.company}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-neutral-400 font-medium mb-8 bg-neutral-900/50 w-fit px-4 py-2 rounded-full border border-neutral-800/50">
                <Calendar className="w-4 h-4 text-primary" />
                {experience.duration}
              </div>

              <div className="space-y-4 flex-grow">
                <div className="text-[11px] uppercase tracking-widest text-neutral-500 font-bold mb-3">Tech Stack</div>
                <div className="flex flex-wrap gap-2">
                  {experience.techStack.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1.5 text-xs font-medium bg-primary/10 text-primary border border-primary/20 rounded-lg hover:bg-primary/20 hover:scale-105 transition-all cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Details */}
            <div className="lg:col-span-8 flex flex-col justify-center">
              <p className="text-neutral-300 text-base leading-relaxed mb-8">
                {experience.description}
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="text-[11px] uppercase tracking-widest text-neutral-500 font-bold mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary/80" />
                    Key Responsibilities
                  </div>
                  <ul className="space-y-3">
                    {experience.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-3 group/item">
                        <ChevronRight className="w-4 h-4 text-neutral-600 mt-1 flex-shrink-0 group-hover/item:text-primary transition-colors" />
                        <span className="text-sm text-neutral-400 group-hover/item:text-neutral-300 transition-colors leading-relaxed">
                          {resp}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <div className="text-[11px] uppercase tracking-widest text-neutral-500 font-bold mb-4 flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-primary/80" />
                    Currently Exploring
                  </div>
                  <ul className="space-y-3">
                    {experience.exploring.map((exp, idx) => (
                      <li key={idx} className="flex items-start gap-3 group/item">
                        <div className="w-1.5 h-1.5 rounded-full bg-neutral-700 mt-2 flex-shrink-0 group-hover/item:bg-primary transition-colors" />
                        <span className="text-sm text-neutral-400 group-hover/item:text-neutral-300 transition-colors leading-relaxed">
                          {exp}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>
    </section>
  );
}
