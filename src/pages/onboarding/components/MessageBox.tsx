interface MessageBoxProps {
  text: string;
}

const MessageBox = ({ text }: MessageBoxProps) => {
  return (
    <div className="relative inline-block">
      <div className="bg-surface-secondary border border-line-primary border-2 rounded-xl px-4 py-3">
        <p className="font-title font-bold text-xl text-on-surface-primary">
          {text}
        </p>
      </div>
      <div
        className="
          absolute top-full left-1/2 
          -translate-x-1/2 
          w-0 h-0
          border-t-8 border-t-surface-primary
          border-x-8 border-x-transparent
        "
      />
      <div
        className="
          absolute top-full left-1/2 
          -translate-x-1/2 
          translate-y-[2px]
          w-0 h-0
          border-t-8 border-t-line-primary
          border-x-8 border-x-transparent
        "
      />
    </div>
  );
};

export default MessageBox;
