import { motion } from "framer-motion";

interface AnimationButtonProps {
  onClick?: () => void;
  title: string;
}
const AnimationButton = ({ onClick, title }: AnimationButtonProps) => {
  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, scale: 0.9, y: -8 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.85, y: -8 }}
      transition={{ duration: 0.25 }}
      onClick={onClick}
      className="
                    px-8 py-3 rounded-full 
                    bg-surface-secondary border border-line-accent 
                    text-on-surface-accent font-title font-semibold text-xl
                    shadow-soft hover:shadow-strong
                    transition-all duration-300
                  "
    >
      {title}
    </motion.button>
  );
};

export default AnimationButton;
