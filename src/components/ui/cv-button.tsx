import { motion } from "framer-motion";
import { FileDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface CVButtonProps {
  className?: string;
}

export const CVButton = ({ className }: CVButtonProps) => {
  return (
    <motion.a
      href="/chaitanya-resume.pdf"
      download="Chaitanya_Resume.pdf"
      className={cn(
        "relative group inline-flex items-center gap-3 px-8 py-4 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-full overflow-hidden transition-all duration-500 hover:border-white/30 hover:bg-white/[0.08]",
        className
      )}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated Glowing Border Gradient (Subtle) */}
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Shimmer Effect Sweep */}
      <motion.div
        className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent w-[100%] -skew-x-12 pointer-events-none"
        animate={{
          left: ["-100%", "200%"],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: "easeInOut",
          repeatDelay: 1,
        }}
      />
      
      {/* Button Content */}
      <div className="relative z-10 flex items-center gap-2 text-white/80 font-medium tracking-wider group-hover:text-white transition-colors duration-300">
        <motion.div
          animate={{ 
            y: [0, -3, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 2.5, 
            ease: "easeInOut" 
          }}
        >
          <FileDown className="w-5 h-5 opacity-60 group-hover:opacity-100 group-hover:text-white transition-all duration-300" />
        </motion.div>
        <span className="text-sm md:text-base">Download Resume</span>
      </div>

      {/* Radial Glow on Hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_0%,transparent_70%)] pointer-events-none" />
    </motion.a>
  );
};
