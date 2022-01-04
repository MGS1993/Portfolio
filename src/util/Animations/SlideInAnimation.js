import { motion } from "framer-motion";

const SlideIn = ({ children, variants }) => {
  const slideIn = {
    hidden: {
      x: "100vw",
    },
    visible: {
      x: "0",
      transition: {
        delay: 0.3,
        type: "spring",
        damping: 19,
        stiffness: 200,
        mass: 1.1,
      },
    },
  };
  return (
    <motion.div variants={slideIn} initial="hidden" animate="visible">
      {children}
    </motion.div>
  );
};

export default SlideIn;
