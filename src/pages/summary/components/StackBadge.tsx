interface StackBadge {
  text: string;
}

const StackBadge = ({ text }: StackBadge) => {
  return (
    <div className="rounded-full px-4 py-2 border-2 border-line-primary">
      <p className="font-bold text-on-surface-accent text-md text-center">
        {text}
      </p>
    </div>
  );
};

export default StackBadge;
