import { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Card } from "@/components/ui/card";
import { SpotlightHover } from "@/components/ui/spotlight-hover";

const projects = [
  {
    title: "MCP Forge \u2013 AI Web Automation Tool Generator",
    tech: "FastAPI, Python, React, Vite, Tailwind CSS, Gemini GenAI SDK, Claude, fastmcp",
    problem: "Needed an automated methodology to translate localized browser network activities into reusable and autonomous AI interaction tools.",
    architecture: "Architected an end-to-end automated pipeline that ingests browser network recordings (HAR files) and analyzes API calls using Gemini 2.5 Flash and Claude to generate fully functional Model Context Protocol (MCP) servers.",
    implementation: "Engineered a robust backend featuring regex-based redaction of sensitive data (cookies, authorization headers, bearer tokens) and integrated AST validation to guarantee syntactically correct Python code generation.",
    impact: "Built a real-time streaming log component for deep pipeline visibility and empowered AI assistants to autonomously interact with websites through the instantaneous output of ready-to-deploy MCP tool packages."
  },
  {
    title: "SymbioTech \u2013 AI-Powered Industrial Symbiosis Platform",
    tech: "React, FastAPI, PostgreSQL",
    problem: "Critical inefficiencies in matching massive industrial waste byproducts to equivalent cross-industry resource demands.",
    architecture: "Developed a highly scalable resource-matching engine using FastAPI, backed by a normalized PostgreSQL database designed to manage complex relational structures for over 100 integrated industry nodes.",
    implementation: "Architected a centralized React-driven dashboard capable of rendering 50+ concurrent resource flows, establishing real-time tracking of waste-to-input lifecycle conversions.",
    impact: "Increased global industrial waste reuse efficiency by 30% through automated similarity scoring and rule-based filtering, whilst plummeting data retrieval latency by 15% through optimized algorithmic database queries."
  },
  {
    title: "Analies \u2013 Privacy Policy Analyzer",
    tech: "JavaScript, Chrome Storage API, Regex",
    problem: "End-users blindly consenting to convoluted privacy policies without visibility into high-risk, data-sharing implications.",
    architecture: "Engineered a real-time DOM parsing pipeline utilizing asynchronous JavaScript to rigorously scan 1,000+ words of complex legal text in under 2 seconds per page instance.",
    implementation: "Implemented a sophisticated regex-based classification engine to autonomously isolate high-risk clauses and effectively deployed the Chrome Storage API for persistent state management.",
    impact: "Decreased repeated policy analysis computing spans by 60% for returning users, and achieved a 90% accuracy classification threshold, radically improving the frontend client experience."
  },
  {
    title: "Swaply \u2013 Peer-to-Peer Coupon Exchange",
    tech: "Flask, SQLite, HTML/CSS",
    problem: "Absence of a secure, transparent, and centralized application layer for peer-to-peer digital active coupon trading.",
    architecture: "Conceptualized and deployed a centralized P2P marketplace leveraging a lightweight Flask backend paired with an SQLite database highly optimized for rapid concurrent transactional queries.",
    implementation: "Built a dynamic and responsive frontend operating on structural HTML/CSS with fully verified CRUD operation lifecycles across marketplace user bases.",
    impact: "Effectively processed secure transactions for over 50+ active listing environments while maintaining a 100% mobile-responsive evaluation score, assuring consistent omni-channel platform availability."
  }
];

function ProjectCard({ project }: { project: typeof projects[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-5, 5]);

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
      }}
      className="h-full z-10"
    >
      <Card 
        className="p-6 bg-neutral-900/50 border border-neutral-800 transition-colors h-full flex flex-col group relative overflow-hidden"
        style={{ transform: "translateZ(30px)" }}
      >
        <SpotlightHover className="from-white/5 via-white/5 to-transparent mix-blend-screen" size={400} />
        
        <h3 className="text-xl md:text-2xl font-bold text-neutral-200 mb-2 relative z-10">{project.title}</h3>
        
        <div className="text-sm text-neutral-500 mb-6 font-mono relative z-10 group-hover:text-neutral-400 transition-colors duration-300">
          {project.tech.split(", ").map((t, idx) => (
            <span 
              key={idx} 
              className="inline-block mr-1 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all cursor-default"
            >
              {t}{idx < project.tech.split(", ").length - 1 ? "," : ""}
            </span>
          ))}
        </div>
        
        <div className="space-y-4 flex-grow relative z-10">
          <div>
            <span className="text-neutral-300 font-semibold">Problem: </span>
            <span className="text-neutral-400">{project.problem}</span>
          </div>
          <div>
            <span className="text-neutral-300 font-semibold">Architecture: </span>
            <span className="text-neutral-400">{project.architecture}</span>
          </div>
          <div>
            <span className="text-neutral-300 font-semibold">Implementation: </span>
            <span className="text-neutral-400">{project.implementation}</span>
          </div>
          <div>
            <span className="text-neutral-300 font-semibold">Impact: </span>
            <span className="text-neutral-400">{project.impact}</span>
          </div>
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
        <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-200 to-neutral-500 mb-10">
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
