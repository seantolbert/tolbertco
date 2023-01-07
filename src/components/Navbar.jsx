import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { menuItems } from "../data/lists";
import { motion } from "framer-motion";
import { useState } from "react";
import Logo from "../assets/small_tolbert&co.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" fixed bottom-0 right-0 p-5 flex items-center justify-between z-[20]">
      {window.innerWidth < 640 ? (
        <div className="w-full flex flex-col items-end">
          <div className="flex flex-col w-full items-center mb-10 gap-5">
            {menuItems.map((m, key) => (
              <motion.a
                key={key}
                href={m.dest}
                className="text-4xl"
                animate={{ x: isOpen ? 0 : 100 }}
                transition={{ duration: m.duration }}
              >
                <FontAwesomeIcon icon={m.icon} color="#fff" />
              </motion.a>
            ))}
          </div>

          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="w-10 flex flex-col items-center justify-between gap-5"
            animate={{ rotate: isOpen ? 0 : "-90deg" }}
          >
            <img src={Logo} alt="my personal logo" />
          </motion.button>
        </div>
      ) : (
        <>
          <div className="flex gap-5 text-white">
            {menuItems.map((m, i) => (
              <a key={i} href={m.dest}>
                {m.title}
              </a>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
export default Navbar;
