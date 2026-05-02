import { useEffect, useState } from "react";
import { motion, useSpring, AnimatePresence } from "framer-motion";

export const Cursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  const mouseX = useSpring(0, { stiffness: 800, damping: 40 });
  const mouseY = useSpring(0, { stiffness: 800, damping: 40 });

  const followerX = useSpring(0, { stiffness: 200, damping: 25 });
  const followerY = useSpring(0, { stiffness: 200, damping: 25 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      followerX.set(e.clientX);
      followerY.set(e.clientY);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY, followerX, followerY, isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 pointer-events-none z-[9999] hidden md:block">
          {/* Main Dot */}
          <motion.div
            className="fixed top-0 left-0 w-2 h-2 rounded-full bg-white mix-blend-difference"
            style={{
              x: mouseX,
              y: mouseY,
              translateX: "-50%",
              translateY: "-50%",
              scale: isClicking ? 0.5 : isHovering ? 0 : 1,
            }}
          />
          
          {/* Follower Circle */}
          <motion.div
            className="fixed top-0 left-0 w-10 h-10 rounded-full border border-white/20 mix-blend-difference"
            style={{
              x: followerX,
              y: followerY,
              translateX: "-50%",
              translateY: "-50%",
              scale: isHovering ? 1.5 : 1,
              backgroundColor: isHovering ? "rgba(255, 255, 255, 0.05)" : "transparent",
            }}
            transition={{ type: "spring", stiffness: 250, damping: 20 }}
          />
        </div>
      )}
    </AnimatePresence>
  );
};
