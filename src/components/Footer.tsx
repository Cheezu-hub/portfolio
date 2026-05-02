import { Mail, Github, Linkedin, ArrowUp, Terminal, Heart } from "lucide-react";
import { Magnetic } from "@/components/ui/magnetic";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-neutral-900 bg-black pt-24 pb-12 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-primary/5 blur-[120px] rounded-full pointer-events-none -z-10" />
      
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          {/* Brand section */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-3 group cursor-default">
              <div className="w-12 h-12 rounded-2xl bg-white text-black flex items-center justify-center font-bold text-xl shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                <Terminal className="w-6 h-6" />
              </div>
              <span className="text-2xl font-bold text-white tracking-tighter font-space">CHAITANYA<span className="text-neutral-500">.AI</span></span>
            </div>
            <p className="text-neutral-500 max-w-sm leading-relaxed font-archivo">
              Architecting the next generation of <span className="text-neutral-300">AI-driven systems</span> and scalable web infrastructure. Let's create something extraordinary together.
            </p>
          </div>

          {/* Navigation section */}
          <div className="md:col-span-4 grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-white uppercase tracking-widest font-space">Sitemap</h4>
              <ul className="space-y-2">
                {["About", "Projects", "Skills", "Achievements", "Contact"].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="text-neutral-500 hover:text-white transition-colors text-sm font-medium">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-white uppercase tracking-widest font-space">Socials</h4>
              <ul className="space-y-2">
                <li>
                  <a href="https://github.com/Cheezu-hub" target="_blank" rel="noreferrer" className="text-neutral-500 hover:text-white transition-colors text-sm font-medium flex items-center gap-2">
                    <Github className="w-4 h-4" /> GitHub
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com/in/rajana-chaitanya" target="_blank" rel="noreferrer" className="text-neutral-500 hover:text-white transition-colors text-sm font-medium flex items-center gap-2">
                    <Linkedin className="w-4 h-4" /> LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Action section */}
          <div className="md:col-span-3 flex flex-col items-start md:items-end gap-6">
            <Magnetic>
              <button 
                onClick={scrollToTop}
                className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-600 transition-all shadow-xl group"
              >
                <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
              </button>
            </Magnetic>
          </div>
        </div>

        <div className="pt-12 border-t border-neutral-900 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-neutral-600 text-xs font-medium tracking-wide uppercase">
            © {new Date().getFullYear()} Rajana Chaitanya • Crafted with precision
          </p>
          
          <div className="flex items-center gap-2 text-neutral-600 text-xs font-medium uppercase tracking-widest">
            Made with <Heart className="w-3 h-3 text-red-500/50 fill-red-500/10" /> in India
          </div>
        </div>
      </div>
    </footer>
  );
}
