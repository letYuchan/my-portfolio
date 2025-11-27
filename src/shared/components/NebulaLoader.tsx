import { motion } from "framer-motion";

const NebulaLoader = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-surface-primary">
      <div className="relative w-16 h-16 flex items-center justify-center">
        <div className="w-3 h-3 rounded-full bg-accent-strong shadow-soft" />

        <motion.div
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-2 h-2 rounded-full bg-accent-soft absolute -top-1 left-1/2 -translate-x-1/2" />
        </motion.div>

        <motion.div
          className="absolute inset-1"
          animate={{ rotate: -360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-2 h-2 rounded-full bg-accent-soft absolute -top-1 left-1/2 -translate-x-1/2" />
        </motion.div>

        <motion.div
          className="absolute inset-2"
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-2 h-2 rounded-full bg-accent-soft absolute -top-1 left-1/2 -translate-x-1/2" />
        </motion.div>
      </div>
    </div>
  );
};

export default NebulaLoader;
