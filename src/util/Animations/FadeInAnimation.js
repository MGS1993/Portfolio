import { motion } from "framer-motion";

const FadeIn = ({ children }) => {
  const fadeIn = {
    hidden: {
      opacity: 0,
      y: "120px",
    },
    visible: {
      opacity: 1,
      y: "0",
      transition: {
        delay: 2,
      },
    },
  };

  return (
    <motion.div variants={fadeIn} initial="hidden" animate="visible">
      {children}
    </motion.div>
  );
};

export default FadeIn;
