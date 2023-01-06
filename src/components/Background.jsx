import { motion, useScroll } from "framer-motion";
import { forwardRef, useEffect, useRef } from "react";
import { useFollowPointer } from "../hooks/useFollowPointer";

const Background = () => {
  const cursorOrbRef = useRef(null);
  const { x, y } = useFollowPointer(cursorOrbRef);

  return (
    <div className="bg-slate-700 w-screen h-screen fixed flex justify-center items-center z-[-1] ">
      {window.innerWidth > 768 && (
        <motion.div
          ref={cursorOrbRef}
          animate={{ x, y }}
          transition={{
            type: "spring",
            damping: 9.8,
            stiffness: 50,
            restDelta: 0.001,
          }}
          className="w-64 h-64 p-20 bg-gradient-to-r opacity-1 from-yellow-700 to-green-400 rounded-full blur-sm flex justify-center items-center"
        >
          <motion.div
            className="bg-slate-700 p-32 rounded-full"
            animate={{ scale: [0.95, 0.9, 0.95] }}
            transition={{
              duration: 1,
              repeat: Infinity,
            }}
          ></motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Background;
