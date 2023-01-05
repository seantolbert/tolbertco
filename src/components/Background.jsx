import { motion, useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import { useFollowPointer } from "../hooks/useFollowPointer";

const Background = () => {
  const ref = useRef(null);

  const { x, y } = useFollowPointer(ref);

  return (
    <div className="bg-slate-700 w-screen h-screen fixed flex justify-center items-center z-[-1] ">
      <motion.div
        ref={ref}
        animate={{ opacity: 1, x, y }}
        transition={{
          type: "spring",
          damping: 8,
          stiffness: 50,
          restDelta: 0.001,
        }}
        className="w-64 h-64 p-20 bg-gradient-to-r opacity-0 from-yellow-700 to-green-400 rounded-full blur-sm brightness-75"
      />
    </div>
  );
};
export default Background;
