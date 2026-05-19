import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, User, Briefcase, Code, Award, Mail, Menu, X, Terminal } from "lucide-react";

const navItems = [
  { name: "Home", icon: Home, href: "#home" },
  { name: "About", icon: User, href: "#about" },
  { name: "Experience", icon: Briefcase, href: "#experience" },
  { name: "Projects", icon: Code, href: "#projects" },
  { name: "Skills", icon: Code, href: "#skills" },
  { name: "Achievements", icon: Award, href: "#achievements" },
  { name: "Contact", icon: Mail, href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Basic scroll spy
      const sections = navItems.map(item => item.href.substring(1));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveItem(navItems.find(item => item.href === `#${section}`)?.name || "Home");
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] p-6 pointer-events-none">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="pointer-events-auto flex items-center gap-2 group"
        >
          <div className="w-10 h-10 rounded-xl bg-white text-black flex items-center justify-center font-bold text-lg shadow-[0_0_20px_rgba(255,255,255,0.3)] group-hover:scale-110 transition-transform duration-300">
            <Terminal className="w-5 h-5" />
          </div>
          <span className="text-2xl md:text-3xl font-bold text-white tracking-tighter hidden sm:block font-space">Rajana Chaitanya</span>
        </motion.div>

        {/* Desktop Navbar */}
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`hidden md:flex items-center gap-1 p-1.5 rounded-2xl border backdrop-blur-2xl transition-all duration-500 pointer-events-auto ${
            isScrolled 
              ? "bg-black/60 border-neutral-800 shadow-[0_0_30px_rgba(0,0,0,0.5)] translate-y-2 scale-105" 
              : "bg-white/5 border-white/10"
          }`}
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`relative flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all group overflow-hidden ${
                activeItem === item.name ? "text-white" : "text-neutral-400 hover:text-white"
              }`}
            >
              {activeItem === item.name && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-neutral-800/80 -z-10 rounded-xl border border-neutral-700/50"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <item.icon className={`w-4 h-4 transition-transform duration-300 group-hover:scale-110 ${activeItem === item.name ? "text-white" : "text-neutral-500 group-hover:text-neutral-300"}`} />
              <span className="font-archivo tracking-tight">{item.name}</span>
            </a>
          ))}
        </motion.div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center pointer-events-auto">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-3 rounded-2xl bg-neutral-900/80 border border-neutral-800 backdrop-blur-xl text-white shadow-xl active:scale-95 transition-all"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="absolute top-24 left-6 right-6 bg-neutral-900/90 backdrop-blur-2xl border border-neutral-800 rounded-[2rem] p-8 z-[101] md:hidden pointer-events-auto shadow-2xl overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl -mr-16 -mt-16" />
            
            <div className="flex flex-col gap-3 relative z-10">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-4 px-6 py-4 rounded-2xl text-lg font-medium transition-all ${
                    activeItem === item.name 
                      ? "bg-white text-black shadow-xl" 
                      : "text-neutral-400 hover:text-white hover:bg-neutral-800/50"
                  }`}
                >
                  <item.icon className="w-6 h-6" />
                  <span className="font-space">{item.name}</span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
