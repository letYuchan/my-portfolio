interface CardSectionProps {
  title: string;
  description1: string;
  description2: string;
  description3: string;
  stack: string;
  maxW: number;
  height: number;
  position: "left" | "center" | "right";
}

const CardSection = ({
  title,
  description1,
  description2,
  description3,
  stack,
  maxW,
  height,
  position,
}: CardSectionProps) => {
  return (
    <div
      className="w-full bg-surface-secondary border-line-primary border-2 px-4 py-6 rounded-xl flex flex-col justify-start hover:border-line-accent hover:shadow-soft"
      style={{ maxWidth: maxW, height }}
    >
      <h3
        className={`font-title font-semibold text-on-surface-accent text-2xl w-full mb-10 text-${position}`}
      >
        {title}
      </h3>

      <ul
        className={`list-disc list-outside pl-6 space-y-2 text-on-surface-primary text-${position} mb-10`}
      >
        <li className="font-normal text-xl">{description1}</li>
        <li className="font-normal text-xl">{description2}</li>
        <li className="font-normal text-xl">{description3}</li>
      </ul>
      <p className={`font-light text-xs text-on-surface-muted text-center`}>
        Stack: {stack}
      </p>
    </div>
  );
};

export default CardSection;
