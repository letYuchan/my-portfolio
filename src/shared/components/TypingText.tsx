import { ReactTyped } from "react-typed";

interface TypingTextProps {
  strings: string[];
  className?: string;
}

const TypingText = ({ strings, className }: TypingTextProps) => {
  return (
    <ReactTyped
      strings={strings}
      typeSpeed={50}
      backSpeed={30}
      backDelay={1500}
      loop
      smartBackspace
      className={className}
    />
  );
};

export default TypingText;
