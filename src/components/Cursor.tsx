import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export const Cursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  
  const mouseX = useSpring(0, { stiffness: 500, damping: 28 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 28 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 rounded-full border-2 border-white/30 pointer-events-none z-[9999] mix-blend-difference hidden md:block"
      style={{
        x: mouseX,
        y: mouseY,
        translateX: "-50%",
        translateY: "-50%",
        scale: isHovering ? 2.5 : 1,
        backgroundColor: isHovering ? "rgba(255, 255, 255, 0.1)" : "transparent",
        borderColor: isHovering ? "rgba(255, 255, 255, 0.8)" : "rgba(255, 255, 255, 0.3)",
      }}
      transition={{ type: "spring", stiffness: 250, damping: 20 }}
    />
  );
};
