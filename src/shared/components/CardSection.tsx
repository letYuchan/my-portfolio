interface CardSectionProps {
  title: string;
  description1: string;
  description2: string;
  description3: string;
  maxW: number;
  height: number;
  position: "left" | "center" | "right";
}

const CardSection = ({
  title,
  description1,
  description2,
  description3,
  maxW,
  height,
  position,
}: CardSectionProps) => {
  return (
    <div
      className="w-full bg-surface-secondary border-line-primary px-4 py-2 border rounded-xl flex flex-col justify-center items-center hover:border-line-accent hover:shadow-soft"
      style={{ maxWidth: maxW, height: height }}
    >
      <h3
        className={`font-title font-semibold text-on-surface-accent text-2xl text-${position} w-full mb-10`}
      >
        {title}
      </h3>
      <p
        className={`font-normal text-on-surface-primary text-xl text-${position} w-full mb-2`}
      >
        · {description1}
      </p>
      <p
        className={`font-normal text-on-surface-primary text-xl text-${position} w-full mb-2`}
      >
        · {description2}
      </p>
      <p
        className={`font-normal text-on-surface-primary text-xl text-${position} w-full mb-2`}
      >
        · {description3}
      </p>
    </div>
  );
};

export default CardSection;
