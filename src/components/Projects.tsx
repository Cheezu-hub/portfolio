import { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Card } from "@/components/ui/card";
import { SpotlightHover } from "@/components/ui/spotlight-hover";
import { ExternalLink, Rocket } from "lucide-react";
import { Magnetic } from "@/components/ui/magnetic";

const projects = [
  {
    title: "MCP Forge \u2013 AI Web Automation Tool Generator",
    tech: "FastAPI, Python, React, Vite, Tailwind CSS, Gemini GenAI SDK, Claude, fastmcp",
    problem: "Needed an automated methodology to translate localized browser network activities into reusable and autonomous AI interaction tools.",
    architecture: "Architected an end-to-end automated pipeline that ingests browser network recordings (HAR files) and analyzes API calls using Gemini 2.5 Flash and Claude to generate fully functional Model Context Protocol (MCP) servers.",
    implementation: "Engineered a robust backend featuring regex-based redaction of sensitive data (cookies, authorization headers, bearer tokens) and integrated AST validation to guarantee syntactically correct Python code generation.",
    impact: "Built a real-time streaming log component for deep pipeline visibility and empowered AI assistants to autonomously interact with websites through the instantaneous output of ready-to-deploy MCP tool packages.",
    github: "https://github.com/Cheezu-hub/mcp_forge-extension-",
    badge: "🏆 GDG Super SUS Hackathon \u2013 1st Prize",
    featured: true
  },
  {
    title: "SymbioTech \u2013 AI-Powered Industrial Symbiosis Platform",
    tech: "React, FastAPI, PostgreSQL",
    problem: "Critical inefficiencies in matching massive industrial waste byproducts to equivalent cross-industry resource demands.",
    architecture: "Developed a highly scalable resource-matching engine using FastAPI, backed by a normalized PostgreSQL database designed to manage complex relational structures for over 100 integrated industry nodes.",
    implementation: "Architected a centralized React-driven dashboard capable of rendering 50+ concurrent resource flows, establishing real-time tracking of waste-to-input lifecycle conversions.",
    impact: "Increased global industrial waste reuse efficiency by 30% through automated similarity scoring and rule-based filtering, whilst plummeting data retrieval latency by 15% through optimized algorithmic database queries.",
    github: "https://github.com/Cheezu-hub/symbiosis-ai",
    link: "https://symbiosis-ai.vercel.app/"
  },
  {
    title: "Analies \u2013 Privacy Policy Analyzer",
    tech: "JavaScript, Chrome Storage API, Regex",
    problem: "End-users blindly consenting to convoluted privacy policies without visibility into high-risk, data-sharing implications.",
    architecture: "Engineered a real-time DOM parsing pipeline utilizing asynchronous JavaScript to rigorously scan 1,000+ words of complex legal text in under 2 seconds per page instance.",
    implementation: "Implemented a sophisticated regex-based classification engine to autonomously isolate high-risk clauses and effectively deployed the Chrome Storage API for persistent state management.",
    impact: "Decreased repeated policy analysis computing spans by 60% for returning users, and achieved a 90% accuracy classification threshold, radically improving the frontend client experience.",
    github: "https://github.com/Cheezu-hub/Analies---Privacy-Policy-Analyzer",
    badge: "🏆 AlgoZenith Hackathon \u2013 3rd Place"
  },
  {
    title: "Universal Webhook Adapter \u2013 AI-Powered Schema Normalizer",
    tech: "FastAPI, React, Groq AI (Llama 3), SQLite, Tailwind CSS, asyncio",
    problem: "Critical friction in managing diverse JSON webhook schemas from multiple sources (Stripe, GitHub, etc.) and normalizing them for consistent internal processing.",
    architecture: "Architected a production-ready FastAPI service featuring HMAC-SHA256 signature verification, asyncio-driven background processing, and a multi-stage queue for AI-powered payload normalization.",
    implementation: "Engineered a real-time React dashboard with built-in simulation tools to test Stripe/GitHub webhooks, integrated Groq (Llama-3.3-70b) for intelligent schema mapping, and implemented idempotency logic to prevent duplicate processing.",
    impact: "Streamlined webhook integration by providing a standard schema output for any JSON input, reduced processing overhead with immediate 202 responses, and enhanced system reliability through automated retries and signature validation.",
    github: "https://github.com/Cheezu-hub/universal-webhooks",
    link: "https://universal-webhooks.vercel.app"
  }
];

function ProjectCard({ project }: { project: typeof projects[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 25 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [7, -7]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-7, 7]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
      className="h-full z-10"
    >
      <Card 
        className={`p-8 bg-neutral-900/40 backdrop-blur-xl border ${project.featured ? 'border-primary/50 shadow-[0_0_20px_rgba(var(--primary),0.1)]' : 'border-neutral-800/50'} transition-all duration-500 h-full flex flex-col group relative overflow-hidden rounded-[2rem]`}
        style={{ transform: "translateZ(30px)" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <SpotlightHover className="from-white/10 via-white/5 to-transparent mix-blend-overlay" size={500} />
        
        {project.badge && (
          <div className="mb-6">
            <span className="text-[10px] uppercase tracking-[0.2em] bg-neutral-800/80 text-white px-3 py-1.5 rounded-full border border-neutral-700 font-bold backdrop-blur-sm">
              {project.badge}
            </span>
          </div>
        )}

        <div className="flex justify-between items-start mb-4 relative z-10">
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-2xl md:text-3xl font-bold text-white font-space tracking-tight"
          >
            {project.title}
          </motion.h3>
          
          {project.github && (
            <div className="hidden md:block">
              <Magnetic>
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 bg-neutral-800/50 rounded-2xl border border-neutral-700/50 hover:bg-neutral-700 hover:text-white transition-all text-neutral-400 backdrop-blur-sm shadow-xl"
                >
                  <i className="fa-brands fa-github text-lg"></i>
                </a>
              </Magnetic>
            </div>
          )}
        </div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
          }}
          className="flex flex-wrap gap-2 mb-8 relative z-10"
        >
          {project.tech.split(", ").map((t, idx) => (
            <motion.span 
              key={idx} 
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 }
              }}
              className="px-2.5 py-1 text-[11px] font-medium bg-neutral-800/30 text-neutral-400 border border-neutral-700/30 rounded-lg font-mono hover:bg-neutral-800/60 hover:text-white transition-all cursor-default"
            >
              {t}
            </motion.span>
          ))}
        </motion.div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
          }}
          className="space-y-5 flex-grow relative z-10 mb-10"
        >
          {[
            { label: "Problem", content: project.problem },
            { label: "Architecture", content: project.architecture },
            { label: "Implementation", content: project.implementation },
            { label: "Impact", content: project.impact }
          ].map((item, i) => (
            <motion.div 
              key={i}
              variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }}
              className="group/item"
            >
              <div className="text-[11px] uppercase tracking-widest text-neutral-500 mb-1 font-bold group-hover/item:text-neutral-300 transition-colors">{item.label}</div>
              <div className="text-neutral-400 text-[15px] leading-relaxed group-hover/item:text-neutral-300 transition-colors">{item.content}</div>
            </motion.div>
          ))}
        </motion.div>

        <div className="relative z-10 pt-6 border-t border-neutral-800/50 flex gap-6 mt-auto">
          {project.github && (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-neutral-400 hover:text-white transition-all group/link"
            >
              <i className="fa-brands fa-github text-lg"></i>
              <span className="relative overflow-hidden">
                <span className="inline-block transition-transform duration-300 group-hover/link:-translate-y-full">View Code</span>
                <span className="absolute top-0 left-0 inline-block translate-y-full transition-transform duration-300 group-hover/link:translate-y-0 text-white">View Code</span>
              </span>
              <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover/link:opacity-100 transition-opacity" />
            </a>
          )}
          {'link' in project && project.link && (
            <a 
              href={project.link as string} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-neutral-400 hover:text-white transition-all group/link"
            >
              <Rocket className="w-4 h-4 text-blue-400 group-hover:animate-bounce" />
              <span className="relative overflow-hidden">
                <span className="inline-block transition-transform duration-300 group-hover/link:-translate-y-full">Live Demo</span>
                <span className="absolute top-0 left-0 inline-block translate-y-full transition-transform duration-300 group-hover/link:translate-y-0 text-white">Live Demo</span>
              </span>
              <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover/link:opacity-100 transition-opacity" />
            </a>
          )}
        </div>
      </Card>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto w-full group/projects perspective-[2000px]">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold pb-2 bg-clip-text text-transparent bg-gradient-to-r from-neutral-200 to-neutral-500 mb-10">
          Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 perspective-[1000px]">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
