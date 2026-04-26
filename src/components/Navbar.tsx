import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, User, Briefcase, Code, Award, Mail, Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", icon: Home, href: "#home" },
  { name: "About", icon: User, href: "#about" },
  { name: "Projects", icon: Briefcase, href: "#projects" },
  { name: "Skills", icon: Code, href: "#skills" },
  { name: "Achievements", icon: Award, href: "#achievements" },
  { name: "Contact", icon: Mail, href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] px-4 py-6 pointer-events-none">
      <div className="max-w-7xl mx-auto flex justify-center">
        {/* Desktop Navbar */}
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={`hidden md:flex items-center gap-1 p-2 rounded-full border border-white/10 backdrop-blur-md transition-all duration-300 pointer-events-auto ${
            isScrolled ? "bg-black/60 shadow-lg" : "bg-white/5"
          }`}
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-neutral-400 hover:text-white hover:bg-white/10 transition-all group"
            >
              <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>{item.name}</span>
            </a>
          ))}
        </motion.div>

        {/* Mobile Toggle */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="md:hidden flex items-center justify-between w-full pointer-events-auto"
        >
          <div className="text-xl font-bold text-white ml-4">RC.</div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-3 mr-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-md text-white"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-4 right-4 bg-neutral-900/95 backdrop-blur-xl border border-white/10 rounded-3xl p-6 z-[101] md:hidden pointer-events-auto shadow-2xl"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-4 px-4 py-3 rounded-2xl text-lg font-medium text-neutral-400 hover:text-white hover:bg-white/10 transition-all"
                >
                  <item.icon className="w-6 h-6" />
                  <span>{item.name}</span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
